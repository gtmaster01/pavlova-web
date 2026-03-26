"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { CourseDetailModal } from "./CourseDetailModal";

const heroVideos: Record<string, string> = {
    cs: "/hero_video_cz.mp4",
    en: "/hero_video_ru.mp4",
    ru: "/hero_video_ru.mp4",
};

export function Hero() {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const videoSrc = heroVideos[locale] ?? heroVideos.cs;
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const offset = 80; // height of header
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

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
                                {t("description", { minutes: "15" })}
                            </p>
                            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                                {t("subtitle")}
                            </p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3">
                            <Link
                                href="#cenik"
                                onClick={(e) => scrollToSection(e, "#cenik")}
                                className="flex-[2] min-w-[140px] sm:min-w-0 sm:flex-none"
                            >
                                <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white rounded-full px-4 sm:px-8 text-sm sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg whitespace-nowrap">
                                    {t("ctaFree")}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <CourseDetailModal
                                trigger={
                                    <Button size="lg" variant="outline" className="flex-1 min-w-[120px] sm:min-w-0 sm:flex-none w-full sm:w-auto border-primary text-primary hover:bg-primary/10 rounded-full px-4 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                                        {t("ctaSecondary")}
                                    </Button>
                                }
                            />

                        </div>
                        <p className="text-xs text-slate-500">
                            {t("socialProof")}
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
                        <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10">
                            <video
                                ref={videoRef}
                                key={videoSrc}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 h-full w-full object-cover"
                            >
                                <source src={videoSrc} type="video/mp4" />
                            </video>

                            <button
                                onClick={toggleMute}
                                className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </button>

                            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
