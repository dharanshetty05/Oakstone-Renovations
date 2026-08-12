"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

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

  const mobileNavContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const mobileNavItem: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" },
    },
  };

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
        <motion.div
          className="hidden justify-self-end lg:block"
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        >
          <Button>Get Free Quote</Button>
        </motion.div>
        {/* Mobile Toggle */}
        <motion.button
          ref={menuButtonRef}
          type="button"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
          className={cn(
            "relative col-start-3 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-xl transition-colors duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
            "hover:bg-surface lg:hidden"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span
                key="close"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: shouldReduceMotion ? 0 : 90 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: shouldReduceMotion ? 0 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -90 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
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
          <motion.div
            className="flex flex-col gap-1"
            initial="hidden"
            animate={isMobileMenuOpen ? "visible" : "hidden"}
            variants={mobileNavContainer}
          >
            {navigation.map((item) => (
              <motion.div key={item.href} variants={mobileNavItem}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "block font-[family-name:var(--font-inter)] text-base font-medium",
                    colors.heading,
                    "rounded-lg px-2 py-3 transition-colors duration-200 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-8"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Button className="w-full" onClick={closeMenu}>
              Get Free Quote
            </Button>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}