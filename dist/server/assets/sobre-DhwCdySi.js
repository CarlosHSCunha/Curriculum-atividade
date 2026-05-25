import { I as jsxRuntimeExports } from "./server-Dro0XDpv.js";
import { p as profilePhoto } from "./carlos-profile-xA0yMN7I.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const stack = [{
  name: "Next.js / TanStack Start",
  why: "Roteamento moderno baseado em arquivos, SSR e ótima DX para construir sites rápidos e SEO-friendly."
}, {
  name: "React",
  why: "Componentização declarativa que torna a UI previsível, reutilizável e fácil de evoluir."
}, {
  name: "Tailwind CSS",
  why: "Design system consistente com utilitários, permitindo prototipar e refinar a interface com agilidade."
}, {
  name: "Fetch API",
  why: "Consumo nativo de APIs sem dependências extras — leve, padrão da web e ideal para integrações simples."
}];
function Sobre() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs uppercase tracking-[0.25em] mb-3", children: "Sobre" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl font-semibold text-foreground", children: [
        "Sobre ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "mim" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profilePhoto, alt: "Carlos Henrique", className: "rounded-xl border border-border w-48 md:w-full mx-auto md:mx-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-muted-foreground leading-relaxed text-[15px] sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Sou um profissional em desenvolvimento contínuo, sempre em busca de aprender e aplicar novas tecnologias. Tenho interesse particular em ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "computação em nuvem" }),
          " ",
          "(com foco em ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "AWS" }),
          ") e em todo o ciclo de criação de produtos digitais — do ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Figma ao código" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Acredito que boas experiências nascem da combinação entre código bem escrito e design centrado no usuário. Por isso transito entre o front-end, o back-end e a prototipagem, buscando entregar produtos coerentes em todas as camadas." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-semibold text-foreground", children: [
        "Stack deste ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "site" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "As tecnologias que escolhi para construir este portfólio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-4", children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-medium", children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.why })
      ] }, s.name)) })
    ] })
  ] });
}
export {
  Sobre as component
};
