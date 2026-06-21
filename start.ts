import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, VisitCTASection } from "@/components/site/sections";
import logo from "@/assets/minimomo-logo.png.asset.json";
import hero from "@/assets/hero-playlounge.jpg";
import ballPit from "@/assets/ball-pit.jpg";
import cafe from "@/assets/cafe.jpg";
import { Shield, Sparkles, HeartHandshake, Smile, Leaf, Baby, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MiniMomo Playlounge, Hubli" },
      {
        name: "description",
        content:
          "MiniMomo Playlounge is a parent-built indoor soft-play world in Hubli, designed around safety, hygiene and joy for children aged 1–10.",
      },
      { property: "og:title", content: "About MiniMomo Playlounge" },
      { property: "og:description", content: "Built by parents, loved by kids. The story behind MiniMomo." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Safety first", desc: "Soft, padded, age-appropriate equipment — checked daily by our team." },
  { icon: Sparkles, title: "Always sanitised", desc: "Toys and surfaces cleaned through the day. Socks compulsory inside." },
  { icon: HeartHandshake, title: "Built by parents", desc: "Designed by people who've spent enough rainy afternoons indoors to know." },
  { icon: Smile, title: "Trained play crew", desc: "Friendly assistants who watch, guide and join in the fun." },
  { icon: Leaf, title: "Calm corners", desc: "Quiet sensory zones for kids who need a break from the buzz." },
  { icon: Baby, title: "Ages 1 to 10", desc: "Zones thoughtfully laid out for toddlers, big kids and everyone in between." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Built by parents, <span className="text-gradient-candy">loved by kids.</span>
          </>
        }
        subtitle="MiniMomo Playlounge began with a simple wish — a clean, safe, joy-filled indoor space where kids in Hubli could just be kids. Today, it's that and a whole lot more."
      />

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:grid md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[3rem] bg-pink/40" aria-hidden />
          <img
            src={ballPit}
            alt="Children playing in the MiniMomo ball pit"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover ring-tile"
            loading="lazy"
            width={900}
            height={1200}
          />
          <img
            src={logo.url}
            alt=""
            aria-hidden
            className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full ring-8 ring-background md:h-32 md:w-32"
            width={128}
            height={128}
          />
        </div>
        <div className="mt-10 md:mt-0">
          <span className="font-display text-sm font-700 uppercase tracking-[0.25em] text-secondary">
            How it started
          </span>
          <h2 className="mt-3 font-display text-4xl font-700 leading-tight md:text-5xl">
            A weekend playdate that grew into a whole little world.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We're a family-run team that spent one too many weekends searching for a
            clean, imaginative indoor space for our own kids. So we built it — right
            inside Inorbit Mall, Hubli. Ten themed play zones, a dedicated party room,
            a cosy cafe corner and a team that treats every child like their own.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Every climber, cushion and cupcake counter is built around three simple
            promises: <span className="font-700 text-foreground">safety, hygiene and joy.</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/zones"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display font-700 text-primary-foreground shadow-pop transition hover:-translate-y-0.5"
            >
              Explore play zones <ArrowRight size={18} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-display font-700 transition hover:bg-yellow/60"
            >
              Plan your visit
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y-2 border-border/60 bg-yellow/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:px-8">
          {[
            { v: "10+", l: "themed play zones" },
            { v: "4.7★", l: "on Google reviews" },
            { v: "357+", l: "happy families" },
            { v: "12hrs", l: "open every day" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-4xl font-700 text-pink md:text-5xl">{s.v}</div>
              <div className="mt-1 text-sm font-600 text-foreground/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-700 uppercase tracking-[0.25em] text-pink">
            What we stand for
          </span>
          <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">
            Six small promises behind every smile.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="rounded-[1.75rem] border-2 border-border bg-card p-6 ring-tile transition hover:-translate-y-1"
              style={{ transform: i % 2 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl text-foreground"
                style={{ background: `var(--${["pink", "yellow", "sky", "mint", "coral", "pink"][i]})` }}
              >
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg font-700">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAFE STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-mint/40 p-8 md:grid-cols-2 md:p-12">
          <img
            src={cafe}
            alt="MiniMomo cafe counter with cupcakes"
            className="aspect-[5/4] w-full rounded-[2rem] object-cover ring-tile"
            loading="lazy"
            width={1200}
            height={900}
          />
          <div>
            <span className="font-display text-sm font-700 uppercase tracking-[0.25em] text-secondary">
              For grown-ups too
            </span>
            <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
              A cosy cafe corner so parents can finally exhale.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Grab a coffee, a snack and a comfortable seat with full view of the play
              floor. Parents are always free — bring a book, catch up with friends, or
              just enjoy the giggles.
            </p>
          </div>
        </div>
      </section>

      <VisitCTASection />
      <Footer />
    </div>
  );
}
