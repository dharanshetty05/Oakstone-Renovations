
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const faqs = [
  {
    number: "01",
    question: "What types of renovation projects do you undertake?",
    answer:
      "We undertake a range of home renovation projects, including kitchen and bathroom renovations, home extensions and complete home transformations. Every project is approached with careful planning and attention to detail.",
  },
  {
    number: "02",
    question: "Do you manage the entire renovation process?",
    answer:
      "We aim to make the renovation journey as straightforward as possible, coordinating the different stages of your project from initial discussions and planning through to the finishing details.",
  },
  {
    number: "03",
    question: "Can I get an estimate before committing to a project?",
    answer:
      "Absolutely. Get in touch with an outline of your renovation plans, and we can discuss your requirements, the scope of work and the next steps towards preparing an estimate.",
  },
  {
    number: "04",
    question: "How long does a typical renovation take?",
    answer:
      "Every renovation is different. Timelines depend on the scale of the project, the complexity of the work and material selections. We discuss expected timelines during the planning stage.",
  },
  {
    number: "05",
    question: "Can I choose my own materials and finishes?",
    answer:
      "Of course. Material selections, finishes and design details can be discussed during the planning process to ensure the finished space reflects your preferences and complements your home.",
  },
  {
    number: "06",
    question: "Which areas do you serve?",
    answer:
      "We are based in Cork and welcome enquiries for renovation projects in the surrounding areas. Get in touch with your location and project details to discuss your requirements.",
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

const answerVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
      delay: 0.08,
    },
  },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = shouldReduceMotion ?? false;

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="overflow-hidden bg-[#F4F1E8] text-[#242C26]"
    >
      <div className={cn(layout.container, layout.section)}>

        {/* INTRODUCTION */}

        <div className="grid grid-cols-1 items-end gap-6 border-b border-[#E7E1D5] pb-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:pb-14">

          {/* MAIN HEADING */}

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={introVariants}
          >
            <h2
              id="faq-heading"
              className={cn(
                typography.h2,
                "max-w-[760px] leading-[1.12] tracking-[-0.045em]"
              )}
            >
              A few things worth{" "}
              <span className="text-[#193B2D]">
                knowing.
              </span>
            </h2>
          </motion.div>

          {/* SUPPORTING DESCRIPTION */}

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
            Starting a renovation often comes with a few
            questions. Here are some answers to help you
            understand what to expect before taking the
            next step.
          </motion.p>
        </div>

        {/* FAQ ACCORDION */}

        <div className="flex flex-col">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <motion.article
                key={faq.number}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className={cn(
                  "group relative border-b border-transparent px-3 py-2 transition-colors duration-500 hover:bg-[#FBF9F3] sm:px-3",
                  "-mx-3"
                )}
              >

                {/* QUESTION ROW */}

                <div className="grid grid-cols-[42px_minmax(0,1fr)_32px] items-start gap-x-5 sm:grid-cols-[52px_minmax(0,1fr)_40px] sm:gap-x-7 lg:grid-cols-[72px_minmax(0,1fr)_48px] lg:items-center lg:gap-x-10">

                  {/* NUMBER */}

                  <motion.span
                    variants={reduceMotion ? undefined : answerVariants}
                    className="pt-5 font-[family-name:var(--font-manrope)] text-[12px] font-medium tracking-[0.1em] text-[#C18D76] sm:pt-6 lg:pt-7"
                  >
                    {faq.number}
                  </motion.span>

                  {/* QUESTION */}

                  <motion.h3
                    variants={reduceMotion ? undefined : answerVariants}
                    className="min-w-0"
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full py-5 text-left font-[family-name:var(--font-manrope)] text-[16px] font-semibold leading-[1.4] tracking-[-0.035em] text-[#242C26] outline-none transition-colors duration-500 hover:text-[#193B2D] focus-visible:text-[#193B2D] focus-visible:underline focus-visible:underline-offset-4 sm:py-6 sm:text-[19px] lg:py-7 lg:text-[21px]"
                    >
                      {faq.question}
                    </button>
                  </motion.h3>

                  {/* TOGGLE ICON */}

                  <motion.button
                    variants={reduceMotion ? undefined : answerVariants}
                    type="button"
                    aria-label={
                      isOpen
                        ? `Collapse: ${faq.question}`
                        : `Expand: ${faq.question}`
                    }
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="mt-4 flex size-8 items-center justify-center rounded-full border border-[#193B2D]/20 text-[#193B2D] outline-none transition-all duration-500 hover:border-[#193B2D] hover:bg-[#193B2D] hover:text-[#F4F1E8] focus-visible:ring-2 focus-visible:ring-[#193B2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1E8] sm:mt-5 sm:size-9 lg:mt-0 lg:size-10"
                  >
                    {isOpen ? (
                      <Minus
                        size={15}
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Plus
                        size={15}
                        strokeWidth={1.5}
                      />
                    )}
                  </motion.button>

                  {/* ANSWER */}

                  <div
                    className="col-start-2 col-end-4 min-w-0"
                  >
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  height: 0,
                                  opacity: 0,
                                }
                          }
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: reduceMotion ? 0 : 0.55,
                              ease,
                            },
                            opacity: {
                              duration: reduceMotion ? 0 : 0.3,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={
                              reduceMotion
                                ? false
                                : "hidden"
                            }
                            animate="visible"
                            variants={answerVariants}
                            className="max-w-[650px] pb-6 pr-2 font-[family-name:var(--font-manrope)] text-[13px] leading-[1.85] text-[#686D64] sm:pb-8 sm:text-[14px] sm:leading-[1.9] lg:pb-9 lg:text-[15px]"
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.9,
                    ease,
                    delay: reduceMotion ? 0 : 0.15,
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#E7E1D5]"
                />

              </motion.article>
            );
          })}

        </div>

        {/* CLOSING NOTE */}

        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={introVariants}
          className="mt-10 text-center font-[family-name:var(--font-manrope)] text-[12px] leading-[1.8] text-[#686D64] sm:mt-12 sm:text-[13px]"
        >
          Have another question?{" "}
          <a
            href="#contact"
            className="font-semibold text-[#193B2D] underline decoration-[#C18D76]/60 underline-offset-4 transition-colors duration-300 hover:text-[#A77D65]"
          >
            We'd be happy to hear from you.
          </a>
        </motion.p>

      </div>
    </section>
  );
}
