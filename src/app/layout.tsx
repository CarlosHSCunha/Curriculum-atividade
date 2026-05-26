import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/styles.css";

export const metadata: Metadata = {
  title: "Carlos Henrique — Fullstack Developer & UX/UI",
  description:
    "Portfólio de Carlos Henrique da Silva Cunha, Desenvolvedor Fullstack e Estagiário em UX/UI Design.",
  authors: [{ name: "Carlos Henrique" }],
  openGraph: {
    title: "Carlos Henrique — Fullstack & UX/UI",
    description: "Interfaces centradas no usuário, do Figma ao código.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
