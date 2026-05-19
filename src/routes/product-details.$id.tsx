import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import AOS from "aos";
import {
  Smartphone,
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  ArrowRight,
  Heart,
  Share2,
  ChevronRight,
  CheckCircle,
  Battery,
  Cpu,
  Camera,
  Wifi,
  Package,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/product-details/$id")({
  component: ProductDetailsPage,
  head: () => ({
    meta: [
      { title: "Samsung Galaxy S23 FE — Geethan Mobiles" },
      {
        name: "description",
        content:
          "Buy certified pre-owned Samsung Galaxy S23 FE at Geethan Mobiles Thiruvarur. 90-day warranty, best price guaranteed.",
      },
    ],
  }),
});

const specs = [
  { icon: Cpu, label: "Processor", value: "Snapdragon 8 Gen 1" },
  { icon: Battery, label: "Battery", value: "4500 mAh · 45W Fast Charge" },
  { icon: Camera, label: "Camera", value: "50MP + 12MP + 8MP" },
  { icon: Wifi, label: "Connectivity", value: "5G · WiFi 6 · Bluetooth 5.2" },
  { icon: Smartphone, label: "Display", value: '6.4" Dynamic AMOLED · 120Hz' },
  { icon: Package, label: "Storage", value: "128GB / 256GB · 8GB RAM" },
];

const colorOptions = [
  { name: "Graphite", hex: "#4B5563" },
  { name: "Cream", hex: "#F5F0E8" },
  { name: "Indigo", hex: "#4F46E5" },
  { name: "Mint", hex: "#6EE7B7" },
];

const storageOptions = ["128GB", "256GB"];

const reviews = [
  {
    name: "Arun K.",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent condition phone! Battery life is great and the display is stunning. Geethan Mobiles gave me the best price in Thiruvarur.",
  },
  {
    name: "Priya M.",
    rating: 5,
    date: "1 month ago",
    text: "Bought a Samsung S23 FE — it was exactly as described. 90-day warranty gives good peace of mind. Highly recommend!",
  },
  {
    name: "Karthik R.",
    rating: 4,
    date: "3 weeks ago",
    text: "Great phone at a great price. Minor screen marks as mentioned but performance is flawless. Staff was very helpful.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

function ProductDetailsPage() {
  const { id } = Route.useParams();

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20 min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-ink font-medium">Samsung Galaxy S23 FE</span>
        </nav>
      </div>

      {/* ── Main Product Section ── */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Product Gallery */}
          <div data-aos="fade-right" className="space-y-4">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/30 aspect-square flex items-center justify-center group">
              <Smartphone className="w-56 h-56 text-border group-hover:scale-110 transition-transform duration-500" />
              {/* Certified badge */}
              <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <CheckCircle className="w-3.5 h-3.5" /> Certified Pre-Owned
              </div>
              {/* Action buttons */}
              <div className="absolute top-5 right-5 flex flex-col gap-2">
                <button className="w-10 h-10 rounded-full bg-white shadow-md grid place-items-center hover:bg-red-50 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md grid place-items-center hover:bg-muted transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-cta-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((t) => (
                <div
                  key={t}
                  className={`rounded-2xl bg-muted/60 aspect-square flex items-center justify-center cursor-pointer border-2 transition-colors ${
                    t === 1 ? "border-samsung-bright" : "border-transparent hover:border-border"
                  }`}
                >
                  <Smartphone className="w-8 h-8 text-border" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div data-aos="fade-left" className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-2">
                Samsung · Smartphone
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-ink leading-tight mb-3">
                Samsung Galaxy S23 FE
              </h1>
              {/* Rating */}
              <div className="flex items-center gap-3">
                <StarRating rating={5} />
                <span className="text-sm font-semibold text-ink">4.8</span>
                <span className="text-sm text-muted-foreground">(328 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-ink">₹34,999</span>
              <span className="text-xl text-muted-foreground line-through">₹39,999</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">Save ₹5,000</span>
            </div>

            {/* Condition */}
            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-semibold text-emerald-800">Excellent Condition</span>
                <span className="text-sm text-emerald-600 ml-2">· No visible scratches · 95% battery health</span>
              </div>
            </div>

            {/* Color picker */}
            <div>
              <div className="text-sm font-semibold text-ink mb-3">
                Color: <span className="text-samsung-bright">Graphite</span>
              </div>
              <div className="flex gap-3">
                {colorOptions.map((c) => (
                  <button
                    key={c.name}
                    title={c.name}
                    className="w-10 h-10 rounded-full border-2 border-border hover:border-samsung-bright transition-colors ring-2 ring-offset-2 ring-transparent hover:ring-samsung-bright"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Storage picker */}
            <div>
              <div className="text-sm font-semibold text-ink mb-3">Storage</div>
              <div className="flex gap-3">
                {storageOptions.map((s, i) => (
                  <button
                    key={s}
                    className={`px-5 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                      i === 0
                        ? "border-samsung-bright bg-samsung-bright/5 text-samsung-bright"
                        : "border-border text-ink hover:border-samsung-bright"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4">
              <Link
                to="/checkout"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Buy Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cart"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-samsung-bright text-samsung-bright font-bold hover:bg-samsung-bright/5 transition-colors"
              >
                Add to Cart
              </Link>
            </div>

            {/* Assurances */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: ShieldCheck, label: "90-Day Warranty" },
                { icon: Truck, label: "Instant Pickup" },
                { icon: RefreshCw, label: "7-Day Return" },
              ].map((a) => (
                <div
                  key={a.label}
                  className="text-center p-3 rounded-2xl bg-muted/50 border border-border"
                >
                  <a.icon className="w-5 h-5 text-samsung-bright mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-ink">{a.label}</div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918825622722?text=Hi!%20I'm%20interested%20in%20Samsung%20Galaxy%20S23%20FE.%20Is%20it%20available?"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 bg-ink rounded-2xl text-white hover:bg-ink/90 transition-colors group"
            >
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="flex-1">
                <div className="font-semibold">Ask us about this phone</div>
                <div className="text-xs text-white/60">Chat on WhatsApp — usually responds in 5 min</div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Specs ── */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-10 text-center" data-aos="fade-up">
            Full <span className="text-gradient">Specifications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specs.map((s, i) => (
              <div
                key={s.label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-white rounded-2xl p-5 border border-border flex items-center gap-4 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-cta-gradient grid place-items-center shadow-glow shrink-0">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  <div className="font-bold text-ink mt-0.5">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between mb-10" data-aos="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-ink">
              Customer <span className="text-gradient">Reviews</span>
            </h2>
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="font-bold text-ink">4.8</span>
              <span className="text-muted-foreground text-sm">(328)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-3xl p-6 border border-border hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cta-gradient grid place-items-center text-white font-bold text-sm shadow-glow">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-ink text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.date}</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-emerald-500" aria-label="Verified Purchase" />
                </div>
                <StarRating rating={r.rating} />
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related / CTA ── */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div
            className="relative rounded-[2.5rem] overflow-hidden bg-cta-gradient p-12 lg:p-16 text-center text-white shadow-glow-lg"
            data-aos="zoom-in"
          >
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Interested in this phone?</h2>
              <p className="text-white/85 mb-8">Visit our store or chat with us for a live demo and best price.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/checkout"
                  className="px-7 py-3.5 bg-white text-ink font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  Buy Now
                </Link>
                <a
                  href="https://wa.me/918825622722"
                  className="px-7 py-3.5 glass text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
