"use client";

import { useTranslations } from "next-intl";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

export function CourseDetailModal({ trigger }: { trigger?: React.ReactNode }) {
    const t = useTranslations("CourseDetailModal");

    const modules = [1, 2, 3, 4, 5, 6, 7] as const;

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger ? (
                    trigger
                ) : (
                    <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                        {t("triggerButton")}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-center mb-2">{t("title")}</DialogTitle>
                    <DialogDescription className="text-center text-base">
                        {t("description")}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 border-b pb-2">{t("programTitle")}</h4>

                        <div className="grid gap-4">
                            {modules.map((num) => (
                                <div key={num} className="flex gap-4">
                                    <div className="flex-none pt-1">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">{num}</div>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-900">{t(`module${num}Title`)}</h5>
                                        <p className="text-sm text-slate-700 mt-1"><span className="font-medium">{t(`module${num}Desc`)}</span> {t(`module${num}Detail`)}</p>
                                        <p className="text-sm text-slate-500 mt-1 italic">{t(`module${num}Result`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-md">
                            <Clock className="w-4 h-4 mr-2 text-primary" />
                            {t("dailyTime")}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-md">
                            <Check className="w-4 h-4 mr-2 text-green-500" />
                            {t("lifetimeAccess")}
                        </div>
                    </div>

                    <DialogClose asChild>
                        <Button
                            className="w-full mt-2 bg-primary text-slate-900 font-bold hover:bg-primary/90 text-lg py-6 shadow-md hover:shadow-lg transition-all"
                            onClick={() => document.getElementById("cenik")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            {t("enrollCta")}
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
