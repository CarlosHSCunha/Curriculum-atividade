import { I as jsxRuntimeExports } from "./server-Dro0XDpv.js";
import { c as createLucideIcon } from "./router-DIKyKzCV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode);
const items = [{
  icon: GraduationCap,
  title: "Sistemas para Internet",
  subtitle: "Graduação",
  org: "UNICAP / Porto Digital (Embarque Digital)",
  period: "Em andamento"
}, {
  icon: Cloud,
  title: "AWS re/Start",
  subtitle: "Formação em Cloud Computing",
  org: "Rede Cidadã",
  period: "Concluído"
}, {
  icon: Palette,
  title: "Comunicação Visual",
  subtitle: "Curso Técnico",
  org: "ETE Miguel Batista",
  period: "2017 – 2019"
}];
function Academica() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 pt-28 sm:pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs uppercase tracking-[0.25em] mb-3", children: "Trajetória" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl font-semibold text-foreground", children: [
        "Formação ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Acadêmica" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-border ml-3 space-y-8", children: items.map((it) => {
      const Icon = it.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "pl-8 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[18px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-semibold text-foreground", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary uppercase tracking-wider", children: it.period })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: it.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 mt-2", children: it.org })
        ] })
      ] }, it.title);
    }) })
  ] });
}
export {
  Academica as component
};
