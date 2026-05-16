import { IndianRupee, Search, Calculator, Wallet, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Tell us about your phone", desc: "Brand, model, condition — takes 30 seconds." },
  { icon: Calculator, title: "Get instant valuation", desc: "Fair, transparent price quote on the spot." },
  { icon: Wallet, title: "Walk out with cash", desc: "UPI, bank transfer or cash — your choice." },
];

const valuations = [
  { name: "iPhone 12", price: "Up to ₹28,500" },
  { name: "Galaxy S22", price: "Up to ₹32,000" },
  { name: "OnePlus 10 Pro", price: "Up to ₹26,800" },
];

export function Buyback() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-hero-gradient">
      {/* Floating rupees */}
      {[...Array(8)].map((_, i) => (
        <IndianRupee
          key={i}
          className="absolute text-white/10 animate-float-rupee"
          style={{
            top: `${10 + (i * 11) % 80}%`,
            left: `${5 + (i * 17) % 90}%`,
            width: `${24 + (i % 3) * 14}px`,
            height: `${24 + (i % 3) * 14}px`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-emerald-success/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-white text-xs font-medium mb-5">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-success" />
            Instant Buyback
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Sell your old phone.<br />
            <span className="text-gradient">Get paid today.</span>
          </h2>
          <p className="mt-5 text-white/75 max-w-md">
            Best-in-market valuations for your used device — walk in with your phone, walk out with cash.
          </p>

          <div className="mt-8 space-y-3">
            {valuations.map((v, i) => (
              <div key={v.name} data-aos="fade-up" data-aos-delay={i * 80} className="glass rounded-2xl px-5 py-4 flex items-center justify-between">
                <div className="text-white font-medium">{v.name}</div>
                <div className="text-emerald-success font-bold">{v.price}</div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/918825622722"
            className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-ink font-semibold shadow-glow-lg hover:-translate-y-0.5 transition-transform"
          >
            Get my quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-4" data-aos="fade-left">
          {steps.map((s, i) => (
            <div key={s.title} className="glass rounded-3xl p-6 flex gap-5">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white grid place-items-center shadow-glow">
                <s.icon className="w-6 h-6 text-samsung-bright" />
              </div>
              <div>
                <div className="text-xs text-cyan-glow font-bold uppercase tracking-wider">Step {i + 1}</div>
                <div className="mt-1 text-lg font-bold text-white">{s.title}</div>
                <div className="mt-1 text-sm text-white/70">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
