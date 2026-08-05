"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CircleCheck,
  Hammer,
  ShieldCheck,
  Users,
} from "lucide-react";

import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const trustBadges = [
  {
    icon: Hammer,
    label: "15+ Years Experience",
  },
  {
    icon: ShieldCheck,
    label: "Fully Insured",
  },
  {
    icon: Users,
    label: "120+ Happy Homeowners",
  },
  {
    icon: CircleCheck,
    label: "Free Consultation",
  },
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut" as const,
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut" as const,
  },
};

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className={cn("bg-white", layout.sectionLarge)}
    >
      <div className={layout.container}>
        <div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-[45%_55%]">
          <motion.div
            {...fadeUp}
            className={cn(layout.content, "space-y-8")}
          >
            <div className={layout.gapContent}>
              <p className={typography.eyebrow}>
                Trusted Home Renovation Specialists
              </p>

              <h1
                id="hero-heading"
                className={typography.h1}
              >
                Transform Your Home with Beautiful
                Renovations Built to Last.
              </h1>

              <p className={typography.bodyLg}>
                From modern kitchens and luxury bathrooms
                to complete home renovations, we create
                thoughtfully designed spaces with
                exceptional craftsmanship, transparent
                pricing, and a renovation experience you
                can trust.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="large">
                Get Free Quote
              </Button>

              <Button
                variant="secondary"
                size="large"
              >
                View Projects
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2">
              {trustBadges.map(
                ({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3"
                  >
                    <Icon
                      size={20}
                      className="shrink-0 text-primary"
                      aria-hidden="true"
                    />

                    <span className={typography.small}>
                      {label}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-xl lg:h-full"
          >
            <Image
              src="/images/hero-placeholder.png"
              alt="Modern Irish home after a premium renovation with contemporary architecture and landscaping."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}