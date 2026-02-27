"use client";

interface EmailCaptureProps {
  headline?: string;
  placeholder?: string;
}

export default function EmailCapture({
  headline = "Get orchestration insights weekly",
  placeholder = "your@email.com",
}: EmailCaptureProps) {
  return (
    <section className="bg-navy px-6 py-16">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="font-serif text-[28px] font-normal text-cream">
          {headline}
        </h2>
        <form
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={placeholder}
            className="w-full rounded-sm bg-cream px-4 py-2.5 font-sans text-[14px] text-navy outline-none placeholder:text-[var(--text-muted)] sm:w-72"
          />
          <button
            type="submit"
            className="w-full rounded-sm bg-gold px-6 py-2.5 font-sans text-[14px] font-semibold text-navy transition-colors hover:bg-gold-light sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 font-sans text-[11px] font-light text-[var(--text-light)]">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
