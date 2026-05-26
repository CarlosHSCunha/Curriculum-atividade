import Image from "next/image";
import profilePhoto from "@/assets/carlos-profile.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Carlos Henrique",
};

const stack = [
  {
    name: "Next.js",
    why: "Roteamento moderno baseado em arquivos, SSR e ótima DX para construir sites rápidos e SEO-friendly.",
  },
  {
    name: "React",
    why: "Componentização declarativa que torna a UI previsível, reutilizável e fácil de evoluir.",
  },
  {
    name: "Tailwind CSS",
    why: "Design system consistente com utilitários, permitindo prototipar e refinar a interface com agilidade.",
  },
  {
    name: "Fetch API",
    why: "Consumo nativo de APIs sem dependências extras — leve, padrão da web e ideal para integrações simples.",
  },
];

export default function Sobre() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-20">
      <header className="mb-12">
        <p className="text-primary text-xs uppercase tracking-[0.25em] mb-3">
          Sobre
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
          Sobre <span className="text-primary">mim</span>
        </h1>
      </header>

      <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
        <Image
          src={profilePhoto}
          alt="Carlos Henrique"
          className="rounded-xl border border-border w-48 md:w-full mx-auto md:mx-0"
        />
        <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
          <p>
            Sou um profissional em desenvolvimento contínuo, sempre em busca de
            aprender e aplicar novas tecnologias. Tenho interesse particular em{" "}
            <span className="text-foreground">computação em nuvem</span> (com
            foco em <span className="text-primary">AWS</span>) e em todo o ciclo
            de criação de produtos digitais — do{" "}
            <span className="text-foreground">Figma ao código</span>.
          </p>
          <p>
            Acredito que boas experiências nascem da combinação entre código bem
            escrito e design centrado no usuário. Por isso transito entre o
            front-end, o back-end e a prototipagem, buscando entregar produtos
            coerentes em todas as camadas.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          Stack deste <span className="text-primary">site</span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          As tecnologias que escolhi para construir este portfólio.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          {stack.map((s) => (
            <li
              key={s.name}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition-colors"
            >
              <h3 className="text-foreground font-medium">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.why}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
