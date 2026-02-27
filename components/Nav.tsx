"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/orchestration", label: "Orchestration" },
  { href: "/bench-to-bedside", label: "Bench to Bedside" },
  { href: "/clinical-workforce", label: "Workforce" },
  { href: "/governance", label: "Governance" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between bg-navy px-6">
      <Link
        href="/"
        className="font-sans text-[11px] font-semibold uppercase tracking-[2.5px] text-gold"
      >
        Nexgen Precision Medicine
      </Link>

      {/* Desktop */}
      <div className="hidden gap-6 md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-sans text-[11px] font-normal uppercase tracking-[1.5px] text-cream/60 transition-colors hover:text-gold"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="flex flex-col gap-1 md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="block h-px w-5 bg-gold" />
        <span className="block h-px w-5 bg-gold" />
        <span className="block h-px w-5 bg-gold" />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 top-[60px] flex w-full flex-col gap-4 bg-navy px-6 py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-[12px] font-normal uppercase tracking-[1.5px] text-cream/60 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
