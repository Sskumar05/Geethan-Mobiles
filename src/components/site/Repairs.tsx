import { Smartphone, Battery, Plug, Droplets, Cpu, CircuitBoard, ArrowRight, Clock } from "lucide-react";

const repairs = [
  { icon: Smartphone, name: "Screen Replacement", price: "₹999", time: "45 min" },
  { icon: Battery, name: "Battery Replacement", price: "₹799", time: "30 min" },
  { icon: Plug, name: "Charging Port Repair", price: "₹599", time: "40 min" },
  { icon: Droplets, name: "Water Damage", price: "₹1,499", time: "24 hrs" },
  { icon: Cpu, name: "Software Fix", price: "₹399", time: "20 min" },
  { icon: CircuitBoard, name: "Board Repair", price: "₹1,999", time: "48 hrs" },
];

export function Repairs() {
  return (
    <section id="repairs" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">Repair menu</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink">
            Fixed fast. <span className="text-gradient">Done right.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Transparent pricing across every common repair.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repairs.map((r, i) => (
            <div
              key={r.name}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group bg-white rounded-3xl p-6 border border-border hover-lift relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cta-gradient opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="relative flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-cta-gradient grid place-items-center shadow-glow">
                  <r.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Starts at</div>
                  <div className="text-xl font-bold text-ink">{r.price}</div>
                </div>
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-ink">{r.name}</h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {r.time} turnaround
              </div>
              <button className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-samsung-bright group-hover:gap-2 transition-all">
                Book repair <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
