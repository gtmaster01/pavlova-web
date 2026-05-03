import { NextRequest, NextResponse } from "next/server";
import { routing, type Locale } from "@/i18n/routing";

const KWIGA_API_URL = "https://api.kwiga.com/contacts/purchases";

const ipHits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_PER_MINUTE = 5;

function rateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = ipHits.get(ip);
    if (!entry || entry.resetAt < now) {
        ipHits.set(ip, { count: 1, resetAt: now + 60_000 });
        return false;
    }
    entry.count += 1;
    return entry.count > RATE_LIMIT_PER_MINUTE;
}

function getOfferIdForLocale(locale: Locale): string | undefined {
    const map: Record<Locale, string | undefined> = {
        cs: process.env.KWIGA_FREE_OFFER_ID_CS,
        en: process.env.KWIGA_FREE_OFFER_ID_EN,
        ru: process.env.KWIGA_FREE_OFFER_ID_RU,
    };
    return map[locale];
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
    const token = process.env.KWIGA_TOKEN;
    const cabinetHash = process.env.KWIGA_CABINET_HASH;
    if (!token || !cabinetHash) {
        return NextResponse.json(
            { error: "Server not configured" },
            { status: 500 },
        );
    }

    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown";

    if (rateLimited(ip)) {
        return NextResponse.json(
            { error: "Too many requests" },
            { status: 429 },
        );
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { email, firstName, locale, honeypot } = (body ?? {}) as {
        email?: string;
        firstName?: string;
        locale?: string;
        honeypot?: string;
    };

    if (honeypot) {
        return NextResponse.json({ ok: true });
    }

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!firstName || typeof firstName !== "string" || firstName.length < 1 || firstName.length > 80) {
        return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    const safeLocale: Locale = (routing.locales as readonly string[]).includes(locale ?? "")
        ? (locale as Locale)
        : routing.defaultLocale;

    const offerId = getOfferIdForLocale(safeLocale);
    if (!offerId) {
        return NextResponse.json(
            { error: "Offer not configured for locale" },
            { status: 500 },
        );
    }

    try {
        const kwigaRes = await fetch(KWIGA_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Token: token,
                "Cabinet-Hash": cabinetHash,
            },
            body: JSON.stringify({
                email,
                first_name: firstName,
                offer_id: Number(offerId),
                send_product_access_email: true,
            }),
        });

        if (!kwigaRes.ok) {
            const text = await kwigaRes.text();
            console.error("Kwiga API error", kwigaRes.status, text);
            return NextResponse.json(
                { error: "Enrollment failed" },
                { status: 502 },
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Kwiga API exception", err);
        return NextResponse.json(
            { error: "Network error" },
            { status: 502 },
        );
    }
}
