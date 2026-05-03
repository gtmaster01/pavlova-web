import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { CourseInfo } from "@/components/CourseInfo";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <AboutMe />
                <CourseInfo />
                <Testimonials />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
