import { Link } from "@/i18n/navigation";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-white border-t border-slate-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
                            <span className="text-xl font-bold tracking-wide text-slate-900 group-hover:text-primary transition-colors duration-300">
                                Evgeniya <span className="text-primary group-hover:text-slate-900 transition-colors duration-300">Pavlova</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            {t("tagline")}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">{t("courseTitle")}</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="#o-kurzu" className="hover:text-primary">{t("aboutCourse")}</Link></li>
                            <li><Link href="#cenik" className="hover:text-primary">{t("pricing")}</Link></li>
                            <li><Link href="#faq" className="hover:text-primary">{t("faq")}</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">{t("contactTitle")}</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>pavlovaevgeniya86@gmail.com</li>
                            <li>+420 608 236 696</li>
                            <li>{t("followSocial")}</li>
                        </ul>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/pavlova.facemassage" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">{t("legalTitle")}</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="#" className="hover:text-primary">{t("terms")}</Link></li>
                            <li><Link href="#" className="hover:text-primary">{t("privacy")}</Link></li>
                            <li><Link href="#" className="hover:text-primary">{t("cookies")}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>{t("copyright", { year: new Date().getFullYear().toString() })}</p>
                    <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-wider text-slate-400">{t("language")}</span>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </footer>
    );
}
