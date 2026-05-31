"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isLight = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-cornsilk/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className={`font-heading text-xl lg:text-2xl tracking-wide transition-colors duration-500 ${
                isLight ? "text-cornsilk" : "text-black-forest"
              }`}
            >
              Kim Hilton Studio
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-body text-xs uppercase tracking-widest transition-colors duration-300 relative group ${
                      isLight ? "text-cornsilk" : "text-black-forest"
                    } ${isActive ? "!text-copperwood" : ""}`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-copperwood transition-all duration-300 group-hover:w-full ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col justify-center gap-[6px] w-8 h-8 transition-colors duration-500 ${
                isLight ? "text-cornsilk" : "text-black-forest"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black-forest flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className="font-heading text-5xl text-cornsilk hover:text-sunlit-clay transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.a
              href="mailto:admin@kimhiltonstudio.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="absolute bottom-12 font-body text-xs uppercase tracking-widest text-cornsilk/40 hover:text-cornsilk/70 transition-colors"
            >
              admin@kimhiltonstudio.com
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
