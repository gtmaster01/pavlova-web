import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Testimonials() {
    // Placeholder images for now, user will upload real ones later
    const testimonials = [
        {
            name: "Jana Nováková",
            rating: 5,
            image: "https://placehold.co/400x500/e2e8f0/1e293b?text=Jana",
        },
        {
            name: "Petra Svobodová",
            rating: 5,
            image: "https://placehold.co/400x500/e2e8f0/1e293b?text=Petra",
        },
        {
            name: "Eva Králová",
            rating: 5,
            image: "https://placehold.co/400x500/e2e8f0/1e293b?text=Eva",
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
                                <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                    <Image
                                        src={t.image}
                                        alt={`Proměna - ${t.name}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="font-handwriting text-xl text-slate-600 font-medium rotate-[-2deg]">
                                        {t.name}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

