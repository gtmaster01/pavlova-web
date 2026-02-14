import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
                            <span className="font-serif text-xl font-bold tracking-wide text-slate-900 group-hover:text-primary transition-colors duration-300">
                                Evgeniya <span className="text-primary group-hover:text-slate-900 transition-colors duration-300">Pavlova</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Váš průvodce světem přirozené krásy a omlazení. Naučte se naslouchat své pleti.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-semibold text-slate-900">Kurz</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="#o-kurzu" className="hover:text-primary">O kurzu</Link></li>
                            <li><Link href="#cenik" className="hover:text-primary">Ceník</Link></li>
                            <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-primary">Přihlášení pro členy</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-semibold text-slate-900">Kontakt</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>info@pavlova.eu</li>
                            <li>+420 123 456 789</li>
                            <li>Sledujte nás na sociálních sítích:</li>
                        </ul>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/pavlova.facemassage" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-semibold text-slate-900">Legislativa</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="#" className="hover:text-primary">Obchodní podmínky</Link></li>
                            <li><Link href="#" className="hover:text-primary">Ochrana osobních údajů</Link></li>
                            <li><Link href="#" className="hover:text-primary">Cookies</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Evgeniya Pavlova. Všechna práva vyhrazena.</p>
                </div>
            </div>
        </footer>
    );
}
