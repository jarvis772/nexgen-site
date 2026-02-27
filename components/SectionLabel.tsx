export default function SectionLabel({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`font-sans text-[10px] font-medium uppercase tracking-[3px] text-gold ${className}`}
    >
      {children}
    </span>
  );
}
