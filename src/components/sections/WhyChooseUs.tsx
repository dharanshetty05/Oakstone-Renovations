"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const IMAGE_URL = "https://images.unsplash.com/photo-1682888813913-e13f18692019?q=80&w=1600&auto=format&fit=crop";

const features = [
  {
    title: "Premium Craftsmanship",
    description: "Precision-built with exceptional attention to detail.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear quotations with no hidden surprises.",
  },
  {
    title: "Fully Insured",
    description: "Complete peace of mind throughout your renovation.",
  },
  {
    title: "Reliable Timelines",
    description: "Projects delivered with consistent communication.",
  },
  {
    title: "Experienced Team",
    description: "Skilled professionals trusted across Ireland.",
  },
  {
    title: "Customer First",
    description: "Respectful service from consultation to completion.",
  },
];

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-amber-50 overflow-hidden"
    >
      <div className={cn(layout.container, layout.section)}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Image */}
          <motion.div
            className="w-full shrink-0 lg:w-[40%]"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
          >
            <div className="group relative aspect-[5/6] w-full overflow-hidden rounded-[2rem] shadow-sm">
              <Image
                src={IMAGE_URL}
                alt="A finished luxury kitchen renovation with a marble island and custom cabinetry"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
          {/* Content */}
          <div className="w-full lg:w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: "easeOut",
              }}
            >
              <h2
                id="why-choose-us-heading"
                className={cn(typography.h2, "max-w-[520px] leading-tight")}
              >
                Built on{" "}
                <span className="text-primary">Quality </span> .
                <br />
                Backed by Trust.
              </h2>
              <p className={cn(typography.sectionDescription, "mt-5 max-w-[620px]")}>
                From the first consultation to the final walkthrough, we focus on exceptional workmanship, honest communication, and a renovation experience you can feel confident about.
              </p>
            </motion.div>
            <div className="mt-6 border-t border-border/70 pt-6">
              <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold tracking-tight text-text-primary">
                        {feature.title}
                      </h3>
                      <p className={cn(typography.small, "mt-1 leading-7 text-text-secondary")}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}