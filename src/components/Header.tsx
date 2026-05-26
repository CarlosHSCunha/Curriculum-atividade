import Link from "next/link";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/academica", label: "Acadêmica" },
  { to: "/profissional", label: "Profissional" },
  { to: "/projetos", label: "Projetos" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Carlos Henrique<span className="text-primary">.</span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                href={l.to}
                className="px-3 py-2 text-sm text-muted-foreground rounded-md transition-colors hover:text-primary hover:bg-secondary/50"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
