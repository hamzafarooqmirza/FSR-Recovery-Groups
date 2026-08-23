import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollAnimations } from "@/components/ScrollAnimations";

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
  metadataBase: new URL("https://fsrrecoverygroups.co.uk"),
  title: {
    template: "%s | FSR Recovery Groups",
    default: "FSR Recovery Groups | 24/7 Car Recovery & Towing Services",
  },
  description:
    "FSR Recovery Groups provides fast, reliable 24/7 vehicle breakdown recovery, roadside assistance, accident recovery and vehicle transporting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="pb-14 antialiased sm:pb-0">
        <ScrollAnimations />
        <FloatingButtons />
        {children}
      </body>
    </html>
  );
}
