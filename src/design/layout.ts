// src/design/layout.ts

export const layout = {
  // ----------------------------------------------------------
  // Containers
  // ----------------------------------------------------------

  container: "mx-auto w-full max-w-[1280px] px-5 md:px-8 xl:px-10",

  containerNarrow: "mx-auto w-full max-w-[720px] px-5 md:px-8",

  containerMedium: "mx-auto w-full max-w-[960px] px-5 md:px-8",

  // ----------------------------------------------------------
  // Sections
  // ----------------------------------------------------------

  section: "py-20 md:py-24 xl:py-30",

  sectionCompact: "py-16 md:py-20",

  sectionLarge: "py-24 md:py-32",

  // ----------------------------------------------------------
  // Content Width
  // ----------------------------------------------------------

  content: "max-w-[700px]",

  contentWide: "max-w-[900px]",

  // ----------------------------------------------------------
  // Grids
  // ----------------------------------------------------------

  grid2: "grid gap-12 lg:grid-cols-2",

  grid3: "grid gap-8 md:grid-cols-2 xl:grid-cols-3",

  grid4: "grid gap-8 md:grid-cols-2 xl:grid-cols-4",

  // ----------------------------------------------------------
  // Common Gaps
  // ----------------------------------------------------------

  gapSection: "space-y-14",

  gapContent: "space-y-6",

  gapCards: "gap-8",
} as const;