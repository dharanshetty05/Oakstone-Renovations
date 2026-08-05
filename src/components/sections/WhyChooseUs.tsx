"use client";

import {
  BadgeCheck,
  Handshake,
  HardHat,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Sparkles,
    title: "Premium Craftsmanship",
    description:
      "Every renovation is completed with precision, attention to detail, and lasting quality.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "Clear quotations with no hidden costs, so you always know what to expect.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "Complete peace of mind knowing your home and project are fully protected.",
  },
  {
    icon: Timer,
    title: "Reliable Timelines",
    description:
      "Well-planned projects delivered with clear communication at every stage.",
  },
  {
    icon: HardHat,
    title: "Experienced Team",
    description:
      "A skilled team committed to exceptional workmanship and customer care.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    description:
      "We treat every home with the same respect and care as if it were our own.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-surface"
    >
      <div className={cn(layout.container, layout.section)}>
        <SectionHeader
          align="left"
          eyebrow="Why Choose Us"
          title="Built on Quality. Backed by Trust."
          description="Your home deserves experienced professionals who value craftsmanship, communication, and doing the job properly from start to finish."
          className="mb-16"
        />

        <div className={layout.grid3}>
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className={cn(
                "rounded-3xl bg-white p-8 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <div className={layout.gapContent}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon
                    size={24}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className={typography.h4}>
                    {title}
                  </h3>

                  <p className={typography.body}>
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}