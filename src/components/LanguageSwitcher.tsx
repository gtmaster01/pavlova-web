"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(newLocale: Locale) {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  }

  const flagLabels: Record<Locale, string> = {
    cs: "Čeština",
    en: "English",
    ru: "Русский",
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
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
