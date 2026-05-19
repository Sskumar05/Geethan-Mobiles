import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import {
  Headphones,
  BatteryCharging,
  Shield,
  Smartphone,
  Cable,
  Camera,
  Watch,
  Speaker,
  ArrowRight,
  Star,
  Package,
  Truck,
  BadgeCheck,
  Tag,
} from "lucide-react";

export const Route = createFileRoute("/accessories")({
  component: AccessoriesPage,
  head: () => ({
    meta: [
      { title: "Mobile Accessories — Cases, Chargers, Earbuds | Geethan Mobiles" },
      {
        name: "description",
        content:
          "Shop premium mobile accessories in Thiruvarur — original chargers, earbuds, cases, screen guards, cables and more. All major brands in stock.",
      },
    ],
  }),
});

const categories = [
  {
    icon: Shield,
    name: "Cases & Covers",
    count: "200+ styles",
    desc: "Military-grade protection meets premium design. Cases for every phone model.",
    tag: "Trending",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Headphones,
    name: "Earbuds & Audio",
    count: "50+ models",
    desc: "True wireless earbuds, wired headphones, and gaming headsets.",
    tag: "Bestseller",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BatteryCharging,
    name: "Chargers & Power Banks",
    count: "80+ products",
    desc: "Fast charging bricks, GaN chargers, and high-capacity power banks.",
    tag: null,
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Cable,
    name: "Cables & Adapters",
    count: "100+ options",
    desc: "Type-C, Lightning, USB-A cables. Braided, fast-charge certified.",
    tag: null,
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Camera,
    name: "Camera Accessories",
    count: "30+ items",
    desc: "Clip-on lenses, tripods, ring lights, and stabilizers.",
    tag: null,
    color: "from-rose-500 to-red-600",
  },
  {
    icon: Watch,
    name: "Smart Watches & Bands",
    count: "60+ products",
    desc: "Fitness trackers, smartwatches and premium replacement bands.",
    tag: "New Arrivals",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Speaker,
    name: "Bluetooth Speakers",
    count: "25+ models",
    desc: "Portable, waterproof and party-ready speakers from top brands.",
    tag: null,
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Smartphone,
    name: "Screen Protectors",
    count: "150+ variants",
    desc: "Tempered glass and hydrogel protectors for every device.",
    tag: null,
    color: "from-slate-500 to-gray-600",
  },
];

const featuredProducts = [
  {
    name: "Boat Rockerz 255 Pro",
    brand: "Boat",
    price: "₹1,299",
    originalPrice: "₹2,990",
    category: "Earbuds",
    rating: 4.5,
    reviews: 1248,
    badge: "60% Off",
  },
  {
    name: "Anker 65W GaN Charger",
    brand: "Anker",
    price: "₹2,499",
    originalPrice: "₹3,499",
    category: "Charger",
    rating: 4.8,
    reviews: 876,
    badge: "Top Rated",
  },
  {
    name: "Spigen Neo Hybrid Case",
    brand: "Spigen",
    price: "₹999",
    originalPrice: "₹1,799",
    category: "Case",
    rating: 4.6,
    reviews: 2103,
    badge: "Bestseller",
  },
  {
    name: "20,000mAh Power Bank",
    brand: "Mi",
    price: "₹1,799",
    originalPrice: "₹2,499",
    category: "Power Bank",
    rating: 4.4,
    reviews: 589,
    badge: null,
  },
  {
    name: "Samsung 45W Wall Charger",
    brand: "Samsung",
    price: "₹2,999",
    originalPrice: "₹3,999",
    category: "Charger",
    rating: 4.9,
    reviews: 421,
    badge: "Official",
  },
  {
    name: "Realme Buds Air 3S",
    brand: "Realme",
    price: "₹2,199",
    originalPrice: "₹3,999",
    category: "Earbuds",
    rating: 4.3,
    reviews: 934,
    badge: "Hot Deal",
  },
];

const filterTabs = ["All", "Earbuds", "Charger", "Case", "Power Bank"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

function AccessoriesPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(124,58,237,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(56,189,248,0.15),transparent_55%)]" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Headphones className="w-full h-full text-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-purple-accent/20 border border-purple-accent/30 rounded-full px-4 py-1.5 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Tag className="w-3.5 h-3.5" /> 500+ Products in Stock
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Elevate Your <br />
              <span className="text-gradient">Mobile Experience</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              Premium accessories for every device. From protective cases to pro-grade audio — 
              all top brands, authentic products, best prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-105 transition-transform"
              >
                Browse All <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918825622722"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/15 transition-colors"
              >
                Ask for Availability
              </a>
            </div>
          </div>

          {/* Quick benefits */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {[
              { icon: BadgeCheck, label: "100% Genuine", sub: "Authenticated products" },
              { icon: Truck, label: "Same-Day Available", sub: "Walk in & pick up" },
              { icon: Package, label: "500+ Products", sub: "All major brands" },
              { icon: Tag, label: "Best Price Match", sub: "We match any offer" },
            ].map((b, i) => (
              <div
                key={b.label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="glass rounded-3xl p-6 text-white group hover:bg-white/15 transition-colors"
              >
                <b.icon className="w-7 h-7 text-cyan-glow mb-3" />
                <div className="font-bold">{b.label}</div>
                <div className="text-xs text-white/60 mt-0.5">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              Categories
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink">
              Shop by <span className="text-gradient">Category</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <div
                key={c.name}
                data-aos="fade-up"
                data-aos-delay={i * 70}
                className="group relative bg-white rounded-3xl p-6 border border-border hover-lift overflow-hidden cursor-pointer"
              >
                {c.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-cta-gradient text-white px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                )}
                {/* Icon with gradient bg */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center shadow-glow mb-5`}>
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{c.count}</div>
                <h3 className="font-bold text-ink text-lg mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-samsung-bright group-hover:gap-2 transition-all">
                  Shop now <ArrowRight className="w-4 h-4" />
                </span>
                {/* Hover glow */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section id="products" className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12" data-aos="fade-up">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-2">
                Featured Products
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ink">
                Top <span className="text-gradient">Sellers</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === tab
                      ? "bg-cta-gradient text-white shadow-glow"
                      : "bg-white text-ink border border-border hover:border-samsung-bright"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group bg-white rounded-3xl border border-border overflow-hidden hover-lift"
              >
                {/* Product image placeholder with gradient */}
                <div className="relative h-52 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <Smartphone className="w-24 h-24 text-border group-hover:scale-110 transition-transform duration-500" />
                  {p.badge && (
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-cta-gradient text-white px-3 py-1.5 rounded-full shadow-glow">
                      {p.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-cta-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-wider text-samsung-bright font-semibold mb-1">{p.brand} · {p.category}</div>
                  <h3 className="font-bold text-ink text-lg mb-2 leading-snug">{p.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <StarRating rating={p.rating} />
                    <span className="text-xs text-muted-foreground">({p.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-ink">{p.price}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">{p.originalPrice}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-cta-gradient grid place-items-center shadow-glow hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands Banner ── */}
      <section className="py-14 bg-white border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8" data-aos="fade-up">
            Authorised stockist of
          </p>
          <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="100">
            {["Samsung", "Apple", "Anker", "Boat", "Spigen", "Mi", "JBL", "Realme", "OnePlus", "Belkin"].map((b) => (
              <span
                key={b}
                className="px-5 py-2 rounded-full bg-muted text-ink text-sm font-semibold border border-border hover:border-samsung-bright hover:text-samsung-bright transition-colors cursor-default"
              >
                {b}
              </span>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Can't find what you need?</h2>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">
                We can source any accessory for any device. Just WhatsApp us what you're looking for.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918825622722"
                  className="px-7 py-3.5 bg-white text-ink font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  Request via WhatsApp
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
