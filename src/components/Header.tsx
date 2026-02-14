"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
    const navLinks = [
        { name: "O mně", href: "#o-mne" },
        { name: "O kurzu", href: "#o-kurzu" },
        { name: "Ceník", href: "#cenik" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
                >
                    <span className="font-serif text-xl font-bold tracking-wide text-slate-900 group-hover:text-primary transition-colors duration-300">
                        Evgeniya <span className="text-primary group-hover:text-slate-900 transition-colors duration-300">Pavlova</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-slate-600 hover:text-primary transition-colors group py-2"
                        >
                            {link.name}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="#cenik">
                        <Button className="bg-primary hover:bg-primary/90 text-slate-900 rounded-full font-medium px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                            Chci začít hned
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col pt-10 px-6">
                        {/* Mobile Logo */}
                        <div className="mb-8">
                            <span className="font-serif text-2xl font-bold tracking-wide text-slate-900">
                                Evgeniya <span className="text-primary">Pavlova</span>
                            </span>
                        </div>

                        <div className="flex-1 flex flex-col gap-8">
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-xl font-medium text-slate-600 hover:text-primary transition-colors border-b border-transparent hover:border-slate-100 pb-2"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="flex flex-col gap-4 mt-auto mb-8">
                                <Link href="#cenik" className="w-full">
                                    <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-slate-900 font-medium transition-all duration-300 shadow-md">
                                        Chci začít hned
                                    </Button>
                                </Link>

                                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                                    <p className="text-sm text-slate-400 mb-2">Sledujte nás</p>
                                    <div className="flex justify-center gap-4">
                                        {/* Social placeholders - functionality to be added/linked if needed */}
                                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">Ins</div>
                                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">Fb</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
