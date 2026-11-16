"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { IntroOverlay } from "./IntroOverlay";

const NAV_ITEMS = [
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Why Choose Us", link: "#why-choose-us" },
  { name: "Reviews", link: "#reviews" },
] as const;

const BRAND_NAME = "Oakstone Renovations";
const CTA_LABEL = "Get a Free Quote";
const CTA_LINK = "#contact";

const SCROLL_THRESHOLD = 72;

type IntroPhase = "pending" | "intro" | "moving" | "done" | "skip";

type NavbarTransition = {
  duration?: number;
  type?: "spring" | "tween";
  stiffness?: number;
  damping?: number;
  mass?: number;
};

function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  onClose?: () => void,
) {
  event.preventDefault();

  onClose?.();
}

/* -------------------------------------------------------------------------- */
/*                                  Navbar                                    */
/* -------------------------------------------------------------------------- */

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navRevealed, setNavRevealed] = useState(false);

  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const desktopLogoRef = useRef<HTMLAnchorElement>(null);
  const mobileLogoRef = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_THRESHOLD);
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const revealNav = useCallback(() => {
    setNavRevealed(true);
    window.dispatchEvent(new Event("oakstone:intro-complete"));
  }, []);

  const transition: NavbarTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 220, damping: 32, mass: 0.6 };

  return (
    <>

      <IntroOverlay onComplete={revealNav} />
      
      <header className="fixed inset-x-0 top-0 z-50">
        <DesktopNavbar
          scrolled={scrolled}
          transition={transition}
          navRevealed={navRevealed}
          logoRef={desktopLogoRef}
        />

        <MobileNavbar
          scrolled={scrolled}
          transition={transition}
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
          onClose={closeMobileMenu}
          reducedMotion={Boolean(prefersReducedMotion)}
          navRevealed={navRevealed}
          logoRef={mobileLogoRef}
        />
      </header>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Desktop Navbar                               */
/* -------------------------------------------------------------------------- */

function DesktopNavbar({
  scrolled,
  transition,
  navRevealed,
  logoRef,
}: {
  scrolled: boolean;
  transition: NavbarTransition;
  navRevealed: boolean;
  logoRef: RefObject<HTMLAnchorElement | null>;
}) {
  return (
    <motion.div
      animate={{
        width: scrolled ? "92%" : "100%",
        marginTop: scrolled ? 12 : 0,
        paddingLeft: scrolled ? 20 : 32,
        paddingRight: scrolled ? 20 : 32,
        paddingTop: scrolled ? 10 : 18,
        paddingBottom: scrolled ? 10 : 18,
        backgroundColor: scrolled
          ? "rgba(244, 241, 235, 0.88)"
          : "rgba(244, 241, 235, 0)",
        borderColor: scrolled
          ? "rgba(38, 37, 34, 0.09)"
          : "rgba(38, 37, 34, 0)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(38, 37, 34, 0.06)"
          : "0 0 0 rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={transition}
      className="relative mx-auto hidden max-w-6xl flex-row items-center justify-between rounded-full border lg:flex"
      style={{
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
    >
      <Logo logoRef={logoRef} scrolled={scrolled} />

      <DesktopNavLinks scrolled={scrolled} />

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={
          navRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -6 }
        }
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="contents"
      >
        <NavbarCta href={CTA_LINK} className="px-5 py-2.5">
          {CTA_LABEL}
        </NavbarCta>
      </motion.div>
    </motion.div>
  );
}

function DesktopNavLinks({ scrolled }: { scrolled: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav
      aria-label="Primary navigation"
      className="absolute inset-0 hidden items-center justify-center gap-1 lg:flex"
    >
      <ul
        onMouseLeave={() => setHoveredIndex(null)}
        className="flex items-center gap-0.5 xl:gap-1"
      >
        {NAV_ITEMS.map((item, index) => (
          <li key={item.name} className="relative">
            <a
              href={item.link}
              onClick={(event) =>
                scrollToSection(event, item.link.slice(1))
              }
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative z-10 block rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 xl:px-3.5 xl:text-sm motion-reduce:transition-none ${
                scrolled
                  ? "text-neutral-600 hover:text-neutral-900 focus-visible:ring-offset-[#f4f1eb]"
                  : "text-white hover:text-white/75 focus-visible:ring-offset-neutral-900"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2`}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="oakstone-desktop-nav-hover"
                  className={`absolute inset-0 -z-10 rounded-full ${
                    scrolled ? "bg-neutral-900/5" : "bg-white/10"
                  }`}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Mobile Navbar                               */
/* -------------------------------------------------------------------------- */

function MobileNavbar({
  scrolled,
  transition,
  isOpen,
  onToggle,
  onClose,
  reducedMotion,
  navRevealed,
  logoRef,
}: {
  scrolled: boolean;
  transition: NavbarTransition;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  reducedMotion: boolean;
  navRevealed: boolean;
  logoRef: RefObject<HTMLAnchorElement | null>;
}) {
  return (
    <motion.div
      animate={{
        width: scrolled ? "94%" : "100%",
        marginTop: scrolled ? 10 : 0,
        paddingLeft: scrolled ? 16 : 20,
        paddingRight: scrolled ? 16 : 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: scrolled || isOpen ? 24 : 28,
        backgroundColor: scrolled
          ? "rgba(244, 241, 235, 0.94)"
          : "rgba(244, 241, 235, 0)",
        borderColor: scrolled
          ? "rgba(38, 37, 34, 0.09)"
          : "rgba(38, 37, 34, 0)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(38, 37, 34, 0.06)"
          : "0 0 0 rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={transition}
      className="relative mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col border lg:hidden"
      style={{
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <Logo logoRef={logoRef} scrolled={scrolled} />

        <motion.button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="oakstone-mobile-nav-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: navRevealed ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 motion-reduce:transition-none ${
            scrolled
              ? "text-neutral-900 focus-visible:ring-offset-[#f4f1eb]"
              : "text-white focus-visible:ring-offset-neutral-900"
          }`}
        >
          {isOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="oakstone-mobile-nav-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: "easeOut" }
            }
            className="flex w-full flex-col items-stretch gap-1 overflow-hidden rounded-2xl bg-[#f4f1eb] px-2 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(event) =>
                  scrollToSection(event, item.link.slice(1), onClose)
                }
                className="w-full rounded-xl px-4 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 motion-reduce:transition-none"
              >
                {item.name}
              </a>
            ))}

            <NavbarCta
              href={CTA_LINK}
              onClick={onClose}
              className="mt-2 w-full py-3"
            >
              {CTA_LABEL}
            </NavbarCta>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Shared subparts                               */
/* -------------------------------------------------------------------------- */

function Logo({
  logoRef,
  scrolled,
}: {
  logoRef: RefObject<HTMLAnchorElement | null>;
  scrolled: boolean;
}) {
  return (
    <a
      ref={logoRef}
      href="#home"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      aria-label={`${BRAND_NAME} home`}
      className={`relative z-10 flex items-center rounded-full px-1 py-1 text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 ${
        scrolled
          ? "text-neutral-900 focus-visible:ring-offset-[#f4f1eb]"
          : "text-white focus-visible:ring-offset-neutral-900"
      }`}
    >
      {BRAND_NAME}
    </a>
  );
}

function NavbarCta({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative z-10 inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-center text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className ?? ""}`}
    >
      {children}
    </a>
  );
}
