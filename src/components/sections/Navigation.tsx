"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { company } from "@/constants/company";
import { navigation } from "@/constants/navigation";

import { colors } from "@/design/colors";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";

import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-20 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          layout.container,
          "flex h-full items-center justify-between"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            typography.h4,
            colors.heading,
            "transition-opacity hover:opacity-80"
          )}
        >
          {company.name}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                typography.button,
                colors.heading,
                "transition-colors hover:text-primary focus:outline-none focus:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button>
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary/20",
            "hover:bg-surface lg:hidden"
          )}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "max-h-screen border-t border-border bg-white shadow-sm"
            : "max-h-0"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className={cn(layout.container, "flex flex-col py-6")}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                typography.button,
                colors.heading,
                "rounded-lg py-3 transition-colors hover:text-primary focus:outline-none focus:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}

          <Button
            className="mt-6 w-full"
            onClick={closeMenu}
          >
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}