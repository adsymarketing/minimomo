import { Link } from "@tanstack/react-router";
import { ArrowRight, PartyPopper, Cake, Music, Gift, Star, Check } from "lucide-react";
import ballPit from "@/assets/ball-pit.jpg";
import garage from "@/assets/garage.jpg";
import clinic from "@/assets/clinic.jpg";
import supermarket from "@/assets/supermarket.jpg";
import cafe from "@/assets/cafe.jpg";
import slide from "@/assets/slide.jpg";
import climber from "@/assets/climber.jpg";
import spiderweb from "@/assets/spiderweb.jpg";
import birthday from "@/assets/birthday.jpg";
import sandpit from "@/assets/sandpit.jpg";
import ballblower from "@/assets/ballblower.jpg";

export const zones = [
  { name: "Ball Pit", img: ballPit, tint: "bg-pink/15", emoji: "🎈", desc: "Dive into a sea of soft, colourful balls — endless giggles guaranteed." },
  { name: "The Big Slide", img: slide, tint: "bg-sky/20", emoji: "🛝", desc: "Whoosh down our signature yellow slide right into the ball pit." },
  { name: "Wall Climber", img: climber, tint: "bg-yellow/30", emoji: "🧗", desc: "Tiny adventurers, big confidence — climb, grip, conquer." },
  { name: "Spider Web", img: spiderweb, tint: "bg-mint/30", emoji: "🕸️", desc: "Crawl, balance and explore our rainbow rope web." },
  { name: "Ball Blower", img: ballblower, tint: "bg-coral/20", emoji: "💨", desc: "Watch the balls fly! A whirlwind of pure delight." },
  { name: "Sand & Seed Pit", img: sandpit, tint: "bg-yellow/30", emoji: "🏖️", desc: "Sensory play that soothes, builds and creates." },
  { name: "MiniMomo Garage", img: garage, tint: "bg-sky/20", emoji: "🚗", desc: "Tiny mechanics tune up tiny cars in a tiny garage." },
  { name: "MiniMomo Clinic", img: clinic, tint: "bg-mint/30", emoji: "🩺", desc: "Doctor today, hero forever — pretend play that nurtures empathy." },
  { name: "MiniMomo Supermarket", img: supermarket, tint: "bg-coral/20", emoji: "🛒", desc: "Aisle by aisle, kids learn to shop, share and count." },
  { name: "MiniMomo Cafe", img: cafe, tint: "bg-pink/15", emoji: "🧁", desc: "Pastel-perfect kitchen where the cupcakes are always sold out." },
];

function ZoneCard({
  z,
  className = "",
  size = "md",
}: {
  z: (typeof zones)[number];
  className?: string;
  size?: "lg" | "md" | "sm";
}) {
  const titleSize = size === "lg" ? "text-3xl md:text-4xl" : size === "md" ? "text-2xl" : "text-xl";
  return (
    <article
      className={`group relative isolate overflow-hidden rounded-[2.25rem] ${className}`}
    >
      <img
        src={z.img}
        alt={z.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <span
          className="grid h-11 w-11 place-items-center rounded-2xl bg-background/95 text-xl shadow-soft"
          aria-hidden
        >
          {z.emoji}
        </span>
        <div className="text-background">
          <h3 className={`font-display font-700 ${titleSize}`}>{z.name}</h3>
          {size !== "sm" && (
            <p className="mt-1 max-w-sm text-sm text-background/80">{z.desc}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export function ZonesSection({ id = "zones" }: { id?: string }) {
  // Bento layout positions
  const [ballPit_, slide_, climber_, spiderweb_, blower_, sand_, garage_, clinic_, market_, cafe_] = zones;
  return (
    <section id={id} className="relative scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <span className="font-display text-xs font-700 uppercase tracking-[0.25em] text-pink">
            The play zones
          </span>
          <h2 className="font-display text-4xl font-700 leading-[1.05] text-navy md:text-6xl">
            Ten little worlds inside one big one.
          </h2>
          <p className="text-lg text-muted-foreground">
            Slide, climb, shop, heal, cook and create — every corner is a brand new
            adventure waiting to happen.
          </p>
        </div>

        {/* Bento grid — 12 col on lg */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
          <ZoneCard z={ballPit_} size="lg" className="col-span-2 row-span-2 aspect-[4/5] md:col-span-6 md:aspect-auto md:min-h-[560px]" />
          <ZoneCard z={slide_} className="col-span-2 aspect-[16/10] md:col-span-6 md:aspect-auto md:min-h-[270px]" />
          <ZoneCard z={climber_} size="sm" className="col-span-1 aspect-square md:col-span-3 md:aspect-auto md:min-h-[270px]" />
          <ZoneCard z={spiderweb_} size="sm" className="col-span-1 aspect-square md:col-span-3 md:aspect-auto md:min-h-[270px]" />

          <ZoneCard z={blower_} className="col-span-2 aspect-[16/10] md:col-span-4 md:aspect-auto md:min-h-[300px]" />
          <ZoneCard z={sand_} className="col-span-2 aspect-[16/10] md:col-span-4 md:aspect-auto md:min-h-[300px]" />
          <ZoneCard z={garage_} className="col-span-2 aspect-[16/10] md:col-span-4 md:aspect-auto md:min-h-[300px]" />

          <ZoneCard z={clinic_} className="col-span-2 aspect-[16/10] md:col-span-4 md:aspect-auto md:min-h-[300px]" />
          <ZoneCard z={market_} className="col-span-2 aspect-[16/10] md:col-span-4 md:aspect-auto md:min-h-[300px]" />
          <ZoneCard z={cafe_} className="col-span-2 aspect-[16/10] md:col-span-4 md:aspect-auto md:min-h-[300px]" />
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    title: "Weekday Play",
    price: "₹290",
    tag: "/ child",
    features: ["Unlimited play time", "Access to all zones", "Parents free"],
    badge: "Mon – Fri",
    accent: "sky",
  },
  {
    title: "Weekend Play",
    price: "₹450",
    tag: "/ child",
    features: ["Unlimited play time", "Access to all zones", "Parents free"],
    badge: "Sat & Sun",
    accent: "pink",
    featured: true,
  },
  {
    title: "Party Package",
    price: "15–20",
    tag: "kids",
    features: ["Exclusive party area", "Decor & co-ordinator", "Custom food & games"],
    badge: "Birthdays",
    accent: "yellow",
  },
];

export function PricingSection({ id = "pricing" }: { id?: string }) {
  return (
    <section id={id} className="relative scroll-mt-24 px-3 py-12 md:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-6 py-24 text-background md:rounded-[4rem] md:px-12 md:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-pink/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky/30 blur-3xl" aria-hidden />

        <div className="relative mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <span className="font-display text-xs font-700 uppercase tracking-[0.25em] text-sky">
            Pricing
          </span>
          <h2 className="font-display text-4xl font-700 md:text-6xl">
            Simple, kid-friendly pricing.
          </h2>
          <p className="text-background/60">
            Walk-in any day, all day. Socks compulsory inside — fresh pairs at the counter for ₹70.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pricingPlans.map((p) => {
            const isFeatured = p.featured;
            return (
              <div
                key={p.title}
                className={`flex flex-col rounded-[2.25rem] p-9 transition ${
                  isFeatured
                    ? "bg-gradient-to-b from-pink to-coral text-background shadow-pop md:-translate-y-6"
                    : "border border-background/15 bg-background/5 backdrop-blur-md hover:bg-background/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-700 uppercase tracking-widest ${
                      isFeatured ? "bg-background/25 text-background" : `text-${p.accent}`
                    }`}
                    style={isFeatured ? undefined : { color: `var(--${p.accent})` }}
                  >
                    {p.badge}
                  </span>
                  {isFeatured && (
                    <span className="rounded-full bg-yellow px-2.5 py-0.5 text-[10px] font-700 uppercase tracking-widest text-navy">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl font-700">{p.title}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-700">{p.price}</span>
                  <span className={isFeatured ? "text-background/75 text-sm" : "text-background/45 text-sm"}>
                    {p.tag}
                  </span>
                </div>
                <ul className="mt-7 flex-1 space-y-3.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check
                        size={16}
                        className={isFeatured ? "text-background" : ""}
                        style={isFeatured ? undefined : { color: `var(--${p.accent})` }}
                      />
                      <span className={isFeatured ? "text-background/95" : "text-background/75"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+919663481122"
                  className={`mt-9 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 font-display font-700 transition ${
                    isFeatured
                      ? "bg-navy text-background hover:bg-navy-soft"
                      : "bg-background text-navy hover:bg-yellow"
                  }`}
                >
                  {isFeatured ? "Book now" : p.title.includes("Party") ? "Enquire" : "Book now"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PartiesSection({ id = "parties" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 -z-10 rounded-[3.5rem] bg-gradient-to-tr from-pink/40 to-sky/30 blur-lg [transform:rotate(-2deg)]" aria-hidden />
          <img
            src={birthday}
            alt="Birthday party area decorated with balloons"
            width={1400}
            height={900}
            loading="lazy"
            className="aspect-[7/5] w-full rounded-[3rem] border-8 border-background object-cover shadow-soft"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink/15 px-4 py-1.5 font-display text-xs font-700 uppercase tracking-widest text-pink">
            <PartyPopper size={14} /> Birthday parties
          </span>
          <h2 className="mt-4 font-display text-4xl font-700 leading-[1.05] text-navy md:text-6xl">
            A birthday they'll talk about for years.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Dedicated party area for 15–20 kids with full access to every zone, themed
            decor and a co-ordinator who handles the whole show — so parents finally get
            to enjoy the party too.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              { icon: Cake, label: "Custom cake & menu" },
              { icon: Gift, label: "Return-gift add-ons" },
              { icon: Music, label: "Music & games" },
              { icon: PartyPopper, label: "Themed decor" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-yellow text-navy">
                  <Icon size={18} />
                </span>
                <span className="font-display font-600">{label}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/visit"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-display font-700 text-background shadow-soft transition hover:-translate-y-0.5"
          >
            Enquire about a party <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <div className="grid items-end gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <span className="font-display text-xs font-700 uppercase tracking-[0.25em] text-pink">
            Parents say
          </span>
          <h2 className="mt-4 font-display text-4xl font-700 leading-[1.05] text-navy md:text-5xl">
            4.7 on Google, <span className="text-pink">357+ smiles</span> & counting.
          </h2>
          <div className="mt-5 flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-yellow text-yellow" />
            ))}
            <span className="ml-2 font-display text-lg font-700">4.7 / 5</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:col-span-2">
          {[
            { quote: "My daughter doesn't want to leave! The space is so clean and the staff are wonderful with the little ones.", name: "Anjali R.", role: "Parent of a 4-year-old" },
            { quote: "We hosted our son's 5th birthday here — the team handled everything. Easily the best party we've done.", name: "Karthik M.", role: "Birthday parent" },
            { quote: "Pretend-play zones are a brilliant idea. The little supermarket and clinic kept my twins busy for hours.", name: "Priya S.", role: "Mom of twins" },
            { quote: "Hygiene is top notch and the staff is super friendly. Our go-to weekend spot in Hubli.", name: "Rahul D.", role: "Regular visitor" },
          ].map((t) => (
            <figure key={t.name} className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow text-yellow" />
                ))}
              </div>
              <blockquote className="mt-3 leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
              <figcaption className="mt-4 font-display text-sm font-700">
                {t.name} <span className="font-400 text-muted-foreground">· {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink via-coral to-yellow p-10 text-primary-foreground md:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-background/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-navy/20 blur-3xl" aria-hidden />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-4xl font-700 leading-[1.05] md:text-6xl">
              See you at Inorbit, Hubli?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/90">
              Second Floor, SFO7 · Open every day, 10 AM – 10 PM. Walk in any time — we'll have a slide waiting.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/visit"
              className="rounded-2xl bg-background px-7 py-4 font-display font-700 text-navy shadow-soft transition hover:-translate-y-0.5"
            >
              Get directions
            </Link>
            <a
              href="tel:+919663481122"
              className="rounded-2xl border-2 border-background/60 px-7 py-4 font-display font-700 transition hover:bg-background/10"
            >
              Call 9663 481 122
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-12 pt-24 md:px-8 md:pb-20 md:pt-32">
      <div className="absolute right-[-10%] top-10 -z-10 h-[500px] w-[500px] rounded-full bg-sky/30 blur-3xl" aria-hidden />
      <div className="absolute -left-32 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-pink/30 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow/40 px-4 py-1.5 font-display text-xs font-700 uppercase tracking-[0.2em] text-navy">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-700 leading-[0.95] text-navy md:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
