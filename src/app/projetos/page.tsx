import { ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";

type GithubRepo = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  homepage?: string;
  language?: string;
  stargazers_count: number;
};

export const metadata: Metadata = {
  title: "Projetos — Carlos Henrique",
  description: "Projetos desenvolvidos por Carlos Henrique da Silva Cunha.",
};

async function fetchGithubRepos() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://127.0.0.1:3000");
  const response = await fetch(`${baseUrl}/api/github-repos`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Falha ao carregar os repositórios do GitHub.");
  }

  return response.json() as Promise<GithubRepo[]>;
}

export default async function Projetos() {
  let repos: GithubRepo[] = [];
  let errorMessage: string | null = null;

  try {
    repos = await fetchGithubRepos();
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Não foi possível carregar seus repositórios do GitHub no momento.";
  }

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
          Aqui estão meus repositórios públicos mais recentes no GitHub.
        </p>
      </header>

      {errorMessage ? (
        <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
          {errorMessage}
        </div>
      ) : repos.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
          Nenhum repositÃ³rio encontrado.
        </div>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-5">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/60 transition-colors"
            >
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {repo.name}
                </h2>
                {repo.description && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {repo.description}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="rounded-full border border-border bg-secondary/40 px-3 py-1">
                      {repo.language}
                    </span>
                  )}
                  <span className="rounded-full border border-border bg-secondary/40 px-3 py-1">
                    {repo.stargazers_count} estrelas
                  </span>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
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
      )}
    </section>
  );
}
