
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const principles = [
  {
    number: "01",
    title: "A space that works as well as it looks.",
    description:
      "A beautiful room still needs to work for everyday life. The layout, storage and practical details should make sense for the people who call it home.",
  },
  {
    number: "02",
    title: "Every choice has a purpose.",
    description:
      "Materials, proportions, lighting and finishes all shape the result. Each decision should work together to create a space that feels considered.",
  },
  {
    number: "03",
    title: "Clear conversations, throughout.",
    description:
      "Renovations involve decisions at every stage. Straightforward communication helps you understand your options, the work involved and what comes next.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const introVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = shouldReduceMotion ?? false;

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="overflow-hidden bg-[#F4F1E8] text-[#242C26]"
    >
      <div className={cn(layout.container, layout.section)}>

        {/* INTRODUCTION */}

        <div className="grid grid-cols-1 items-end gap-6 border-b border-[#E7E1D5] pb-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:pb-14">

          {/* Main heading */}

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={introVariants}
          >
            <h2
              id="why-choose-us-heading"
              className={cn(
                typography.h2,
                "max-w-[760px] leading-[1.12] tracking-[-0.045em]"
              )}
            >
              A renovation should feel right{" "}
              <span className="text-[#193B2D]">
                long after the work is done.
              </span>
            </h2>
          </motion.div>

          {/* Supporting description */}

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={introVariants}
            transition={{
              delay: reduceMotion ? 0 : 0.16,
            }}
            className={cn(
              typography.sectionDescription,
              "w-full max-w-[500px] leading-[1.85] text-[#686D64] md:justify-self-end"
            )}
          >
            It takes more than a beautiful finish.
            Thoughtful decisions, quality craftsmanship
            and clear communication shape the entire experience.
          </motion.p>
        </div>

        {/* THREE PRINCIPLES */}

        <div className="flex flex-col">

          {principles.map((principle) => (
            <motion.article
              key={principle.number}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              variants={reduceMotion ? undefined : rowVariants}
              className={cn(
                "group relative grid grid-cols-[42px_minmax(0,1fr)] gap-x-5 gap-y-3 border-b border-transparent px-3 py-8 transition-colors duration-500 hover:bg-[#FBF9F3] sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-x-7 sm:py-10 lg:grid-cols-[72px_minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-x-10 lg:py-12",
                "-mx-3 sm:-mx-3"
              )}
            >

              {/* NUMBER */}

              <motion.span
                variants={reduceMotion ? undefined : childVariants}
                className="row-span-2 pt-1 font-[family-name:var(--font-manrope)] text-[12px] font-medium tracking-[0.1em] text-[#C18D76] lg:row-span-1 lg:self-start lg:pt-2"
              >
                {principle.number}
              </motion.span>

              {/* TITLE */}

              <motion.h3
                variants={reduceMotion ? undefined : childVariants}
                className="max-w-[500px] font-[family-name:var(--font-manrope)] text-[21px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#242C26] transition-colors duration-500 group-hover:text-[#193B2D] sm:text-[24px] lg:text-[26px]"
              >
                {principle.title}
              </motion.h3>

              {/* DESCRIPTION */}

              <motion.p
                variants={reduceMotion ? undefined : childVariants}
                className="max-w-[490px] font-[family-name:var(--font-manrope)] text-[13px] leading-[1.9] text-[#686D64] sm:text-sm lg:justify-self-end"
              >
                {principle.description}
              </motion.p>

              {/* ANIMATED DIVIDER */}

              <motion.span
                aria-hidden="true"
                initial={
                  reduceMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease,
                  delay: reduceMotion ? 0 : 0.15,
                }}
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#E7E1D5]"
              />

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
