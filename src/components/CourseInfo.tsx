import { CloudLightning, Sparkles, Hand, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export function CourseInfo() {
    const t = useTranslations("CourseInfo");

    const features = [
        {
            icon: <CloudLightning className="h-6 w-6 text-primary" />,
            title: t("feature1Title"),
            desc: t("feature1Desc"),
        },
        {
            icon: <Sparkles className="h-6 w-6 text-primary" />,
            title: t("feature2Title"),
            desc: t("feature2Desc"),
        },
        {
            icon: <Hand className="h-6 w-6 text-primary" />,
            title: t("feature3Title"),
            desc: t("feature3Desc"),
        },
        {
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            title: t("feature4Title"),
            desc: t("feature4Desc"),
        }
    ];

    return (
        <section id="o-kurzu" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t("title")}
                    </h2>
                    <p className="text-slate-600 text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
