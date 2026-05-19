import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import {
  IndianRupee,
  Search,
  Calculator,
  Wallet,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  Smartphone,
  ShieldCheck,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/sell-my-phone")({
  component: SellMyPhonePage,
  head: () => ({
    meta: [
      { title: "Sell Your Phone for Instant Cash — Geethan Mobiles" },
      {
        name: "description",
        content:
          "Get the best price for your used smartphone in Thiruvarur. Instant valuation, same-day payment via cash or UPI. Sell iPhone, Samsung, OnePlus & all brands.",
      },
    ],
  }),
});

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Tell Us About Your Phone",
    desc: "Share your device brand, model, storage, and current condition. Takes under a minute.",
  },
  {
    icon: Calculator,
    step: "02",
    title: "Get Instant Valuation",
    desc: "We provide a fair, market-competitive price quote on the spot — no haggling.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Quick Inspection",
    desc: "A 5-minute physical check to confirm your phone's condition matches your description.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Walk Out with Cash",
    desc: "Receive instant payment via UPI, bank transfer or cash — your choice.",
  },
];

const valuations = [
  { name: "iPhone 14", condition: "Good", price: "₹48,500", trend: "+₹2,000 this week" },
  { name: "Samsung Galaxy S23", condition: "Excellent", price: "₹42,000", trend: "Stable" },
  { name: "iPhone 12", condition: "Good", price: "₹28,500", trend: "+₹1,500 this week" },
  { name: "OnePlus 11R", condition: "Good", price: "₹22,000", trend: "Stable" },
  { name: "Redmi Note 12 Pro", condition: "Fair", price: "₹11,000", trend: "-₹500 this week" },
  { name: "Samsung Galaxy S22", condition: "Excellent", price: "₹32,000", trend: "+₹1,000 this week" },
];

const brands = [
  "Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Vivo", "Oppo", "Nothing", "Google Pixel",
];

const whyUs = [
  { icon: TrendingUp, title: "Best Price Guaranteed", desc: "We match or beat any genuine offer in Thiruvarur." },
  { icon: Clock, title: "15-Minute Process", desc: "Walk in, get quoted, get paid — all in under 15 minutes." },
  { icon: ShieldCheck, title: "Secure & Private", desc: "Data wiped securely. Your personal data stays private." },
  { icon: Star, title: "1,200+ Happy Sellers", desc: "Trusted by over a thousand customers in Tamil Nadu." },
];

function SellMyPhonePage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-hero-gradient">
        {/* Floating rupee coins */}
        {[...Array(10)].map((_, i) => (
          <IndianRupee
            key={i}
            className="absolute text-white/8 animate-float-rupee pointer-events-none"
            style={{
              top: `${10 + (i * 9) % 80}%`,
              left: `${5 + (i * 13) % 90}%`,
              width: `${20 + (i % 4) * 12}px`,
              height: `${20 + (i % 4) * 12}px`,
              animationDelay: `${i * 0.45}s`,
            }}
          />
        ))}
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-emerald-success/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[20rem] h-[20rem] rounded-full bg-samsung-bright/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-emerald-success text-xs font-semibold uppercase tracking-wider mb-6">
              <IndianRupee className="w-3.5 h-3.5" /> Instant Buyback
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sell Your Phone. <br />
              <span className="text-gradient">Get Paid Today.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              Best-in-market valuations for your used device. Walk in with your phone, 
              walk out with cash — same day, no delays.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918825622722"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-ink font-bold shadow-glow-lg hover:scale-105 transition-transform"
              >
                Get My Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918825622722"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/15 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>

          {/* Live valuations panel */}
          <div data-aos="fade-left" className="space-y-3">
            <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between mb-2">
              <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Today's Prices</span>
              <span className="text-emerald-success text-xs font-bold animate-pulse">● Live</span>
            </div>
            {valuations.slice(0, 4).map((v, i) => (
              <div
                key={v.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="glass rounded-2xl px-5 py-4 flex items-center justify-between group hover:bg-white/15 transition-colors"
              >
                <div>
                  <div className="text-white font-semibold">{v.name}</div>
                  <div className="text-white/50 text-xs mt-0.5">{v.condition} condition</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-success font-bold text-lg">{v.price}</div>
                  <div className="text-white/40 text-xs mt-0.5">{v.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supported Brands ── */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8" data-aos="fade-up">
            We buy all major brands
          </p>
          <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  selectedBrand === brand
                    ? "bg-cta-gradient text-white border-transparent shadow-glow"
                    : "bg-muted text-ink border-border hover:border-samsung-bright hover:text-samsung-bright"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              The Process
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink">
              4 Steps to <span className="text-gradient">Instant Cash</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              The simplest sell-your-phone experience in Thiruvarur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative bg-white rounded-3xl p-7 border border-border group hover-lift text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cta-gradient text-white text-xs font-bold grid place-items-center shadow-glow">
                  {s.step}
                </div>
                <div className="mt-4 w-14 h-14 rounded-2xl bg-samsung-bright/10 grid place-items-center mx-auto mb-5 group-hover:bg-cta-gradient transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-samsung-bright group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Sell to Us ── */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              Why Choose Us
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink">
              We <span className="text-gradient">Value</span> Your Device
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div
                key={w.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-3xl p-7 border border-border group hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-cta-gradient grid place-items-center shadow-glow mb-5">
                  <w.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-ink mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Valuations Table ── */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-ink mb-3">
              Sample <span className="text-gradient">Buy Prices</span>
            </h2>
            <p className="text-muted-foreground">Prices vary by condition. Visit us for an accurate quote.</p>
          </div>
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-glow" data-aos="fade-up">
            {valuations.map((v, i) => (
              <div
                key={v.name}
                className={`flex items-center justify-between px-7 py-5 ${
                  i !== valuations.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/50 transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <Smartphone className="w-5 h-5 text-samsung-bright shrink-0" />
                  <div>
                    <div className="font-semibold text-ink">{v.name}</div>
                    <div className="text-xs text-muted-foreground">{v.condition} condition</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-emerald-success">{v.price}</div>
                  <div className="text-xs text-muted-foreground">{v.trend}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-5">
            * Prices are indicative. Final price depends on physical inspection.
          </p>
        </div>
      </section>

      {/* ── What We Accept ── */}
      <section className="py-20 bg-ink overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="text-xs uppercase tracking-[0.2em] text-emerald-success font-semibold mb-4">
              Accepted Conditions
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              We Buy <span className="text-gradient">Any Condition</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Whether your phone is in perfect condition or has a cracked screen — 
              we'll still give you a fair price.
            </p>
            <a
              href="https://wa.me/918825622722"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-success text-ink font-bold hover:scale-105 transition-transform"
            >
              Get My Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4" data-aos="fade-left">
            {[
              "Like New — Full price offered",
              "Good — Minor scratches, fully functional",
              "Fair — Some screen marks, working",
              "Cracked Screen — Still bought",
              "Water Damaged — Inspected & valued",
              "Not Turning On — Assessed case-by-case",
            ].map((c, i) => (
              <div
                key={c}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="glass rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <CheckCircle className="w-5 h-5 text-emerald-success shrink-0" />
                <span className="text-white font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div
            className="relative rounded-[2.5rem] overflow-hidden bg-cta-gradient p-12 lg:p-20 text-center text-white shadow-glow-lg"
            data-aos="zoom-in"
          >
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to sell your phone?</h2>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">
                WhatsApp us your phone model and we'll send you a quote in under 5 minutes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918825622722"
                  className="px-7 py-3.5 bg-white text-ink font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  WhatsApp Your Model
                </a>
                <a
                  href="tel:+918825622722"
                  className="px-7 py-3.5 glass text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors"
                >
                  +91 88256 22722
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl -mr-40 -mt-40 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
