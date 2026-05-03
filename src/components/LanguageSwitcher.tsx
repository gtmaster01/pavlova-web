"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const flagLabels: Record<Locale, string> = {
    cs: "Čeština",
    en: "English",
    ru: "Русский",
};

export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function switchLocale(newLocale: Locale) {
        if (newLocale === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    }

    return (
        <div className="flex items-center gap-1">
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    disabled={isPending}
                    aria-label={flagLabels[loc]}
                    title={flagLabels[loc]}
                    className={`p-1 rounded transition-all ${
                        locale === loc
                            ? "ring-2 ring-primary ring-offset-1 opacity-100"
                            : "opacity-50 hover:opacity-100"
                    }`}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`/flags/${loc}.png`}
                        alt={flagLabels[loc]}
                        width={24}
                        height={16}
                        className="block rounded-sm"
                    />
                </button>
            ))}
        </div>
    );
}
