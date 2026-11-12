
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const principles = [
  {
    number: "01",
    category: "PLANNING",
    title: "Considered from the beginning.",
    description:
      "Understanding your space, priorities and expectations before work begins. Every good renovation starts with a clear understanding of what matters to you.",
  },
  {
    number: "02",
    category: "CRAFTSMANSHIP",
    title: "Details make the difference.",
    description:
      "From material choices to the finishing touches, we believe thoughtful decisions and attention to detail shape the quality of the final space.",
  },
  {
    number: "03",
    category: "COMMUNICATION",
    title: "Always know where things stand.",
    description:
      "Clear conversations and considered planning matter. We value keeping you informed and involved throughout your renovation.",
  },
  {
    number: "04",
    category: "CARE",
    title: "Respect for the home you live in.",
    description:
      "Renovating a home is personal. Every space deserves consideration, respect and an approach that puts the people living in it first.",
  },
];

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="overflow-hidden bg-[#F4F1E8] text-[#242C26]"
    >
      <div className={cn(layout.container, layout.section)}>

        {/* SECTION INTRODUCTION */}

        <div className="grid grid-cols-1 items-end gap-7 border-b border-[#E7E1D5] pb-10 md:grid-cols-[1.3fr_0.7fr] md:gap-12 lg:pb-14">

          {/* Heading */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D6A18A]" />

              <span className="font-[family-name:var(--font-manrope)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686D64]">
                The Oakstone Approach
              </span>
            </div>

            <h2
              id="why-choose-us-heading"
              className={cn(
                typography.h2,
                "max-w-[700px] leading-[1.12] tracking-[-0.045em]"
              )}
            >
              Good renovations are about{" "}
              <span className="text-[#193B2D]">
                more than what you see.
              </span>
            </h2>
          </motion.div>

          {/* Supporting copy */}

          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
            className={cn(
              typography.sectionDescription,
              "max-w-[430px] leading-[1.9] text-[#686D64] md:justify-self-end"
            )}
          >
            The best transformations are shaped by the
            decisions behind them. Thoughtful planning,
            considered craftsmanship and genuine care
            make all the difference to the space you call home.
          </motion.p>
        </div>

        {/* RENOVATION PRINCIPLES */}

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={shouldReduceMotion ? undefined : listVariants}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              variants={shouldReduceMotion ? undefined : revealVariants}
              className={cn(
                "group relative border-b border-[#E7E1D5] py-8 sm:py-10 lg:py-12",
                index % 2 === 0 &&
                  "md:border-r md:border-r-[#E7E1D5] md:pr-10 lg:pr-16",
                index % 2 !== 0 &&
                  "md:pl-10 lg:pl-16"
              )}
            >
              {/* Number and category */}

              <div className="mb-5 flex items-center gap-3">
                <span className="font-[family-name:var(--font-manrope)] text-[11px] font-medium tracking-[0.12em] text-[#C18D76]">
                  {principle.number}
                </span>

                <span className="h-px w-5 bg-[#D6A18A]/70" />

                <span className="font-[family-name:var(--font-manrope)] text-[9px] font-semibold tracking-[0.17em] text-[#686D64]">
                  {principle.category}
                </span>
              </div>

              {/* Title */}

              <h3 className="max-w-[430px] font-[family-name:var(--font-manrope)] text-[22px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#242C26] transition-colors duration-300 group-hover:text-[#193B2D] sm:text-[25px] lg:text-[28px]">
                {principle.title}
              </h3>

              {/* Description */}

              <p className="mt-4 max-w-[440px] font-[family-name:var(--font-manrope)] text-[13px] leading-[1.9] text-[#686D64] sm:text-sm">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
