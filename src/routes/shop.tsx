import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import AOS from "aos";
import { TrustBadges } from "@/components/site/TrustBadges";
import { ShopFilters, DEFAULT_FILTERS, type FilterState } from "@/components/site/ShopFilters";
import { ShopProducts, useFilteredCount } from "@/components/site/ShopProducts";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop Latest Mobiles & Accessories — Geethan Mobiles" },
      {
        name: "description",
        content:
          "Browse our collection of certified pre-owned smartphones, brand new phones, premium accessories, and the latest gadgets at Geethan Mobiles Thiruvarur. Filter by brand, price, storage, condition.",
      },
    ],
  }),
});

function Shop() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const resultCount = useFilteredCount(filters);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-background overflow-x-hidden pt-20">
      {/* ── Premium Shop Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(37,99,235,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_110%,rgba(56,189,248,0.12),transparent_50%)]" />
        {/* Floating orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-samsung-bright/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full bg-cyan-glow/10 blur-2xl animate-float-slow" style={{ animationDelay: "-3s" }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-samsung-bright/20 border border-samsung-bright/30 text-samsung-bright text-xs font-bold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-samsung-bright animate-pulse" />
              Geethan Mobiles · Thiruvarur
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Find Your Perfect{" "}
              <span className="text-gradient">Phone Today</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Shop brand-new, certified pre-owned, and second-hand mobiles — all inspected and
              backed by our 90-day warranty. Lowest prices in Thiruvarur.
            </p>
            {/* Quick stat badges */}
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="120">
              {[
                { label: "18+ Brands", icon: "📱" },
                { label: "Used Phones", icon: "♻️" },
                { label: "90-Day Warranty", icon: "🛡️" },
                { label: "Walk-In Available", icon: "🏬" },
              ].map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/85 font-medium backdrop-blur-sm"
                >
                  {s.icon} {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shop Body: Sidebar + Grid ── */}
      <section className="py-14 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex gap-8 items-start">
            {/* Filter sidebar (desktop) / mobile bottom sheet */}
            <ShopFilters
              filters={filters}
              onChange={setFilters}
              totalResults={resultCount}
            />

            {/* Product grid */}
            <ShopProducts filters={filters} />
          </div>
        </div>
      </section>

      {/* ── Why Shop With Us ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Why Shop With Us?</h2>
            <div className="w-20 h-1.5 bg-cta-gradient mx-auto rounded-full" />
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div
            className="relative rounded-[2.5rem] overflow-hidden bg-cta-gradient p-12 lg:p-20 text-center text-white shadow-glow-lg"
            data-aos="zoom-in"
          >
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
                We source almost any model for you — new or pre-owned. Chat with our experts on WhatsApp for a personalised recommendation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918825622722?text=Hi!%20I'm%20looking%20for%20a%20specific%20phone.%20Can%20you%20help%20me?"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl -mr-32 -mt-32 rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl -ml-32 -mb-32 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
