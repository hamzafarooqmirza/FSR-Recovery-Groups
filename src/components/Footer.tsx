import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { PhoneIcon, MailIcon } from "./icons";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const helpLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
              Need Help Fast? Click Below To Get Your Free Quote Today And Let
              Us Handle The Rest!
            </p>
            <div className="mt-6">
              <Button href="#contact">Get a Free Quote</Button>
            </div>
          </div>

          <div className="border-white/15 lg:border-l lg:pl-10">
            <h3 className="font-heading text-lg font-bold text-red">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[15px] text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-white/15 lg:border-l lg:pl-10">
            <h3 className="font-heading text-lg font-bold text-red">Contact Us</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3 text-[15px] text-white/75">
                <PhoneIcon className="h-4 w-4 shrink-0 text-white/60" />
                <a href="tel:+447888502989" className="hover:text-white">
                  +447888502989
                </a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-white/75">
                <MailIcon className="h-4 w-4 shrink-0 text-white/60" />
                <a href="mailto:youremailhere@abc.com" className="hover:text-white">
                  youremailhere@abc.com
                </a>
              </li>
            </ul>
          </div>

          <div className="border-white/15 lg:border-l lg:pl-10">
            <h3 className="font-heading text-lg font-bold text-red">Help</h3>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[15px] text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red py-4">
        <p className="text-center text-[13px] text-white">
          {`© ${new Date().getFullYear()} FSR Recovery Groups All Rights Reserved. | Designed & Developed by Dedesign Solutions`}
        </p>
      </div>
    </footer>
  );
}
