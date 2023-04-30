import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HSE Sistemas | Soluções em Gestão para Pequenas e Médias Empresas",
  description:
    "A HSE Sistemas oferece soluções adaptáveis para melhorar a gestão de negócios em diversos segmentos. Descubra nossa plataforma Controle-On e impulsione o desempenho da sua empresa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
