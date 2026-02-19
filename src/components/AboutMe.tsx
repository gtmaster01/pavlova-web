import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutMe() {
    return (
        <section id="o-mne" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Vaše průvodkyně k přirozené kráse a zdraví
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <blockquote className="border-l-4 border-primary pl-4 italic text-slate-700">
                                „Krása pro mě není boj proti věku, ale umění stárnout s grácií (well-age).“
                            </blockquote>
                            <p>
                                Můj přístup ke kosmetologii definovalo vítězství nad onkologickým onemocněním. Tato zkušenost mě naučila, že bezpečnost a respekt k tělu jsou na prvním místě. Moje práce není jen o estetice, je o navrácení vnitřní záře skrze péči, která je bezpečná i pro tu nejcitlivější pleť.
                            </p>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-slate-900">Proč mi klienti důvěřují?</h3>
                                <ul className="space-y-3 text-base">
                                    <li className="flex gap-3">
                                        <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                        <span>
                                            <strong>Odborné vzdělání:</strong> Absolventka prestižní pražské školy Esthetute. Specializuji se na liftingovou a myofasciální masáž obličeje.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                        <span>
                                            <strong>Mezinárodní zkušenosti:</strong> Neustále sleduji světové trendy a získávám zkušenosti v Česku, Itálii a Španělsku.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                        <span>
                                            <strong>Prémiové standardy:</strong> Ve své praxi pracuji s prémiovými značkami, jako jsou Rhea, Meder, pHformula, Dermoaroma a GIGI.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                        <span>
                                            <strong>Inspirace:</strong> Držitelka titulů Woman of Inspiration 2025 a Miss Elegance z mezinárodní soutěže v Bulharsku.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <Image
                                    src="/foto_1_n.JPEG"
                                    alt="Portrét expertky"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute inset-0 border-[12px] border-white/50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
