import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import AOS from "aos";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Tag,
  Smartphone,
  Shield,
  Truck,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [
      { title: "Your Cart — Geethan Mobiles" },
      { name: "description", content: "Review your selected products and proceed to checkout at Geethan Mobiles." },
    ],
  }),
});

const initialItems = [
  {
    id: 1,
    name: "Samsung Galaxy S23 FE",
    variant: "128GB · Graphite",
    price: 34999,
    originalPrice: 39999,
    qty: 1,
    category: "Smartphone",
  },
  {
    id: 2,
    name: "Spigen Neo Hybrid Case",
    variant: "For Samsung S23 FE",
    price: 999,
    originalPrice: 1799,
    qty: 2,
    category: "Accessory",
  },
  {
    id: 3,
    name: "Anker 65W GaN Charger",
    variant: "USB-C · White",
    price: 2499,
    originalPrice: 3499,
    qty: 1,
    category: "Accessory",
  },
];

const perks = [
  { icon: Shield, text: "90-Day Warranty on all phones" },
  { icon: Truck, text: "Free in-store pickup" },
  { icon: RefreshCw, text: "7-day easy return" },
];

type CartItem = (typeof initialItems)[number];

function CartPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const savings = items.reduce((s, it) => s + (it.originalPrice - it.price) * it.qty, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal - discount;

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20 min-h-screen">
      {/* ── Page Header ── */}
      <section className="py-14 lg:py-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6" data-aos="fade-right">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Cart</span>
          </nav>
          <div data-aos="fade-up">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3">
              Your <span className="text-gradient">Cart</span>
            </h1>
            <p className="text-white/60">{items.length} item{items.length !== 1 ? "s" : ""} in your cart</p>
          </div>
        </div>
      </section>

      {/* ── Cart Content ── */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {items.length === 0 ? (
            /* Empty state */
            <div className="text-center py-24" data-aos="fade-up">
              <ShoppingCart className="w-20 h-20 text-border mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-ink mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-105 transition-transform"
              >
                Start Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-5">
                {items.map((item, i) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    className="group bg-white rounded-3xl p-6 border border-border hover:border-samsung-bright/30 transition-colors"
                  >
                    <div className="flex gap-5">
                      {/* Product thumbnail */}
                      <div className="w-24 h-24 rounded-2xl bg-muted/60 grid place-items-center shrink-0 relative overflow-hidden">
                        <Smartphone className="w-12 h-12 text-border" />
                        <div className="absolute inset-0 bg-cta-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-samsung-bright font-semibold mb-1">
                              {item.category}
                            </div>
                            <h3 className="font-bold text-ink text-lg leading-snug">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mt-0.5">{item.variant}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="w-9 h-9 rounded-full text-muted-foreground hover:bg-red-50 hover:text-red-500 grid place-items-center transition-colors shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-5">
                          {/* Qty control */}
                          <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="w-8 h-8 rounded-full bg-white shadow-sm grid place-items-center hover:bg-samsung-bright hover:text-white transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center font-bold text-ink text-sm">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              aria-label="Increase quantity"
                              className="w-8 h-8 rounded-full bg-white shadow-sm grid place-items-center hover:bg-samsung-bright hover:text-white transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-xl font-bold text-ink">
                              ₹{(item.price * item.qty).toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground line-through">
                              ₹{(item.originalPrice * item.qty).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Perks strip */}
                <div className="bg-ink rounded-3xl p-5 flex flex-wrap gap-5" data-aos="fade-up">
                  {perks.map((p) => (
                    <div key={p.text} className="flex items-center gap-3 text-white/80 text-sm">
                      <p.icon className="w-4 h-4 text-cyan-glow shrink-0" />
                      {p.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-5" data-aos="fade-left">
                {/* Coupon */}
                <div className="bg-white rounded-3xl p-6 border border-border">
                  <div className="flex items-center gap-2 text-ink font-bold mb-4">
                    <Tag className="w-4 h-4 text-samsung-bright" /> Apply Coupon
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                      className="flex-1 px-4 py-3 rounded-xl border border-border bg-muted/30 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition uppercase placeholder:normal-case"
                    />
                    <button
                      onClick={() => {
                        if (coupon === "GEETHAN5") setCouponApplied(true);
                      }}
                      className="px-4 py-3 rounded-xl bg-cta-gradient text-white text-sm font-bold hover:scale-105 transition-transform"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <div className="mt-3 flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                      <Shield className="w-4 h-4" /> Coupon GEETHAN5 applied — 5% off!
                    </div>
                  )}
                  {!couponApplied && (
                    <p className="mt-2 text-xs text-muted-foreground">Try code: GEETHAN5 for 5% off</p>
                  )}
                </div>

                {/* Summary */}
                <div className="bg-white rounded-3xl p-6 border border-border">
                  <h3 className="font-bold text-ink text-lg mb-5">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                      <span className="font-semibold text-ink">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-emerald-600">
                      <span>You Save</span>
                      <span className="font-semibold">–₹{savings.toLocaleString()}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Coupon (GEETHAN5)</span>
                        <span className="font-semibold">–₹{discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pickup</span>
                      <span className="font-semibold text-emerald-600">Free</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between">
                      <span className="font-bold text-ink">Total</span>
                      <span className="font-bold text-2xl text-ink">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-[1.02] transition-transform"
                  >
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/shop"
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-border text-ink text-sm font-semibold hover:bg-muted/50 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="bg-muted/60 rounded-3xl p-5">
                  {[
                    "100% Genuine Products",
                    "Secure Checkout",
                    "Easy Returns within 7 Days",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <Shield className="w-4 h-4 text-samsung-bright shrink-0" />
                      <span className="text-sm text-muted-foreground">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
