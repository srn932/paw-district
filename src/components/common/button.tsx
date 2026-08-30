import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonLink({ href, children, variant = "primary", className }: { href: string; children: React.ReactNode; variant?: "primary" | "light" | "outline"; className?: string }) {
  return (
    <Link href={href} className={cn(variant === "primary" ? "btn-primary" : variant === "light" ? "btn-light" : "btn-outline", "group", className)}>
      {children}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
