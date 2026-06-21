import { Link } from "@tanstack/react-router";
import logo from "@/assets/minimomo-logo.png.asset.json";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-12 w-12 rounded-full ring-2 ring-pink/40" width={48} height={48} />
            <div className="font-display text-xl font-700">MiniMomo</div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
            A joyful indoor playlounge in Hubli where kids laugh, learn and play safely every day.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/minimomo_playlounge/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-pink">
              <Instagram size={16} />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/share/1Fhh7UcEBd/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-pink">
              <Facebook size={16} />
            </a>
            <a aria-label="Twitter" href="https://x.com/MiniMomo_PL" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-pink">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs font-700 uppercase tracking-[0.2em] text-pink">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-background/75">
            <li><Link to="/about" className="hover:text-background">About</Link></li>
            <li><Link to="/zones" className="hover:text-background">Play Zones</Link></li>
            <li><Link to="/pricing" className="hover:text-background">Pricing</Link></li>
            <li><Link to="/parties" className="hover:text-background">Birthday Parties</Link></li>
            <li><Link to="/gallery" className="hover:text-background">Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-background">FAQ</Link></li>
            <li><Link to="/visit" className="hover:text-background">Visit Us</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-xs font-700 uppercase tracking-[0.2em] text-pink">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/75">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-pink" /> Second Floor, SFO7, Inorbit Mall, Hubli</li>
            <li className="flex gap-3"><Clock size={16} className="mt-0.5 shrink-0 text-pink" /> 10 AM – 10 PM • Open all days</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-pink" /> <a href="tel:+919663481122" className="hover:text-background">9663 481 122</a></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-pink" /> <a href="mailto:minimomoplaylounge@gmail.com" className="hover:text-background">minimomoplaylounge@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-6 text-center text-xs text-background/45">
        © {new Date().getFullYear()} MiniMomo Playlounge. Made with love in Hubli.
      </div>
    </footer>
  );
}
