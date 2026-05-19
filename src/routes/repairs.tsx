import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import {
  Smartphone,
  Battery,
  Plug,
  Droplets,
  Cpu,
  CircuitBoard,
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Wrench,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/repairs")({
  component: RepairsPage,
  head: () => ({
    meta: [
      { title: "Mobile Repair Services — Geethan Mobiles Thiruvarur" },
      {
        name: "description",
        content:
          "Expert mobile phone repairs in Thiruvarur. Screen replacement, battery, charging port, water damage & more. 90-day warranty. Same-day service available.",
      },
    ],
  }),
});

const repairs = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    price: "₹999",
    time: "45 min",
    desc: "Cracked or broken display? We use OEM-quality screens for a flawless replacement.",
    badge: "Most Popular",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    price: "₹799",
    time: "30 min",
    desc: "Restore your phone's battery life with genuine high-capacity replacements.",
    badge: null,
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    price: "₹599",
    time: "40 min",
    desc: "Loose or non-functional charging port fixed with precision soldering.",
    badge: null,
  },
  {
    icon: Droplets,
    name: "Water Damage",
    price: "₹1,499",
    time: "24 hrs",
    desc: "Comprehensive liquid damage treatment including ultrasonic cleaning.",
    badge: null,
  },
  {
    icon: Cpu,
    name: "Software Fix",
    price: "₹399",
    time: "20 min",
    desc: "Flashing, unlocking, virus removal and full software restoration.",
    badge: "Quick Fix",
  },
  {
    icon: CircuitBoard,
    name: "Board Repair",
    price: "₹1,999",
    time: "48 hrs",
    desc: "Motherboard-level micro-soldering for complex hardware faults.",
    badge: null,
  },
];

const process = [
  {
    step: "01",
    icon: Phone,
    title: "Book or Walk In",
    desc: "Call us, WhatsApp, or simply walk into our store. No appointment needed.",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Free Diagnosis",
    desc: "Our technician diagnoses the issue and gives you a transparent price quote.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Fast Repair",
    desc: "Repairs done while you wait for most issues. No overnight delays.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "90-Day Warranty",
    desc: "Every repair is backed by our 90-day service warranty. Peace of mind guaranteed.",
  },
];

const guarantees = [
  "OEM-quality parts used in every repair",
  "Certified technicians with 10+ years experience",
  "90-day warranty on all repairs",
  "Free diagnostic check",
  "No fix, no fee policy",
  "Same-day service for most repairs",
];

function RepairsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-background overflow-x-hidden pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-ink">
        {/* Radial glow accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(37,99,235,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.15),transparent_55%)]" />
        {/* Floating icon decoration */}
        <div className="absolute right-10 top-20 opacity-5 pointer-events-none">
          <Wrench className="w-72 h-72 text-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-samsung-bright/20 border border-samsung-bright/30 rounded-full px-4 py-1.5 text-cyan-glow text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Certified Repair Centre
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Phone, <br />
              <span className="text-gradient">Fixed Fast.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              Expert repairs for all major brands — Samsung, Apple, OnePlus & more. 
              Transparent pricing, genuine parts, and a 90-day warranty on every job.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918825622722"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-105 transition-transform"
              >
                Book a Repair <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918825622722"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/15 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {[
              { value: "10,000+", label: "Devices Repaired", icon: Smartphone },
              { value: "90 Day", label: "Warranty", icon: ShieldCheck },
              { value: "45 min", label: "Avg. Turnaround", icon: Clock },
              { value: "4.9★", label: "Customer Rating", icon: Star },
            ].map((s, i) => (
              <div
                key={s.label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="glass rounded-3xl p-6 text-white text-center"
              >
                <s.icon className="w-7 h-7 text-cyan-glow mx-auto mb-3" />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Repair Services Grid ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              Repair Menu
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink">
              What We <span className="text-gradient">Fix</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Transparent, upfront pricing — no hidden charges, ever.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairs.map((r, i) => (
              <div
                key={r.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative bg-white rounded-3xl p-7 border border-border hover-lift overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cta-gradient opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
                
                {r.badge && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider bg-cta-gradient text-white px-2.5 py-1 rounded-full">
                    {r.badge}
                  </span>
                )}

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-cta-gradient grid place-items-center shadow-glow shrink-0">
                    <r.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Starts at</div>
                    <div className="text-2xl font-bold text-ink">{r.price}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ink mb-2">{r.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{r.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {r.time} turnaround
                  </div>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-samsung-bright group-hover:gap-2 transition-all">
                    Book repair <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold mb-3">
              The Process
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink">
              Simple. <span className="text-gradient">Seamless.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative bg-white rounded-3xl p-7 border border-border text-center group hover-lift"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cta-gradient text-white text-xs font-bold grid place-items-center shadow-glow">
                  {p.step}
                </div>
                <div className="mt-4 w-14 h-14 rounded-2xl bg-samsung-bright/10 grid place-items-center mx-auto mb-5 group-hover:bg-cta-gradient transition-colors duration-300">
                  <p.icon className="w-6 h-6 text-samsung-bright group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee Section ── */}
      <section className="py-20 lg:py-28 bg-ink overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-glow font-semibold mb-4">Our Promise</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              The <span className="text-gradient">Geethan Guarantee</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Every repair comes with our full quality commitment. We stand behind our work 
              so you can trust your device is in the best hands.
            </p>
            <a
              href="https://wa.me/918825622722"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:scale-105 transition-transform"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid gap-4" data-aos="fade-left">
            {guarantees.map((g, i) => (
              <div
                key={g}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="glass rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <CheckCircle className="w-5 h-5 text-emerald-success shrink-0" />
                <span className="text-white font-medium">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div
            className="relative rounded-[2.5rem] overflow-hidden bg-cta-gradient p-12 lg:p-20 text-center text-white shadow-glow-lg"
            data-aos="zoom-in"
          >
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to fix your phone?</h2>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">
                Walk in anytime or book via WhatsApp. Free diagnosis, transparent quote — no surprises.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918825622722"
                  className="px-7 py-3.5 bg-white text-ink font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  WhatsApp Us
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
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 blur-3xl -ml-40 -mb-40 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
