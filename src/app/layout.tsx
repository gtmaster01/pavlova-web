import type { Metadata } from "next";
import { Inter, Playfair_Display, Sacramento } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evgeniya Pavlova - Samomasáž ráno bez otoků",
  description: "Zbavte se otoků a získejte svěží vzhled za pár minut s unikátním video kurzem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${sacramento.variable} antialiased font-sans bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
