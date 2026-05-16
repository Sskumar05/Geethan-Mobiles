import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do you provide warranty on repairs?", a: "Yes — every repair carries a 90-day warranty covering both parts and labour. Just bring the device back if anything feels off." },
  { q: "How long does a screen replacement take?", a: "Most popular models are turned around in 30–45 minutes. Walk-ins welcome — no appointment needed for common repairs." },
  { q: "Are pre-owned phones genuine?", a: "Absolutely. Every device is thoroughly inspected, battery-tested, IMEI verified, and comes with a written warranty." },
  { q: "How much can I get for my old phone?", a: "Valuations depend on model, age, and condition. Share your phone details on WhatsApp and we'll send an instant quote." },
  { q: "Do you use genuine parts?", a: "We use OEM-grade or original parts only. Counterfeit parts cause more damage long-term — we don't cut corners." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">FAQs</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink">Got questions?</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className={`rounded-2xl border bg-white overflow-hidden transition-all ${isOpen ? "border-samsung-bright shadow-glow" : "border-border"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <span className={`shrink-0 w-8 h-8 grid place-items-center rounded-full transition-all ${isOpen ? "bg-cta-gradient text-white rotate-45" : "bg-muted text-ink"}`}>
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
