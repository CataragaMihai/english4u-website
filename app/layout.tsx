import type { Metadata } from "next";
import { Nunito, Nunito_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "English4U — Bridging the Language Gap in Moldova",
  description:
    "English4U deploys trained volunteer educators into rural Moldovan schools — free of charge, grounded in evidence, built for impact.",
  keywords: [
    "English4U",
    "Moldova",
    "NGO",
    "volunteer",
    "English education",
    "rural schools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${nunitoSans.variable} ${sourceSerif.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
