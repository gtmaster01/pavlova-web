import { CheckCircle2, CloudLightning, Clock, PlayCircle } from "lucide-react";

export function CourseInfo() {
    const features = [
        {
            icon: <CloudLightning className="h-6 w-6 text-primary" />,
            title: "Konec ranním otokům",
            desc: "Efektivní lymfatická masáž odstraní přebytečnou tekutinu z obličeje."
        },
        {
            icon: <Clock className="h-6 w-6 text-primary" />,
            title: "Jen 5-10 minut denně",
            desc: "Rychlá a účinná rutina, kterou snadno zařadíte do svého rána."
        },
        {
            icon: <PlayCircle className="h-6 w-6 text-primary" />,
            title: "Video lekce krok za krokem",
            desc: "Detailní návody, podle kterých se snadno naučíte správnou techniku."
        },
        {
            icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
            title: "Okamžitý efekt",
            desc: "Viditelné výsledky v podobě rozjasněné a vypnuté pleti ihned po masáži."
        }
    ];

    return (
        <section id="o-kurzu" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Proč je tento kurz pro vás?
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
