
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/constants/company";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Renovation enquiry"
  )}`;

  const ease = [0.22, 1, 0.36, 1] as const;

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
        ease,
      },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="bg-[#F4F1E8] py-12 sm:py-16 lg:py-20"
    >
      {/* WIDER CONTAINER */}

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* CTA PANEL */}

        <div
          className="
            relative isolate
            flex min-h-[360px]
            items-center justify-center
            overflow-hidden
            rounded-[20px]
            border border-[#193B2D]/[0.045]
            bg-[#E5EAE2]
            px-6 py-16
            sm:min-h-[400px]
            sm:rounded-[24px]
            sm:px-12 sm:py-20
            lg:min-h-[460px]
            lg:rounded-[28px]
            lg:px-20
          "
        >
          {/* BACKGROUND TREATMENT */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            {/* Soft sage gradient */}

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-[#E1E8DF]
                via-[#E9EDE5]
                to-[#DDE6DC]
              "
            />

            {/* Natural ambient light */}

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.65),transparent_65%)]
              "
            />

            {/* Subtle diagonal light */}

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
                -top-[90%] left-[38%]
                h-[280%] w-[22%]
                rotate-[35deg]
                bg-gradient-to-r
                from-transparent
                via-white/35
                to-transparent
                blur-2xl
              "
            />

            {/* Very subtle green depth */}

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(ellipse_at_bottom_left,rgba(25,59,45,0.055),transparent_55%)]
              "
            />
          </div>

          {/* CONTENT */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              staggerChildren: shouldReduceMotion ? 0 : 0.13,
              delayChildren: shouldReduceMotion ? 0 : 0.08,
            }}
            className="
              relative z-10
              mx-auto flex w-full
              max-w-[760px]
              flex-col items-center
              text-center
            "
          >

            {/* EYEBROW */}

            <motion.div variants={reveal}>
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#193B2D]/[0.09]
                  bg-[#F4F1E8]/80
                  px-3.5 py-1.5
                  font-[family-name:var(--font-inter)]
                  text-[11px]
                  font-semibold
                  tracking-[0.035em]
                  text-[#315D4D]
                  shadow-[0_2px_8px_rgba(25,59,45,0.06)]
                  backdrop-blur-sm
                "
              >
                Your Next Chapter
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              id="final-cta-heading"
              variants={reveal}
              className="
                mt-7
                max-w-[760px]
                font-[family-name:var(--font-manrope)]
                text-[clamp(2.35rem,5vw,4.1rem)]
                font-bold
                leading-[1.1]
                tracking-[-0.055em]
                text-[#193B2D]
              "
            >
              Start Your Renovation
              <br />

              <span className="font-semibold italic">
                Journey
              </span>{" "}
              Today
            </motion.h2>

            {/* DESCRIPTION */}

            <motion.p
              variants={reveal}
              className="
                mt-5
                max-w-[580px]
                font-[family-name:var(--font-inter)]
                text-[13px]
                leading-[1.85]
                tracking-[-0.015em]
                text-[#59665A]
                sm:text-[14px]
              "
            >
              Ready to bring your renovation ideas to life?
              Tell us about your project and take the first
              step towards a space that feels just right.
            </motion.p>

            {/* CTA BUTTON */}

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
                  focus-visible:ring-offset-[#E5EAE2]
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
