"use client";

import { Star } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Sarah O'Connor",
    location: "Dublin",
    review:
      "The quality of the workmanship exceeded every expectation. The team communicated clearly throughout the project, stayed on schedule, and delivered a kitchen our family absolutely loves.",
  },
  {
    name: "Michael Byrne",
    location: "Bray",
    review:
      "From the first consultation to the final walkthrough, everything felt organised and professional. We couldn't be happier with the finished renovation.",
  },
  {
    name: "Emma Walsh",
    location: "Naas",
    review:
      "Oakstone Renovations transformed our home while making the entire process stress-free. The attention to detail was exceptional.",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-white"
    >
      <div className={cn(layout.container, layout.section)}>
        <SectionHeader
          align="left"
          eyebrow="Reviews"
          title="Trusted by Homeowners Across Ireland"
          description="We're proud to create homes our clients love and experiences they confidently recommend."
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className={cn(
                "flex h-full flex-col rounded-3xl bg-card p-8 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-6 flex-1">
                <p className={typography.body}>
                  “{review.review}”
                </p>
              </blockquote>

              <footer className="mt-8 border-t border-border pt-6">
                <p className={typography.h4}>
                  {review.name}
                </p>

                <p className={typography.small}>
                  {review.location}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}