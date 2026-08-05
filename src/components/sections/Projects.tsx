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
    description:
      "A dated kitchen transformed into a bright open-plan family space with bespoke cabinetry, quartz worktops, and modern lighting.",
    image: "/images/project-kitchen.jpg",
    alt: "Modern open-plan kitchen renovation with white cabinetry, quartz countertops, wooden flooring, and natural light.",
  },
  {
    title: "Contemporary Bathroom Remodel",
    location: "Bray",
    description:
      "A complete bathroom redesign featuring a walk-in shower, premium fixtures, and timeless finishes.",
    image: "/images/project-bathroom.jpg",
    alt: "Luxury bathroom renovation with walk-in shower, stone tiles, floating vanity, and warm lighting.",
  },
  {
    title: "Complete Home Renovation",
    location: "Naas",
    description:
      "A full renovation that modernised every room while preserving the warmth and character of the original home.",
    image: "/images/project-home.jpg",
    alt: "Beautifully renovated modern family home exterior with landscaped garden and contemporary finishes.",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white"
    >
      <div className={cn(layout.container, layout.section)}>
        <SectionHeader
          align="left"
          eyebrow="Projects"
          title="Recent Transformations"
          description="Every renovation is carefully planned, expertly built, and finished with attention to every detail."
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={cn(
                "group overflow-hidden rounded-3xl bg-card transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="space-y-4 p-8">
                <div className="space-y-2">
                  <p className={typography.small}>
                    {project.location}
                  </p>

                  <h3 className={typography.h4}>
                    {project.title}
                  </h3>
                </div>

                <p className={typography.body}>
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