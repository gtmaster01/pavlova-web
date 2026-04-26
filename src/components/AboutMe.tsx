"use client";

import { useRef, useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Volume2, VolumeX } from "lucide-react";

const heroVideos: Record<string, string> = {
    cs: "/cz.mp4",
    en: "/eng.mp4",
    ru: "/ru.mp4",
};

export function AboutMe() {
    const t = useTranslations("AboutMe");
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
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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

                    {/* Video */}
                    <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[600px] lg:max-w-none">
                        <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10">
                            <video
                                ref={videoRef}
                                key={videoSrc}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="block w-full h-auto"
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
