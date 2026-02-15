"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

export function CourseDetailModal({ trigger }: { trigger?: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger ? (
                    trigger
                ) : (
                    <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                        Více o kurzu
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-center mb-2">Objevte tajemství věčného mládí</DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Komplexní průvodce pro přirozené omlazení tváře
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">


                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 border-b pb-2">Program kurzu</h4>

                        <div className="grid gap-4">
                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 1: Strategie krásy a bezpečí</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 1: Úvod a vaše mise za krásou.</span> Představení metody Well-age. Naučíte se klíčová bezpečnostní pravidla a anatomické zásady, abyste masáž prováděla s absolutním respektem k vlastnímu tělu.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Jistota v každém pohybu a správné nastavení mysli pro proměnu.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 2: Lymfatický restart</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 2: Ranní rituál – Probuzení bez otoků.</span> Aktivní „postelový komplex“ a kapilární gymnastika. Naučíte se nastartovat lymfatický systém ještě dříve, než vstanete z postele.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Okamžitý odvod ranních otoků a pocit lehkosti v celém těle.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 3: Základy liftingu</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 3: Hlavní modelující masáž (Základ).</span> Hloubková práce s tkáněmi, uvolnění napětí v oblasti trapézů a krku. Resetujeme svalové napětí, které je hlavní příčinou povadlých kontur.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Uvolnění šíje a příprava obličeje na hloubkový lifting.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">4</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 4: Architektura obličeje</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 4: Modelace oválu a spodní třetiny.</span> Intenzivní práce na zpevnění linie čelisti (tzv. úhel mládí). Techniky pro eliminaci druhé brady a vyhlazení marionetových vrásek.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Ostře řezané kontury a vyrýsovaný profil.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">5</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 5: Emoční uvolnění a horní třetina</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 5: Vyhlazení čela a lifting spánků.</span> Odstranění napětí, které způsobuje přísný výraz. Techniky pro zvednutí obočí a vyhlazení vrásek mezi obočím bez nutnosti botoxu.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Otevřený, odpočatý pohled a hladké čelo.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">6</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 6: Fokus na detaily</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 6: Specializovaná péče o oční okolí.</span> Jemná a bezpečná technika pro nejcitlivější zónu obličeje. Zaměřeno na redukci váčků pod očima a projasnění očního okolí.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Zmizení známek únavy a svěží pohled.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">7</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">MODUL 7: Finální harmonie</h5>
                                    <p className="text-sm text-slate-700 mt-1"><span className="font-medium">Video 7: Uvolnění žvýkacích svalů a závěr.</span> Klíč k uvolněnému výrazu. Odstraníme hluboké bloky způsobené stresem a naučíme se, jak rituály Well-age udržet dlouhodobě.</p>
                                    <p className="text-sm text-slate-500 mt-1 italic">Výsledek: Zjemnění rysů tváře a vnitřní pocit klidu.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-md">
                            <Clock className="w-4 h-4 mr-2 text-primary" />
                            30 min denně
                        </div>
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-md">
                            <Check className="w-4 h-4 mr-2 text-green-500" />
                            Doživotní přístup
                        </div>
                    </div>

                    <DialogClose asChild>
                        <Button
                            className="w-full mt-2 bg-primary text-slate-900 font-bold hover:bg-primary/90 text-lg py-6 shadow-md hover:shadow-lg transition-all"
                            onClick={() => document.getElementById("cenik")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Chci vstoupit do kurzu
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
