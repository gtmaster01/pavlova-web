import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Testimonials() {
    // Placeholder images for now, user will upload real ones later
    const testimonials = [
        {
            name: "Radka",
            rating: 5,
            image: "/recenze_1.jpeg",
        },
        {
            name: "Ivona",
            rating: 5,
            image: "/recenze_2.jpeg",
        },
        {
            name: "Andrea",
            rating: 5,
            image: "/recenze_3.jpeg",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-16">
                    Vaše proměny
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="group border-none shadow-none bg-transparent">
                            <CardContent className="p-0 flex flex-col items-center">
                                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-50">
                                    <Image
                                        src={t.image}
                                        alt={`Proměna - ${t.name}`}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-105 pb-16"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/30 backdrop-blur-md border-t border-white/20 flex flex-col items-center justify-center gap-1">
                                        <div className="flex gap-1 text-yellow-400 drop-shadow-sm">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-current" />
                                            ))}
                                        </div>
                                        <p className="font-handwriting text-xl text-slate-700 font-medium rotate-[-2deg]">
                                            {t.name}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

