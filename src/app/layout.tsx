import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yellowman — Edição Cinematográfica para Reels & Shorts",
  description: "Recupere até 15 horas do seu mês com vídeos editados em 72h. Qualidade de cinema, sem tocar em um app de edição.",
  icons: {
    icon: "/25.png",
    apple: "/25.png",
  },
};

/*
 * Rollestix é carregado via @font-face manual em globals.css
 * com unicode-range restrito ao ASCII (sem acentos).
 * Nunito cobre o Latin Extended (ç, ã, ó, á, ê...) como complemento.
 * O browser costura as duas automaticamente — comportamento invisível.
 */

/*
 * Nunito Light (300) como complemento para acentos.
 * Ao carregar APENAS o peso 300, qualquer requisição de peso maior
 * (400, 700...) cai para o 300 disponível — visualmente mais fino,
 * mais próximo do traço da Rollestix Regular.
 */
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

/** Editorial serif — acentos decorativos, italic */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

/** Labels, UI, botões */
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

/** Body text */
const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${nunito.variable} ${cormorant.variable} ${barlowCondensed.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
