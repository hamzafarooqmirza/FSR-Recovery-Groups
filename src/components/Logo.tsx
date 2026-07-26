import Image from "next/image";

const sizeMap = {
  sm: { height: 32, className: "h-8" },
  md: { height: 40, className: "h-10" },
  lg: { height: 52, className: "h-13" },
};

export function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];

  return (
    <span
      className={`inline-flex items-center rounded-lg px-2.5 py-1.5 ${
        variant === "light" ? "bg-white" : ""
      }`}
    >
      <Image
        src="/images/FSR Recovery Groups logo design.webp"
        alt="FSR Recovery Groups"
        width={742}
        height={191}
        priority
        className={`w-auto ${s.className}`}
      />
    </span>
  );
}
