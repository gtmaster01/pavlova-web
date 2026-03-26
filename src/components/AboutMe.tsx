import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutMe() {
    const t = useTranslations("AboutMe");

    const credentials = [
        { label: t("educationLabel"), text: t("educationText") },
        { label: t("experienceLabel"), text: t("experienceText") },
        { label: t("standardsLabel"), text: t("standardsText") },
        { label: t("inspirationLabel"), text: t("inspirationText") },
    ];

    return (
        <section id="o-mne" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {t("title")}
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <blockquote className="border-l-4 border-primary pl-4 italic text-slate-700">
                                {t("quote")}
                            </blockquote>
                            <p>
                                {t("bio")}
                            </p>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-slate-900">{t("whyTrustTitle")}</h3>
                                <ul className="space-y-3 text-base">
                                    {credentials.map((item, index) => (
                                        <li key={index} className="flex gap-3">
                                            <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                            <span>
                                                <strong>{item.label}</strong> {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <Image
                                    src="/foto_2_n_.jpg"
                                    alt={t("imageAlt")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute inset-0 border-[12px] border-white/50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
