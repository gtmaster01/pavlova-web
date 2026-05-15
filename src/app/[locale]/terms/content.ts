import type { LegalContent } from "@/components/LegalLayout";

const PROVIDER = {
    name: "Evgeniya Pavlova",
    address: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Španělsko",
    addressEn: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Spain",
    addressRu: "Avenida del Mar Mediterráneo, 29670 San Pedro de Alcántara, Испания",
    nie: "Z3418018-Q",
    email: "pavlovaevgeniya86@gmail.com",
    phone: "+420 608 236 696",
};

export const termsContent: Record<"cs" | "en" | "ru", LegalContent> = {
    cs: {
        title: "Obchodní podmínky",
        lastUpdated: "Účinnost od 15. května 2026",
        intro: [
            `Tyto obchodní podmínky upravují vztah mezi poskytovatelkou online kurzu ${PROVIDER.name}, se sídlem ${PROVIDER.address}, identifikační číslo (NIE): ${PROVIDER.nie} (dále jen „Poskytovatel“), a kupujícím – fyzickou nebo právnickou osobou (dále jen „Klient“), který si prostřednictvím webových stránek evgeniyapavlova.eu objednává digitální obsah (online video kurz).`,
        ],
        sections: [
            {
                heading: "1. Provozovatel",
                paragraphs: [
                    `Jméno: ${PROVIDER.name}`,
                    `Adresa: ${PROVIDER.address}`,
                    `NIE: ${PROVIDER.nie}`,
                    `E-mail: ${PROVIDER.email}`,
                    `Telefon / WhatsApp: ${PROVIDER.phone}`,
                ],
            },
            {
                heading: "2. Předmět smlouvy",
                paragraphs: [
                    "Předmětem smlouvy je poskytnutí digitálního obsahu – online video lekcí věnovaných samomasáži obličeje metodou well-age – ve variantě, kterou si Klient vybral v ceníku (bezplatná lekce, jednotlivé moduly nebo kompletní kurz).",
                    "Kurz je doručován elektronicky prostřednictvím vzdělávací platformy Kwiga.",
                ],
            },
            {
                heading: "3. Uzavření smlouvy a objednávka",
                paragraphs: [
                    "Smlouva mezi Poskytovatelem a Klientem je uzavřena okamžikem, kdy Klient odešle objednávku přes formulář na webu a uhradí kupní cenu (pokud nejde o bezplatnou variantu).",
                    "Klient je povinen uvést pravdivé a aktuální údaje, zejména funkční e-mailovou adresu, na kterou mu budou doručeny přístupové údaje.",
                ],
            },
            {
                heading: "4. Cena a platební podmínky",
                paragraphs: [
                    "Aktuální ceny jednotlivých variant kurzu jsou uvedeny na webu evgeniyapavlova.eu v sekci Ceník. Ceny jsou konečné.",
                    "Platba probíhá online platební metodou poskytovanou platformou Kwiga, případně jiným zveřejněným způsobem.",
                ],
            },
            {
                heading: "5. Dodací podmínky",
                paragraphs: [
                    "Přístup k zakoupenému kurzu je Klientovi zpřístupněn elektronicky obvykle do několika minut po obdržení platby. Přístupové údaje jsou zasílány na e-mailovou adresu uvedenou v objednávce.",
                    "Pokud přístupové údaje nedorazí do 60 minut od platby, doporučujeme zkontrolovat složku „spam“ a v případě potíží kontaktovat Poskytovatele.",
                ],
            },
            {
                heading: "6. Odstoupení od smlouvy",
                paragraphs: [
                    "Klient bere na vědomí, že předmětem smlouvy je dodání digitálního obsahu, který není dodáván na hmotném nosiči. V souladu s evropskou legislativou ochrany spotřebitele Klient nemůže odstoupit od smlouvy po zahájení plnění, pokud k němu udělil výslovný souhlas a byl poučen o ztrátě práva na odstoupení.",
                    "Aktivací přístupu do kurzu Klient výslovně souhlasí se zahájením plnění před uplynutím lhůty pro odstoupení a bere na vědomí, že tím ztrácí právo na odstoupení od smlouvy.",
                ],
            },
            {
                heading: "7. Reklamace",
                paragraphs: [
                    "V případě technických potíží (např. nefunkční přístup, vada video lekce) je Klient povinen kontaktovat Poskytovatele bez zbytečného odkladu na e-mail " +
                        PROVIDER.email +
                        ".",
                    "Poskytovatel se zavazuje vyřídit reklamaci v co nejkratším termínu, zpravidla do 14 dnů.",
                ],
            },
            {
                heading: "8. Práva duševního vlastnictví",
                paragraphs: [
                    "Veškerý obsah kurzu (videa, texty, ilustrace, metodika) je chráněn autorským právem a je výhradním majetkem Poskytovatele. Klient získává nepřevoditelnou licenci k osobnímu užití pro vlastní potřebu.",
                    "Je zakázáno obsah sdílet, kopírovat, šířit, veřejně promítat nebo dále prodávat bez písemného souhlasu Poskytovatele.",
                ],
            },
            {
                heading: "9. Závěrečná ustanovení",
                paragraphs: [
                    "Vztahy neupravené těmito obchodními podmínkami se řídí právním řádem státu sídla Poskytovatele (Španělsko) a relevantními předpisy Evropské unie na ochranu spotřebitele.",
                    "Poskytovatel si vyhrazuje právo tyto obchodní podmínky kdykoli změnit. Pro již uzavřené smlouvy platí znění účinné v době objednávky.",
                ],
            },
        ],
    },
    en: {
        title: "Terms & Conditions",
        lastUpdated: "Effective from May 15, 2026",
        intro: [
            `These Terms & Conditions govern the relationship between the online-course provider ${PROVIDER.name}, with registered address at ${PROVIDER.addressEn}, identification number (NIE): ${PROVIDER.nie} (the “Provider”), and the buyer – a natural or legal person (the “Client”) who purchases digital content (an online video course) via the website evgeniyapavlova.eu.`,
        ],
        sections: [
            {
                heading: "1. Provider details",
                paragraphs: [
                    `Name: ${PROVIDER.name}`,
                    `Address: ${PROVIDER.addressEn}`,
                    `NIE: ${PROVIDER.nie}`,
                    `Email: ${PROVIDER.email}`,
                    `Phone / WhatsApp: ${PROVIDER.phone}`,
                ],
            },
            {
                heading: "2. Subject of the contract",
                paragraphs: [
                    "The subject of the contract is the delivery of digital content – online video lessons dedicated to facial self-massage based on the well-age method – in the variant chosen by the Client from the pricing page (free lesson, individual modules or the full course).",
                    "The course is delivered electronically through the educational platform Kwiga.",
                ],
            },
            {
                heading: "3. Conclusion of the contract and order",
                paragraphs: [
                    "The contract between the Provider and the Client is concluded at the moment when the Client submits the order through the form on the website and pays the price (where applicable).",
                    "The Client is obliged to provide truthful and up-to-date information, in particular a valid email address to which the access credentials will be delivered.",
                ],
            },
            {
                heading: "4. Price and payment terms",
                paragraphs: [
                    "Current prices of individual course variants are listed on evgeniyapavlova.eu in the Pricing section. The prices are final.",
                    "Payment is processed online via the payment method provided by the Kwiga platform or by other published means.",
                ],
            },
            {
                heading: "5. Delivery terms",
                paragraphs: [
                    "Access to the purchased course is granted electronically, usually within a few minutes after the payment is received. Access credentials are sent to the email address provided in the order.",
                    "If credentials do not arrive within 60 minutes of payment, please check the spam folder and contact the Provider in case of further issues.",
                ],
            },
            {
                heading: "6. Withdrawal from the contract",
                paragraphs: [
                    "The Client acknowledges that the subject of the contract is the delivery of digital content not supplied on a tangible medium. In accordance with EU consumer-protection legislation, the Client cannot withdraw from the contract once performance has begun, provided that the Client has given explicit consent and has been informed of the loss of the right of withdrawal.",
                    "By activating access to the course, the Client expressly agrees that performance begins before the withdrawal period expires and acknowledges that they thereby lose the right to withdraw from the contract.",
                ],
            },
            {
                heading: "7. Complaints",
                paragraphs: [
                    `In case of technical issues (e.g. broken access, defective video lesson), the Client shall contact the Provider without undue delay at ${PROVIDER.email}.`,
                    "The Provider undertakes to handle complaints as soon as possible, typically within 14 days.",
                ],
            },
            {
                heading: "8. Intellectual-property rights",
                paragraphs: [
                    "All course content (videos, texts, illustrations, methodology) is protected by copyright and is the exclusive property of the Provider. The Client receives a non-transferable license for personal use only.",
                    "It is forbidden to share, copy, distribute, publicly screen or resell the content without the Provider's written consent.",
                ],
            },
            {
                heading: "9. Final provisions",
                paragraphs: [
                    "Matters not regulated by these Terms & Conditions are governed by the law of the Provider's country of residence (Spain) and the relevant consumer-protection regulations of the European Union.",
                    "The Provider reserves the right to amend these Terms & Conditions at any time. For contracts already concluded, the version effective at the time of the order applies.",
                ],
            },
        ],
    },
    ru: {
        title: "Условия использования",
        lastUpdated: "Действует с 15 мая 2026 г.",
        intro: [
            `Настоящие Условия использования регулируют отношения между поставщиком онлайн-курса ${PROVIDER.name}, с юридическим адресом ${PROVIDER.addressRu}, идентификационный номер (NIE): ${PROVIDER.nie} (далее — «Поставщик»), и покупателем — физическим или юридическим лицом (далее — «Клиент»), приобретающим цифровой контент (онлайн-видеокурс) через сайт evgeniyapavlova.eu.`,
        ],
        sections: [
            {
                heading: "1. Поставщик",
                paragraphs: [
                    `Имя: ${PROVIDER.name}`,
                    `Адрес: ${PROVIDER.addressRu}`,
                    `NIE: ${PROVIDER.nie}`,
                    `E-mail: ${PROVIDER.email}`,
                    `Телефон / WhatsApp: ${PROVIDER.phone}`,
                ],
            },
            {
                heading: "2. Предмет договора",
                paragraphs: [
                    "Предметом договора является предоставление цифрового контента — онлайн-видеоуроков по самомассажу лица по методу well-age — в варианте, выбранном Клиентом в разделе «Цены» (бесплатный урок, отдельные модули или полный курс).",
                    "Курс доставляется в электронном виде через образовательную платформу Kwiga.",
                ],
            },
            {
                heading: "3. Заключение договора и заказ",
                paragraphs: [
                    "Договор между Поставщиком и Клиентом считается заключённым в момент отправки Клиентом заказа через форму на сайте и оплаты стоимости (если вариант не является бесплатным).",
                    "Клиент обязан указывать правдивые и актуальные данные, в первую очередь действующий адрес электронной почты, на который будут отправлены данные для доступа.",
                ],
            },
            {
                heading: "4. Цена и условия оплаты",
                paragraphs: [
                    "Актуальные цены вариантов курса указаны на сайте evgeniyapavlova.eu в разделе «Цены». Цены являются окончательными.",
                    "Оплата производится онлайн через способ оплаты, предоставляемый платформой Kwiga, либо иными опубликованными способами.",
                ],
            },
            {
                heading: "5. Условия доставки",
                paragraphs: [
                    "Доступ к приобретённому курсу предоставляется в электронном виде, как правило, в течение нескольких минут после получения оплаты. Данные для доступа отправляются на e-mail, указанный при оформлении заказа.",
                    "Если данные не пришли в течение 60 минут после оплаты, рекомендуем проверить папку «Спам» и при возникновении проблем связаться с Поставщиком.",
                ],
            },
            {
                heading: "6. Отказ от договора",
                paragraphs: [
                    "Клиент признаёт, что предметом договора является поставка цифрового контента, не передаваемого на материальном носителе. В соответствии с европейским законодательством о защите прав потребителей Клиент не может отказаться от договора после начала его исполнения, если он дал явное согласие и был проинформирован об утрате права на отказ.",
                    "Активацией доступа к курсу Клиент явно соглашается с началом исполнения до истечения срока для отказа и подтверждает, что тем самым теряет право на отказ от договора.",
                ],
            },
            {
                heading: "7. Рекламации",
                paragraphs: [
                    `В случае технических проблем (например, нерабочий доступ, дефект видеоурока) Клиент обязан без неоправданной задержки обратиться к Поставщику по адресу ${PROVIDER.email}.`,
                    "Поставщик обязуется рассмотреть рекламацию в максимально короткий срок, как правило, в течение 14 дней.",
                ],
            },
            {
                heading: "8. Права интеллектуальной собственности",
                paragraphs: [
                    "Весь контент курса (видео, тексты, иллюстрации, методика) защищён авторским правом и является исключительной собственностью Поставщика. Клиент получает непередаваемую лицензию для личного использования.",
                    "Запрещено делиться, копировать, распространять, публично транслировать или перепродавать контент без письменного согласия Поставщика.",
                ],
            },
            {
                heading: "9. Заключительные положения",
                paragraphs: [
                    "Отношения, не урегулированные настоящими условиями, регулируются правом страны проживания Поставщика (Испания) и соответствующими нормами защиты прав потребителей Европейского союза.",
                    "Поставщик оставляет за собой право в любое время изменить настоящие Условия. Для уже заключённых договоров действует редакция, актуальная на момент оформления заказа.",
                ],
            },
        ],
    },
};
