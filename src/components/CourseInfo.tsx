import { CloudLightning, Sparkles, Hand, GraduationCap } from "lucide-react";

export function CourseInfo() {
    const features = [
        {
            icon: <CloudLightning className="h-6 w-6 text-primary" />,
            title: "Stop „unavené tváři“ a ranním otokům",
            desc: "Už nemusíte čekat hodiny, než vaše tvář po probuzení „splaskne“. Naučím vás, jak za pár minut rozproudit lymfu, otevřít pohled a zbavit se váčků pod očima. Vraťte své pleti svěžest hned na začátku dne."
        },
        {
            icon: <Sparkles className="h-6 w-6 text-primary" />,
            title: "Efekt jako po návštěvě kosmetologa za 15 minut",
            desc: "Získejte profesionální výsledek v pohodlí domova. Moje techniky skulpturální a myofasciální masáže zpevňují hluboké svaly, které drží ovál obličeje. Je to přirozená cesta k ostrým konturám a vyhlazení vrásek bez jehel a výplní."
        },
        {
            icon: <Hand className="h-6 w-6 text-primary" />,
            title: "Vaše ruce jsou váš jediný nástroj",
            desc: "Nepotřebujete žádné drahé přístroje, gua-sha kameny ani speciální pomůcky. Své „studio krásy“ máte neustále u sebe. Kurz vás naučí, jak pomocí vlastních rukou dosáhnout hloubkového liftingu kdykoli a kdekoli."
        },
        {
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            title: "Profesionální systém, nikoliv jen náhodná cvičení",
            desc: "Internet je plný bezplatných videí, která však postrádají systém a při nesprávném provedení mohou pleti spíše uškodit. Můj kurz je postaven na hluboké znalosti anatomie a myofasciálních řetězců. Získáte jistotu, že každý váš pohyb směřuje k omlazení, nikoliv k vytahování kůže."
        }
    ];

    return (
        <section id="o-kurzu" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Proč je tento kurz právě pro vás?
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Zapomeňte na drahé přístroje. Vše, co potřebujete, jsou vaše ruce a správná technika.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
