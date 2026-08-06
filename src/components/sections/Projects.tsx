"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Modern Kitchen Renovation",
    location: "Dublin",
    category: "Kitchen",
    description:
      "A dated kitchen transformed into a bright open-plan family space with bespoke cabinetry, quartz worktops, and modern lighting.",
    image:
      "https://images.unsplash.com/photo-1721614465872-f59fb6feb0f3?q=80&w=1400&auto=format&fit=crop",
    alt: "Renovated open-plan kitchen with white cabinetry, quartz countertops, and wood flooring.",
  },
  {
    title: "Contemporary Bathroom Remodel",
    location: "Bray",
    category: "Bathroom",
    description:
      "A complete bathroom redesign featuring a walk-in shower, premium fixtures, and timeless finishes.",
    image:
      "https://images.unsplash.com/photo-1721824320926-3d4f13d9b5e8?q=80&w=1400&auto=format&fit=crop",
    alt: "Renovated bathroom with walk-in shower, freestanding bath, and modern tiling.",
  },
  {
    title: "Complete Home Renovation",
    location: "Naas",
    category: "Full Renovation",
    description:
      "A full renovation that modernised every room while preserving the warmth and character of the original home.",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1400&auto=format&fit=crop",
    alt: "Renovated family home exterior with fresh render, landscaping, and a new front door.",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-white-50">
      <div className={cn(layout.container, layout.section)}>
        <div className="max-w-2xl mb-12">
          <h2 className={typography.h2}>
            Recent <span className="text-primary">Transformations</span>
          </h2>

          <p className={cn(typography.sectionDescription, "mt-4")}>
            Every renovation is carefully planned, expertly built, and finished with attention to every detail.
          </p>
      </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group flex h-full flex-col">
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface",
                  "ring-1 ring-inset ring-border transition-shadow duration-300",
                  "group-hover:shadow-lg group-hover:shadow-text-primary/10"
                )}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-105"
                />
              </div>

              <div className="mt-6 space-y-3 flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                    {project.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden="true" />
                  <span className={typography.small}>{project.location}</span>
                </div>

                <h3 className={typography.h4}>{project.title}</h3>

                <p className={cn(typography.small, "min-h-[84px] leading-7")}>
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}