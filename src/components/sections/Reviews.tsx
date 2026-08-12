// src/components/Reviews.tsx
"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useMotionValueEvent,
  animate,
  type PanInfo,
} from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah O'Brien",
    project: "Kitchen Renovation",
    location: "Dublin",
    quote:
      "The old galley kitchen is gone and in its place is a room our family actually lives in. The team was precise about the details — right down to the Belfast sink placement — and left the house cleaner than they found it each evening.",
    avatar:
      "https://images.unsplash.com/photo-1625726060119-83ad31838aca?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Michael Byrne",
    project: "Bathroom Renovation",
    location: "Bray",
    quote:
      "We'd priced three other contractors before Oakstone. Theirs was the only quote that matched what we actually got — a walk-in shower, underfloor heating, no surprises on the final invoice.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Emma Walsh",
    project: "Whole Home Renovation",
    location: "Naas",
    quote:
      "Eleven weeks, start to finish, exactly as scheduled. Every trade turned up when they said they would. That kind of reliability is rare, and it made a stressful project feel almost easy.",
    avatar:
      "https://images.unsplash.com/photo-1552334949-51934e5f2d38?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Niamh Kelly",
    project: "Living Space Extension",
    location: "Kildare",
    quote:
      "Oakstone spotted a structural issue during the site survey that two other builders had missed entirely. Sorting it early saved us a real headache — and probably a lot of money — down the line.",
    avatar:
      "https://images.unsplash.com/photo-1687360440094-949b8fe71c8c?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Conor Doyle",
    project: "Kitchen Renovation",
    location: "Wicklow",
    quote:
      "What stood out was how little we had to manage ourselves. Deliveries, tradespeople, cleanup — it was all handled. We just came home to progress every day.",
    avatar:
      "https://images.unsplash.com/photo-1758598497192-15ffa411c3de?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

// One full loop (scrolling the width of a single set of cards) takes this long.
const LOOP_DURATION_SECONDS = 36;
const EASE = [0.22, 1, 0.36, 1] as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function Reviews() {
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Width (px) of a single set of testimonials, measured from the DOM.
  const [setWidth, setSetWidth] = useState(0);
  const stepWidth = setWidth / testimonials.length || 0;

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isPaused = isHovering || isDragging || isNavigating || reducedMotion;

  // Measure one set's width, and keep it in sync on resize / breakpoint change.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      // Track renders two copies of the testimonials back to back.
      setSetWidth(el.scrollWidth / 2);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Continuous right-to-left drift. Wraps seamlessly once a full set has scrolled by.
  useAnimationFrame((_, delta) => {
    if (isPaused || !setWidth) return;
    const pxPerMs = setWidth / (LOOP_DURATION_SECONDS * 1000);
    let next = x.get() - pxPerMs * delta;
    if (next <= -setWidth) next += setWidth;
    x.set(next);
  });

  // Keep the pagination dots in sync with whatever card is currently nearest.
  useMotionValueEvent(x, "change", (latest) => {
    if (!stepWidth) return;
    let idx = Math.round(-latest / stepWidth) % testimonials.length;
    if (idx < 0) idx += testimonials.length;
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  const navigateBy = useCallback(
    (direction: 1 | -1) => {
      if (!stepWidth) return;
      setIsNavigating(true);
      const target = x.get() - direction * stepWidth;
      animate(x, target, {
        duration: reducedMotion ? 0 : 0.7,
        ease: EASE,
        onComplete: () => {
          // Normalize back into [-setWidth, 0) so the marquee loop stays seamless.
          let val = x.get();
          if (setWidth) {
            while (val <= -setWidth) val += setWidth;
            while (val > 0) val -= setWidth;
          }
          x.set(val);
          setIsNavigating(false);
        },
      });
    },
    [stepWidth, setWidth, x, reducedMotion]
  );

  const goTo = useCallback(
    (i: number) => {
      if (!stepWidth) return;
      setIsNavigating(true);
      const target = -(i * stepWidth);
      animate(x, target, {
        duration: reducedMotion ? 0 : 0.7,
        ease: EASE,
        onComplete: () => setIsNavigating(false),
      });
    },
    [stepWidth, x, reducedMotion]
  );

  const next = () => navigateBy(1);
  const prev = () => navigateBy(-1);

  const onDragEnd = (_: unknown, __: PanInfo) => {
    setIsDragging(false);
  };

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-background">
      <div className={cn(layout.container, layout.sectionLarge)}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between xl:mb-24"
        >
          <div className="max-w-2xl">
            <h2 id="reviews-heading" className={typography.h2}>
              What homeowners say about{" "}
              <span className="text-primary">Oakstone</span>
            </h2>
            <p className={cn(typography.sectionDescription, "mt-5")}>
              Real feedback from families across{" "}
              {company.areas.slice(0, -1).join(", ")} and {company.areas.at(-1)}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              whileTap={reducedMotion ? undefined : { scale: 0.92 }}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300",
                "hover:border-primary hover:text-primary hover:bg-surface",
                "disabled:pointer-events-none disabled:opacity-30"
              )}
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              whileTap={reducedMotion ? undefined : { scale: 0.92 }}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300",
                "hover:border-primary hover:text-primary hover:bg-surface",
                "disabled:pointer-events-none disabled:opacity-30"
              )}
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="-mx-4 overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            ref={trackRef}
            className="flex cursor-grab active:cursor-grabbing will-change-transform"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -setWidth, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={onDragEnd}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.article
                key={`${t.name}-${i}`}
                className="group basis-[92%] md:basis-[72%] xl:basis-[46%] shrink-0 px-3"
              >
                <div
                  className={cn(
                    "group relative flex h-full flex-col rounded-[32px] border border-border/70 bg-card p-7 md:p-7",
                    "shadow-[0_2px_24px_-8px_rgba(15,23,42,0.06)]",
                    "transition-all duration-500 ease-out",
                    "group-hover:-translate-y-1 group-hover:border-border-strong",
                    "group-hover:shadow-[0_32px_64px_-32px_rgba(15,23,42,0.16)]"
                  )}
                >
                  {/* Icon + rating row */}
                  <div className="flex items-start justify-between">
                    <Quote
                      size={60}
                      strokeWidth={1.25}
                      className="text-primary/5"
                      aria-hidden="true"
                    />
                    <div className="flex gap-1 pt-1" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          strokeWidth={1.5}
                          className="fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Quote */}
                  <p className={cn(typography.small, "mt-4 text-text-primary/85")}>
                    {t.quote}
                  </p>
                  {/* Attribution */}
                  <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-1 ring-border"
                    />
                    <div>
                      <p className="font-[family-name:var(--font-manrope)] text-base font-semibold text-text-primary">
                        {t.name}
                      </p>
                      <p className={cn(typography.small, "mt-0.5")}>
                        {t.project} · {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Pagination dots */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex}
              whileTap={reducedMotion ? undefined : { scale: 0.85 }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400",
                i === activeIndex ? "w-7 bg-primary" : "w-1.5 bg-border hover:bg-border-strong"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}