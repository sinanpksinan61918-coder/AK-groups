"use client";

export default function CtaSection() {
  return (
    <section id="cta" className="bg-[#0d0d0d] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-[#2a2010] bg-[#111] p-8 sm:p-[56px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
                Interested?
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Book a Free Visit Today
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                Come see the hostel in person. Our team will walk you through the rooms and
                answer all your questions — no pressure, just a look around.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="tel:+919745214752"
                className="inline-flex items-center justify-center bg-[#c9a84c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0d0d0d] transition-all duration-300 hover:bg-[#d4b65e]"
              >
                📞 Call Us
              </a>
              <a
                href="https://wa.me/919745214752?text=Hi%2C%20I%27m%20interested%20in%20the%20hostel%20rooms%20at%20AK%20Groups.%20Can%20you%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#c9a84c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#c9a84c] transition-all duration-300 hover:bg-[#c9a84c]/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
