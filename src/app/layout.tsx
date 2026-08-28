import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { IconFontLoader } from "@/components/IconFontLoader";
import { business } from "@/data/business";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${business.name}`,
    default: `${business.name} | 24/7 Car Recovery & Towing Services`,
  },
  description: `${business.name} provides fast, reliable 24/7 vehicle breakdown recovery, roadside assistance, accident recovery and vehicle transporting services.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <GoogleTagManager gtmId="GTM-MQ4STV94" />
      <head>
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          />
        </noscript>
      </head>
      <body className="pb-14 antialiased sm:pb-0">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQ4STV94"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <IconFontLoader />
        <ScrollAnimations />
        <FloatingButtons />
        {children}
      </body>
    </html>
  );
}
