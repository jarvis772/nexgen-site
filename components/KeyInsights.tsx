import SectionLabel from "./SectionLabel";

interface KeyInsightsProps {
  updatedAt: string;
  items: { lead: string; detail: string }[];
}

export default function KeyInsights({ updatedAt, items }: KeyInsightsProps) {
  return (
    <section className="bg-cream px-6 py-16">
      <div className="mx-auto max-w-[720px]">
        <SectionLabel>KEY INSIGHTS</SectionLabel>
        <h2 className="mt-3 font-serif text-[32px] font-normal text-navy">
          What you need to know
        </h2>
        <p className="mt-2 font-sans text-[11px] font-normal text-[var(--text-muted)]">
          Updated {updatedAt}
        </p>

        <ul className="mt-8 space-y-5">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[12px] leading-[22px] text-gold">
                ◆
              </span>
              <p className="font-sans text-[14px] leading-[22px]">
                <span className="font-semibold text-[var(--text-dark)]">
                  {item.lead}
                </span>
                <span className="font-light text-[var(--text-muted)]">
                  {" — "}
                  {item.detail}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
