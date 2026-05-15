import type { LegalContent } from "@/components/LegalLayout";

const CONTROLLER = {
    name: "Evgeniya Pavlova",
    address: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Španělsko",
    addressEn: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Spain",
    addressRu: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Испания",
    nie: "Z3418018-Q",
    email: "pavlovaevgeniya86@gmail.com",
};

export const cookiesContent: Record<"cs" | "en" | "ru", LegalContent> = {
    cs: {
        title: "Zásady používání souborů cookies",
        lastUpdated: "Účinnost od 15. května 2026",
        intro: [
            `Tyto zásady popisují, jakým způsobem provozovatel webu ${CONTROLLER.name}, ${CONTROLLER.address}, NIE: ${CONTROLLER.nie}, používá soubory cookies a podobné technologie na webových stránkách evgeniyapavlova.eu.`,
        ],
        sections: [
            {
                heading: "1. Co jsou cookies",
                paragraphs: [
                    "Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webové stránky. Slouží k zajištění základní funkčnosti webu, k zapamatování vašich preferencí a k měření návštěvnosti a efektivity reklamy.",
                ],
            },
            {
                heading: "2. Jaké cookies používáme",
                paragraphs: ["Na webu používáme následující kategorie cookies:"],
                list: [
                    "Nezbytné cookies – nutné pro správné fungování webu (např. zapamatování zvoleného jazyka, zabezpečení). Tyto cookies nevyžadují souhlas.",
                    "Analytické cookies – pomáhají nám pochopit, jak návštěvníci web používají, abychom jej mohli zlepšovat.",
                    "Marketingové cookies – používají se k zobrazování relevantní reklamy a měření její účinnosti. Patří sem zejména Meta Pixel (Facebook / Instagram).",
                ],
            },
            {
                heading: "3. Meta Pixel",
                paragraphs: [
                    "Náš web používá službu Meta Pixel od společnosti Meta Platforms Ireland Ltd. Pixel nám umožňuje měřit účinnost reklamních kampaní a oslovit návštěvníky vhodnou reklamou na platformách Facebook a Instagram.",
                    "Meta Pixel zpracovává mimo jiné IP adresu, identifikátor zařízení a informace o vaší interakci se stránkou. Více informací najdete v zásadách ochrany soukromí společnosti Meta.",
                ],
            },
            {
                heading: "4. Souhlas a jeho odvolání",
                paragraphs: [
                    "Marketingové a analytické cookies používáme pouze tehdy, pokud jste k tomu udělili souhlas prostřednictvím cookie lišty při první návštěvě webu.",
                    "Svůj souhlas můžete kdykoli odvolat – buď v nastavení svého prohlížeče (smazáním cookies), nebo zasláním e-mailu na " +
                        CONTROLLER.email +
                        ".",
                ],
            },
            {
                heading: "5. Jak cookies spravovat",
                paragraphs: [
                    "Většina prohlížečů umožňuje cookies blokovat nebo mazat. Návody pro nejpoužívanější prohlížeče:",
                ],
                list: [
                    "Google Chrome: Nastavení → Soukromí a zabezpečení → Cookies",
                    "Mozilla Firefox: Nastavení → Soukromí a zabezpečení",
                    "Safari: Předvolby → Soukromí",
                    "Microsoft Edge: Nastavení → Cookies a oprávnění webu",
                ],
            },
            {
                heading: "6. Kontakt",
                paragraphs: [
                    `S dotazy ohledně cookies se na nás obracejte na ${CONTROLLER.email}.`,
                ],
            },
        ],
    },
    en: {
        title: "Cookie Policy",
        lastUpdated: "Effective from May 15, 2026",
        intro: [
            `This policy describes how the website operator ${CONTROLLER.name}, ${CONTROLLER.addressEn}, NIE: ${CONTROLLER.nie}, uses cookies and similar technologies on the website evgeniyapavlova.eu.`,
        ],
        sections: [
            {
                heading: "1. What cookies are",
                paragraphs: [
                    "Cookies are small text files stored in your browser when you visit a website. They are used to ensure the basic functionality of the site, remember your preferences and measure traffic and advertising performance.",
                ],
            },
            {
                heading: "2. Which cookies we use",
                paragraphs: ["On the website we use the following cookie categories:"],
                list: [
                    "Strictly necessary cookies – required for the website to function (e.g. remembering the chosen language, security). These cookies do not require consent.",
                    "Analytical cookies – help us understand how visitors use the site so we can improve it.",
                    "Marketing cookies – used to display relevant advertising and measure its effectiveness. This includes Meta Pixel (Facebook / Instagram).",
                ],
            },
            {
                heading: "3. Meta Pixel",
                paragraphs: [
                    "Our website uses Meta Pixel provided by Meta Platforms Ireland Ltd. The Pixel allows us to measure the effectiveness of advertising campaigns and reach visitors with relevant ads on Facebook and Instagram.",
                    "Meta Pixel processes, among other things, the IP address, device identifier and information about your interaction with the page. Find more details in Meta's privacy policy.",
                ],
            },
            {
                heading: "4. Consent and its withdrawal",
                paragraphs: [
                    "We use marketing and analytical cookies only if you have given consent via the cookie banner during your first visit to the website.",
                    `You may withdraw your consent at any time – either in your browser settings (by deleting cookies) or by emailing ${CONTROLLER.email}.`,
                ],
            },
            {
                heading: "5. Managing cookies",
                paragraphs: [
                    "Most browsers allow you to block or delete cookies. Instructions for the most common browsers:",
                ],
                list: [
                    "Google Chrome: Settings → Privacy and security → Cookies",
                    "Mozilla Firefox: Settings → Privacy & Security",
                    "Safari: Preferences → Privacy",
                    "Microsoft Edge: Settings → Cookies and site permissions",
                ],
            },
            {
                heading: "6. Contact",
                paragraphs: [
                    `For questions about cookies, please contact us at ${CONTROLLER.email}.`,
                ],
            },
        ],
    },
    ru: {
        title: "Политика использования файлов cookies",
        lastUpdated: "Действует с 15 мая 2026 г.",
        intro: [
            `Настоящая Политика описывает, каким образом оператор сайта ${CONTROLLER.name}, ${CONTROLLER.addressRu}, NIE: ${CONTROLLER.nie}, использует файлы cookies и аналогичные технологии на сайте evgeniyapavlova.eu.`,
        ],
        sections: [
            {
                heading: "1. Что такое cookies",
                paragraphs: [
                    "Cookies — это небольшие текстовые файлы, которые сохраняются в вашем браузере при посещении сайта. Они используются для обеспечения базовой функциональности сайта, запоминания ваших предпочтений и измерения посещаемости и эффективности рекламы.",
                ],
            },
            {
                heading: "2. Какие cookies мы используем",
                paragraphs: ["На сайте мы используем следующие категории cookies:"],
                list: [
                    "Строго необходимые cookies — требуются для корректной работы сайта (например, запоминание выбранного языка, безопасность). Согласие не требуется.",
                    "Аналитические cookies — помогают понять, как посетители пользуются сайтом, чтобы мы могли его улучшать.",
                    "Маркетинговые cookies — используются для показа релевантной рекламы и измерения её эффективности. В частности, Meta Pixel (Facebook / Instagram).",
                ],
            },
            {
                heading: "3. Meta Pixel",
                paragraphs: [
                    "Наш сайт использует сервис Meta Pixel компании Meta Platforms Ireland Ltd. Pixel позволяет нам измерять эффективность рекламных кампаний и показывать посетителям релевантную рекламу в Facebook и Instagram.",
                    "Meta Pixel обрабатывает, среди прочего, IP-адрес, идентификатор устройства и сведения о вашем взаимодействии с сайтом. Подробности — в Политике конфиденциальности Meta.",
                ],
            },
            {
                heading: "4. Согласие и его отзыв",
                paragraphs: [
                    "Маркетинговые и аналитические cookies используются только при условии вашего согласия, выданного через cookie-баннер при первом посещении сайта.",
                    `Вы можете в любой момент отозвать своё согласие — либо в настройках браузера (удалив cookies), либо отправив письмо на ${CONTROLLER.email}.`,
                ],
            },
            {
                heading: "5. Управление cookies",
                paragraphs: [
                    "Большинство браузеров позволяет блокировать или удалять cookies. Инструкции для наиболее распространённых браузеров:",
                ],
                list: [
                    "Google Chrome: Настройки → Конфиденциальность и безопасность → Cookies",
                    "Mozilla Firefox: Настройки → Приватность и защита",
                    "Safari: Настройки → Конфиденциальность",
                    "Microsoft Edge: Настройки → Файлы cookie и разрешения сайтов",
                ],
            },
            {
                heading: "6. Контакты",
                paragraphs: [
                    `По вопросам о cookies обращайтесь к нам по адресу ${CONTROLLER.email}.`,
                ],
            },
        ],
    },
};
