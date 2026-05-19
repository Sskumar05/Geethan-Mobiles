import { useState, useEffect, useRef } from "react";
import { X, SlidersHorizontal, ChevronDown, ChevronUp, RotateCcw, Check } from "lucide-react";

export interface FilterState {
  brands: string[];
  priceMin: number;
  priceMax: number;
  storages: string[];
  conditions: string[];
  categories: string[];
}

export const DEFAULT_FILTERS: FilterState = {
  brands: [],
  priceMin: 0,
  priceMax: 100000,
  storages: [],
  conditions: [],
  categories: [],
};

const BRANDS = ["Apple", "Samsung", "OnePlus", "Vivo", "Xiaomi", "Oppo", "Realme"];
const STORAGES = ["64GB", "128GB", "256GB", "512GB"];
const CONDITIONS = ["Brand New", "Like New", "Excellent", "Fair"];
const CATEGORIES = ["New Phones", "Second-Hand / Used Phones", "Accessories"];

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  totalResults: number;
}

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

function CheckPill({
  label,
  active,
  onClick,
  accent,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  accent?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
        active
          ? `bg-samsung-bright/10 text-samsung-bright border border-samsung-bright/30`
          : "text-ink/80 hover:bg-muted border border-transparent hover:border-border"
      } ${accent || ""}`}
    >
      <span
        className={`w-4.5 h-4.5 w-[18px] h-[18px] rounded-[5px] border-2 flex items-center justify-center shrink-0 transition-all ${
          active ? "bg-samsung-bright border-samsung-bright" : "border-border"
        }`}
      >
        {active && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
      </span>
      {label}
    </button>
  );
}

function AccordionSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full py-4 px-1 text-left"
      >
        <span className="font-semibold text-ink text-sm uppercase tracking-wider">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      {open && <div className="pb-4 space-y-1">{children}</div>}
    </div>
  );
}

function PriceRangeSlider({
  min,
  max,
  onChange,
}: {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}) {
  const [localMin, setLocalMin] = useState(min);
  const [localMax, setLocalMax] = useState(max);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalMin(min);
    setLocalMax(max);
  }, [min, max]);

  const pct = (v: number) => (v / 100000) * 100;

  return (
    <div className="px-1 pb-2">
      <div className="flex justify-between text-xs font-semibold text-ink mb-3">
        <span>₹{localMin.toLocaleString("en-IN")}</span>
        <span>₹{localMax.toLocaleString("en-IN")}</span>
      </div>
      <div ref={trackRef} className="relative h-1.5 bg-border rounded-full mx-1">
        {/* active fill */}
        <div
          className="absolute h-full bg-cta-gradient rounded-full"
          style={{ left: `${pct(localMin)}%`, right: `${100 - pct(localMax)}%` }}
        />
        {/* min thumb */}
        <input
          type="range"
          min={0}
          max={100000}
          step={1000}
          value={localMin}
          onChange={(e) => {
            const v = Math.min(Number(e.target.value), localMax - 1000);
            setLocalMin(v);
            onChange(v, localMax);
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: localMin > 50000 ? 5 : 3 }}
        />
        {/* max thumb */}
        <input
          type="range"
          min={0}
          max={100000}
          step={1000}
          value={localMax}
          onChange={(e) => {
            const v = Math.max(Number(e.target.value), localMin + 1000);
            setLocalMax(v);
            onChange(localMin, v);
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 4 }}
        />
        {/* visual thumbs */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-samsung-bright border-2 border-white shadow-glow pointer-events-none"
          style={{ left: `calc(${pct(localMin)}% - 10px)` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-samsung-bright border-2 border-white shadow-glow pointer-events-none"
          style={{ left: `calc(${pct(localMax)}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground mt-3">
        <span>₹0</span>
        <span>₹1,00,000</span>
      </div>
    </div>
  );
}

function FilterPanel({
  filters,
  onChange,
  totalResults,
  onClose,
  isMobile,
}: Props & { onClose?: () => void; isMobile?: boolean }) {
  const activeCount =
    filters.brands.length +
    filters.storages.length +
    filters.conditions.length +
    filters.categories.length +
    (filters.priceMin > 0 || filters.priceMax < 100000 ? 1 : 0);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-samsung-bright" />
          <span className="font-bold text-ink">Filters</span>
          {activeCount > 0 && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-samsung-bright text-white">
              {activeCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <button
              onClick={() => onChange(DEFAULT_FILTERS)}
              className="flex items-center gap-1 text-xs text-samsung-bright hover:text-samsung font-semibold transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="w-8 h-8 grid place-items-center rounded-xl bg-muted hover:bg-border transition-colors"
            >
              <X className="w-4 h-4 text-ink" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable filter body */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {/* Category */}
        <AccordionSection title="Category">
          {CATEGORIES.map((cat) => (
            <CheckPill
              key={cat}
              label={cat}
              active={filters.categories.includes(cat)}
              onClick={() => onChange({ ...filters, categories: toggle(filters.categories, cat) })}
              accent={
                cat === "Second-Hand / Used Phones"
                  ? filters.categories.includes(cat)
                    ? ""
                    : "hover:text-amber-600"
                  : ""
              }
            />
          ))}
        </AccordionSection>

        {/* Brand */}
        <AccordionSection title="Brand">
          {BRANDS.map((b) => (
            <CheckPill
              key={b}
              label={b}
              active={filters.brands.includes(b)}
              onClick={() => onChange({ ...filters, brands: toggle(filters.brands, b) })}
            />
          ))}
        </AccordionSection>

        {/* Price */}
        <AccordionSection title="Price Range">
          <PriceRangeSlider
            min={filters.priceMin}
            max={filters.priceMax}
            onChange={(min, max) => onChange({ ...filters, priceMin: min, priceMax: max })}
          />
        </AccordionSection>

        {/* Storage */}
        <AccordionSection title="Storage">
          {STORAGES.map((s) => (
            <CheckPill
              key={s}
              label={s}
              active={filters.storages.includes(s)}
              onClick={() => onChange({ ...filters, storages: toggle(filters.storages, s) })}
            />
          ))}
        </AccordionSection>

        {/* Condition */}
        <AccordionSection title="Condition">
          {CONDITIONS.map((c) => (
            <CheckPill
              key={c}
              label={c}
              active={filters.conditions.includes(c)}
              onClick={() => onChange({ ...filters, conditions: toggle(filters.conditions, c) })}
            />
          ))}
        </AccordionSection>
      </div>

      {/* Footer apply (mobile) */}
      {isMobile && (
        <div className="shrink-0 px-5 py-4 border-t border-border bg-background">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-cta-gradient text-white font-bold shadow-glow hover:shadow-glow-lg transition-shadow"
          >
            Show {totalResults} Results
          </button>
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Public exported wrapper                                               */
/* ────────────────────────────────────────────────────────────────────── */
export function ShopFilters({ filters, onChange, totalResults }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when sheet is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeCount =
    filters.brands.length +
    filters.storages.length +
    filters.conditions.length +
    filters.categories.length +
    (filters.priceMin > 0 || filters.priceMax < 100000 ? 1 : 0);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex flex-col w-72 shrink-0">
        <div className="sticky top-24 rounded-3xl border border-border bg-white/80 backdrop-blur-sm overflow-hidden shadow-sm h-[calc(100vh-7rem)] max-h-[780px]">
          <FilterPanel
            filters={filters}
            onChange={onChange}
            totalResults={totalResults}
          />
        </div>
      </aside>

      {/* ── Mobile trigger button ── */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-cta-gradient text-white font-bold shadow-glow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-white text-samsung-bright text-[10px] font-black grid place-items-center">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Mobile bottom sheet ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Sheet */}
          <div
            className="lg:hidden fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-background overflow-hidden"
            style={{
              maxHeight: "85dvh",
              animation: "slideUp 0.35s cubic-bezier(0.2,0.8,0.2,1)",
            }}
          >
            {/* Drag handle */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-border" />
            <div className="flex flex-col" style={{ height: "85dvh" }}>
              <FilterPanel
                filters={filters}
                onChange={onChange}
                totalResults={totalResults}
                onClose={() => setMobileOpen(false)}
                isMobile
              />
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
