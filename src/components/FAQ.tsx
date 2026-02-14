import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "Jak dlouho mám přístup ke kurzu?",
            answer: "Přístup ke kurzu vám zůstává napořád. Můžete se k lekcím kdykoli vrátit.",
        },
        {
            question: "Potřebuji nějaké speciální pomůcky?",
            answer: "Vůbec ne! Celý kurz je založen na samomasáži rukama. Pokud máte gua sha nebo roller, můžete je využít, ale nejsou nutné.",
        },
        {
            question: "Je masáž vhodná pro citlivou pleť?",
            answer: "Ano, techniky jsou velmi jemné a šetrné. Pokud máte specifické kožní problémy (akné, ekzém), doporučuji konzultaci s lékařem, ale lymfatická masáž je obecně velmi prospěšná.",
        },
        {
            question: "Kolik času mi to zabere?",
            answer: "Celá ranní rutina je navržena tak, aby nezabrala více než 5-10 minut. Ideální pro uspěchaná rána.",
        },
        {
            question: "Jak technicky kurz probíhá?",
            answer: "Po zaplacení vám přijde e-mail s přihlašovacími údaji do členské sekce, kde najdete všechna videa přehledně seřazená.",
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
