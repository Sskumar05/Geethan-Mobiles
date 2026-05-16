import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const items = [
  { icon: Phone, label: "Call us", value: "+91 88256 22722", href: "tel:+918825622722" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/918825622722" },
  { icon: Mail, label: "Email", value: "hello@geethanmobiles.in", href: "mailto:hello@geethanmobiles.in" },
  { icon: MapPin, label: "Visit", value: "Main Road, Thiruvarur", href: "#map" },
];

export function Contact() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-samsung-bright font-semibold">Reach us</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-ink">
            Let's <span className="text-gradient">talk mobile</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {items.map((it, i) => (
              <a
                key={it.label}
                href={it.href}
                data-aos="fade-right"
                data-aos-delay={i * 80}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-cta-gradient grid place-items-center shadow-glow shrink-0">
                  <it.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{it.label}</div>
                  <div className="font-semibold text-ink group-hover:text-samsung-bright transition-colors">{it.value}</div>
                </div>
              </a>
            ))}
            <div className="p-5 rounded-2xl bg-ink text-white" data-aos="fade-right" data-aos-delay="320">
              <div className="flex items-center gap-2 text-cyan-glow text-xs uppercase tracking-wider font-semibold">
                <Clock className="w-3.5 h-3.5" /> Store hours
              </div>
              <div className="mt-3 text-sm space-y-1.5">
                <div className="flex justify-between"><span className="text-white/70">Mon – Sat</span><span className="font-semibold">9:00 AM – 9:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/70">Sunday</span><span className="font-semibold">10:00 AM – 6:00 PM</span></div>
              </div>
            </div>
          </div>

          <div id="map" className="lg:col-span-2 rounded-3xl overflow-hidden border border-border min-h-[420px] relative bg-muted" data-aos="fade-left">
            <iframe
              title="Geethan Mobiles location"
              src="https://www.google.com/maps?q=Thiruvarur,Tamil+Nadu&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
