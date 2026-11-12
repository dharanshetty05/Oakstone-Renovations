
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const projects = [
  {
    number: "01",
    title: "Modern Kitchen Renovation",
    location: "Dublin",
    category: "Kitchen",
    description:
      "A dated kitchen transformed into a bright open-plan family space with bespoke cabinetry, quartz worktops, and modern lighting.",
    image:
      "https://images.unsplash.com/photo-1721614465872-f59fb6feb0f3?q=80&w=1800&auto=format&fit=crop",
    alt: "Renovated open-plan kitchen with white cabinetry, quartz countertops, and wood flooring.",
  },
  {
    number: "02",
    title: "Contemporary Bathroom Remodel",
    location: "Bray",
    category: "Bathroom",
    description:
      "A complete bathroom redesign featuring a walk-in shower, premium fixtures, and timeless finishes.",
    image:
      "https://images.unsplash.com/photo-1721824320926-3d4f13d9b5e8?q=80&w=1800&auto=format&fit=crop",
    alt: "Renovated bathroom with walk-in shower, freestanding bath, and modern tiling.",
  },
  {
    number: "03",
    title: "Complete Home Renovation",
    location: "Naas",
    category: "Full Renovation",
    description:
      "A full renovation that modernised every room while preserving the warmth and character of the original home.",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1800&auto=format&fit=crop",
    alt: "Renovated family home exterior with fresh render, landscaping, and a new front door.",
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: easing,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  const imageHover = shouldReduceMotion
    ? ""
    : "transition-transform duration-1000 ease-out group-hover:scale-[1.035]";

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-[#F4F1E8]"
    >
      <div className={cn(layout.container, layout.section)}>

        {/* SECTION INTRODUCTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealVariants}
          className="mb-16 flex flex-col justify-between gap-5 border-b border-[#193B2D]/10 pb-8 md:mb-24 md:flex-row md:items-end md:gap-12"
        >
          <div className="max-w-2xl">
            <h2
              id="projects-heading"
              className={cn(
                typography.h2,
                "max-w-xl text-[#242C26]"
              )}
            >
              A closer look at
              <br />
              <span className="text-[#193B2D]">
                what we create.
              </span>
            </h2>
          </div>

          <p
            className={cn(
              typography.sectionDescription,
              "max-w-sm text-[#686D64] md:pb-1"
            )}
          >
            Every transformation has a story.
            Explore a selection of spaces shaped
            around the way people live.
          </p>
        </motion.div>

        {/* STICKY PROJECT STACK */}
        <div className="relative">

          {projects.map((project, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                className="sticky group"
                style={{
                  top: `${88 + index * 16}px`,
                  zIndex: index + 1,
                }}
              >
                {/* PROJECT CARD */}
                <div
                  className={cn(
                    "rounded-[24px] border border-[#E7E1D5]",
                    "bg-[#FBF9F3]",
                    "p-4 sm:rounded-[30px] sm:p-6",
                    "lg:rounded-[36px] lg:p-9",
                    "shadow-[0_12px_35px_rgba(36,44,38,0.055)]"
                  )}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    variants={cardVariants}
                    className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-12"
                  >

                    {/* PROJECT IMAGE */}
                    <motion.div
                      variants={revealVariants}
                      className={cn(
                        "relative lg:col-span-7",
                        reversed && "lg:order-2"
                      )}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#E7E2D7] sm:rounded-[22px] lg:rounded-[26px]">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 62vw"
                          className={cn(
                            "object-cover",
                            imageHover
                          )}
                        />

                        {/* IMAGE INDEX */}
                        <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                          <span className="text-xs font-semibold tracking-[0.16em] text-white">
                            {project.number}
                          </span>

                          <span className="h-px w-9 bg-white/80" />
                        </div>
                      </div>
                    </motion.div>

                    {/* PROJECT DETAILS */}
                    <motion.div
                      variants={revealVariants}
                      className={cn(
                        "flex flex-col justify-center lg:col-span-5 lg:px-3 lg:py-8",
                        reversed && "lg:order-1"
                      )}
                    >

                      {/* PROJECT METADATA */}
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="h-px w-8 bg-[#D6A18A]" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#193B2D]">
                          {project.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#B9B4A9]" />

                        <span className="text-sm text-[#686D64]">
                          {project.location}
                        </span>
                      </div>

                      {/* PROJECT TITLE */}
                      <h3 className="max-w-lg text-[clamp(2rem,3.3vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-[#242C26]">
                        {project.title}
                      </h3>

                      {/* PROJECT DESCRIPTION */}
                      <p className="mt-5 max-w-md text-[15px] leading-[1.9] text-[#686D64]">
                        {project.description}
                      </p>

                      {/* PROJECT INDEX */}
                      <div className="mt-8 flex items-center gap-4">
                        <span className="text-xs font-semibold tracking-[0.12em] text-[#193B2D]">
                          {project.number}
                        </span>

                        <span className="h-px w-12 bg-[#D6A18A]" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#686D64]">
                          Selected work
                        </span>
                      </div>

                    </motion.div>
                  </motion.div>

                  {/* CARD FOOTER */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#193B2D]/10 pt-4 sm:mt-8 sm:pt-5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#686D64]">
                      Oakstone Renovations
                    </span>

                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#193B2D]">
                      {project.number} / 03
                    </span>
                  </div>
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
