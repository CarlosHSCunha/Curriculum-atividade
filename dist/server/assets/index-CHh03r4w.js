import { I as jsxRuntimeExports } from "./server-Dro0XDpv.js";
import { p as profilePhoto } from "./carlos-profile-xA0yMN7I.js";
import { c as createLucideIcon } from "./router-DIKyKzCV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pt-28 sm:pt-32 pb-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs sm:text-sm uppercase tracking-[0.25em] mb-4", children: "Portfólio · Carlos Henrique" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground", children: [
        "Carlos Henrique",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "da Silva Cunha" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-lg sm:text-xl text-muted-foreground", children: [
        "Desenvolvedor Fullstack ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "&" }),
        " UX/UI Design"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground max-w-md leading-relaxed", children: "Olá! Sou apaixonado por construir produtos digitais que unem código limpo e design intencional. Meu foco está em criar interfaces centradas no usuário, acessíveis e que entreguem valor real do primeiro clique ao último." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Carlos-Henrique-CV.pdf", download: true, className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          "Baixar CV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/5581991893957", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          "Entrar em Contato"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center md:justify-end order-first md:order-last", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-2xl bg-primary/20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profilePhoto, alt: "Carlos Henrique da Silva Cunha", className: "relative rounded-2xl border border-border w-60 sm:w-72 md:w-80 object-cover shadow-2xl" })
    ] }) })
  ] });
}
export {
  Index as component
};
