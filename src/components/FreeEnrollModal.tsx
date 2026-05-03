"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
    }
}

type Status = "idle" | "submitting" | "success" | "error";

export function FreeEnrollModal({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const t = useTranslations("FreeEnroll");
    const locale = useLocale();
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "submitting") return;

        const form = new FormData(e.currentTarget);
        const email = String(form.get("email") ?? "").trim();
        const firstName = String(form.get("firstName") ?? "").trim();
        const honeypot = String(form.get("company") ?? "");

        if (!email || !firstName) return;

        setStatus("submitting");
        setErrorMsg(null);

        try {
            const res = await fetch("/api/free-enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, firstName, locale, honeypot }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setStatus("error");
                setErrorMsg(data?.error ?? t("genericError"));
                return;
            }

            if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "Lead", {
                    content_name: "Free course enrollment",
                    content_category: "course_free",
                });
            }

            setStatus("success");
        } catch {
            setStatus("error");
            setErrorMsg(t("networkError"));
        }
    }

    function handleOpenChange(next: boolean) {
        onOpenChange(next);
        if (!next) {
            setTimeout(() => {
                setStatus("idle");
                setErrorMsg(null);
            }, 300);
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-md">
                {status === "success" ? (
                    <div className="text-center py-6 space-y-4">
                        <div className="mx-auto h-14 w-14 rounded-full bg-green-50 flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl">
                                {t("successTitle")}
                            </DialogTitle>
                            <DialogDescription className="text-center text-base text-slate-600">
                                {t("successBody")}
                            </DialogDescription>
                        </DialogHeader>
                        <Button
                            type="button"
                            onClick={() => handleOpenChange(false)}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
                        >
                            {t("successClose")}
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl">{t("title")}</DialogTitle>
                            <DialogDescription className="text-base text-slate-600">
                                {t("description")}
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="company"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                            />
                            <div className="space-y-1.5">
                                <label htmlFor="enroll-firstName" className="text-sm font-medium text-slate-700">
                                    {t("firstNameLabel")}
                                </label>
                                <input
                                    id="enroll-firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    minLength={1}
                                    maxLength={80}
                                    autoComplete="given-name"
                                    placeholder={t("firstNamePlaceholder")}
                                    className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="enroll-email" className="text-sm font-medium text-slate-700">
                                    {t("emailLabel")}
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input
                                        id="enroll-email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder={t("emailPlaceholder")}
                                        className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                                    />
                                </div>
                            </div>
                            {errorMsg && (
                                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                                    {errorMsg}
                                </p>
                            )}
                            <Button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 text-base"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        {t("submitting")}
                                    </>
                                ) : (
                                    t("submit")
                                )}
                            </Button>
                            <p className="text-xs text-slate-500 text-center">
                                {t("privacyNote")}
                            </p>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
