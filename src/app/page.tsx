import { Download, Mail } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/assets/carlos-profile.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carlos Henrique — Fullstack Developer & UX/UI",
  description: "Portfólio de Carlos Henrique da Silva Cunha.",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-32 pb-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div>
        <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">
          Portfólio · Carlos Henrique
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground">
          Carlos Henrique
          <br />
          <span className="text-primary">da Silva Cunha</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
          Desenvolvedor Fullstack <span className="text-foreground">&amp;</span>{" "}
          UX/UI Design
        </p>
        <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
          Olá! Sou apaixonado por construir produtos digitais que unem código
          limpo e design intencional. Meu foco está em criar interfaces
          centradas no usuário, acessíveis e que entreguem valor real do
          primeiro clique ao último.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/Carlos-Henrique-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            Baixar CV
          </a>
          <a
            href="https://wa.me/5581991893957"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            Entrar em Contato
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end order-first md:order-last">
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-2xl" />
          <Image
            src={profilePhoto}
            alt="Carlos Henrique da Silva Cunha"
            className="relative rounded-2xl border border-border w-60 sm:w-72 md:w-80 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
