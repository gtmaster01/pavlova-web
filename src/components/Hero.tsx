"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CourseDetailModal } from "./CourseDetailModal";
import { FomoCornerBadge } from "./FomoCountdown";
import { FreeEnrollModal } from "./FreeEnrollModal";

export function Hero() {
    const t = useTranslations("Hero");
    const [enrollOpen, setEnrollOpen] = useState(false);

    return (
        <section className="relative overflow-hidden bg-slate-50 py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8 lg:-translate-y-[15%] transform transition-transform duration-500">
                        <div className="space-y-4">

                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/none">
                                {t("title")}<span className="text-primary">{t("titleHighlight")}</span>
                            </h1>
                            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t.rich("description", {
                                    minutes: "15",
                                    highlight: (chunks) => (
                                        <span className="font-bold text-primary">{chunks}</span>
                                    ),
                                })}
                            </p>
                            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                                {t("subtitle")}
                            </p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3 pt-2">
                            <div className="relative flex-[2] min-w-[140px] sm:min-w-0 sm:flex-none">
                                <FomoCornerBadge />
                                <Button
                                    size="lg"
                                    onClick={() => setEnrollOpen(true)}
                                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-4 sm:px-8 text-sm sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg whitespace-nowrap"
                                >
                                    {t("ctaFree")}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                            <CourseDetailModal
                                trigger={
                                    <Button size="lg" variant="outline" className="flex-1 min-w-[120px] sm:min-w-0 sm:flex-none w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-4 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                                        {t("ctaSecondary")}
                                    </Button>
                                }
                            />

                        </div>
                        <p className="text-xs text-slate-500">
                            {t("socialProof")}
                        </p>
                        <FreeEnrollModal open={enrollOpen} onOpenChange={setEnrollOpen} />
                    </div>

                    <div className="relative mx-auto w-full max-w-[600px]">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-lg ring-1 ring-slate-900/10">
                                <Image
                                    src="/pred.jpeg"
                                    alt={t("beforeLabel")}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-3 left-3 bg-slate-900/70 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                                    {t("beforeLabel")}
                                </div>
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-xl ring-2 ring-primary/40">
                                <Image
                                    src="/po.jpg"
                                    alt={t("afterLabel")}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                                    {t("afterLabel")}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none -z-10" />
                        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
