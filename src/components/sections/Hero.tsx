
"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const textContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.25,
      },
    },
  };

  const textItem: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.75,
        ease,
      },
    },
  };

  const buttonMotion = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.985 },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#173D30] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[750px]"
    >
      {/* Background photography */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.035,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.6,
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
          className="object-cover object-[62%_center] md:object-[65%_center]"
        />
      </motion.div>

      {/* Subtle overall tonal treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#17251E]/10"
      />

      {/* Rich forest-green shadow on the text side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[78%] bg-gradient-to-r from-[#101F19]/95 via-[#17291F]/75 via-[18%] to-transparent md:block"
      />

      {/* Mobile readability overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#101F19]/85 via-[#17291F]/70 to-[#17291F]/35 md:hidden"
      />

      {/* Gentle bottom depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-[#101F19]/30 to-transparent"
      />

      {/* Content */}
      <div
        className={cn(
          layout.container,
          "relative z-10 w-full py-24 sm:py-28 lg:py-32"
        )}
      >
        <div
          className={cn(
            layout.content,
            "max-w-[700px] space-y-8 sm:space-y-9"
          )}
        >
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-7"
          >
            {/* Restrained terracotta accent */}
            <motion.div
              variants={textItem}
              aria-hidden="true"
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-11 bg-[#A65D48]" />
              <span className="h-px w-8 bg-[#F3EEE3]/35" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              id="hero-heading"
              variants={textItem}
              className={cn(
                typography.h2,
                "max-w-[680px] text-balance !text-[#F3EEE3]",
                "leading-[1.08] tracking-[-0.035em]",
                "[text-shadow:0_2px_18px_rgba(0,0,0,0.2)]"
              )}
            >
              Transform Your Home with Beautiful Renovations Built to Last.
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              variants={textItem}
              className={cn(
                typography.small,
                "max-w-[535px] text-pretty text-[#F3EEE3]/85",
                "leading-[1.85]",
                "[text-shadow:0_1px_8px_rgba(0,0,0,0.3)]"
              )}
            >
              From modern kitchens and luxury bathrooms to complete home
              renovations, we create thoughtfully designed spaces with
              exceptional craftsmanship, transparent pricing, and a renovation
              experience you can trust.
            </motion.p>
          </motion.div>

          {/* Premium CTAs */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.65,
              ease,
            }}
            className="flex flex-col gap-3.5 pt-1 sm:flex-row sm:items-center sm:gap-4"
          >
            {/* Primary CTA */}
            <motion.div
              {...buttonMotion}
              transition={{ duration: 0.25, ease }}
              className="w-full sm:w-auto"
            >
              <Button
                size="large"
                className={cn(
                  "group relative w-full min-w-[215px] justify-center",
                  "!border !border-[#F3EEE3]/80",
                  "!bg-[#F3EEE3] !text-[#173D30]",
                  "font-semibold tracking-[-0.01em]",
                  "shadow-[0_8px_30px_rgba(0,0,0,0.16)]",
                  "transition-all duration-300",
                  "hover:!border-white hover:!bg-white",
                  "hover:shadow-[0_12px_36px_rgba(0,0,0,0.22)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#A65D48] focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-[#173D30]"
                )}
              >
                <span>Get Free Quote</span>
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block text-[#A65D48] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              {...buttonMotion}
              transition={{ duration: 0.25, ease }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="large"
                className={cn(
                  "w-full min-w-[190px] justify-center",
                  "!border !border-[#F3EEE3]/65",
                  "!bg-[#173D30]/25 !text-[#F3EEE3]",
                  "font-medium tracking-[-0.01em]",
                  "backdrop-blur-sm",
                  "shadow-[0_6px_24px_rgba(0,0,0,0.12)]",
                  "transition-all duration-300",
                  "hover:!border-[#F3EEE3] hover:!bg-[#F3EEE3]/12",
                  "hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#A65D48] focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-[#173D30]"
                )}
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
