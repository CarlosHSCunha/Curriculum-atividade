import { Github, ExternalLink, Loader2, AlertTriangle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const GITHUB_USER = 'CarlosHSCunha';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
};

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        setRepos(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || 'Erro');
      });
    return () => {
      mounted = false;
    };
  }, []);

  const conceptualProjects = [
    {
      title: 'Evoluo HealthTech',
      summary: 'Plataforma de rastreamento terapêutico para apoiar pacientes e profissionais.',
      role: 'UX/UI Design e Frontend React',
      tags: ['React', 'UI Design', 'HealthTech'],
    },
    {
      title: 'Triagem Flow',
      summary: 'Sistema de classificação hospitalar impulsionado por IA, priorizando atendimento.',
      role: 'Prototipagem no Figma e Fluxo de Usuário',
      tags: ['Figma', 'UX Flow', 'IA'],
    },
    {
      title: 'App de Apoio a Cuidadores',
      summary: 'Solução digital para cuidadores de pacientes com Alzheimer, com rotinas e lembretes.',
      role: 'Pesquisa UX e Design de Interface',
      tags: ['UX Research', 'Mobile', 'Acessibilidade'],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-32 pb-20">
      <header className="mb-12">
        <p className="text-primary text-xs uppercase tracking-[0.25em] mb-3">Trabalhos</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
          <span className="text-primary">Projetos</span>
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Uma combinação de código aberto e estudos de UX/UI: do que está no GitHub aos projetos
          conceituais que demonstram processo e pesquisa.
        </p>
      </header>

      {/* Seção A — Repositórios do GitHub */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <Github className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Repositórios do GitHub</h2>
        </div>

        {error ? (
          <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-medium">Não foi possível carregar os repositórios.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Verifique sua conexão ou se o usuário <code className="text-primary">{GITHUB_USER}</code> existe no GitHub.
              </p>
            </div>
          </div>
        ) : repos === null ? (
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-8 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm">Carregando repositórios do GitHub…</span>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.filter((r) => !r.fork).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">{repo.name}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[2.5rem] line-clamp-2">
                  {repo.description ?? 'Sem descrição.'}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-foreground/80">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {repo.language ?? '—'}
                  </span>
                  <span className="text-muted-foreground">★ {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Seção B — Projetos conceituais */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Projetos UI/UX & Conceituais</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {conceptualProjects.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_0_1px_var(--primary)]">
              <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/[0.04] transition-colors pointer-events-none" />
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-primary">{p.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-secondary/40 text-foreground/90">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
