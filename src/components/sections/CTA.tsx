
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/constants/company";
import { layout } from "@/design/layout";
import { cn } from "@/lib/utils";

export function CTA() {
  const phoneHref = `tel:${company.phone.replace(/[^\d+]/g, "")}`;

  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Renovation enquiry"
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-[#F4F1E8] py-12 sm:py-16 lg:py-20"
    >
      <div className={cn(layout.container, "px-5 sm:px-6")}>
        <div
          className="
            mx-auto max-w-4xl
            rounded-2xl sm:rounded-3xl
            bg-primary
            px-6 py-12
            text-center
            sm:px-12 sm:py-16
            lg:px-20 lg:py-[4.5rem]
          "
        >
          {/* Heading */}
          <h2
            id="cta-heading"
            className="
              mx-auto max-w-2xl
              text-[clamp(2rem,4.5vw,3.5rem)]
              font-semibold
              leading-[1.08]
              tracking-[-0.045em]
              text-[#F4F1E8]
            "
          >
            Planning a renovation?
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-5 max-w-xl
              text-sm leading-7
              text-white/75
              sm:text-base sm:leading-8
            "
          >
            Tell us what you have in mind. Whether you're
            ready to get started or still exploring ideas,
            we'd be happy to hear about your project.
          </p>

          {/* Primary CTA */}
          <a
            href={emailHref}
            className="
              group mt-8 inline-flex min-h-[50px]
              items-center justify-center gap-5
              rounded-full
              bg-[#F4F1E8]
              px-6 py-3
              text-sm font-semibold
              text-[#193B2D]
              transition-colors duration-200
              hover:bg-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[#193B2D]
            "
          >
            Discuss Your Project

            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* Secondary Contact */}
          <div className="mt-6 flex items-center justify-center">
            <a
              href={phoneHref}
              className="
                inline-flex items-center gap-2
                text-sm text-white/65
                transition-colors duration-200
                hover:text-white
                focus-visible:outline-none
                focus-visible:underline
              "
            >
              <Phone size={14} aria-hidden="true" />
              Prefer to call? {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
