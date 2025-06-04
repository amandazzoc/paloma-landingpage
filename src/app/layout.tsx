import type { Metadata } from "next";
import { Baloo_2, Fredoka } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  weight: ["800"],
})

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Professora Paloma",
  description: "Aulas de Redação, Literatura e Gramática para ENEM, vestibulares e concursos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${baloo2.variable} ${fredoka.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
