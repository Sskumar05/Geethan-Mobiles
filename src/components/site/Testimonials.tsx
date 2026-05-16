import { Star } from "lucide-react";

const reviews = [
  { name: "Karthik R.", role: "Thiruvarur", text: "Got my iPhone screen replaced in 40 minutes. Looks brand new and the price was unbeatable.", initial: "K" },
  { name: "Divya M.", role: "Mannargudi", text: "Sold my old Samsung — they gave me ₹4,000 more than the online quote. Super trustworthy.", initial: "D" },
  { name: "Arun S.", role: "Nagapattinam", text: "Bought a pre-owned OnePlus. Battery health 96%, came with warranty. Highly recommend.", initial: "A" },
  { name: "Priya V.", role: "Thiruvarur", text: "Water-damaged my phone, thought it was dead. They revived it in a day. Magicians!", initial: "P" },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">Loved locally</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink">
            Real stories from <span className="text-gradient">real customers</span>
          </h2>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto snap-x snap-mandatory lg:overflow-visible pb-4 -mx-5 px-5 lg:mx-0 lg:px-0">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="shrink-0 w-[85%] sm:w-80 lg:w-auto snap-start glass-light rounded-3xl p-6 hover-lift border border-border"
            >
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-4 text-ink leading-relaxed text-sm">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-cta-gradient grid place-items-center text-white font-bold">
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
