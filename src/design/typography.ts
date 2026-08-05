// src/design/typography.ts

export const typography = {
  eyebrow:
    "text-sm font-semibold uppercase tracking-[0.12em] text-primary",

  h1:
    "font-[family-name:var(--font-manrope)] text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-text-primary",

  h2:
    "font-[family-name:var(--font-manrope)] text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight text-text-primary",

  h3:
    "font-[family-name:var(--font-manrope)] text-2xl md:text-3xl font-semibold leading-snug text-text-primary",

  h4:
    "font-[family-name:var(--font-manrope)] text-xl md:text-2xl font-semibold text-text-primary",

  bodyLg:
    "font-[family-name:var(--font-inter)] text-lg md:text-xl leading-8 text-text-secondary",

  body:
    "font-[family-name:var(--font-inter)] text-base md:text-lg leading-8 text-text-secondary",

  small:
    "font-[family-name:var(--font-inter)] text-sm leading-6 text-text-muted",

  button:
    "font-[family-name:var(--font-inter)] text-base font-semibold",

  sectionDescription:
    "max-w-[700px] font-[family-name:var(--font-inter)] text-base md:text-lg leading-8 text-text-secondary",
} as const;