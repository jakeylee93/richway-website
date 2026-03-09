"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/extensions", label: "Extensions" },
  { href: "/loft-conversions", label: "Loft Conversions" },
  { href: "/renovations", label: "Renovations" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span
              className={`font-serif text-xl font-bold tracking-widest transition-colors ${
                scrolled || menuOpen ? "text-charcoal" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              RICHWAY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber ${
                  pathname === link.href
                    ? "text-amber"
                    : scrolled
                    ? "text-charcoal"
                    : "text-white"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-amber hover:bg-amber-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || menuOpen ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || menuOpen ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || menuOpen ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-mid-grey overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-warm-grey text-amber"
                      : "text-charcoal hover:bg-warm-grey"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-3 bg-amber hover:bg-amber-dark text-white font-semibold px-5 py-3 rounded text-center transition-colors"
              >
                Get a Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
