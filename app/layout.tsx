import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
