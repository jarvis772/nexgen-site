import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row">
      {/* Left — navy */}
      <div className="flex w-full flex-col justify-center bg-navy px-8 py-10 md:w-1/2 md:px-12">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[2.5px] text-gold">
          Nexgen Precision Medicine
        </p>
        <p className="mt-2 font-sans text-[13px] font-light leading-relaxed text-[var(--text-light)]">
          Intelligence at the intersection of biology and AI
        </p>
      </div>

      {/* Right — cream */}
      <div className="flex w-full flex-col justify-center bg-cream px-8 py-10 md:w-1/2 md:items-end md:px-12">
        <div className="flex flex-col gap-1 md:items-end">
          <Link
            href="https://linkedin.com/in/jivesh-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] font-normal text-[var(--text-dark)] underline-offset-2 hover:underline"
          >
            LinkedIn
          </Link>
          <a
            href="mailto:contact@nexgenprecisionmedicine.com"
            className="font-sans text-[13px] font-normal text-[var(--text-dark)] underline-offset-2 hover:underline"
          >
            contact@nexgenprecisionmedicine.com
          </a>
          <p className="mt-2 font-sans text-[11px] text-[var(--text-muted)]">
            &copy; 2026 Nexgen Precision Medicine
          </p>
        </div>
      </div>
    </footer>
  );
}
