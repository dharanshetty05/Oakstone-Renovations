"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { company } from "@/constants/company";
import { navigation } from "@/constants/navigation";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-accent/20 bg-secondary text-white"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <motion.div
        className={layout.container}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
      >
        {/* ---------------------------------------------------- */}
        {/* Brand + contact — one aligned grid                    */}
        {/* ---------------------------------------------------- */}
        <div className="pt-20 pb-14 md:pt-24 md:pb-16 xl:pt-28 xl:pb-20">
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-10 lg:grid-cols-12 lg:items-start">
            {/* Brand */}
            <div className="lg:col-span-7">
              <p
                className={cn(
                  typography.h1,
                  "text-white text-5xl md:text-6xl xl:text-7xl leading-[0.95]"
                )}
              >
                Oakstone
                <br />
                Renovations
              </p>
              <p
                className={cn(
                  typography.bodyLg,
                  "mt-6 max-w-[36ch] text-white/55"
                )}
              >
                Renovations and interior architecture, considered from first
                sketch to final finish — built for how a home is actually
                lived in.
              </p>
            </div>
            {/* Contact — values lead, labels support */}
            <div className="lg:col-span-4 lg:col-start-9">
              <dl className="divide-y divide-white/10 border-y border-white/10">
                <div className="grid grid-cols-[auto,1fr] items-baseline gap-6 py-5">
                  <dt className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.16em] text-white/30">
                    Phone
                  </dt>
                  <dd className="text-right">
                    <a
                      href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                      className="font-[family-name:var(--font-inter)] text-lg font-medium text-white/90 transition-colors duration-300 hover:text-accent md:text-xl"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[auto,1fr] items-baseline gap-6 py-5">
                  <dt className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.16em] text-white/30">
                    Email
                  </dt>
                  <dd className="text-right">
                    <a
                      href={`mailto:${company.email}`}
                      className="break-all font-[family-name:var(--font-inter)] text-lg font-medium text-white/90 transition-colors duration-300 hover:text-accent md:text-xl"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[auto,1fr] items-baseline gap-6 py-5">
                  <dt className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.16em] text-white/30">
                    Areas
                  </dt>
                  <dd className="font-[family-name:var(--font-inter)] text-right text-base font-medium text-white/80">
                    {company.areas.join(" · ")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        {/* Navigation + legal — one grounded bar                 */}
        {/* ---------------------------------------------------- */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-inter)] text-sm text-white/60 transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="font-[family-name:var(--font-inter)] text-xs text-white/30">
              &copy; 2026 {company.name}. All rights reserved.
            </p>
            <span className="hidden h-3 w-px bg-white/15 md:inline-block" />
            <Link
              href="/privacy"
              className="font-[family-name:var(--font-inter)] text-xs text-white/30 transition-colors duration-300 hover:text-white/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-[family-name:var(--font-inter)] text-xs text-white/30 transition-colors duration-300 hover:text-white/70"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}