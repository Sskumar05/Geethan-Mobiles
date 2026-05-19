import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Send,
  User,
  Smartphone,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Geethan Mobiles — Visit Us in Thiruvarur" },
      {
        name: "description",
        content:
          "Get in touch with Geethan Mobiles. Visit our store in Thiruvarur, call, WhatsApp or email us. Open Mon–Sat 9AM–9PM.",
      },
    ],
  }),
});

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 88256 22722",
    sub: "Mon – Sat, 9 AM – 9 PM",
    href: "tel:+918825622722",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    sub: "Usually replies in 5 min",
    href: "https://wa.me/918825622722",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@geethanmobiles.in",
    sub: "We respond within 24 hrs",
    href: "mailto:hello@geethanmobiles.in",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Main Road, Thiruvarur",
    sub: "Tamil Nadu — 610 001",
    href: "#map",
    color: "from-rose-500 to-red-600",
  },
];

const faqs = [
  {
    q: "What are your working hours?",
    a: "We are open Monday to Saturday from 9:00 AM to 9:00 PM, and Sunday from 10:00 AM to 6:00 PM.",
  },
  {
    q: "Do I need an appointment for a repair?",
    a: "No appointment needed — just walk in! For complex repairs like board-level work, calling ahead helps us prepare.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Most common repairs (screen, battery, charging port) are completed within 20–45 minutes while you wait.",
  },
  {
    q: "Do you offer warranty on repairs?",
    a: "Yes! Every repair comes with a 90-day warranty covering the same issue. No fine print.",
  },
  {
    q: "Do you buy any phone brand?",
    a: "We buy all major brands including Apple, Samsung, OnePlus, Xiaomi, Realme, Vivo, and more.",
  },
];

const services = [
  "Screen Replacement",
  "Battery Replacement",
  "Charging Port Repair",
  "Water Damage Treatment",
  "Software Repair",
  "Phone Buyback",
  "New / Pre-owned Phone",
  "Accessories Purchase",
  "Other",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl border border-border overflow-hidden"
      data-aos="fade-up"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-semibold text-ink pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-samsung-bright shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect with pre-filled message
    const msg = `Hi Geethan Mobiles! My name is ${form.name}. I need help with: ${form.service}. ${form.message}. My phone: ${form.phone}`;
    window.open(`https://wa.me/918825622722?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(56,189,248,0.15),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-cyan-glow text-xs font-semibold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5" /> Open Today · 9 AM – 9 PM
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            We're Here to <span className="text-gradient">Help You</span>
          </h1>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a question, need a repair, or want to sell your phone? Reach us any way you prefer — 
            we're always happy to chat.
          </p>

          {/* Quick contact strip */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918825622722"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 text-white font-bold shadow-glow hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a
              href="tel:+918825622722"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass text-white font-semibold hover:bg-white/15 transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 88256 22722
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactItems.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative bg-white rounded-3xl p-7 border border-border hover-lift overflow-hidden text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center shadow-glow mx-auto mb-5`}
                >
                  <c.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</div>
                <div className="font-bold text-ink text-lg mb-1 group-hover:text-samsung-bright transition-colors">
                  {c.value}
                </div>
                <div className="text-sm text-muted-foreground">{c.sub}</div>
                <div className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form + Hours ── */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div data-aos="fade-right">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">Send a Message</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-8">
              Quick <span className="text-gradient">Enquiry</span>
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center" data-aos="fade-up">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-ink mb-2">Opening WhatsApp…</h3>
                <p className="text-muted-foreground">Your message is pre-filled. Just hit Send!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-4 rounded-2xl border border-border bg-white text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                  />
                </div>

                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-4 rounded-2xl border border-border bg-white text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                  />
                </div>

                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-4 rounded-2xl border border-border bg-white text-ink focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition"
                >
                  <option value="">Select a Service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us more about your requirement…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-4 rounded-2xl border border-border bg-white text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-samsung-bright/40 transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  This will open WhatsApp with your message pre-filled.
                </p>
              </form>
            )}
          </div>

          {/* Store info */}
          <div data-aos="fade-left" className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">Our Location</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-6">
                Find <span className="text-gradient">Our Store</span>
              </h2>
            </div>

            {/* Map */}
            <div id="map" className="rounded-3xl overflow-hidden border border-border h-64 relative bg-muted">
              <iframe
                title="Geethan Mobiles location"
                src="https://www.google.com/maps?q=Thiruvarur,Tamil+Nadu&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Hours */}
            <div className="bg-ink rounded-3xl p-6 text-white">
              <div className="flex items-center gap-2 text-cyan-glow text-xs uppercase tracking-wider font-semibold mb-5">
                <Clock className="w-4 h-4" /> Store Hours
              </div>
              {[
                { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
                { day: "Saturday", time: "9:00 AM – 9:00 PM" },
                { day: "Sunday", time: "10:00 AM – 6:00 PM" },
                { day: "Public Holidays", time: "11:00 AM – 5:00 PM" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between py-3 border-b border-white/10 last:border-0">
                  <span className="text-white/60 text-sm">{h.day}</span>
                  <span className="font-semibold text-sm">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cta-gradient grid place-items-center shadow-glow shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-ink mb-1">Geethan Mobiles</div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  Main Road, Thiruvarur<br />
                  Tamil Nadu — 610 001<br />
                  Near Central Bus Stand
                </div>
                <a
                  href="https://maps.google.com/?q=Thiruvarur,Tamil+Nadu"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-samsung-bright hover:gap-2 transition-all"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              Questions Answered
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div
            className="relative rounded-[2.5rem] overflow-hidden bg-cta-gradient p-12 lg:p-20 text-center text-white shadow-glow-lg"
            data-aos="zoom-in"
          >
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Still have questions?</h2>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">
                Our team is available on WhatsApp, phone, and in-store. We're happy to help with anything.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918825622722"
                  className="px-7 py-3.5 bg-white text-ink font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  Chat on WhatsApp
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
