
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { company } from "@/constants/company";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  project: string;
  location: string;
  quote: string;
  avatar: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah O'Brien",
    project: "Kitchen Renovation",
    location: "Dublin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The old galley kitchen is gone and in its place is a room our family actually lives in. The team was precise about the details — right down to the Belfast sink placement — and left the house cleaner than they found it each evening.",
  },
  {
    name: "Michael Byrne",
    project: "Bathroom Renovation",
    location: "Bray",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "We'd priced three other contractors before Oakstone. Theirs was the only quote that matched what we actually got — a walk-in shower, underfloor heating, no surprises on the final invoice.",
  },
  {
    name: "Emma Walsh",
    project: "Whole Home Renovation",
    location: "Naas",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Eleven weeks, start to finish, exactly as scheduled. Every trade turned up when they said they would. That kind of reliability is rare, and it made a stressful project feel almost easy.",
  },
  {
    name: "Niamh Kelly",
    project: "Living Space Extension",
    location: "Kildare",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    quote:
      "Oakstone spotted a structural issue during the site survey that two other builders had missed entirely. Sorting it early saved us a real headache — and probably a lot of money — down the line.",
  },
  {
    name: "Conor Doyle",
    project: "Kitchen Renovation",
    location: "Wicklow",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "What stood out was how little we had to manage ourselves. Deliveries, tradespeople, cleanup — it was all handled. We just came home to progress every day.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function ReviewCard({
  review,
}: {
  review: Testimonial;
}) {
  return (
    <article className="flex min-h-[310px] w-[min(88vw,480px)] shrink-0 flex-col justify-between rounded-[22px] border border-[#E7E1D5] bg-[#FBF9F3] p-6 sm:p-7 lg:w-[480px] lg:p-8">
      <div>
        {/* Rating */}
        <div className="mb-6 flex min-h-5 items-center justify-end">
          {review.rating != null && (
            <div
              className="flex shrink-0 items-center gap-0.5"
              role="img"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={13}
                  strokeWidth={1.2}
                  className={
                    index < review.rating!
                      ? "fill-[#C69A45] text-[#C69A45]"
                      : "fill-transparent text-[#C69A45]/40"
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Testimonial */}
        <blockquote className="text-[16px] font-medium leading-[1.7] tracking-[-0.025em] text-[#30382F] sm:text-[17px]">
          "{review.quote}"
        </blockquote>
      </div>

      {/* Customer attribution */}
      <div className="mt-6 flex items-center gap-3 border-t border-[#E7E1D5] pt-5">
        {/* Placeholder portrait for concept design */}
        <Image
          src={review.avatar}
          alt=""
          aria-hidden="true"
          width={46}
          height={46}
          sizes="46px"
          unoptimized
          className="h-[46px] w-[46px] shrink-0 rounded-full border border-[#E7E1D5] object-cover"
        />

        {/* Customer name and location */}
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight text-[#242C26]">
            {review.name}
          </p>

          <p className="mt-1 text-xs text-[#77786F]">
            {review.location}
          </p>
        </div>

        {/* Project type on the right */}
        <div className="ml-auto max-w-[43%] text-right">
          <span className="text-[9px] font-medium uppercase leading-[1.6] tracking-[0.12em] text-[#A18B73] sm:text-[10px]">
            {review.project}
          </span>
        </div>
      </div>
    </article>
  );
}

export function Reviews() {
  const shouldReduceMotion = useReducedMotion();
  const [touchPaused, setTouchPaused] = useState(false);

  const areas = company.areas;

  const areaText =
    areas.length > 1
      ? `${areas.slice(0, -1).join(", ")} and ${areas.at(-1)}`
      : areas[0] ?? "the surrounding areas";

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="overflow-hidden bg-[#F4F1E8]"
    >
      <style>{`
        @keyframes oakstone-reviews-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .reviews-marquee {
          animation: oakstone-reviews-marquee 82s linear infinite;
        }

        .reviews-marquee:hover,
        .reviews-marquee:focus-within {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className={cn(layout.sectionLarge, "py-20 md:py-28")}>

        {/* Introduction */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className={cn(
            layout.container,
            "mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-end"
          )}
        >
          <div className="max-w-2xl">
            <h2
              id="reviews-heading"
              className={cn(
                typography.h2,
                "max-w-[650px] text-[#242C26]"
              )}
            >
              Good work is remembered.{" "}
              <span className="text-[#193B2D]">
                So is how it felt.
              </span>
            </h2>
          </div>

          <p
            className={cn(
              typography.sectionDescription,
              "w-full max-w-lg text-[#686D64] md:w-[43%] md:pb-1"
            )}
          >
            The finished result matters, but so does everything
            that goes into getting there. Here's what homeowners
            have shared about their experience with Oakstone.
          </p>
        </motion.div>

        {/* Testimonial marquee */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: EASE,
          }}
          onTouchStart={() => setTouchPaused(true)}
          onTouchEnd={() => setTouchPaused(false)}
          onTouchCancel={() => setTouchPaused(false)}
          className={cn(
            "overflow-hidden",
            shouldReduceMotion && "overflow-x-auto"
          )}
        >
          <div
            className="reviews-marquee flex w-max"
            style={{
              animationPlayState: touchPaused ? "paused" : "running",
            }}
          >
            {/* Original testimonials */}
            <div className="flex shrink-0 gap-4 pr-4">
              {testimonials.map((review) => (
                <ReviewCard
                  key={review.name}
                  review={review}
                />
              ))}
            </div>

            {/* Duplicate set for seamless animation */}
            {!shouldReduceMotion && (
              <div
                aria-hidden="true"
                className="flex shrink-0 gap-4 pr-4"
              >
                {testimonials.map((review) => (
                  <ReviewCard
                    key={`duplicate-${review.name}`}
                    review={review}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className={cn(
            layout.container,
            "mt-12 flex flex-col justify-between gap-7 rounded-[20px] bg-[#193B2D] px-7 py-10 sm:px-10 md:mt-16 md:flex-row md:items-center md:px-12 md:py-12"
          )}
        >
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#F4F1E8] sm:text-4xl lg:text-[42px]">
              Planning a renovation?
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/70 md:whitespace-nowrap">
              Tell us what you're planning. We'll talk through the next steps.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-5 rounded-full border border-white/10 bg-[#F4F1E8] py-2 pl-7 pr-2 text-xs font-semibold text-[#193B2D] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6A18A]"
          >
            Talk to Oakstone

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#193B2D] text-[#F4F1E8] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={17} strokeWidth={1.7} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
