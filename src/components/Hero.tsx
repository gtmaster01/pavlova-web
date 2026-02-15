import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { CourseDetailModal } from "./CourseDetailModal";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">

                            <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/none">
                                Ráno bez otoků a <span className="text-primary italic">tvář, která září...</span>
                            </h1>
                            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Autorský kurz samomasáže od expertky Jevgenije Pavlovové. Získejte pevné kontury a svěží vzhled za <span className="font-bold">30 minut</span> bez injekci, bolesti a rizika.
                            </p>
                            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                                Investujte do své krásy, která vyzařuje zdraví. Kompletní kurz pro vaši proměnu.
                            </p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3">
                            <Link href="#cenik" className="flex-[2] min-w-[140px] sm:min-w-0 sm:flex-none">
                                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-slate-900 rounded-full px-4 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                                    Chci začít svou proměnu
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <CourseDetailModal
                                trigger={
                                    <Button size="lg" variant="outline" className="flex-1 min-w-[120px] sm:min-w-0 sm:flex-none w-full sm:w-auto border-primary text-primary hover:bg-primary/10 rounded-full px-4 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                                        Více o kurzu
                                    </Button>
                                }
                            />

                        </div>
                        <p className="text-xs text-slate-500">
                            * Přidejte se k více než 500+ spokojeným ženám
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-slate-200 shadow-xl ring-1 ring-slate-900/10">
                            {/* Replace with actual image later */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <Image
                                    src="/foto_2_n.JPEG"
                                    alt="Relaxační masáž obličeje"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Decorative frame */}
                            <div className="absolute inset-0 border-[12px] border-white/50" />

                            {/* Decorative elements */}
                            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
