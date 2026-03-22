"use client";

export function Logo({
  size = "md",
  variant = "dark",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <span className={`${sizes[size]} font-heading font-bold tracking-tight`}>
      <span className={variant === "dark" ? "text-white" : "text-navy"}>
        English
      </span>
      <span className="text-amber">4U</span>
    </span>
  );
}
