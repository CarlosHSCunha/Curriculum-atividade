import { ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos — Carlos Henrique",
  description: "Projetos desenvolvidos por Carlos Henrique da Silva Cunha.",
};

const projetos = [
  {
    title: "Portfólio Pessoal",
    description:
      "Site de portfólio desenvolvido com Next.js, React e Tailwind CSS. Apresenta minha trajetória acadêmica, experiência profissional e projetos.",
    techs: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/CarlosHSCunha/Curriculum-atividade",
    deploy: "",
  },
];

export default function Projetos() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-20">
      <header className="mb-12">
        <p className="text-primary text-xs uppercase tracking-[0.25em] mb-3">
          Trabalhos
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
          Meus <span className="text-primary">Projetos</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Coisas que construí ao longo da minha jornada.
        </p>
      </header>

      <ul className="grid sm:grid-cols-2 gap-5">
        {projetos.map((p) => (
          <li
            key={p.title}
            className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/60 transition-colors"
          >
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/40 text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {p.deploy && (
                <a
                  href={p.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Ver site
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
