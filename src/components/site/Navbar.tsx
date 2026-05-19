import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, X, Smartphone } from "lucide-react";

const links = [
  { label: "Home", href: "/" as const },
  { label: "Shop", href: "/shop" as const },
  { label: "Repairs", href: "/repairs" as const },
  { label: "Sell Phone", href: "/sell-my-phone" as const },
  { label: "Accessories", href: "/accessories" as const },
  { label: "Contact", href: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-cta-gradient grid place-items-center shadow-glow">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg text-ink">
              Geethan<span className="text-gradient">Mobiles</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Thiruvarur
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors group text-ink hover:text-samsung-bright"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-cta-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="w-10 h-10 grid place-items-center rounded-full transition-colors hover:bg-muted text-ink"
          >
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative w-10 h-10 grid place-items-center rounded-full transition-colors hover:bg-muted text-ink"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-cyan-glow text-[10px] font-bold grid place-items-center text-ink">
              2
            </span>
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full transition-colors hover:bg-muted text-ink"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[88%] bg-white shadow-2xl p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="font-bold text-lg text-ink">
              Geethan<span className="text-gradient">Mobiles</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 grid place-items-center rounded-full hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border text-ink font-medium hover:text-samsung-bright"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://wa.me/918825622722"
            className="mt-8 block text-center px-5 py-3 rounded-2xl bg-cta-gradient text-white font-semibold shadow-glow"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
