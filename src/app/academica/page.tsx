import { GraduationCap, Cloud, Palette } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formação Acadêmica — Carlos Henrique",
};

const items = [
  {
    icon: GraduationCap,
    title: "Sistemas para Internet",
    subtitle: "Graduação",
    org: "UNICAP / Porto Digital (Embarque Digital)",
    period: "Em andamento",
  },
  {
    icon: Cloud,
    title: "AWS re/Start",
    subtitle: "Formação em Cloud Computing",
    org: "Rede Cidadã",
    period: "Concluído",
  },
  {
    icon: Palette,
    title: "Comunicação Visual",
    subtitle: "Curso Técnico",
    org: "ETE Miguel Batista",
    period: "2017 – 2019",
  },
];

export default function Academica() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-28 sm:pt-32 pb-20">
      <header className="mb-12">
        <p className="text-primary text-xs uppercase tracking-[0.25em] mb-3">
          Trajetória
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
          Formação <span className="text-primary">Acadêmica</span>
        </h1>
      </header>

      <ol className="relative border-l border-border ml-3 space-y-8">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <li key={it.title} className="pl-8 relative">
              <span className="absolute -left-[18px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                <Icon className="h-4 w-4" />
              </span>
              <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    {it.title}
                  </h2>
                  <span className="text-xs text-primary uppercase tracking-wider">
                    {it.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {it.subtitle}
                </p>
                <p className="text-sm text-foreground/80 mt-2">{it.org}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
