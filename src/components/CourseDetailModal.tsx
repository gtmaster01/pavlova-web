import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, Sparkles } from "lucide-react";

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
                    <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-primary" />
                            Co se v kurzu naučíte?
                        </h4>
                        <p className="text-sm text-blue-800 leading-relaxed">
                            Osvojíte si techniky, které používají profesionálové. Naučíte se pracovat s lymfou pro odstranění otoků, uvolníte napětí v čelistech a zjemníte nosoretní rýhy. To vše vlastníma rukama.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 border-b pb-2">Program kurzu</h4>

                        <div className="grid gap-4">
                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">Základy a příprava</h5>
                                    <p className="text-sm text-slate-600">Správné držení těla, uvolnění krku a dekoltu - klíč k úspěšné masáži obličeje.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">Lymfodrenážní techniky</h5>
                                    <p className="text-sm text-slate-600">Ranní SOS rutina proti otokům očí a tváře. Viditelný efekt už za 3 minuty.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none pt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-slate-900">Lifting a tvarování</h5>
                                    <p className="text-sm text-slate-600">Hloubková práce se svaly pro pozvednutí kontur a vyhlazení vrásek.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-md">
                            <Clock className="w-4 h-4 mr-2 text-primary" />
                            15 min denně
                        </div>
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-md">
                            <Check className="w-4 h-4 mr-2 text-green-500" />
                            Doživotní přístup
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
