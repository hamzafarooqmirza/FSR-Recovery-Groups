"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { serviceNavigation } from "@/data/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header({ activePath = "/" }: { activePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.href === "/services" ? (
                <div
                  key={link.label}
                  className="relative"
                  onKeyDown={(event) => event.key === "Escape" && setIsServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-arrow flex items-center gap-1.5 py-7 transition hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red ${
                      activePath.startsWith("/services") ? "text-red" : "text-white/85"
                    }`}
                    aria-expanded={isServicesOpen}
                    aria-controls="desktop-services-menu"
                    aria-haspopup="menu"
                    onClick={() => setIsServicesOpen((open) => !open)}
                  >
                    Services
                    <i className={`fa-solid fa-chevron-down text-[10px] transition ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    id="desktop-services-menu"
                    className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 rounded-2xl border border-white/10 bg-navy p-2 shadow-2xl transition duration-200 ${
                      isServicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <Link
                      href="/services"
                      className="block rounded-xl border-b border-white/10 px-4 py-3 text-white transition hover:bg-white/10 hover:text-red focus-visible:outline-2 focus-visible:outline-red"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services
                    </Link>
                    {serviceNavigation.map((service) => (
                      <Link
                        key={service.key}
                        href={service.href}
                        className="block rounded-xl px-4 py-2.5 text-white/80 transition hover:bg-white/10 hover:text-red focus-visible:outline-2 focus-visible:outline-red"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
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
              )
            )}
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
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-white/10 bg-navy lg:hidden">
            <div className="container-site max-h-[calc(100dvh-7rem)] overflow-y-auto py-4 font-semibold">
              {navLinks.map((link) =>
                link.href === "/services" ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-lg py-3 text-left ${
                        activePath.startsWith("/services") ? "text-red" : "text-white/85"
                      }`}
                      aria-expanded={isMobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      onClick={() => setIsMobileServicesOpen((open) => !open)}
                    >
                      <span>
                        <i className="fa-solid fa-chevron-right mr-2 text-xs text-red" />
                        Services
                      </span>
                      <i className={`fa-solid fa-chevron-down mr-2 text-xs transition ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div id="mobile-services-menu" className="ml-3 grid gap-1 border-l border-red/30 pb-2 pl-4">
                        <Link
                          href="/services"
                          className="rounded-lg px-3 py-2.5 text-white hover:bg-white/5 hover:text-red"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          View All Services
                        </Link>
                        {serviceNavigation.map((service) => (
                          <Link
                            key={service.key}
                            href={service.href}
                            className="rounded-lg px-3 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-red"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              )}
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
