import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/minimomo-logo.png.asset.json";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Zones", to: "/zones" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "Parties", to: "/parties" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Visit", to: "/visit" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-4 z-50 px-3 md:top-6 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/60 bg-background/80 px-3 py-2.5 shadow-soft backdrop-blur-xl md:px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img
            src={logo.url}
            alt="MiniMomo Playlounge"
            className="h-9 w-9 rounded-full ring-2 ring-pink/30 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <span
            className="font-display text-lg font-700 tracking-tight md:text-xl"
            style={{
              background: "linear-gradient(135deg, var(--pink), var(--navy))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            MiniMomo
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.label}
                to={l.to}
                className={`rounded-full px-3.5 py-1.5 text-sm font-600 transition ${
                  active
                    ? "bg-navy text-background"
                    : "text-foreground/70 hover:text-pink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919663481122"
            className="hidden items-center gap-2 rounded-full bg-pink px-5 py-2 text-sm font-700 text-primary-foreground shadow-pop transition hover:-translate-y-0.5 md:inline-flex"
          >
            <Phone size={14} /> 9663 481 122
          </a>
          <button
            aria-label="Toggle menu"
            className="rounded-full bg-navy p-2.5 text-background lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/60 bg-background/95 p-3 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 font-display font-600 ${
                  pathname === l.to ? "bg-navy text-background" : "hover:bg-yellow/40"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+919663481122"
              className="mt-2 rounded-full bg-pink px-5 py-3 text-center font-display font-700 text-primary-foreground"
            >
              Call 9663 481 122
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
