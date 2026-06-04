import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-bayelsa-gold text-bayelsa-deep hover:bg-amber-300 focus:ring-bayelsa-gold/40",
    secondary:
      "bg-bayelsa-green text-white hover:bg-bayelsa-deep focus:ring-bayelsa-green/25",
    light:
      "bg-white text-bayelsa-deep hover:bg-bayelsa-palm focus:ring-white/40",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-bold shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
