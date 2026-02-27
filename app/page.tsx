import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const pillars = [
  { href: "/orchestration", label: "The Orchestration Layer" },
  { href: "/bench-to-bedside", label: "Bench to Bedside" },
  { href: "/clinical-workforce", label: "Clinical Workforce" },
  { href: "/governance", label: "Governance & Trust" },
];

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-60px)] flex-col justify-between bg-navy px-6 py-20">
        <div className="mx-auto max-w-[900px]">
          <h1 className="font-serif text-[48px] font-light leading-tight text-cream md:text-[72px]">
            AI is now orchestrating biology.
          </h1>
          <p className="mt-6 max-w-[600px] font-sans text-[16px] font-light leading-relaxed text-[var(--text-light)]">
            Precision medicine is no longer about one test, one drug, one
            decision. It is about systems — multi-omic data pipelines,
            foundation models, and agentic workflows — converging on a single
            patient. We track how that convergence is happening.
          </p>
        </div>

        {/* Pillar bar */}
        <div className="mx-auto mt-16 grid w-full max-w-[900px] grid-cols-2 gap-px border-t border-gold/10 md:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group border-b border-gold/10 px-4 py-5 transition-colors hover:bg-gold/5 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-gold/60 transition-colors group-hover:text-gold">
                {p.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
