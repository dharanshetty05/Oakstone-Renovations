"use client";

import Link from "next/link";

import { company } from "@/constants/company";
import { navigation } from "@/constants/navigation";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className={layout.container}>
        <div
          className={cn(
            layout.section,
            "grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {/* Company */}
          <div className={layout.gapContent}>
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold text-white">
              {company.name}
            </h3>

            <p className="max-w-sm text-white/70">
              Crafting beautiful homes through quality
              workmanship, thoughtful design, and trusted
              expertise.
            </p>
          </div>

          {/* Navigation */}
          <div className={layout.gapContent}>
            <h4 className="font-[family-name:var(--font-manrope)] text-xl font-semibold text-white">
              Quick Links
            </h4>

            <nav aria-label="Footer Navigation">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      <span className="text-white/70">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className={layout.gapContent}>
            <h4 className="font-[family-name:var(--font-manrope)] text-xl font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-white/60">
                  Phone
                </p>

                <a
                  href={`tel:${company.phone}`}
                  className="mt-1 inline-block text-white transition-opacity hover:opacity-80"
                >
                  {company.phone}
                </a>
              </div>

              <div>
                <p className="text-sm text-white/60">
                  Email
                </p>

                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 inline-block text-white transition-opacity hover:opacity-80"
                >
                  {company.email}
                </a>
              </div>

              <div>
                <p className="text-sm text-white/60">
                  Service Areas
                </p>

                <p className="mt-1 text-white">
                  {company.areas.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-sm text-white/60">
            © 2026 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}