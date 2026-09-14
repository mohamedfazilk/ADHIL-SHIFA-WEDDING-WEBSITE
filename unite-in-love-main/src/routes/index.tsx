import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Utensils } from "lucide-react";
import { useEffect, useState } from "react";

const coupleImg = "/Images/k.jpeg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadil & Shifa | Wedding Invitation" },
      { name: "description", content: "Join Aadil and Shifa on Sunday, 11 October 2026 at Qamar Palace, Kallumpuram." },
      { property: "og:title", content: "Aadil & Shifa | Wedding Invitation" },
      { property: "og:description", content: "We warmly invite you to celebrate the wedding of Aadil and Shifa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeddingInvitation,
});

const WEDDING_DATE = new Date("2026-10-11T00:00:00+05:30").getTime();

function Countdown() {
  const [remaining, setRemaining] = useState(Math.max(0, WEDDING_DATE - Date.now()));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, WEDDING_DATE - Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining / 3_600_000) % 24);
  const minutes = Math.floor((remaining / 60_000) % 60);
  const seconds = Math.floor((remaining / 1_000) % 60);
  const values = [[days, "Days"], [hours, "Hours"], [minutes, "Minutes"], [seconds, "Seconds"]] as const;

  return (
    <div className="mx-auto grid max-w-lg grid-cols-4 gap-2 sm:gap-4" aria-label="Countdown to the wedding">
      {values.map(([value, label]) => (
        <div key={label} className="border border-gold/25 px-1 py-4 text-center sm:py-5">
          <span className="block font-display text-2xl text-gold-bright sm:text-4xl">{String(value).padStart(2, "0")}</span>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-cream/55 sm:text-[10px]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function WeddingInvitation() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink-soft">
      <section className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden bg-maroon-deep">
        <img
          src={coupleImg}
          alt="Aadil and Shifa in their wedding attire"
          className="portrait-settle absolute inset-0 h-full w-full object-cover object-[50%_15%] sm:object-[50%_25%] md:object-[50%_33%] lg:object-[50%_36%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-maroon-deep via-maroon-deep/80 via-35% to-transparent pointer-events-none" />
        <div className="invitation-rise absolute inset-x-0 bottom-0 flex flex-col items-center px-5 pb-8 text-center text-cream sm:pb-14">
          <p className="font-script text-4xl text-gold-bright sm:text-5xl drop-shadow-md">Together with their families</p>
          <h1 className="mt-2 font-display text-5xl font-medium sm:text-7xl lg:text-8xl drop-shadow-lg">Aadil &amp; Shifa</h1>
          <div className="my-4 h-px w-16 bg-gold" />
          <p className="text-xs uppercase tracking-[0.28em] sm:text-sm drop-shadow">Sunday · 11 October 2026</p>
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <div className="absolute left-1/2 top-0 h-14 w-px bg-gold/50" />
        <p lang="ar" dir="rtl" className="font-display text-2xl text-maroon-rich sm:text-3xl">السلام عليكم ورحمة الله وبركاته</p>
        <p className="mx-auto mt-4 max-w-xl font-display text-lg italic text-maroon-rich">“In the name of Allah, the most beneficent and most merciful”</p>

        <div className="mt-14 grid gap-9 md:grid-cols-2 md:gap-14">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-gold">With the blessings of</p>
            <h2 className="font-display text-2xl text-maroon-deep">Mr. Sidhik &amp; Mrs. Ramla Sidhik</h2>
            <p className="mt-2 text-sm leading-6 text-ink-soft/70">Peedikavalappil House, Perumannur<br />Chalissery P.O., Palakkad Dist.</p>
            <p className="mt-2 text-xs text-ink-soft/60">Ph: 8129 418676, 9746 175904</p>
          </div>
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-gold">Daughter of</p>
            <h2 className="font-display text-2xl text-maroon-deep">Mr. Aboobacker Sidheeq &amp; Mrs. Fousiya Sidheeq</h2>
            <p className="mt-2 text-sm leading-6 text-ink-soft/70">Kallumottakkal House, Pothanoor<br />Thuvvakkad, Tirur</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-y border-gold/35 py-12">
          <p className="mx-auto max-w-xl font-display text-lg italic leading-8 sm:text-xl">Cordially solicit your prayers and esteemed presence with family on the auspicious occasion of the marriage of our son</p>
          <p className="mt-8 font-script text-6xl text-maroon-rich sm:text-7xl">Aadil <span className="text-3xl">with</span> Shifa</p>
        </div>
      </section>

      <section className="bg-maroon-deep px-6 py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Save the date</p>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl">11 October 2026</h2>
          <p className="mt-3 font-display text-lg italic text-gold-bright">Inshah Allah · 29 Rabi-ul-Akhir 1448</p>
          <div className="mt-10"><Countdown /></div>

          <div className="mt-20 grid gap-12 border-t border-gold/20 pt-16 md:grid-cols-3">
            <div className="flex flex-col items-center"><CalendarDays className="mb-5 size-7 text-gold" strokeWidth={1.4} /><h3 className="font-display text-2xl">Sunday</h3><p className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/55">11 October 2026</p></div>
            <div className="flex flex-col items-center"><Utensils className="mb-5 size-7 text-gold" strokeWidth={1.4} /><h3 className="font-display text-2xl">Wedding Lunch</h3><p className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/55">With family &amp; friends</p></div>
            <div className="flex flex-col items-center"><MapPin className="mb-5 size-7 text-gold" strokeWidth={1.4} /><h3 className="font-display text-2xl">Qamar Palace</h3><p className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/55">Kallumpuram</p></div>
          </div>

          <Button variant="wedding" asChild className="mt-12">
            <a href="https://www.google.com/maps/search/?api=1&query=Qamar+Palace+Kallumpuram" target="_blank" rel="noreferrer"><MapPin />View location</a>
          </Button>
        </div>
      </section>
      {/* 
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-gold">A cherished beginning</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {["object-[35%_5%]", "object-top translate-y-3", "object-[65%_5%]"].map((position, index) => (
              <div key={position} className="aspect-[3/4] overflow-hidden bg-maroon-deep">
                <img src={coupleImg} alt={index === 1 ? "Aadil and Shifa together" : "Wedding portrait detail"} loading="lazy" className={`h-full w-full object-cover ${position}`} />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <footer className="border-t border-gold/25 px-6 py-16 text-center sm:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Sharing the happiness</p>
        <p className="mx-auto mt-6 max-w-xl font-display text-xl text-maroon-rich">Shabeel · Suhail · Rinsha · Nubla · Zidan</p>
        <p className="mt-12 font-script text-4xl text-maroon-rich">Your presence is our blessing</p>
        <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-ink-soft/45">Aadil &amp; Shifa · 2026</p>
      </footer>
    </main>
  );
}