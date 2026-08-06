"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { company } from "@/constants/company";
import { navigation } from "@/constants/navigation";

import { colors } from "@/design/colors";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";

import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 50;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-20 border-b transition-colors duration-200 ease-out",
        isScrolled
          ? "border-border bg-white/95 shadow-[0_1px_2px_rgba(15,23,42,0.06)] backdrop-saturate-150"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          layout.container,
          "grid h-full grid-cols-[auto_1fr_auto] items-center gap-6 lg:grid-cols-3"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            typography.h4,
            colors.heading,
            "justify-self-start rounded-sm tracking-tight transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
          )}
        >
          {company.name}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden justify-self-center lg:flex lg:items-center lg:gap-10"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-[family-name:var(--font-inter)] text-[15px] font-medium",
                colors.body,
                "rounded-sm transition-colors duration-200 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden justify-self-end lg:block">
          <Button>Get Free Quote</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={cn(
            "col-start-3 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-xl transition-colors duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
            "hover:bg-surface lg:hidden"
          )}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Scrim */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 top-20 bg-secondary/20 transition-opacity duration-200 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* Mobile Menu (side drawer) */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 right-0 top-20 z-50 h-[calc(100vh-5rem)] w-full max-w-xs",
          "border-l border-border bg-white shadow-[-4px_0_16px_rgba(15,23,42,0.08)]",
          "transition-transform duration-200 ease-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex h-full flex-col px-6 py-8"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "font-[family-name:var(--font-inter)] text-base font-medium",
                  colors.heading,
                  "rounded-lg px-2 py-3 transition-colors duration-200 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button className="mt-8 w-full" onClick={closeMenu}>
            Get Free Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}