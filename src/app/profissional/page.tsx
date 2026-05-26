import { Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência Profissional — Carlos Henrique",
};

const techs = ["React.js", "Python", "HTML5", "CSS3", "JavaScript", "Figma"];

export default function Profissional() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-28 sm:pt-32 pb-20">
      <header className="mb-12">
        <p className="text-primary text-xs uppercase tracking-[0.25em] mb-3">
          Carreira
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
          Experiência <span className="text-primary">Profissional</span>
        </h1>
      </header>

      <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/60 transition-colors">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                Estagiário em Desenvolvimento Fullstack & UX/UI Design
              </h2>
              <span className="text-xs text-primary uppercase tracking-wider">
                Atual
              </span>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Atuo de ponta a ponta no ciclo de produto digital: da concepção
              visual e prototipagem no Figma à implementação de interfaces e
              integrações no front e back-end.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <li className="flex gap-2">
                <span className="text-primary">›</span> Prototipagem de telas e
                fluxos no Figma, com foco em usabilidade.
              </li>
              <li className="flex gap-2">
                <span className="text-primary">›</span> Desenvolvimento de
                interfaces responsivas com React.js, HTML5, CSS3 e JavaScript.
              </li>
              <li className="flex gap-2">
                <span className="text-primary">›</span> Implementação de rotinas
                e integrações em Python no back-end.
              </li>
              <li className="flex gap-2">
                <span className="text-primary">›</span> Colaboração com times
                multidisciplinares em ciclos ágeis de entrega.
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
