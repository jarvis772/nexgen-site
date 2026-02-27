import SectionLabel from "./SectionLabel";

interface WhatsNewProps {
  items: {
    source: string;
    date: string;
    headline: string;
    take: string;
    url?: string;
  }[];
}

export default function WhatsNew({ items }: WhatsNewProps) {
  return (
    <section className="bg-[#f0efeb] px-6 py-16">
      <div className="mx-auto max-w-[720px]">
        <SectionLabel>WHAT&apos;S NEW</SectionLabel>
        <h2 className="mt-3 font-serif text-[32px] font-normal text-navy">
          This week in orchestration
        </h2>

        <div className="mt-8 space-y-0">
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-5 ${i !== items.length - 1 ? "border-b border-[var(--border-light)]" : ""}`}
            >
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full border border-gold/40 px-2 py-0.5 font-sans text-[9px] font-medium uppercase tracking-[1.5px] text-gold">
                  {item.source}
                </span>
                <span className="font-sans text-[11px] text-[var(--text-muted)]">
                  {item.date}
                </span>
              </div>
              <p className="mt-1 font-sans text-[14px] font-medium text-[var(--text-dark)]">
                {item.headline}
              </p>
              <p className="mt-1 font-sans text-[13px] font-light italic text-[var(--text-muted)]">
                Our take: {item.take}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
