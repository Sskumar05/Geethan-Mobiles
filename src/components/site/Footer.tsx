import { Smartphone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-cta-gradient grid place-items-center shadow-glow">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-lg">Geethan<span className="text-gradient">Mobiles</span></div>
          </div>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Thiruvarur's most trusted mobile destination — repairs, pre-owned devices, accessories & buyback.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full glass grid place-items-center hover:bg-white/20 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Quick Links", links: ["Home", "Shop", "Repairs", "Sell Phone", "Accessories"] },
          { title: "Services", links: ["Screen Repair", "Battery Swap", "Water Damage", "Buyback", "Software Fix"] },
          { title: "Contact", links: ["+91 88256 22722", "hello@geethanmobiles.in", "Main Road, Thiruvarur", "Mon–Sat 9 AM–9 PM"] },
        ].map((col) => (
          <div key={col.title}>
            <div className="font-bold mb-4">{col.title}</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-cyan-glow transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Geethan Mobiles. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
