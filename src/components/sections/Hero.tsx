"use client";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const textContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  // ...rest of the component is unchanged
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[560px] items-center overflow-hidden md:min-h-[620px] xl:min-h-[700px]"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.4,
          ease: "easeOut",
        }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Renovated kitchen with warm wood cabinetry and natural light"
          fill
          priority
          quality={90}
          sizes="100vw"
          draggable={false}
          className="object-cover object-center"
        />
        {/* Global subtle overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/15"
        />
        {/* Localized content overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-black/72 via-black/45 via-45% to-transparent"
        />
      </motion.div>
      {/* Content */}
      <div className={cn(layout.container, "relative z-20")}>
        <div className={cn(layout.content, "space-y-9")}>
          {/* Heading + supporting text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textContainer}
            className="space-y-5"
          >
            <motion.h1
              id="hero-heading"
              variants={textItem}
              className={cn(typography.h2, "max-w-[590px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]")}
            >
              Transform Your Home with Beautiful Renovations Built to Last.
            </motion.h1>
            <motion.p
              variants={textItem}
              className={cn(typography.small, "max-w-[540px] text-white/85 [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]")}
            >
              From modern kitchens and luxury bathrooms to complete home
              renovations, we create thoughtfully designed spaces with
              exceptional craftsmanship, transparent pricing, and a renovation
              experience you can trust.
            </motion.p>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Button size="large" className="shadow-lg shadow-black/10 transition-all duration-200 hover:shadow-xl">
                Get Free Quote
              </Button>
            </motion.div>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Button variant="secondary" size="large" className="border-2 border-white bg-white shadow-lg shadow-black/25 transition-all duration-200 hover:shadow-xl">
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}