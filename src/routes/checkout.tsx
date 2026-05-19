import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import AOS from "aos";
import {
  ShieldCheck,
  Smartphone,
  User,
  MapPin,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Lock,
  Truck,
  RefreshCw,
  Phone,
  Package,
} from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Checkout — Geethan Mobiles" },
      { name: "description", content: "Secure checkout at Geethan Mobiles. Pay online or in-store. Fast processing, 90-day warranty on all purchases." },
    ],
  }),
});

const orderItems = [
  { name: "Samsung Galaxy S23 FE", variant: "128GB · Graphite", price: 34999, qty: 1 },
  { name: "Spigen Neo Hybrid Case", variant: "For Samsung S23 FE", price: 999, qty: 2 },
];

const paymentMethods = [
  { id: "upi", label: "UPI / Google Pay / PhonePe", icon: Phone },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "cod", label: "Pay at Store (Walk-in)", icon: Package },
];

const steps = ["Personal Info", "Delivery", "Payment", "Confirm"];

type Step = 0 | 1 | 2 | 3;

function CheckoutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  const [step, setStep] = useState<Step>(0);
  const [payment, setPayment] = useState("upi");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Thiruvarur",
    pincode: "",
    upiId: "",
    cardNo: "",
  });

  const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal;

  const nextStep = () => setStep((s) => Math.min(3, s + 1) as Step);
  const prevStep = () => setStep((s) => Math.max(0, s - 1) as Step);

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20 min-h-screen">
      {/* ── Page Header ── */}
      <section className="py-14 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-5" data-aos="fade-right">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/cart" className="hover:text-white transition-colors">Cart</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Checkout</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Secure <span className="text-gradient">Checkout</span>
          </h1>
          <div className="flex items-center gap-2 text-emerald-400 text-sm mt-2" data-aos="fade-up" data-aos-delay="100">
            <Lock className="w-3.5 h-3.5" /> SSL Encrypted · Your data is safe
          </div>
        </div>
      </section>

      {/* ── Step Progress ── */}
      <div className="bg-white border-b border-border sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-lg">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full grid place-items-center text-sm font-bold transition-colors ${
                    i < step
                      ? "bg-emerald-500 text-white"
                      : i === step
                      ? "bg-cta-gradient text-white shadow-glow"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={`text-sm font-semibold hidden sm:block transition-colors ${
                    i === step ? "text-ink" : i < step ? "text-emerald-600" : "text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 transition-colors ${i < step ? "bg-emerald-400" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Checkout Body ── */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-8">

          {/* Form Panel */}
          <div className="lg:col-span-2 space-y-6">

            {/* Step 0 — Personal Info */}
            {step === 0 && (
              <div className="bg-white rounded-3xl p-7 border border-border" data-aos="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cta-gradient grid place-items-center shadow-glow">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-ink">Personal Information</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 1 — Delivery */}
            {step === 1 && (
              <div className="bg-white rounded-3xl p-7 border border-border" data-aos="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cta-gradient grid place-items-center shadow-glow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-ink">Pickup / Delivery Details</h2>
                </div>

                {/* Pickup option */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex gap-3 mb-5">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-800">In-Store Pickup Available</div>
                    <div className="text-sm text-emerald-700 mt-0.5">
                      Pick up from <strong>Main Road, Thiruvarur</strong> — Mon–Sat 9AM–9PM.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Street address, area…"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition resize-none"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">City</label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Pincode</label>
                      <input
                        type="text"
                        placeholder="6 digits"
                        value={form.pincode}
                        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — Payment */}
            {step === 2 && (
              <div className="bg-white rounded-3xl p-7 border border-border" data-aos="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cta-gradient grid place-items-center shadow-glow">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-ink">Payment Method</h2>
                </div>

                <div className="space-y-3 mb-6">
                  {paymentMethods.map((m) => (
                    <label
                      key={m.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                        payment === m.id ? "border-samsung-bright bg-samsung-bright/5" : "border-border hover:border-samsung-bright/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={m.id}
                        checked={payment === m.id}
                        onChange={() => setPayment(m.id)}
                        className="hidden"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 grid place-items-center transition-colors ${
                          payment === m.id ? "border-samsung-bright" : "border-border"
                        }`}
                      >
                        {payment === m.id && <div className="w-2.5 h-2.5 rounded-full bg-samsung-bright" />}
                      </div>
                      <m.icon className={`w-5 h-5 ${payment === m.id ? "text-samsung-bright" : "text-muted-foreground"}`} />
                      <span className="font-semibold text-ink">{m.label}</span>
                    </label>
                  ))}
                </div>

                {payment === "upi" && (
                  <div data-aos="fade-up">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      value={form.upiId}
                      onChange={(e) => setForm({ ...form, upiId: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                    />
                  </div>
                )}

                {payment === "card" && (
                  <div data-aos="fade-up" className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Card Number</label>
                      <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={form.cardNo}
                        onChange={(e) => setForm({ ...form, cardNo: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">CVV</label>
                        <input
                          type="text"
                          placeholder="XXX"
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/20 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {payment === "cod" && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-800" data-aos="fade-up">
                    <strong>Walk-in Purchase:</strong> Visit our store and pay at the counter. Your order will be reserved for 24 hours.
                  </div>
                )}
              </div>
            )}

            {/* Step 3 — Confirm */}
            {step === 3 && (
              <div className="bg-white rounded-3xl p-7 border border-border text-center" data-aos="zoom-in">
                <div className="w-20 h-20 rounded-full bg-emerald-500 grid place-items-center mx-auto mb-5 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ink mb-2">Order Confirmed! 🎉</h2>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                  Thank you, <strong>{form.name || "Customer"}</strong>! Your order has been received. 
                  Our team will contact you at <strong>{form.phone || "your number"}</strong> to confirm.
                </p>
                <div className="bg-muted/40 rounded-2xl p-5 mb-6 text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Order Summary</div>
                  {orderItems.map((o) => (
                    <div key={o.name} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                      <span className="text-ink">{o.name} ×{o.qty}</span>
                      <span className="font-bold">₹{(o.price * o.qty).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 font-bold text-ink">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://wa.me/918825622722"
                    className="px-6 py-3 bg-cta-gradient text-white font-bold rounded-2xl shadow-glow hover:scale-105 transition-transform"
                  >
                    Chat with Us
                  </a>
                  <Link
                    to="/"
                    className="px-6 py-3 border border-border text-ink font-semibold rounded-2xl hover:bg-muted transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 3 && (
              <div className="flex justify-between gap-4">
                {step > 0 ? (
                  <button
                    onClick={prevStep}
                    className="px-6 py-3.5 rounded-2xl border border-border text-ink font-semibold hover:bg-muted transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <Link
                    to="/cart"
                    className="px-6 py-3.5 rounded-2xl border border-border text-ink font-semibold hover:bg-muted transition-colors"
                  >
                    Back to Cart
                  </Link>
                )}
                <button
                  onClick={nextStep}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  {step === 2 ? "Place Order" : "Continue"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-5" data-aos="fade-left">
            <div className="bg-white rounded-3xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-5 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-samsung-bright" /> Your Order
              </h3>
              <div className="space-y-4">
                {orderItems.map((o) => (
                  <div key={o.name} className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted/60 grid place-items-center shrink-0">
                      <Smartphone className="w-6 h-6 text-border" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-ink text-sm leading-snug">{o.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{o.variant}</div>
                      <div className="text-sm font-bold text-ink mt-1">
                        ₹{(o.price * o.qty).toLocaleString()} <span className="text-muted-foreground font-normal">×{o.qty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Pickup</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-ink text-base pt-2 border-t border-border">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="bg-white rounded-3xl p-6 border border-border space-y-3">
              {[
                { icon: Lock, label: "SSL Secure Checkout" },
                { icon: ShieldCheck, label: "90-Day Warranty Included" },
                { icon: Truck, label: "Free In-Store Pickup" },
                { icon: RefreshCw, label: "7-Day Easy Return" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <t.icon className="w-4 h-4 text-samsung-bright shrink-0" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
