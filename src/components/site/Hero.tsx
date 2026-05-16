import { ArrowRight, MapPin, Wrench, Sparkles, Battery, Wifi } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36 pb-20 lg:pb-32">
      {/* Floating blur glow circles */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-purple-accent/30 blur-3xl animate-float-slow" />
      <div className="absolute top-40 -right-20 w-[26rem] h-[26rem] rounded-full bg-cyan-glow/25 blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-samsung-bright/30 blur-3xl" />
      {/* Particle dots */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div data-aos="fade-right" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-white text-xs font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-cyan-glow" />
            Thiruvarur, Tamil Nadu
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
            Your All-in-One{" "}
            <span className="text-gradient">Mobile Destination</span>{" "}
            in Thiruvarur
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
            Expert repairs, certified pre-owned devices, accessories, instant buyback,
            and premium mobile solutions — all under one trusted roof.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-ink font-semibold shadow-glow-lg hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Shop Devices
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#repairs"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/20 transition-all"
            >
              <Wrench className="w-4 h-4" />
              Get Repair Quote
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "5K+", l: "Happy Customers" },
              { v: "90d", l: "Warranty" },
              { v: "24h", l: "Turnaround" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-white">{s.v}</div>
                <div className="text-xs text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: abstract CSS phone mockup */}
        <div data-aos="zoom-in" data-aos-duration="1200" className="relative h-[560px] hidden md:block">
          <div className="absolute inset-0 grid place-items-center">
            {/* Glow ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10" />
            <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5" />
            <div className="absolute w-72 h-72 rounded-full bg-cta-gradient blur-3xl opacity-60" />

            {/* Phone */}
            <div className="relative w-72 h-[560px] rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 shadow-glow-lg animate-float-slow border border-white/10">
              <div className="w-full h-full rounded-[2.4rem] bg-hero-gradient relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black/80 z-10" />
                {/* Screen content */}
                <div className="absolute inset-0 p-6 pt-14 flex flex-col">
                  <div className="text-white/60 text-xs">Good morning</div>
                  <div className="text-white text-2xl font-bold mt-1">Geethan Mobiles</div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[Wrench, Sparkles, Battery, Wifi].map((Icon, i) => (
                      <div key={i} className="glass rounded-2xl p-4 aspect-square grid place-items-center">
                        <Icon className="w-7 h-7 text-cyan-glow" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 glass rounded-2xl p-4">
                    <div className="text-white/60 text-[10px] uppercase tracking-wider">Next service</div>
                    <div className="text-white text-sm font-semibold mt-1">Screen replacement</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-cta-gradient" />
                    </div>
                  </div>
                  <div className="mt-auto text-center text-white/40 text-[10px]">
                    Powered by craftsmanship
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute top-10 left-4 glass rounded-2xl px-4 py-3 text-white text-sm shadow-glow animate-float-slow" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-success animate-pulse" />
                Same-day service
              </div>
            </div>
            <div className="absolute bottom-16 right-0 glass rounded-2xl px-4 py-3 text-white text-sm shadow-glow animate-float-slow" style={{ animationDelay: "1.2s" }}>
              <div className="text-cyan-glow text-xs">Certified</div>
              <div className="font-semibold">90-day warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <svg className="absolute bottom-0 inset-x-0 text-background" viewBox="0 0 1440 80" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
