import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['300', '400', '700', '900'] });

export const metadata: Metadata = {
  title: "Estratégia | Flavia Tramontin",
  description: "Págin dediada à estratégia de marketing da Flavia Tramontin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
