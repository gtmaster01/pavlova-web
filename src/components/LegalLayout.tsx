import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export type LegalSection = {
    heading?: string;
    paragraphs?: string[];
    list?: string[];
};

export type LegalContent = {
    title: string;
    intro?: string[];
    lastUpdated: string;
    sections: LegalSection[];
};

export function LegalLayout({ content }: { content: LegalContent }) {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                    {content.title}
                </h1>
                <p className="text-sm text-slate-500 mb-10">{content.lastUpdated}</p>

                {content.intro?.map((p, i) => (
                    <p key={`intro-${i}`} className="text-slate-700 leading-relaxed mb-4">
                        {p}
                    </p>
                ))}

                <div className="space-y-8 mt-8">
                    {content.sections.map((section, i) => (
                        <section key={i}>
                            {section.heading && (
                                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                                    {section.heading}
                                </h2>
                            )}
                            {section.paragraphs?.map((p, j) => (
                                <p
                                    key={j}
                                    className="text-slate-700 leading-relaxed mb-3"
                                >
                                    {p}
                                </p>
                            ))}
                            {section.list && (
                                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                                    {section.list.map((item, k) => (
                                        <li key={k}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
