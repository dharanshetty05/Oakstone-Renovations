"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Kitchen Renovations",
    description:
      "Beautiful kitchens designed for everyday living with premium finishes and practical layouts.",
    image:
      "https://images.unsplash.com/photo-1682888813913-e13f18692019?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern kitchen with a marble island and white cabinetry.",
  },
  {
    title: "Bathroom Renovations",
    description:
      "Upgrade your bathroom with elegant finishes, smart layouts, and lasting quality.",
    image:
      "https://images.unsplash.com/photo-1771929662486-f793e08f0f16?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary bathroom with a glass-enclosed shower and marble walls.",
  },
  {
    title: "Home Extensions",
    description:
      "Create more living space with seamless extensions tailored to your home.",
    image:
      "https://images.unsplash.com/photo-1760067537293-6b30141d6a52?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary home exterior with wood and stone cladding.",
  },
  {
    title: "Full Home Renovations",
    description:
      "Complete transformations that modernise your home while preserving its character.",
    image:
      "https://images.unsplash.com/photo-1586982599726-11708daaceca?auto=format&fit=crop&w=1200&q=80",
    alt: "Renovated house exterior with a welcoming garden and porch.",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 8);
    setCanScrollNext(track.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (!track) return;
    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateScrollState]);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-service-card]");
    const distance = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="bg-amber-50"
      aria-labelledby="services-heading"
    >
      <div className={cn(layout.section, layout.container)}>
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-9">
          <div className="max-w-2xl">
            <h2 id="services-heading" className={typography.h2}>
              Renovation Services for{" "}
              <span className="text-primary">Every Home</span>
            </h2>
            <p className={cn(typography.sectionDescription, "mt-4")}>
              Whether you&apos;re updating a single room or transforming your
              entire property, we deliver quality renovations designed around
              your lifestyle.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              disabled={!canScrollPrev}
              aria-label="Previous service"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-primary transition-all duration-200",
                "hover:border-border-strong hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-primary"
              )}
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              disabled={!canScrollNext}
              aria-label="Next service"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-all duration-200",
                "hover:bg-primary/90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-primary"
              )}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className={cn(
            "flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          )}
        >
          {services.map((service) => (
            <article
              key={service.title}
              data-service-card
              className={cn(
                "group flex w-[82%] flex-none flex-col snap-start overflow-hidden rounded-3xl bg-card",
                "border border-border transition-all duration-300",
                "sm:w-[55%] lg:w-[300px]",
                "hover:-translate-y-1 hover:border-border-strong hover:shadow-lg"
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 55vw, 300px"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className={cn(typography.h4, "min-h-[64px]")}>
                  {service.title}
                </h3>
                <p
                  className={cn(
                    typography.small,
                    "mt-3 min-h-[72px] line-clamp-3"
                  )}
                >
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="group/link mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-semibold text-primary"
                >
                  Read More
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}