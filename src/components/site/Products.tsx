import { ShoppingCart, Eye, Star } from "lucide-react";

const products = [
  { brand: "Apple", name: "iPhone 13 Pro", specs: "256GB · Graphite", price: "₹52,999", mrp: "₹69,900", off: "24%", cond: "Like New", hue: "from-slate-700 to-slate-900" },
  { brand: "Samsung", name: "Galaxy S23 Ultra", specs: "512GB · Phantom Black", price: "₹78,499", mrp: "₹1,04,999", off: "25%", cond: "Excellent", hue: "from-samsung-deep to-samsung-bright" },
  { brand: "OnePlus", name: "OnePlus 11R 5G", specs: "256GB · Sonic Black", price: "₹34,999", mrp: "₹44,999", off: "22%", cond: "Very Good", hue: "from-rose-700 to-red-900" },
  { brand: "Vivo", name: "Vivo X90 Pro", specs: "256GB · Legendary Black", price: "₹62,999", mrp: "₹84,999", off: "26%", cond: "Like New", hue: "from-indigo-700 to-purple-900" },
];

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">Featured devices</div>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink">
              Premium phones, <span className="text-gradient">verified quality</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-samsung-bright hover:underline">View all →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group rounded-3xl bg-white border border-border overflow-hidden hover-lift"
            >
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.hue} overflow-hidden`}>
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-ink px-2.5 py-1 rounded-full">
                  {p.cond}
                </span>
                <span className="absolute top-3 right-3 z-10 text-[10px] font-bold bg-emerald-success text-white px-2.5 py-1 rounded-full">
                  {p.off} OFF
                </span>
                {/* CSS phone silhouette */}
                <div className="absolute inset-0 grid place-items-center transition-transform duration-700 group-hover:scale-110">
                  <div className="w-32 h-56 rounded-[2rem] bg-black/40 border border-white/20 backdrop-blur-sm p-1.5">
                    <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-br from-white/10 to-white/0 relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 rounded-full bg-black/60" />
                      <div className="absolute bottom-3 inset-x-3 text-center text-[9px] text-white/70 uppercase tracking-widest">{p.brand}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl group-hover:bg-cyan-glow/40 transition-colors" />
              </div>

              <div className="p-5">
                <div className="text-xs text-muted-foreground">{p.brand}</div>
                <div className="mt-0.5 font-bold text-ink">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.specs}</div>
                <div className="mt-3 flex items-center gap-1 text-amber-500 text-xs">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-3 h-3 fill-current" />)}
                  <span className="text-muted-foreground ml-1">(128)</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-xl font-bold text-ink">{p.price}</div>
                  <div className="text-xs text-muted-foreground line-through">{p.mrp}</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cta-gradient text-white text-sm font-semibold shadow-glow hover:shadow-glow-lg transition-shadow">
                    <ShoppingCart className="w-4 h-4" /> Add
                  </button>
                  <button className="w-11 h-11 grid place-items-center rounded-xl border border-border hover:bg-muted text-ink">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
