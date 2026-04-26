"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const testimonials = [
    { name: "Radka", rating: 5, image: "/recenze_1.jpeg" },
    { name: "Ivona", rating: 5, image: "/recenze_2.jpeg" },
    { name: "Andrea", rating: 5, image: "/recenze_3.jpeg" },
    { name: "Romana", rating: 5, image: "/recenze_4.jpeg" },
    { name: "Daniela", rating: 5, image: "/recenze_6.jpg" },
];

export function Testimonials() {
    const t = useTranslations("Testimonials");
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateButtons = useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        updateButtons();
        el.addEventListener("scroll", updateButtons, { passive: true });
        window.addEventListener("resize", updateButtons);
        return () => {
            el.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);
        };
    }, [updateButtons]);

    const scrollByCard = useCallback((dir: 1 | -1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>("[data-card]");
        const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
        const maxScroll = el.scrollWidth - el.clientWidth;
        let target = el.scrollLeft + dir * step;
        if (dir === 1 && target >= maxScroll - 4) target = 0;
        if (dir === -1 && target < 0) target = maxScroll;
        el.scrollTo({ left: target, behavior: "smooth" });
    }, []);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => scrollByCard(1), 4000);
        return () => clearInterval(interval);
    }, [isPaused, scrollByCard]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-16">
                    {t("title")}
                </h2>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                >
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        disabled={!canPrev}
                        aria-label="Previous"
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        disabled={!canNext}
                        aria-label="Next"
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <div
                        ref={scrollerRef}
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {testimonials.map((testimonial, i) => (
                            <Card
                                key={i}
                                data-card
                                className="group border-none shadow-none bg-transparent flex-none w-[80%] sm:w-[45%] md:w-[calc((100%-4rem)/3)] snap-start"
                            >
                                <CardContent className="p-0 flex flex-col items-center">
                                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-50">
                                        <Image
                                            src={testimonial.image}
                                            alt={t("imageAlt", { name: testimonial.name })}
                                            fill
                                            className="object-contain transition-transform duration-500 group-hover:scale-105 pb-16"
                                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 33vw"
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/30 backdrop-blur-md border-t border-white/20 flex flex-col items-center justify-center gap-1">
                                            <div className="flex gap-1 text-yellow-400 drop-shadow-sm">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-xl text-slate-700 font-medium">
                                                {testimonial.name}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
