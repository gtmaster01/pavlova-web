import { useTranslations } from "next-intl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const t = useTranslations("FAQ");

    const faqKeys = ["1", "2", "3", "4", "5", "6", "7"] as const;

    return (
        <section id="faq" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl border border-slate-200 bg-white rounded-2xl shadow-sm p-6 md:p-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-8">
                    {t("title")}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqKeys.map((key, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-serif text-lg font-medium text-slate-800">
                                {t(`q${key}`)}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                {t(`a${key}`)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
