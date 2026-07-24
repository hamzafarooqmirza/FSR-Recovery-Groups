"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { WhatsAppIcon, ChevronDownIcon, MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Logo variant="light" size="md" />

        <nav className="hidden items-center lg:flex">
          {navLinks.map((link, i) => (
            <div key={link.label} className="flex items-center">
              {i !== 0 && <span className="mx-4 h-4 w-px bg-white/25" aria-hidden="true" />}
              <a
                href={link.href}
                className="relative flex items-center gap-1 py-2 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
                {link.hasDropdown && <ChevronDownIcon className="h-2.5 w-2.5 text-red" />}
                {link.active && (
                  <span className="absolute -bottom-0.5 left-0 h-[3px] w-6 rounded-full bg-red" />
                )}
              </a>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="tel:+447888502989" icon={<WhatsAppIcon className="h-4 w-4" />}>
            Call Now
          </Button>
          <Button href="#contact" variant="outline">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 py-2.5 text-[15px] font-medium text-white/90"
              >
                {link.label}
                {link.hasDropdown && <ChevronDownIcon className="h-2.5 w-2.5 text-red" />}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Button href="tel:+447888502989" icon={<WhatsAppIcon className="h-4 w-4" />}>
              Call Now
            </Button>
            <Button href="#contact" variant="outline">
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
