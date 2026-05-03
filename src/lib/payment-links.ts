export type Tier = "free" | "starter" | "full" | "vip";

export const paymentLinks: Record<string, Record<Tier, string>> = {
    en: {
        free: "https://pavlova.kwiga.com/o/7KbjJHKninjH",
        starter: "https://pavlova.kwiga.com/o/9684vJZ9jZl5",
        full: "https://pavlova.kwiga.com/o/E0bVHQBPEeal",
        vip: "https://pavlova.kwiga.com/o/8DYRFRzUm8EZ",
    },
    ru: {
        free: "https://pavlova.kwiga.com/o/8devcbVY7Dgh",
        starter: "https://pavlova.kwiga.com/o/XcmWpwPjD69D",
        full: "https://pavlova.kwiga.com/o/XFDlm8sdrQiJ",
        vip: "https://pavlova.kwiga.com/o/Rf1H6XZXMAer",
    },
    cs: {
        free: "https://pavlova.kwiga.com/o/J5xT3z25nKIO",
        starter: "https://pavlova.kwiga.com/o/1EFPIo5qMQDh",
        full: "https://pavlova.kwiga.com/o/GMLw9epvreMU",
        vip: "https://pavlova.kwiga.com/o/LahrVqDVsJO5",
    },
};

export function getPaymentLinks(locale: string) {
    return paymentLinks[locale] ?? paymentLinks.cs;
}
