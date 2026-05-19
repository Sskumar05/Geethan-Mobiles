import { Link } from "@tanstack/react-router";
import { Smartphone, Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "Shop", to: "/shop" as const },
  { label: "Repairs", to: "/repairs" as const },
  { label: "Sell Phone", to: "/sell-my-phone" as const },
  { label: "Accessories", to: "/accessories" as const },
  { label: "Contact", to: "/contact" as const },
];

const services = [
  "Screen Replacement",
  "Battery Swap",
  "Charging Port Repair",
  "Water Damage Fix",
  "Software Repair",
  "Phone Buyback",
];

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-xl bg-cta-gradient grid place-items-center shadow-glow">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-lg">
              Geethan<span className="text-gradient">Mobiles</span>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Thiruvarur's most trusted mobile destination — repairs, certified pre-owned devices, accessories & instant buyback.
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full glass grid place-items-center hover:bg-white/20 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-bold mb-5">Quick Links</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="hover:text-cyan-glow transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="font-bold mb-5">Our Services</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {services.map((s) => (
              <li key={s}>
                <Link to="/repairs" className="hover:text-cyan-glow transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-bold mb-5">Contact Us</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <a href="tel:+918825622722" className="flex items-start gap-2.5 hover:text-cyan-glow transition-colors">
                <Phone className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
                +91 88256 22722
              </a>
            </li>
            <li>
              <a href="mailto:hello@geethanmobiles.in" className="flex items-start gap-2.5 hover:text-cyan-glow transition-colors">
                <Mail className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
                hello@geethanmobiles.in
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
              Main Road, Thiruvarur, TN 610&nbsp;001
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
              <span>Mon–Sat: 9 AM – 9 PM<br />Sun: 10 AM – 6 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Geethan Mobiles. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
