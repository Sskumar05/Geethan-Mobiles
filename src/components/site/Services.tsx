import { ArrowUpRight, Wrench, Smartphone, Banknote, Headphones } from "lucide-react";

const services = [
  { icon: Wrench, title: "Fix My Device", desc: "Pro-grade repairs with genuine parts.", grad: "from-samsung-bright to-purple-accent" },
  { icon: Smartphone, title: "Buy Pre-Owned", desc: "Certified phones at unbeatable prices.", grad: "from-purple-accent to-cyan-glow" },
  { icon: Banknote, title: "Sell My Phone", desc: "Instant valuation, instant payment.", grad: "from-emerald-success to-cyan-glow" },
  { icon: Headphones, title: "Accessories", desc: "Cases, chargers, audio & more.", grad: "from-cyan-glow to-samsung-bright" },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">What we do</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink">
            Everything mobile, <span className="text-gradient">one destination</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From quick fixes to premium upgrades, we handle every step with craftsmanship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative rounded-3xl bg-white border border-border p-6 hover-lift overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${s.grad} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity`} />
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} grid place-items-center shadow-glow`}>
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="relative mt-6 text-xl font-bold text-ink">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <button className="relative mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink text-white group-hover:bg-cta-gradient transition-all group-hover:-translate-y-1">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
