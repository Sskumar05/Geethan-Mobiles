import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Certified Technicians", sub: "Trained & verified pros" },
  { icon: Clock, title: "Same-Day Service", sub: "Most repairs in hours" },
  { icon: Award, title: "90-Day Warranty", sub: "On every repair" },
  { icon: Users, title: "5,000+ Customers", sub: "Across Thiruvarur" },
];

export function TrustBadges() {
  return (
    <section className="relative py-16 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((b, i) => (
          <div
            key={b.title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="relative overflow-hidden glass rounded-2xl p-5 lg:p-6 animate-shimmer"
          >
            <b.icon className="w-8 h-8 text-cyan-glow" />
            <div className="mt-4 font-bold text-white">{b.title}</div>
            <div className="text-xs text-white/70 mt-1">{b.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
