"use client";

import Image from "next/image";

import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Kitchen Renovations",
    description:
      "Beautiful kitchens designed for everyday living with premium finishes and practical layouts.",
    image: "/images/service-kitchen.jpg",
    alt: "Modern kitchen with premium cabinetry, marble island, and natural lighting.",
  },
  {
    title: "Bathroom Renovations",
    description:
      "Upgrade your bathroom with elegant finishes, smart layouts, and lasting quality.",
    image: "/images/service-bathroom.jpg",
    alt: "Luxury bathroom featuring a walk-in shower, floating vanity, and contemporary finishes.",
  },
  {
    title: "Home Extensions",
    description:
      "Create more living space with seamless extensions tailored to your home.",
    image: "/images/service-extension.jpg",
    alt: "Contemporary home extension with large glass doors opening to a landscaped garden.",
  },
  {
    title: "Full Home Renovations",
    description:
      "Complete transformations that modernise your home while preserving its character.",
    image: "/images/service-home-renovation.jpg",
    alt: "Beautifully renovated family home with a bright open-plan living area.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-white"
      aria-labelledby="services-heading"
    >
      <div className={cn(layout.section, layout.container)}>
        <SectionHeader
          align="left"
          eyebrow="Services"
          title="Renovation Services for Every Home"
          description="Whether you're updating a single room or transforming your entire property, we deliver quality renovations designed around your lifestyle."
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className={cn(
                "group overflow-hidden rounded-3xl bg-card transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="space-y-4 p-8">
                <h3 className={typography.h4}>
                  {service.title}
                </h3>

                <p className={typography.body}>
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}