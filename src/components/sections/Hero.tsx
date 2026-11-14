
"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const headlineLines = [
  ["Beautiful", "Renovations."],
  ["Thoughtfully", "Built."],
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const contentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease,
      },
    },
  };

  // Individual word reveal
  const headingVariants: Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.075,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease,
      },
    },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate flex items-center overflow-hidden",
        "min-h-[calc(100vh-5.5rem)]",
        "min-h-[calc(100svh-5.5rem)]",
        "bg-[#17271F]"
      )}
    >
      {/* Background photography */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.025,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.5,
          ease,
        }}
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          draggable={false}
          className="object-cover object-[65%_center]"
        />
      </motion.div>

      {/* Desktop green gradient */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-[1]",
          "hidden w-[76%] md:block lg:w-[70%]",
          "bg-gradient-to-r",
          "from-[#14251D]/95 via-[#17291F]/80",
          "via-[48%] to-transparent"
        )}
      />

      {/* Mobile readability overlay */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-[1] md:hidden",
          "bg-gradient-to-b",
          "from-[#14251D]/85 via-[#14251D]/65 to-[#14251D]/45"
        )}
      />

      {/* Main content */}
      <div
        className={cn(
          layout.container,
          "relative z-10 w-full",
          "py-24 sm:py-28 lg:py-20"
        )}
      >
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            "max-w-[1100px]",
            "text-center md:text-left"
          )}
        >
          {/* Service area */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "mb-7 flex flex-wrap items-center gap-2",
              "justify-center md:justify-start",
              "text-[12px] font-medium tracking-[0.01em]",
              "text-[#F3EEE3]/90 sm:text-[13px]"
            )}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#D6A18A]"
            />

            <span>
              Serving homeowners across Dublin, Kildare, Wicklow & Meath
            </span>
          </motion.div>

          {/* Word-by-word headline */}
          <motion.h1
            id="hero-heading"
            variants={headingVariants}
            className={cn(
              typography.h2,
              "mx-auto max-w-[1100px] md:mx-0",
              "!text-[clamp(1.85rem,6vw,2.5rem)]",
              "md:!text-[clamp(4rem,5.5vw,5.75rem)]",
              "!text-[#F3EEE3]",
              "leading-[1.12] md:leading-[1.06]",
              "tracking-[-0.045em]",
              "text-balance"
            )}
          >
            {/* Accessible complete heading */}
            <span className="sr-only">
              Beautiful Renovations. Thoughtfully Built.
            </span>

            {/* Animated visual heading */}
            <span aria-hidden="true" className="block">
              {headlineLines.map((line, lineIndex) => (
                <span
                  key={lineIndex}
                  className="block"
                >
                  {line.map((word, wordIndex) => (
                    <motion.span
                      key={word}
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}
                      {wordIndex !== line.length - 1 && "\u00A0"}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={itemVariants}
            className={cn(
              typography.small,
              "mx-auto mt-7 max-w-[620px]",
              "text-pretty leading-[1.8]",
              "text-[#F3EEE3]/85",
              "md:mx-0"
            )}
          >
            From kitchen and bathroom renovations to home extensions and complete transformations, we bring careful planning, quality craftsmanship and clear communication to every stage of your project.
          </motion.p>

          {/* Calls to action */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "mt-9 flex flex-col items-center",
              "gap-4 sm:flex-row sm:gap-5",
              "md:items-center"
            )}
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion ? undefined : { y: -2 }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.98 }
              }
              transition={{ duration: 0.25, ease }}
              className={cn(
                "group inline-flex min-h-[60px]",
                "w-full sm:w-auto",
                "items-center justify-center gap-3",
                "rounded-full border border-[#F3EEE3]",
                "bg-[#F3EEE3] px-8 py-4",
                "text-[15px] font-semibold",
                "tracking-[-0.015em] text-[#193B2D]",
                "shadow-[0_8px_28px_rgba(0,0,0,0.15)]",
                "transition-colors duration-300",
                "hover:border-white hover:bg-white",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-[#D6A18A]",
                "focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#17271F]"
              )}
            >
              Discuss Your Project

              <span
                aria-hidden="true"
                className={cn(
                  "text-[#A65D48]",
                  "transition-transform duration-300",
                  "group-hover:translate-x-1"
                )}
              >
                →
              </span>
            </motion.a>

            {/* Glass secondary CTA */}
            <motion.a
              href="#projects"
              whileHover={
                shouldReduceMotion ? undefined : { y: -2 }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.98 }
              }
              transition={{ duration: 0.25, ease }}
              className={cn(
                "group inline-flex min-h-[60px]",
                "w-full sm:w-auto",
                "items-center justify-center gap-3",
                "rounded-full border border-white/30",
                "bg-white/[0.10] px-8 py-4",
                "text-[15px] font-medium",
                "tracking-[-0.01em] text-[#F3EEE3]",
                "backdrop-blur-xl",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                "transition-all duration-300",
                "hover:border-white/50",
                "hover:bg-white/[0.18]",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-[#D6A18A]",
                "focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#17271F]"
              )}
            >
              Explore Our Work

              <span
                aria-hidden="true"
                className={cn(
                  "transition-transform duration-300",
                  "group-hover:translate-x-1"
                )}
              >
                →
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
