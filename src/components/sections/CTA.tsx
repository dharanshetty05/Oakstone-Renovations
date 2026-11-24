
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/constants/company";
import { layout } from "@/design/layout";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Renovation enquiry"
  )}`;

  const reveal = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="bg-[#F4F1E8] py-12 sm:py-16 lg:py-20"
    >
      <div className={cn(layout.container, "px-5 sm:px-6")}>
        <div
          className="
            relative isolate
            flex min-h-[440px]
            items-center justify-center
            overflow-hidden
            rounded-[20px] sm:rounded-[24px]
            lg:rounded-[28px]
            border border-[#193B2D]/[0.035]
            bg-[#EAE9E2]
            px-6 py-16
            sm:min-h-[510px]
            sm:px-12 sm:py-20
            lg:min-h-[600px]
            lg:px-20
          "
        >
          {/* Background treatment */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            {/* Soft neutral gradient */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-[#E5E3DC]
                via-[#F0EEE8]
                to-[#EAE9E3]
              "
            />

            {/* Diagonal natural light */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: "-12%" }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : { opacity: 1, x: "12%" }
              }
              viewport={{ once: true }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
              }}
              className="
                absolute
                -top-[85%] left-[38%]
                h-[260%] w-[24%]
                rotate-[35deg]
                bg-gradient-to-r
                from-transparent
                via-white/45
                to-transparent
                blur-2xl
              "
            />

            {/* Subtle warm ambient light */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_70%)]
              "
            />
          </div>

          {/* Content */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              staggerChildren: 0.13,
              delayChildren: 0.08,
            }}
            className="
              relative z-10
              mx-auto flex w-full
              max-w-[760px]
              flex-col items-center
              text-center
            "
          >
            {/* Eyebrow */}
            <motion.div variants={reveal}>
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#193B2D]/[0.07]
                  bg-[#F4F1E8]/90
                  px-3.5 py-1.5
                  font-[family-name:var(--font-inter)]
                  text-[12px]
                  font-semibold
                  text-[#315D4D]
                  shadow-[0_3px_7px_rgba(25,59,45,0.09)]
                  backdrop-blur-sm
                "
              >
                Project Enquiry
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="final-cta-heading"
              variants={reveal}
              className="
                mt-8
                max-w-[760px]
                font-[family-name:var(--font-manrope)]
                text-[clamp(2.4rem,5.2vw,4.25rem)]
                font-bold
                leading-[1.12]
                tracking-[-0.055em]
                text-[#193B2D]
              "
            >
              Start Your Renovation
              <br />

              <span className="italic font-semibold">
                Journey
              </span>{" "}
              Today
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={reveal}
              className="
                mt-5
                max-w-[600px]
                font-[family-name:var(--font-inter)]
                text-[13px]
                leading-[1.85]
                tracking-[-0.015em]
                text-[#555F55]
                sm:text-[15px]
              "
            >
              Ready to bring your renovation ideas to life?
              Tell us about your project and take the first
              step towards a space that feels just right.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={reveal}
              className="mt-8"
            >
              <motion.a
                href={emailHref}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -2 }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : { scale: 0.98 }
                }
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  group inline-flex
                  min-h-[48px]
                  items-center justify-center
                  gap-3
                  rounded-full
                  bg-[#193B2D]
                  py-1.5 pl-5 pr-1.5
                  font-[family-name:var(--font-inter)]
                  text-[13px]
                  font-semibold
                  tracking-[-0.01em]
                  text-[#F4F1E8]
                  transition-colors duration-300
                  hover:bg-[#254C3C]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#193B2D]
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#EAE9E2]
                "
              >
                <span>Discuss Your Project</span>

                <span
                  className="
                    flex size-[36px]
                    shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#76A98D]
                    text-white
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowRight
                    size={19}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
