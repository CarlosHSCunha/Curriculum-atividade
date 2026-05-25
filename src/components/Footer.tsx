import { Phone, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Carlos Henrique da Silva Cunha
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/5581991893957"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (81) 9 9189-3957
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-henrique-46728535b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
