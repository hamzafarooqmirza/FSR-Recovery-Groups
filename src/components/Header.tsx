"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header({ activePath = "/" }: { activePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-red/20 bg-navy py-2 text-white/70">
        <div className="container-site flex items-center justify-center text-xs md:text-sm">
          <span>
            <i className="fas fa-triangle-exclamation mr-1"></i>24/7 Emergency Towing &amp; Recovery – Fast Response, Call Now
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 shadow-md backdrop-blur">
        <div className="container-site flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo variant="light" size="md" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.href === activePath
                    ? "nav-arrow text-red"
                    : "nav-arrow text-white/85 transition hover:text-red"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+447888502989"
              className="animated-contact rounded-full bg-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-dark"
            >
              <i className="fa-solid fa-phone mr-2"></i>Call Now
            </a>
            <a
              href="https://wa.me/447888502989"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
            >
              <i className="fab fa-whatsapp mr-2"></i>WhatsApp
            </a>
          </div>

          <button
            className="h-11 w-11 rounded-xl bg-red text-white lg:hidden"
            aria-label="Open mobile menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-navy lg:hidden">
            <div className="container-site grid gap-3 py-4 font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    link.href === activePath
                      ? "py-2 text-red"
                      : "py-2 text-white/85 hover:text-red"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-chevron-right mr-2 text-xs text-red"></i>
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+447888502989"
                className="mt-2 rounded-xl bg-red px-5 py-3 text-center font-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href="https://wa.me/447888502989"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-whatsapp px-5 py-3 text-center font-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
