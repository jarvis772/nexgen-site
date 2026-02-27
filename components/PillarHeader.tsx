import SectionLabel from "./SectionLabel";

interface PillarHeaderProps {
  name: string;
  subtitle: string;
  framing: string;
}

export default function PillarHeader({
  name,
  subtitle,
  framing,
}: PillarHeaderProps) {
  return (
    <section className="flex min-h-[420px] flex-col md:flex-row">
      {/* Left panel — dark */}
      <div className="flex w-full flex-col justify-center bg-navy px-8 py-12 md:w-[44%] md:px-12">
        <SectionLabel>PILLAR 01</SectionLabel>
        <h1 className="mt-4 font-serif text-[48px] font-light leading-tight text-cream">
          {name}
        </h1>
        <p className="mt-3 font-sans text-[16px] font-normal text-gold-light">
          {subtitle}
        </p>
        <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-[var(--text-light)]">
          {framing}
        </p>
      </div>

      {/* Right panel — cream with SVG */}
      <div className="flex w-full items-center justify-center bg-cream px-8 py-12 md:w-[56%]">
        <svg
          viewBox="0 0 400 300"
          className="h-auto w-full max-w-[360px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection lines */}
          <line x1="200" y1="80" x2="120" y2="160" stroke="#dcc488" strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="80" x2="280" y2="140" stroke="#dcc488" strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="80" x2="200" y2="200" stroke="#b79450" strokeWidth="1" opacity="0.4" />
          <line x1="120" y1="160" x2="200" y2="200" stroke="#dcc488" strokeWidth="1" opacity="0.5" />
          <line x1="280" y1="140" x2="200" y2="200" stroke="#dcc488" strokeWidth="1" opacity="0.5" />
          <line x1="120" y1="160" x2="80" y2="230" stroke="#dcc488" strokeWidth="1" opacity="0.3" />
          <line x1="280" y1="140" x2="320" y2="220" stroke="#dcc488" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="200" x2="80" y2="230" stroke="#b79450" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="200" x2="320" y2="220" stroke="#b79450" strokeWidth="1" opacity="0.3" />

          {/* Outer nodes */}
          <circle cx="120" cy="160" r="14" fill="#0a0e1a" opacity="0.08" />
          <circle cx="120" cy="160" r="8" fill="none" stroke="#b79450" strokeWidth="1.5" />
          <circle cx="280" cy="140" r="14" fill="#0a0e1a" opacity="0.08" />
          <circle cx="280" cy="140" r="8" fill="none" stroke="#b79450" strokeWidth="1.5" />
          <circle cx="80" cy="230" r="12" fill="#0a0e1a" opacity="0.06" />
          <circle cx="80" cy="230" r="6" fill="none" stroke="#dcc488" strokeWidth="1" />
          <circle cx="320" cy="220" r="12" fill="#0a0e1a" opacity="0.06" />
          <circle cx="320" cy="220" r="6" fill="none" stroke="#dcc488" strokeWidth="1" />

          {/* Central hub node */}
          <circle cx="200" cy="200" r="18" fill="#0a0e1a" opacity="0.06" />
          <circle cx="200" cy="200" r="11" fill="none" stroke="#b79450" strokeWidth="2" />
          <circle cx="200" cy="200" r="4" fill="#b79450" />

          {/* Top node */}
          <circle cx="200" cy="80" r="20" fill="#0a0e1a" opacity="0.05" />
          <circle cx="200" cy="80" r="13" fill="none" stroke="#0a0e1a" strokeWidth="1.5" opacity="0.3" />
          <circle cx="200" cy="80" r="5" fill="#b79450" opacity="0.7" />

          {/* Label */}
          <text
            x="200"
            y="270"
            textAnchor="middle"
            className="font-sans"
            fill="#0a0e1a"
            opacity="0.25"
            fontSize="10"
            letterSpacing="3"
          >
            ORCHESTRATION
          </text>
        </svg>
      </div>
    </section>
  );
}
