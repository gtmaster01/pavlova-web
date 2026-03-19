import { Check, X, Gift, Star, Crown, Sparkles } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { CourseDetailModal } from "./CourseDetailModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const paymentLinks: Record<string, { free: string; starter: string; full: string; vip: string }> = {
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

export function Pricing() {
    const t = useTranslations("Pricing");
    const locale = useLocale();
    const links = paymentLinks[locale] ?? paymentLinks.cs;

    return (
        <section id="cenik" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-6 space-y-4">
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t("title")}
                    </h2>
                    <p className="text-slate-600 text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Upgrade hint */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5 text-sm text-amber-800">
                        <Sparkles className="h-4 w-4" />
                        {t("upgradeHint")}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Free Tier */}
                    <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Gift className="h-5 w-5 text-green-500" />
                                <CardTitle className="font-serif text-xl text-slate-900">{t("freeTitle")}</CardTitle>
                            </div>
                            <CardDescription className="text-sm">{t("freeDescription")}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold text-green-600 mb-5">{t("freePrice")}</div>
                            <ul className="space-y-2.5">
                                <li className="flex items-start text-sm text-slate-600">
                                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("freeFeature1")}
                                </li>
                                <li className="flex items-start text-sm text-slate-600">
                                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("freeFeature2")}
                                </li>
                                <li className="flex items-start text-sm text-slate-600">
                                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("freeFeature3")}
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <a
                                href={links.free}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button variant="outline" className="w-full border-green-500 text-green-700 hover:bg-green-50 font-bold shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-200">
                                    {t("freeCta")}
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    {/* Starter Tier */}
                    <Card className="flex flex-col border-primary/30 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Star className="h-5 w-5 text-primary" />
                                <CardTitle className="font-serif text-xl text-slate-900">{t("starterTitle")}</CardTitle>
                            </div>
                            <CardDescription className="text-sm">{t("starterDescription")}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold text-slate-900 mb-5">{t("starterPrice")}</div>
                            <ul className="space-y-2.5">
                                <li className="flex items-start text-sm text-slate-600">
                                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("starterFeature1")}
                                </li>
                                <li className="flex items-start text-sm text-slate-600">
                                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("starterFeature2")}
                                </li>
                                <li className="flex items-start text-sm text-slate-600">
                                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("starterFeature3")}
                                </li>
                                <li className="flex items-start text-sm text-amber-700 bg-amber-50 rounded-md px-2 py-1.5 mt-2">
                                    <Sparkles className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("starterUpgradeNote")}
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <a
                                href={links.starter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200">
                                    {t("starterCta")}
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    {/* Full Course Tier */}
                    <Card className="flex flex-col border-primary/50 shadow-lg relative overflow-hidden bg-slate-50/50">
                        <div className="absolute top-0 right-0 bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                            {t("fullBadge")}
                        </div>
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Crown className="h-5 w-5 text-primary" />
                                <CardTitle className="font-serif text-xl text-slate-900">{t("fullTitle")}</CardTitle>
                            </div>
                            <CardDescription className="text-sm">{t("fullDescription")}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold text-slate-900 mb-5">{t("fullPrice")}</div>
                            <ul className="space-y-2.5">
                                <li className="flex items-start text-sm text-slate-700 font-medium">
                                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                    {t("fullFeature1")}
                                </li>
                                <li className="flex items-start text-sm text-slate-700 font-medium">
                                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                    {t("fullFeature2")}
                                </li>
                                <li className="flex items-start text-sm text-slate-700 font-medium">
                                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                    {t("fullFeature3")}
                                </li>
                                <li className="flex items-start text-sm text-slate-400">
                                    <X className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="line-through">{t("fullExcluded1")}</span>
                                </li>
                                <li className="flex items-start text-sm text-slate-400">
                                    <X className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="line-through">{t("fullExcluded2")}</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <a
                                href={links.full}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200">
                                    {t("fullCta")}
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    {/* VIP Tier */}
                    <Card className="flex flex-col border-slate-800 shadow-lg relative overflow-hidden bg-slate-900 text-white">
                        <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                            {t("vipBadge")}
                        </div>
                        <CardHeader className="pb-4">
                            <CardTitle className="font-serif text-xl text-white">{t("vipTitle")}</CardTitle>
                            <CardDescription className="text-slate-300 text-sm">{t("vipDescription")}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold text-white mb-5">{t("vipPrice")}</div>
                            <ul className="space-y-2.5">
                                <li className="flex items-start text-sm text-slate-200 font-medium">
                                    <Check className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <strong>{t("vipFeature1")}</strong>
                                </li>
                                <li className="flex items-start text-sm text-slate-200">
                                    <Check className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("vipFeature2")}
                                </li>
                                <li className="flex items-start text-sm text-slate-200">
                                    <Check className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("vipFeature3")}
                                </li>
                                <li className="flex items-start text-sm text-slate-200">
                                    <Check className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {t("vipFeature4")}
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <a
                                href={links.vip}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200">
                                    {t("vipCta")}
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-slate-600 mb-4">{t("moreInfo")}</p>
                <div className="max-w-xs mx-auto">
                    <CourseDetailModal />
                </div>
            </div>
        </section>
    );
}
