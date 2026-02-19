import { Check, X } from "lucide-react";
import { CourseDetailModal } from "./CourseDetailModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Pricing() {
    return (
        <section id="cenik" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Vyberte si svou cestu k zářivé pleti
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Investice do sebe, která se vám vrátí každé ráno při pohledu do zrcadla.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Basic Tier - SAMOSTUDIUM */}
                    <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-serif text-2xl text-slate-900">SAMOSTUDIUM</CardTitle>
                            <CardDescription>Vše, co potřebujete pro vlastní ranní rituál.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold text-slate-900 mb-6">2 399 Kč</div>
                            <ul className="space-y-3">
                                <li className="flex items-center text-slate-600">
                                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                    7 video lekcí (kompletní systém)
                                </li>
                                <li className="flex items-center text-slate-600">
                                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                    Doživotní přístup k materiálům
                                </li>
                                <li className="flex items-center text-slate-600">
                                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                    Metoda Well-age bez pomůcek
                                </li>
                                <li className="flex items-center text-slate-400 decoration-slate-300">
                                    <X className="h-5 w-5 mr-2 flex-shrink-0" />
                                    <span className="line-through">Osobní konzultace s Evgeniyou</span>
                                </li>
                                <li className="flex items-center text-slate-400 decoration-slate-300">
                                    <X className="h-5 w-5 mr-2 flex-shrink-0" />
                                    <span className="line-through">Individuální kontrola techniky</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <a
                                href="https://buy.stripe.com/8x29ATbEI6czbcI1i68Ra00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 font-bold">
                                    KOUPIT ZÁKLADNÍ
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    {/* VIP Tier - OSOBNÍ MENTORING */}
                    <Card className="flex flex-col border-primary/50 shadow-lg relative overflow-hidden bg-slate-50/50">
                        <div className="absolute top-0 right-0 bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                            DOPORUČENO
                        </div>
                        <CardHeader>
                            <CardTitle className="font-serif text-2xl text-slate-900">OSOBNÍ MENTORING</CardTitle>
                            <CardDescription>Maximální výsledky pod mým odborným dohledem.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold text-slate-900 mb-6">14 999 Kč</div>
                            <ul className="space-y-3">
                                <li className="flex items-center text-slate-700 font-medium">
                                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                    <strong>Vše z tarifu SAMOSTUDIUM</strong>
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                    Osobní online konzultace (30 min)
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                    Privátní WhatsApp chat (1 měsíc): Odpovědi na vaše otázky
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                    Kontrola vaší techniky: Oprava pohybů přes video
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200">
                                CHCI VIP PÉČI
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-slate-600 mb-4">Chcete vědět více o tom, jak kurz probíhá?</p>
                <div className="max-w-xs mx-auto">
                    <CourseDetailModal />
                </div>
            </div>
        </section>
    );
}
