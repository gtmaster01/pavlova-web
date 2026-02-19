import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "Nevytahám si samomasáží kůži ještě více?",
            answer: "To je nejčastější obava, ale opak je pravdou. Moje techniky jsou zaměřeny na svaly a fascie (vnitřní konstrukci obličeje), nikoliv na vytahování povrchové kůže. Jako certifikovaná kosmetoložka vás naučím, jak fixovat tkáně a pracovat v hloubce. Tím pokožce vrátíme její přirozenou oporu, takže se naopak vypne a zpevní.",
        },
        {
            question: "Opravdu mi stačí jen vlastní ruce? Nepotřebuji žádné pomůcky?",
            answer: "Přesně tak. Vaše ruce jsou tím nejdokonalejším a nejcitlivějším nástrojem. V kurzu vás naučím, jak správně používat dlaně, klouby a prsty k dosažení skulpturálního a liftingového efektu. Nepotřebujete žádné drahé přístroje ani gua-sha kameny – své „studio krásy“ tak máte kdykoliv a kdekoli u sebe.",
        },
        {
            question: "Za jak dlouho uvidím první výsledky?",
            answer: "Ústup ranních otoků a zdravější barvu pleti uvidíte hned po prvním cvičení. Pokud budete masáž provádět pravidelně (stačí 15 minut), po 7 dnech pocítíte uvolnění svalového napětí a po 21 dnech si všimnete pevnějšího oválu a vyhlazení jemných vrásek. Výsledky jsou kumulativní – čím déle techniky ovládáte, tím lépe vaše tvář vypadá.",
        },
        {
            question: "Je kurz vhodný i pro citlivou pleť nebo po zákrocích?",
            answer: "Ano. Díky mé osobní zkušenosti s onkologickou léčbou kladu na bezpečnost a šetrnost absolutní důraz. Metoda Well-age je navržena tak, aby respektovala zdraví pleti. Pokud jste po aplikaci botoxu nebo výplní, doporučuji s masáží začít až po vstřebání (obvykle po 2–4 týdnech), aby se prodloužil jejich efekt a podpořila regenerace tkání.",
        },
        {
            question: "Je kurz vhodný i pro úplné začátečnice?",
            answer: "Ano, kurz je postaven „od nuly“. Vše vysvětluji krok za krokem – od toho, jak si správně umýt ruce, až po hloubkové masážní hmaty. Nepotřebujete žádné předchozí zkušenosti ani znalosti z kosmetologie. Jsem vaše průvodkyně a povedu vaše ruce celou dobu.",
        },
        {
            question: "Jak kurz obdržím a jak dlouho k němu budu mít přístup?",
            answer: "Ihned po potvrzení platby obdržíte na svůj e-mail přístupové údaje do členské sekce. Kurz máte k dispozici doživotně. Můžete se k němu vracet za rok, za dva nebo kdykoliv budete mít pocit, že vaše pleť potřebuje extra péči. Videa můžete sledovat online na počítači, tabletu i mobilu.",
        },
        {
            question: "Potřebujete pomoc?",
            answer: "Pokud narazíte na technické potíže se vstupem do kurzu nebo vám po zaplacení nedorazily přístupové údaje, neváhejte mě kontaktovat. Jsem tu pro vás. Napište mi na WhatsApp: 👉 +420 608 236 696",
        },
    ];

    return (
        <section id="faq" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl border border-slate-200 bg-white rounded-2xl shadow-sm p-6 md:p-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-8">
                    Často kladené otázky
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-serif text-lg font-medium text-slate-800">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
