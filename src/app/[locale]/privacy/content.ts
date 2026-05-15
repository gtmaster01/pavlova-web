import type { LegalContent } from "@/components/LegalLayout";

const CONTROLLER = {
    name: "Evgeniya Pavlova",
    address: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Španělsko",
    addressEn: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Spain",
    addressRu: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Испания",
    nie: "Z3418018-Q",
    email: "pavlovaevgeniya86@gmail.com",
    phone: "+420 608 236 696",
};

export const privacyContent: Record<"cs" | "en" | "ru", LegalContent> = {
    cs: {
        title: "Ochrana osobních údajů",
        lastUpdated: "Účinnost od 15. května 2026",
        intro: [
            `Tímto dokumentem vás informujeme o tom, jakým způsobem zpracováváme vaše osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).`,
        ],
        sections: [
            {
                heading: "1. Správce osobních údajů",
                paragraphs: [
                    `Správce: ${CONTROLLER.name}`,
                    `Sídlo: ${CONTROLLER.address}`,
                    `NIE: ${CONTROLLER.nie}`,
                    `Kontaktní e-mail: ${CONTROLLER.email}`,
                    `Telefon / WhatsApp: ${CONTROLLER.phone}`,
                ],
            },
            {
                heading: "2. Jaké údaje zpracováváme",
                list: [
                    "Identifikační údaje: jméno, příjmení",
                    "Kontaktní údaje: e-mailová adresa, případně telefonní číslo",
                    "Údaje související s objednávkou kurzu: zvolená varianta, datum platby, údaje o platbě (zpracovává poskytovatel platebních služeb)",
                    "Technické údaje: IP adresa, identifikátor zařízení, údaje o procházení webu (cookies, viz Zásady cookies)",
                ],
            },
            {
                heading: "3. Účely a právní základy zpracování",
                paragraphs: [
                    "Vaše údaje zpracováváme pro tyto účely:",
                ],
                list: [
                    "Plnění smlouvy – zpřístupnění kurzu, vyřízení platby a komunikace ohledně objednávky (čl. 6 odst. 1 písm. b) GDPR).",
                    "Plnění právních povinností – účetnictví, daňové předpisy (čl. 6 odst. 1 písm. c) GDPR).",
                    "Marketing – zasílání informací o novinkách a dalších produktech na základě vašeho souhlasu (čl. 6 odst. 1 písm. a) GDPR) nebo oprávněného zájmu po předchozí objednávce.",
                    "Měření a optimalizace reklamy – Meta Pixel a další analytické nástroje (na základě vašeho souhlasu udělovaného přes cookie lištu).",
                ],
            },
            {
                heading: "4. Příjemci osobních údajů",
                paragraphs: [
                    "Vaše údaje můžeme předávat těmto kategoriím zpracovatelů:",
                ],
                list: [
                    "Vzdělávací platforma Kwiga – zajištění přístupu ke kurzu",
                    "Poskytovatel platební brány – zpracování plateb",
                    "Poskytovatel hostingu webových stránek (Vercel)",
                    "Marketingové platformy (Meta / Facebook Pixel) – pouze v rozsahu, ke kterému jste udělili souhlas",
                ],
            },
            {
                heading: "5. Doba zpracování",
                paragraphs: [
                    "Údaje uchováváme po dobu nezbytně nutnou pro splnění daného účelu – zpravidla po dobu trvání smluvního vztahu a následně po dobu vyžadovanou právními předpisy (např. účetní doklady po dobu stanovenou daňovými zákony).",
                    "Údaje zpracovávané na základě souhlasu uchováváme do odvolání souhlasu, nejdéle však po dobu uvedenou v jednotlivém souhlasu.",
                ],
            },
            {
                heading: "6. Vaše práva",
                paragraphs: ["Ve vztahu k vašim osobním údajům máte následující práva:"],
                list: [
                    "Právo na přístup k údajům",
                    "Právo na opravu nepřesných údajů",
                    "Právo na výmaz („právo být zapomenut“)",
                    "Právo na omezení zpracování",
                    "Právo na přenositelnost údajů",
                    "Právo vznést námitku proti zpracování",
                    "Právo kdykoli odvolat udělený souhlas",
                    "Právo podat stížnost u dozorového úřadu (ve Španělsku Agencia Española de Protección de Datos – AEPD, v ČR Úřad pro ochranu osobních údajů – ÚOOÚ)",
                ],
            },
            {
                heading: "7. Předávání mimo EU",
                paragraphs: [
                    "Některé z výše uvedených zpracovatelů (např. Meta) mohou údaje zpracovávat mimo EU. V takových případech zajišťujeme odpovídající úroveň ochrany prostřednictvím standardních smluvních doložek schválených Evropskou komisí.",
                ],
            },
            {
                heading: "8. Kontakt",
                paragraphs: [
                    `S jakýmkoli dotazem ohledně zpracování osobních údajů se na nás obracejte na e-mail ${CONTROLLER.email}.`,
                ],
            },
        ],
    },
    en: {
        title: "Privacy Policy",
        lastUpdated: "Effective from May 15, 2026",
        intro: [
            "This document informs you about how we process your personal data in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).",
        ],
        sections: [
            {
                heading: "1. Data controller",
                paragraphs: [
                    `Controller: ${CONTROLLER.name}`,
                    `Address: ${CONTROLLER.addressEn}`,
                    `NIE: ${CONTROLLER.nie}`,
                    `Contact email: ${CONTROLLER.email}`,
                    `Phone / WhatsApp: ${CONTROLLER.phone}`,
                ],
            },
            {
                heading: "2. Data we process",
                list: [
                    "Identification data: first name, last name",
                    "Contact data: email address, optionally phone number",
                    "Order-related data: chosen variant, payment date, payment details (processed by the payment provider)",
                    "Technical data: IP address, device identifier, browsing data (cookies, see Cookie Policy)",
                ],
            },
            {
                heading: "3. Purposes and legal bases of processing",
                paragraphs: ["We process your data for the following purposes:"],
                list: [
                    "Performance of the contract – providing access to the course, processing payment and order-related communication (Art. 6(1)(b) GDPR).",
                    "Compliance with legal obligations – accounting and tax regulations (Art. 6(1)(c) GDPR).",
                    "Marketing – sending information about news and other products based on your consent (Art. 6(1)(a) GDPR) or legitimate interest following a previous order.",
                    "Advertising measurement and optimisation – Meta Pixel and other analytical tools (based on the consent given through the cookie banner).",
                ],
            },
            {
                heading: "4. Recipients of personal data",
                paragraphs: ["We may share your data with the following categories of processors:"],
                list: [
                    "Educational platform Kwiga – providing access to the course",
                    "Payment gateway provider – payment processing",
                    "Website hosting provider (Vercel)",
                    "Marketing platforms (Meta / Facebook Pixel) – only to the extent for which you have given consent",
                ],
            },
            {
                heading: "5. Retention period",
                paragraphs: [
                    "We retain your data for as long as necessary to fulfil the relevant purpose – typically for the duration of the contractual relationship and subsequently for the period required by law (e.g. accounting documents for the period set by tax law).",
                    "Data processed on the basis of consent is retained until the consent is withdrawn, no longer than the period stated in the individual consent.",
                ],
            },
            {
                heading: "6. Your rights",
                paragraphs: ["With respect to your personal data, you have the following rights:"],
                list: [
                    "Right of access",
                    "Right to rectification of inaccurate data",
                    "Right to erasure (“right to be forgotten”)",
                    "Right to restriction of processing",
                    "Right to data portability",
                    "Right to object to processing",
                    "Right to withdraw consent at any time",
                    "Right to lodge a complaint with a supervisory authority (in Spain Agencia Española de Protección de Datos – AEPD)",
                ],
            },
            {
                heading: "7. Transfers outside the EU",
                paragraphs: [
                    "Some of the above processors (e.g. Meta) may process data outside the EU. In such cases, we ensure an appropriate level of protection through the standard contractual clauses approved by the European Commission.",
                ],
            },
            {
                heading: "8. Contact",
                paragraphs: [
                    `For any question regarding the processing of personal data, please contact us at ${CONTROLLER.email}.`,
                ],
            },
        ],
    },
    ru: {
        title: "Защита персональных данных",
        lastUpdated: "Действует с 15 мая 2026 г.",
        intro: [
            "В настоящем документе мы информируем вас о том, каким образом мы обрабатываем ваши персональные данные в соответствии с Регламентом Европейского парламента и Совета (ЕС) 2016/679 (GDPR).",
        ],
        sections: [
            {
                heading: "1. Контролёр персональных данных",
                paragraphs: [
                    `Контролёр: ${CONTROLLER.name}`,
                    `Адрес: ${CONTROLLER.addressRu}`,
                    `NIE: ${CONTROLLER.nie}`,
                    `Контактный e-mail: ${CONTROLLER.email}`,
                    `Телефон / WhatsApp: ${CONTROLLER.phone}`,
                ],
            },
            {
                heading: "2. Какие данные мы обрабатываем",
                list: [
                    "Идентификационные данные: имя, фамилия",
                    "Контактные данные: e-mail, при необходимости номер телефона",
                    "Данные, связанные с заказом курса: выбранный вариант, дата оплаты, данные платежа (обрабатывает провайдер платёжных услуг)",
                    "Технические данные: IP-адрес, идентификатор устройства, данные о просмотре сайта (cookies, см. Политику cookies)",
                ],
            },
            {
                heading: "3. Цели и правовые основания обработки",
                paragraphs: ["Мы обрабатываем ваши данные в следующих целях:"],
                list: [
                    "Исполнение договора — предоставление доступа к курсу, обработка платежа и коммуникация по заказу (ст. 6(1)(b) GDPR).",
                    "Исполнение правовых обязанностей — бухгалтерия и налоговое законодательство (ст. 6(1)(c) GDPR).",
                    "Маркетинг — рассылка информации о новинках и других продуктах на основании вашего согласия (ст. 6(1)(a) GDPR) или законного интереса после совершённого заказа.",
                    "Измерение и оптимизация рекламы — Meta Pixel и другие аналитические инструменты (на основании согласия, выданного через cookie-баннер).",
                ],
            },
            {
                heading: "4. Получатели персональных данных",
                paragraphs: ["Мы можем передавать ваши данные следующим категориям обработчиков:"],
                list: [
                    "Образовательная платформа Kwiga — обеспечение доступа к курсу",
                    "Платёжный шлюз — обработка платежей",
                    "Провайдер хостинга сайта (Vercel)",
                    "Маркетинговые платформы (Meta / Facebook Pixel) — только в объёме, на который вы дали согласие",
                ],
            },
            {
                heading: "5. Срок обработки",
                paragraphs: [
                    "Мы храним данные в течение срока, необходимого для достижения соответствующей цели — как правило, в течение срока действия договорных отношений и в дальнейшем в течение срока, требуемого законодательством (например, бухгалтерские документы — в течение срока, установленного налоговыми законами).",
                    "Данные, обрабатываемые на основании согласия, хранятся до отзыва согласия, но не дольше срока, указанного в самом согласии.",
                ],
            },
            {
                heading: "6. Ваши права",
                paragraphs: ["В отношении ваших персональных данных у вас есть следующие права:"],
                list: [
                    "Право на доступ к данным",
                    "Право на исправление неточных данных",
                    "Право на удаление («право быть забытым»)",
                    "Право на ограничение обработки",
                    "Право на переносимость данных",
                    "Право возразить против обработки",
                    "Право в любое время отозвать данное согласие",
                    "Право подать жалобу в надзорный орган (в Испании — Agencia Española de Protección de Datos, AEPD)",
                ],
            },
            {
                heading: "7. Передача за пределы ЕС",
                paragraphs: [
                    "Некоторые из перечисленных обработчиков (например, Meta) могут обрабатывать данные за пределами ЕС. В таких случаях мы обеспечиваем соответствующий уровень защиты с помощью стандартных договорных оговорок, утверждённых Европейской комиссией.",
                ],
            },
            {
                heading: "8. Контакты",
                paragraphs: [
                    `По всем вопросам, связанным с обработкой персональных данных, обращайтесь к нам по адресу ${CONTROLLER.email}.`,
                ],
            },
        ],
    },
};
