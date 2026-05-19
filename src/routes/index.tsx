import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import AOS from "aos";
import {
  Smartphone,
  ArrowRight,
  Wrench,
  Banknote,
  Headphones,
  ShieldCheck,
  Star,
  Zap,
  BadgeIndianRupee,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Geethan Mobiles — Mobile Repairs, Pre-Owned & Buyback in Thiruvarur",
      },
      {
        name: "description",
        content:
          "Premium mobile repairs, certified pre-owned phones, accessories and instant buyback in Thiruvarur, Tamil Nadu. 90-day warranty, same-day service.",
      },
      { name: "keywords", content: "mobile repair Thiruvarur, buy phone Thiruvarur, sell phone Thiruvarur, Samsung repair, iPhone repair Tamil Nadu" },
      { property: "og:title", content: "Geethan Mobiles — Thiruvarur's Most Trusted Mobile Store" },
    ],
  }),
});

/* ─── Data ─────────────────────────────────────────────────── */
const services = [
  {
    icon: Wrench,
    title: "Fix My Device",
    desc: "Expert repairs with genuine parts. Same-day service for most issues.",
    href: "/repairs" as const,
    grad: "from-samsung-bright to-purple-accent",
    cta: "Book a Repair",
  },
  {
    icon: Smartphone,
    title: "Shop Pre-Owned",
    desc: "Certified, tested smartphones at unbeatable prices.",
    href: "/shop" as const,
    grad: "from-purple-accent to-cyan-glow",
    cta: "Browse Phones",
  },
  {
    icon: Banknote,
    title: "Sell My Phone",
    desc: "Instant valuation, same-day cash payment via UPI or bank.",
    href: "/sell-my-phone" as const,
    grad: "from-emerald-success to-cyan-glow",
    cta: "Get a Quote",
  },
  {
    icon: Headphones,
    title: "Accessories",
    desc: "Cases, chargers, audio gear & more from top brands.",
    href: "/accessories" as const,
    grad: "from-cyan-glow to-samsung-bright",
    cta: "Shop Now",
  },
];

const featuredPhones = [
  {
    id: "s23-fe",
    name: "Samsung Galaxy S23 FE",
    storage: "128GB · Graphite",
    price: "₹34,999",
    original: "₹39,999",
    badge: "Best Seller",
    condition: "Excellent",
  },
  {
    id: "iphone-12",
    name: "Apple iPhone 12",
    storage: "64GB · Black",
    price: "₹27,499",
    original: "₹31,000",
    badge: "Hot Deal",
    condition: "Good",
  },
  {
    id: "oneplus-11r",
    name: "OnePlus 11R",
    storage: "128GB · Sonic Black",
    price: "₹24,999",
    original: "₹28,000",
    badge: "New Arrival",
    condition: "Like New",
  },
];

const trustPoints = [
  { icon: Zap, title: "Lightning-Fast Service", desc: "Walk-in repairs handled in under 60 minutes." },
  { icon: ShieldCheck, title: "Genuine Parts Only", desc: "OEM-grade components with 90-day warranty." },
  { icon: BadgeIndianRupee, title: "Best Price Guaranteed", desc: "Transparent pricing. No hidden fees, ever." },
  { icon: Sparkles, title: "White-Glove Care", desc: "Every device returned cleaner than you brought it." },
];

/* ─── Page ──────────────────────────────────────────────────── */
function Index() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <Hero />

      {/* ══ SERVICES ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background" id="services">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              What We Do
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink">
              Everything Mobile,{" "}
              <span className="text-gradient">One Destination</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From quick fixes to premium upgrades — handled with care under one trusted roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.href}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative rounded-3xl bg-white border border-border p-6 hover-lift overflow-hidden flex flex-col"
              >
                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${s.grad} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} grid place-items-center shadow-glow`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-ink">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-samsung-bright group-hover:gap-2.5 transition-all">
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/40" id="products">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14" data-aos="fade-up">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-2">
                Certified Pre-Owned
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ink">
                Featured <span className="text-gradient">Phones</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-samsung-bright hover:gap-3 transition-all shrink-0"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhones.map((p, i) => (
              <Link
                key={p.id}
                to="/product-details/$id"
                params={{ id: p.id }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group bg-white rounded-3xl border border-border overflow-hidden hover-lift"
              >
                <div className="relative h-52 bg-gradient-to-br from-muted to-muted/30 flex items-center justify-center overflow-hidden">
                  <Smartphone className="w-28 h-28 text-border group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-cta-gradient text-white px-3 py-1.5 rounded-full shadow-glow">
                    {p.badge}
                  </span>
                  <span className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/80 text-ink border border-border">
                    {p.condition}
                  </span>
                  <div className="absolute inset-0 bg-cta-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-ink text-lg leading-snug">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.storage}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.8</span>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div>
                      <span className="text-2xl font-bold text-ink">{p.price}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">{p.original}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-cta-gradient grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-105 transition-transform"
            >
              Browse All Phones <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background" id="why-us">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div data-aos="fade-right">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              Why Geethan
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink leading-tight mb-5">
              Crafted with Care.{" "}
              <span className="text-gradient">Backed by Trust.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
              Every device that crosses our counter gets the same obsessive attention to detail —
              whether it's a quick screen fix or a flagship upgrade.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { v: "4.9★", l: "Google Rating", dark: true },
                { v: "12+", l: "Years in Business", dark: false },
                { v: "5K+", l: "Happy Customers", dark: false },
                { v: "90d", l: "Warranty", dark: false },
              ].map((stat) => (
                <div key={stat.l} className={`px-5 py-4 rounded-2xl ${stat.dark ? "bg-ink text-white" : "bg-muted text-ink"}`}>
                  <div className="text-2xl font-bold">{stat.v}</div>
                  <div className={`text-xs mt-0.5 ${stat.dark ? "text-white/60" : "text-muted-foreground"}`}>{stat.l}</div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-105 transition-transform"
            >
              Visit Our Store <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right trust cards */}
          <div className="grid sm:grid-cols-2 gap-4" data-aos="fade-left">
            {trustPoints.map((t, i) => (
              <div
                key={t.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`rounded-3xl p-6 hover-lift ${i % 2 === 0 ? "bg-muted" : "bg-ink"}`}
              >
                <div className={`w-12 h-12 rounded-2xl grid place-items-center ${i % 2 === 0 ? "bg-cta-gradient text-white" : "bg-white/10 text-cyan-glow"}`}>
                  <t.icon className="w-6 h-6" />
                </div>
                <div className={`mt-5 font-bold ${i % 2 === 0 ? "text-ink" : "text-white"}`}>{t.title}</div>
                <div className={`mt-2 text-sm ${i % 2 === 0 ? "text-muted-foreground" : "text-white/70"}`}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════════ */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8" data-aos="zoom-in">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-hero-gradient p-12 lg:p-20 text-white shadow-glow-lg text-center">
            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl -mr-40 -mt-40 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-accent/20 blur-3xl -ml-40 -mb-40 rounded-full pointer-events-none" />
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-cyan-glow text-xs font-semibold uppercase tracking-wider mb-6">
                <MessageCircle className="w-3.5 h-3.5" /> Chat with us · Open Today
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-5 max-w-2xl mx-auto leading-tight">
                Ready for a Better Mobile Experience?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Walk into our Thiruvarur store or WhatsApp us — same-day service, transparent pricing, zero surprises.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918825622722"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-ink font-bold shadow-glow-lg hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  See Store Info <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
