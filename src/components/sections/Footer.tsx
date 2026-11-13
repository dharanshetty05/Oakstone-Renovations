
import Link from "next/link";
import { company } from "@/constants/company";
import { navigation } from "@/constants/navigation";
import { layout } from "@/design/layout";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#F4F1E8]">
      <div
        className={`${layout.container} relative z-10 w-full pt-14 pb-8 sm:pt-16 sm:pb-10 lg:pt-20`}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">

          {/* Brand and Legal */}
          <div className="shrink-0">
            <Link
              href="/"
              aria-label={`${company.name} home`}
              className="inline-block text-[17px] font-semibold tracking-tight text-[#242C26] transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#193B2D]"
            >
              {company.name}
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-[12px] leading-5 text-[#77766F]">
                © {new Date().getFullYear()} {company.name}. All rights reserved.
              </p>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-[#D6D0C4] sm:block"
              />

              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-[12px] text-[#77766F] transition-colors hover:text-[#242C26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#193B2D]"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="text-[12px] text-[#77766F] transition-colors hover:text-[#242C26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#193B2D]"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8 lg:justify-end">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1 text-[13px] leading-5 text-[#666B65] transition-colors hover:text-[#242C26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#193B2D]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Space for the Oversized Wordmark */}
        <div className="h-[clamp(5rem,9vw,8rem)]" />
      </div>

      {/* Oversized Background Wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.08em] select-none overflow-hidden whitespace-nowrap text-center"
      >
        <span className="inline-block text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-[#242C26]/[0.045]">
          Oakstone
        </span>
      </div>
    </footer>
  );
}
