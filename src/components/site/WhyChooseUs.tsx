import { Zap, ShieldCheck, BadgeIndianRupee, Sparkles } from "lucide-react";

const items = [
  { icon: Zap, title: "Lightning-fast service", desc: "Walk-in repairs handled in under 60 minutes for most issues." },
  { icon: ShieldCheck, title: "Genuine parts only", desc: "OEM-grade components with traceable warranty serials." },
  { icon: BadgeIndianRupee, title: "Best price, period", desc: "Transparent pricing — no hidden fees, no surprises." },
  { icon: Sparkles, title: "White-glove care", desc: "Every device returned cleaner than you brought it in." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">Why Geethan</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink leading-tight">
            Crafted with care.<br />
            <span className="text-gradient">Backed by trust.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Every device that crosses our counter gets the same obsessive attention to detail — whether it's a quick fix or a flagship trade-in.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="px-5 py-4 rounded-2xl bg-ink text-white">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-xs text-white/60 mt-0.5">Google rating</div>
            </div>
            <div className="px-5 py-4 rounded-2xl bg-muted">
              <div className="text-2xl font-bold text-ink">12+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Years of trust</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`rounded-3xl p-6 hover-lift ${i % 2 === 0 ? "bg-muted" : "bg-ink text-white"}`}
            >
              <div className={`w-12 h-12 rounded-2xl grid place-items-center ${i % 2 === 0 ? "bg-cta-gradient text-white" : "bg-white/10 text-cyan-glow"}`}>
                <it.icon className="w-6 h-6" />
              </div>
              <div className={`mt-5 font-bold ${i % 2 === 0 ? "text-ink" : "text-white"}`}>{it.title}</div>
              <div className={`mt-2 text-sm ${i % 2 === 0 ? "text-muted-foreground" : "text-white/70"}`}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
