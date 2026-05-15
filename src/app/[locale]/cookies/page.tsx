import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LegalLayout } from "@/components/LegalLayout";
import { routing } from "@/i18n/routing";
import { cookiesContent } from "./content";

type Locale = "cs" | "en" | "ru";

export const dynamicParams = false;

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function CookiesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as Locale)) notFound();
    setRequestLocale(locale);

    const content = cookiesContent[locale as Locale];
    return <LegalLayout content={content} />;
}
