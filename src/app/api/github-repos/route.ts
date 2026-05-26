import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "CarlosHSCunha";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "Next.js",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const githubUrl = `https://api.github.com/users/${encodeURIComponent(
    GITHUB_USERNAME,
  )}/repos?sort=updated&per_page=12&type=owner`;

  const response = await fetch(githubUrl, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        error: true,
        message: "Não foi possível buscar os repositórios no GitHub.",
        status: response.status,
      },
      { status: response.status },
    );
  }

  type GithubRepoRaw = {
    id: number;
    name: string;
    description?: string;
    html_url: string;
    homepage?: string;
    language?: string;
    stargazers_count: number;
  };

  const repos = (await response.json()) as GithubRepoRaw[];
  const filtered = Array.isArray(repos)
    ? repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
      }))
    : [];

  return NextResponse.json(filtered);
}
