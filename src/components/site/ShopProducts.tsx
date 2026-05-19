import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Eye, Star, Tag, PackageSearch } from "lucide-react";
import AOS from "aos";
import { type FilterState } from "./ShopFilters";

/* ─── Product data ─────────────────────────────────────────────────── */
export interface Product {
  id: string;
  brand: string;
  name: string;
  storage: string;
  color: string;
  price: number;
  mrp: number;
  condition: string;
  category: string;
  hue: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export const ALL_PRODUCTS: Product[] = [
  // ── Apple ──
  {
    id: "iphone-13-pro-256",
    brand: "Apple",
    name: "iPhone 13 Pro",
    storage: "256GB",
    color: "Graphite",
    price: 52999,
    mrp: 69900,
    condition: "Like New",
    category: "Second-Hand / Used Phones",
    hue: "from-slate-700 to-slate-900",
    badge: "🔥 Hot Deal",
    rating: 4.9,
    reviews: 218,
  },
  {
    id: "iphone-14-128",
    brand: "Apple",
    name: "iPhone 14",
    storage: "128GB",
    color: "Midnight",
    price: 59999,
    mrp: 79900,
    condition: "Excellent",
    category: "Second-Hand / Used Phones",
    hue: "from-zinc-800 to-zinc-950",
    rating: 4.8,
    reviews: 142,
  },
  {
    id: "iphone-15-128",
    brand: "Apple",
    name: "iPhone 15",
    storage: "128GB",
    color: "Black",
    price: 74999,
    mrp: 89900,
    condition: "Brand New",
    category: "New Phones",
    hue: "from-stone-700 to-neutral-900",
    badge: "✨ New",
    rating: 5.0,
    reviews: 89,
  },
  // ── Samsung ──
  {
    id: "samsung-s23-ultra-512",
    brand: "Samsung",
    name: "Galaxy S23 Ultra",
    storage: "512GB",
    color: "Phantom Black",
    price: 78499,
    mrp: 104999,
    condition: "Excellent",
    category: "Second-Hand / Used Phones",
    hue: "from-samsung-deep to-samsung-bright",
    badge: "🏆 Best Seller",
    rating: 4.9,
    reviews: 328,
  },
  {
    id: "samsung-s23-fe-128",
    brand: "Samsung",
    name: "Galaxy S23 FE",
    storage: "128GB",
    color: "Graphite",
    price: 34999,
    mrp: 39999,
    condition: "Like New",
    category: "Second-Hand / Used Phones",
    hue: "from-blue-800 to-indigo-900",
    rating: 4.7,
    reviews: 175,
  },
  {
    id: "samsung-s24-256",
    brand: "Samsung",
    name: "Galaxy S24",
    storage: "256GB",
    color: "Cobalt Violet",
    price: 72999,
    mrp: 89999,
    condition: "Brand New",
    category: "New Phones",
    hue: "from-violet-800 to-samsung",
    badge: "✨ New",
    rating: 4.8,
    reviews: 56,
  },
  // ── OnePlus ──
  {
    id: "oneplus-11r-256",
    brand: "OnePlus",
    name: "OnePlus 11R 5G",
    storage: "256GB",
    color: "Sonic Black",
    price: 34999,
    mrp: 44999,
    condition: "Excellent",
    category: "Second-Hand / Used Phones",
    hue: "from-rose-700 to-red-900",
    rating: 4.6,
    reviews: 204,
  },
  {
    id: "oneplus-12-256",
    brand: "OnePlus",
    name: "OnePlus 12",
    storage: "256GB",
    color: "Flowy Emerald",
    price: 64999,
    mrp: 74999,
    condition: "Brand New",
    category: "New Phones",
    hue: "from-emerald-700 to-teal-900",
    badge: "✨ New",
    rating: 4.8,
    reviews: 61,
  },
  // ── Vivo ──
  {
    id: "vivo-x90-pro-256",
    brand: "Vivo",
    name: "Vivo X90 Pro",
    storage: "256GB",
    color: "Legendary Black",
    price: 62999,
    mrp: 84999,
    condition: "Like New",
    category: "Second-Hand / Used Phones",
    hue: "from-indigo-700 to-purple-900",
    rating: 4.5,
    reviews: 98,
  },
  {
    id: "vivo-v30-128",
    brand: "Vivo",
    name: "Vivo V30 5G",
    storage: "128GB",
    color: "Peacock Green",
    price: 29999,
    mrp: 39999,
    condition: "Fair",
    category: "Second-Hand / Used Phones",
    hue: "from-teal-700 to-cyan-900",
    badge: "💰 Budget Pick",
    rating: 4.2,
    reviews: 73,
  },
  // ── Xiaomi ──
  {
    id: "xiaomi-14-256",
    brand: "Xiaomi",
    name: "Xiaomi 14",
    storage: "256GB",
    color: "Black",
    price: 64999,
    mrp: 82999,
    condition: "Brand New",
    category: "New Phones",
    hue: "from-orange-700 to-amber-900",
    badge: "✨ New",
    rating: 4.7,
    reviews: 44,
  },
  {
    id: "xiaomi-redmi-note-13-128",
    brand: "Xiaomi",
    name: "Redmi Note 13 Pro",
    storage: "128GB",
    color: "Fusion White",
    price: 21999,
    mrp: 29999,
    condition: "Excellent",
    category: "Second-Hand / Used Phones",
    hue: "from-sky-700 to-blue-900",
    rating: 4.5,
    reviews: 187,
  },
  // ── Oppo ──
  {
    id: "oppo-reno-12-256",
    brand: "Oppo",
    name: "Oppo Reno 12 Pro",
    storage: "256GB",
    color: "Nebula Silver",
    price: 36999,
    mrp: 49999,
    condition: "Like New",
    category: "Second-Hand / Used Phones",
    hue: "from-cyan-700 to-blue-900",
    rating: 4.4,
    reviews: 92,
  },
  {
    id: "oppo-find-x7-512",
    brand: "Oppo",
    name: "Oppo Find X7",
    storage: "512GB",
    color: "Comet Grey",
    price: 84999,
    mrp: 99999,
    condition: "Brand New",
    category: "New Phones",
    hue: "from-gray-700 to-slate-900",
    badge: "🔥 Premium",
    rating: 4.9,
    reviews: 29,
  },
  // ── Realme ──
  {
    id: "realme-gt-6-256",
    brand: "Realme",
    name: "Realme GT 6",
    storage: "256GB",
    color: "Fluid Silver",
    price: 44999,
    mrp: 59999,
    condition: "Brand New",
    category: "New Phones",
    hue: "from-yellow-600 to-orange-800",
    badge: "✨ New",
    rating: 4.6,
    reviews: 35,
  },
  {
    id: "realme-12-pro-128",
    brand: "Realme",
    name: "Realme 12 Pro+",
    storage: "128GB",
    color: "Navigation Blue",
    price: 18999,
    mrp: 26999,
    condition: "Fair",
    category: "Second-Hand / Used Phones",
    hue: "from-blue-600 to-indigo-800",
    badge: "💰 Budget Pick",
    rating: 4.1,
    reviews: 118,
  },
  // ── Accessories ──
  {
    id: "acc-wireless-charger",
    brand: "Samsung",
    name: "15W Wireless Charger",
    storage: "—",
    color: "Black",
    price: 2499,
    mrp: 3999,
    condition: "Brand New",
    category: "Accessories",
    hue: "from-gray-600 to-gray-800",
    rating: 4.5,
    reviews: 241,
  },
  {
    id: "acc-earbuds",
    brand: "Samsung",
    name: "Galaxy Buds 2 Pro",
    storage: "—",
    color: "Graphite",
    price: 8499,
    mrp: 14999,
    condition: "Like New",
    category: "Accessories",
    hue: "from-neutral-700 to-neutral-900",
    badge: "🎁 Gift Worthy",
    rating: 4.7,
    reviews: 184,
  },
];

/* ─── filter logic ──────────────────────────────────────────────────── */
function applyFilters(products: Product[], f: FilterState): Product[] {
  return products.filter((p) => {
    if (f.brands.length > 0 && !f.brands.includes(p.brand)) return false;
    if (p.price < f.priceMin || p.price > f.priceMax) return false;
    if (f.storages.length > 0 && !f.storages.includes(p.storage)) return false;
    if (f.conditions.length > 0 && !f.conditions.includes(p.condition)) return false;
    if (f.categories.length > 0 && !f.categories.includes(p.category)) return false;
    return true;
  });
}

/* ─── Discount pct ──────────────────────────────────────────────────── */
function discountPct(price: number, mrp: number) {
  return Math.round(((mrp - price) / mrp) * 100);
}

/* ─── Condition colour ───────────────────────────────────────────────── */
const condColors: Record<string, string> = {
  "Brand New": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Like New": "bg-sky-100 text-sky-700 border-sky-200",
  Excellent: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Fair: "bg-amber-100 text-amber-700 border-amber-200",
};

/* ─── Product card ───────────────────────────────────────────────────── */
function ProductCard({ p, index }: { p: Product; index: number }) {
  const off = discountPct(p.price, p.mrp);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 60, 400)}
      className="group rounded-3xl bg-white border border-border overflow-hidden hover-lift flex flex-col"
    >
      {/* Image placeholder */}
      <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.hue} overflow-hidden shrink-0`}>
        {p.badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-bold bg-white/90 text-ink px-2.5 py-1 rounded-full shadow-sm">
            {p.badge}
          </span>
        )}
        {off > 0 && (
          <span className="absolute top-3 right-3 z-10 text-[10px] font-bold bg-emerald-success text-white px-2.5 py-1 rounded-full">
            {off}% OFF
          </span>
        )}
        {/* Phone silhouette */}
        <div className="absolute inset-0 grid place-items-center transition-transform duration-700 group-hover:scale-110">
          {p.category === "Accessories" ? (
            <div className="w-24 h-24 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm grid place-items-center">
              <Tag className="w-10 h-10 text-white/70" />
            </div>
          ) : (
            <div className="w-28 h-52 rounded-[2rem] bg-black/40 border border-white/20 backdrop-blur-sm p-1.5">
              <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-br from-white/10 to-white/0 relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-black/60" />
                <div className="absolute bottom-3 inset-x-2 text-center text-[8px] text-white/60 uppercase tracking-widest font-semibold">
                  {p.brand}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl group-hover:bg-cyan-glow/40 transition-colors duration-500" />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-samsung-bright/80 mb-0.5">
          {p.brand}
        </div>
        <div className="font-bold text-ink leading-snug">{p.name}</div>
        <div className="text-xs text-muted-foreground mt-1">
          {p.storage !== "—" ? `${p.storage} · ` : ""}
          {p.color}
        </div>

        {/* Stars */}
        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, k) => (
            <Star
              key={k}
              className={`w-3 h-3 ${k < Math.floor(p.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">({p.reviews})</span>
        </div>

        {/* Condition badge */}
        <div className="mt-3">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${condColors[p.condition] || "bg-gray-100 text-gray-600 border-gray-200"}`}
          >
            {p.condition}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2 flex-wrap">
          <span className="text-xl font-bold text-ink">
            ₹{p.price.toLocaleString("en-IN")}
          </span>
          {p.mrp > p.price && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{p.mrp.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2 mt-auto">
          <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cta-gradient text-white text-sm font-semibold shadow-glow hover:shadow-glow-lg transition-shadow">
            <ShoppingCart className="w-4 h-4" /> Add
          </button>
          <Link
            to="/product-details/$id"
            params={{ id: p.id }}
            className="w-11 h-11 grid place-items-center rounded-xl border border-border hover:bg-muted text-ink transition-colors"
            title="View details"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Sort options ───────────────────────────────────────────────────── */
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low → High", value: "price_asc" },
  { label: "Price: High → Low", value: "price_desc" },
  { label: "Best Rating", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

function sortProducts(products: Product[], sort: string): Product[] {
  const arr = [...products];
  switch (sort) {
    case "price_asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price_desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "reviews":
      return arr.sort((a, b) => b.reviews - a.reviews);
    default:
      return arr;
  }
}

/* ─── Main exported grid ─────────────────────────────────────────────── */
export function ShopProducts({ filters }: { filters: FilterState }) {
  const [sort, setSort] = useState("featured");

  // Re-init AOS whenever products change
  const filtered = useMemo(() => applyFilters(ALL_PRODUCTS, filters), [filters]);
  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort]);

  useEffect(() => {
    AOS.refresh();
  }, [sorted.length]);

  return (
    <div className="flex-1 min-w-0">
      {/* Toolbar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 mb-6"
        data-aos="fade-up"
      >
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-bold text-ink">{sorted.length}</span> of{" "}
          <span className="font-bold text-ink">{ALL_PRODUCTS.length}</span> products
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-sm text-muted-foreground shrink-0">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm font-medium text-ink bg-white border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick category pills */}
      <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up" data-aos-delay="60">
        {["All", "New Phones", "Second-Hand / Used Phones", "Accessories"].map((cat) => {
          const isAll = cat === "All";
          const active = isAll
            ? filters.categories.length === 0
            : filters.categories.length === 1 && filters.categories[0] === cat;
          return (
            <button
              key={cat}
              onClick={() => {/* handled via ShopFilters — these are visual only cues */}}
              className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                active
                  ? "bg-samsung-bright text-white border-samsung-bright shadow-glow"
                  : "bg-white text-ink border-border hover:border-samsung-bright hover:text-samsung-bright"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid or empty state */}
      {sorted.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-24 text-center"
          data-aos="fade-in"
        >
          <div className="w-20 h-20 rounded-3xl bg-muted grid place-items-center mb-5 mx-auto">
            <PackageSearch className="w-9 h-9 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold text-ink mb-2">No products found</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Try adjusting your filters or reset them to browse all available devices.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {sorted.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

// Also expose filtered length for the filter panel footer
export function useFilteredCount(filters: FilterState) {
  return useMemo(() => applyFilters(ALL_PRODUCTS, filters).length, [filters]);
}
