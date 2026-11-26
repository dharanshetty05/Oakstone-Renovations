
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/constants/company";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = shouldReduceMotion ?? false;

  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Renovation enquiry"
  )}`;

  const ease = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
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
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* CTA PANEL */}

        <div
          className="
            relative isolate
            overflow-hidden
            rounded-[20px]
            border border-[#193B2D]/[0.06]
            bg-[#E5EAE2]
            sm:rounded-[24px]
            lg:rounded-[28px]
          "
        >

          {/* BACKGROUND DETAILS */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >

            {/* Base gradient */}

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-[#E8ECE4]
                via-[#E3EAE1]
                to-[#DCE5DA]
              "
            />

            {/* Ambient light */}

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(ellipse_at_15%_15%,rgba(255,255,255,0.7),transparent_55%)]
              "
            />

            {/* Architectural circular detailing */}

            <div
              className="
                absolute
                -right-[170px] -top-[210px]
                size-[580px]
                rounded-full
                border border-[#193B2D]/[0.07]
                sm:-right-[150px]
                sm:-top-[260px]
                sm:size-[720px]
                lg:-right-[100px]
                lg:-top-[360px]
                lg:size-[900px]
              "
            />

            <div
              className="
                absolute
                -right-[115px] -top-[155px]
                size-[470px]
                rounded-full
                border border-[#193B2D]/[0.065]
                sm:-right-[100px]
                sm:-top-[200px]
                sm:size-[620px]
                lg:-right-[30px]
                lg:-top-[290px]
                lg:size-[760px]
              "
            />

            <div
              className="
                absolute
                -right-[60px] -top-[100px]
                size-[360px]
                rounded-full
                border border-[#193B2D]/[0.055]
                sm:-right-[50px]
                sm:-top-[140px]
                sm:size-[520px]
                lg:right-[35px]
                lg:-top-[220px]
                lg:size-[620px]
              "
            />

            {/* Subtle depth */}

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(ellipse_at_bottom_left,rgba(25,59,45,0.045),transparent_60%)]
              "
            />

          </div>

          {/* MAIN CONTENT */}

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={containerVariants}
            className="
              relative z-10
              grid
              grid-cols-1
              items-center
              gap-12
              px-7 py-14
              sm:px-12 sm:py-16
              lg:grid-cols-[1.35fr_0.65fr]
              lg:gap-16
              lg:px-20
              lg:py-24
              xl:px-24
            "
          >

            {/* LEFT: EDITORIAL CONTENT */}

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

              {/* EYEBROW */}

              <motion.div variants={revealVariants}>
                <span
                  className="
                    inline-flex items-center
                    gap-2
                    font-[family-name:var(--font-inter)]
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#54715D]
                    sm:text-[11px]
                  "
                >
                  <span className="size-1.5 rounded-full bg-[#A77D65]" />
                  The next chapter starts here
                </span>
              </motion.div>

              {/* HEADING */}

              <motion.h2
                id="final-cta-heading"
                variants={revealVariants}
                className="
                  mt-6
                  max-w-[720px]
                  font-[family-name:var(--font-manrope)]
                  text-[clamp(2.5rem,5.2vw,4.6rem)]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.06em]
                  text-[#193B2D]
                "
              >
                A better home
                <br className="hidden sm:block" />{" "}
                begins with a
                <br className="hidden sm:block" />{" "}
                <span className="font-semibold italic">
                  thoughtful renovation.
                </span>
              </motion.h2>

              {/* DESCRIPTION */}

              <motion.p
                variants={revealVariants}
                className="
                  mt-6
                  max-w-[490px]
                  font-[family-name:var(--font-inter)]
                  text-[13px]
                  leading-[1.9]
                  text-[#687267]
                  sm:text-[14px]
                "
              >
                Whether you're reimagining a single room
                or transforming your entire home, let's
                talk about what you have in mind.
              </motion.p>

            </div>

            {/* RIGHT: CONVERSION AREA */}

            <motion.div
              variants={revealVariants}
              className="
                relative
                flex flex-col
                items-center
                justify-center
                border-t border-[#193B2D]/[0.12]
                pt-9
                text-center
                lg:min-h-[260px]
                lg:items-start
                lg:border-l lg:border-t-0
                lg:pl-14 lg:pt-0
                lg:text-left
                xl:pl-20
              "
            >

              {/* SMALL DECORATIVE MARK */}

              <div
                aria-hidden="true"
                className="
                  mb-5
                  flex size-11
                  items-center justify-center
                  rounded-full
                  border border-[#193B2D]/[0.15]
                  text-[#193B2D]
                "
              >
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.3}
                />
              </div>

              {/* SUPPORTING TEXT */}

              <p
                className="
                  max-w-[280px]
                  font-[family-name:var(--font-manrope)]
                  text-[19px]
                  font-semibold
                  leading-[1.4]
                  tracking-[-0.035em]
                  text-[#193B2D]
                "
              >
                Have a project in mind?
              </p>

              <p
                className="
                  mt-3
                  max-w-[290px]
                  font-[family-name:var(--font-inter)]
                  text-[12px]
                  leading-[1.8]
                  text-[#687267]
                  sm:text-[13px]
                "
              >
                We'd love to hear about your plans
                and explore how we can help.
              </p>

              {/* CTA BUTTON */}

              <motion.a
                href={emailHref}
                whileHover={
                  reduceMotion ? {} : { y: -3 }
                }
                whileTap={
                  reduceMotion ? {} : { scale: 0.98 }
                }
                transition={{
                  duration: 0.3,
                  ease,
                }}
                className="
                  group
                  mt-7
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-5
                  rounded-full
                  bg-[#193B2D]
                  py-1.5 pl-6 pr-1.5
                  font-[family-name:var(--font-inter)]
                  text-[12px]
                  font-semibold
                  tracking-[0.005em]
                  text-[#F4F1E8]
                  shadow-[0_5px_18px_rgba(25,59,45,0.12)]
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
                    flex size-[38px]
                    shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#76A98D]
                    text-white
                    transition-all duration-300
                    group-hover:bg-[#91B79E]
                  "
                >
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </motion.a>

              {/* REASSURANCE */}

              <p
                className="
                  mt-5
                  font-[family-name:var(--font-inter)]
                  text-[10px]
                  tracking-[0.015em]
                  text-[#7A8478]
                "
              >
                Let's start with a conversation.
              </p>

            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
