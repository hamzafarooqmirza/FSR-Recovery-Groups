const sizeMap = {
  sm: { text: "text-2xl", sub: "text-[10px]", bars: "h-6" },
  md: { text: "text-3xl", sub: "text-xs", bars: "h-7" },
  lg: { text: "text-4xl", sub: "text-sm", bars: "h-9" },
};

export function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];
  const wordColor = variant === "light" ? "text-white" : "text-navy";

  return (
    <div className="flex items-center gap-2 leading-none select-none">
      <span className={`flex items-end gap-[3px] ${s.bars}`}>
        <span className="w-[3px] h-full bg-red rounded-sm" />
        <span className="w-[3px] h-full bg-red rounded-sm" />
      </span>
      <span className={`font-heading font-extrabold ${s.text} ${wordColor} tracking-tight`}>
        FSR
      </span>
      <span className="flex flex-col justify-center -space-y-1">
        <span className={`font-heading font-semibold ${s.sub} ${wordColor} tracking-wide`}>
          RECOVERY
        </span>
        <span className={`font-heading font-semibold ${s.sub} text-red tracking-wide`}>
          GROUPS
        </span>
      </span>
    </div>
  );
}
