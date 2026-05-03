"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { useTranslations } from "next-intl";

const COOKIE_NAME = "free_course_fomo";

function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAgeSec: number): void {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSec}; SameSite=Lax`;
}

function endOfLocalDay(now: Date): number {
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    return end.getTime();
}

function ensureExpiry(): number {
    const now = Date.now();
    const stored = getCookie(COOKIE_NAME);
    if (stored) {
        const expiry = parseInt(stored, 10);
        if (!Number.isNaN(expiry) && expiry > now) return expiry;
    }
    const newExpiry = endOfLocalDay(new Date(now));
    const maxAgeSec = Math.max(60, Math.ceil((newExpiry - now) / 1000));
    setCookie(COOKIE_NAME, String(newExpiry), maxAgeSec);
    return newExpiry;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function useFomoCountdown() {
    const [remaining, setRemaining] = useState<number | null>(null);

    useEffect(() => {
        const tick = () => setRemaining(Math.max(0, ensureExpiry() - Date.now()));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    if (remaining === null) return null;

    const totalSec = Math.floor(remaining / 1000);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return { hours, minutes, seconds, formatted: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` };
}

export function FomoCornerBadge() {
    const t = useTranslations("Hero");
    const c = useFomoCountdown();

    if (!c) return null;

    return (
        <div
            className="absolute -top-3 -right-3 z-10 rotate-3 bg-red-500 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md shadow-lg ring-2 ring-white flex items-center gap-1.5 pointer-events-none"
            role="status"
            aria-live="polite"
        >
            <Flame className="h-3 w-3 animate-pulse" aria-hidden />
            <span>{t("fomoBadge")}</span>
            <span className="tabular-nums">{c.formatted}</span>
        </div>
    );
}
