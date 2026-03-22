"use client";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <span className={`${sizes[size]} font-heading font-bold tracking-tight`}>
      <span className="text-navy">English</span>
      <span className="text-amber">4U</span>
    </span>
  );
}
