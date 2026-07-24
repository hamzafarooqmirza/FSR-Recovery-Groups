import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  icon?: ReactNode;
  className?: string;
};

export function Button({ href, children, variant = "solid", icon, className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-200 whitespace-nowrap";
  const styles =
    variant === "solid"
      ? "bg-red text-white hover:bg-red-dark"
      : "border border-white/70 text-white hover:bg-white hover:text-navy";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {icon}
      {children}
    </Link>
  );
}
