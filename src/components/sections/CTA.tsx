"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/constants/company";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-primary"
    >
      <div className={cn(layout.container, layout.section)}>
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%]">
          {/* Left Content */}
          <div className="space-y-10">
            <SectionHeader
              align="left"
              eyebrow="Free Consultation"
              title="Let's Bring Your Vision to Life"
              description="Planning a renovation? Tell us about your project and receive a free, no-obligation quote from our experienced team."
              className="mb-0 [&>*]:text-white [&_.text-text-primary]:text-white [&_.text-text-secondary]:text-white/80 [&_.text-primary]:text-white"
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Phone
                    size={20}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className={typography.small}>Phone</p>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-1 block text-lg font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Mail
                    size={20}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className={typography.small}>Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-lg font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <MapPin
                    size={20}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className={typography.small}>
                    Service Areas
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    {company.areas.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
            <form className="space-y-6">
              <div>
                <h2
                  id="cta-heading"
                  className={typography.h3}
                >
                  Request Your Free Quote
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className={cn(
                      typography.small,
                      "mb-2 block text-text-primary"
                    )}
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={cn(
                      typography.small,
                      "mb-2 block text-text-primary"
                    )}
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={cn(
                      typography.small,
                      "mb-2 block text-text-primary"
                    )}
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className={cn(
                      typography.small,
                      "mb-2 block text-text-primary"
                    )}
                  >
                    Project Type
                  </label>

                  <select
                    id="project-type"
                    name="projectType"
                    defaultValue=""
                    className="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a project
                    </option>
                    <option>Kitchen Renovation</option>
                    <option>Bathroom Renovation</option>
                    <option>Home Extension</option>
                    <option>Full Home Renovation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={cn(
                      typography.small,
                      "mb-2 block text-text-primary"
                    )}
                  >
                    Tell Us About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="large"
                className="w-full"
              >
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}