
"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "Kitchen Renovations",
    description:
      "Bespoke kitchens, considered layouts and beautiful finishes designed around the way you live.",
    image:
      "https://images.unsplash.com/photo-1682888813913-e13f18692019?auto=format&fit=crop&w=1600&q=90",
    alt: "Contemporary kitchen featuring a marble island and bespoke cabinetry.",
    layout: "md:col-span-7",
  },
  {
    number: "02",
    title: "Bathroom Renovations",
    description:
      "Refined materials, elegant details and thoughtfully designed spaces for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1771929662486-f793e08f0f16?auto=format&fit=crop&w=1400&q=90",
    alt: "Luxury bathroom with marble finishes and a glass walk-in shower.",
    layout: "md:col-span-5",
  },
  {
    number: "03",
    title: "Home Extensions",
    description:
      "Create more room to live with carefully planned extensions that complement your home.",
    image:
      "https://images.unsplash.com/photo-1760067537293-6b30141d6a52?auto=format&fit=crop&w=1400&q=90",
    alt: "Contemporary residential architecture with a landscaped garden.",
    layout: "md:col-span-5",
  },
  {
    number: "04",
    title: "Full Home Renovations",
    description:
      "Transform your entire property with cohesive design and craftsmanship from room to room.",
    image:
      "https://images.unsplash.com/photo-1586982599726-11708daaceca?auto=format&fit=crop&w=1600&q=90",
    alt: "Beautifully renovated residential home surrounded by greenery.",
    layout: "md:col-span-7",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  // Section entrance
  const headerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  // Headline word reveal
  const headingVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.075,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
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

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease,
      },
    },
  };

  // Staggered service card entrance
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.85,
        ease,
      },
    },
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#F4F1E8]"
    >
      <div
        className={cn(
          layout.container,
          "py-24 sm:py-28 lg:py-36"
        )}
      >
        {/* Section introduction */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* Heading */}
<motion.h2
  id="services-heading"
  variants={headingVariants}
  className={cn(
    typography.h2,
    "w-full max-w-[900px]",
    "!text-[clamp(1.9rem,4.2vw,3.75rem)]",
    "text-[#242C26]",
    "leading-[1.08] tracking-[-0.045em]",
    "text-balance"
  )}
>
  <span className="sr-only">
    Renovations, shaped around your home.
  </span>

  <span aria-hidden="true">
    {/* Mobile headline: exactly two lines */}
    <span className="block md:hidden">
      <span className="block">
        <motion.span
          variants={wordVariants}
          className="inline-block text-[#242C26]"
        >
          Renovations,
        </motion.span>
        {" "}
        <motion.span
          variants={wordVariants}
          className="inline-block text-[#193B2D]"
        >
          shaped
        </motion.span>
      </span>

      <span className="block text-[#193B2D]">
        {["around", "your", "home."].map((word) => (
          <motion.span
            key={word}
            variants={wordVariants}
            className="mr-[0.22em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </span>

    {/* Desktop headline: original two-line composition */}
    <span className="hidden md:block">
      <span className="block text-[#242C26]">
        <motion.span
          variants={wordVariants}
          className="inline-block"
        >
          Renovations,
        </motion.span>
      </span>

      <span className="block text-[#193B2D]">
        {["shaped", "around", "your", "home."].map((word) => (
          <motion.span
            key={word}
            variants={wordVariants}
            className="mr-[0.22em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </span>
  </span>
</motion.h2>

            {/* Supporting copy */}
            <motion.p
              variants={textVariants}
              className={cn(
                typography.sectionDescription,
                "max-w-[440px] lg:pb-2",
                "leading-[1.85] text-[#686D64]"
              )}
            >
              From a single room to a complete transformation,
              we bring thoughtful design and skilled
              craftsmanship to every part of your home.
            </motion.p>
          </div>

          {/* Refined divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease,
            }}
            className="mt-9 h-px w-full origin-left bg-[#DCD6C9]"
          />
        </motion.div>

        {/* Full-image editorial service grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion ? undefined : { y: -5 }
              }
              transition={{ duration: 0.4, ease }}
              className={cn(
                "group relative isolate",
                "min-h-[390px] sm:min-h-[440px]",
                "overflow-hidden rounded-[22px]",
                "bg-[#26372D]",
                service.layout
              )}
            >
              {/* Image with reveal and hover zoom */}
              <motion.div
                initial={{
                  scale: shouldReduceMotion ? 1 : 1.08,
                }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.2,
                  ease,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes={
                    service.layout === "md:col-span-7"
                      ? "(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 60vw"
                      : "(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 40vw"
                  }
                  className={cn(
                    "object-cover",
                    "transition-transform duration-1000 ease-out",
                    "group-hover:scale-[1.055]",
                    "motion-reduce:transition-none"
                  )}
                />
              </motion.div>

              {/* Dark overlay */}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 z-[1]",
                  "bg-gradient-to-t",
                  "from-[#101B15]/90",
                  "via-[#101B15]/25 via-[48%]",
                  "to-[#101B15]/5",
                  "transition-all duration-700",
                  "group-hover:from-[#101B15]/95"
                )}
              />

              {/* Service number */}
              <div className="absolute left-7 top-7 z-[2] flex items-center gap-3 sm:left-9 sm:top-9">
                <span className="text-[12px] font-semibold tracking-[0.16em] text-[#F3EEE3]">
                  {service.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#D6A18A]"
                />
              </div>

              {/* Service content */}
              <div className="absolute inset-x-0 bottom-0 z-[2] p-7 sm:p-9">
                <div className="flex items-end justify-between gap-5">
                  <div className="max-w-[520px]">
                    <h3
                      className={cn(
                        "text-[27px] font-semibold",
                        "leading-[1.12] tracking-[-0.035em]",
                        "text-[#F3EEE3]",
                        "sm:text-[32px] lg:text-[36px]"
                      )}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-3 max-w-[430px]",
                        "text-[14px] leading-[1.75]",
                        "text-[#F3EEE3]/80 sm:text-[15px]"
                      )}
                    >
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      aria-label={`Discuss your ${service.title.toLowerCase()} project`}
                      className={cn(
                        "group/link mt-6 inline-flex",
                        "items-center gap-2",
                        "text-[13px] font-semibold",
                        "text-[#F3EEE3]",
                        "transition-colors duration-300",
                        "hover:text-[#DDB29E]",
                        "focus-visible:outline-none",
                        "focus-visible:ring-2 focus-visible:ring-[#D6A18A]"
                      )}
                    >
                      Discuss your project

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>

                  {/* Circular arrow */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "hidden h-[50px] w-[50px] shrink-0",
                      "items-center justify-center",
                      "rounded-full border border-white/40",
                      "bg-white/10 text-white",
                      "backdrop-blur-md",
                      "transition-all duration-300",
                      "group-hover:border-[#F3EEE3]",
                      "group-hover:bg-[#F3EEE3]",
                      "group-hover:text-[#193B2D]",
                      "sm:flex"
                    )}
                  >
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
