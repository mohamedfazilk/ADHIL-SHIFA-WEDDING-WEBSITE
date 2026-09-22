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

  const days = Math.ceil(remaining / 86_400_000);
  const hours = Math.floor((remaining / 3_600_000) % 24);
  const minutes = Math.floor((remaining / 60_000) % 60);
  const seconds = Math.floor((remaining / 1_000) % 60);
  const values = [[days, "Days"], [hours, "Hours"], [minutes, "Minutes"], [seconds, "Seconds"]] as const;

  return (
    <div className="mx-auto grid max-w-lg grid-cols-4 gap-2 sm:gap-4" aria-label="Countdown to the wedding">
      {values.map(([value, label]) => (
        <div key={label} className="border border-gold/40 bg-maroon-rich/60 backdrop-blur-md px-1 py-4 text-center sm:py-5 rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          <span className="block font-display text-2xl text-gold-bright sm:text-4xl">{String(value).padStart(2, "0")}</span>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-cream/75 sm:text-[10px]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function GlitterOverlay() {
  const dots = [
    { top: "8%", left: "12%", char: "✦", size: "text-lg", delay: "0s", duration: "3s" },
    { top: "18%", left: "84%", char: "✨", size: "text-xl", delay: "1.2s", duration: "3.8s" },
    { top: "32%", left: "15%", char: "✦", size: "text-sm", delay: "0.5s", duration: "4.2s" },
    { top: "42%", left: "88%", char: "✦", size: "text-base", delay: "2.1s", duration: "3.5s" },
    { top: "62%", left: "10%", char: "✨", size: "text-lg", delay: "1.7s", duration: "4s" },
    { top: "14%", left: "75%", char: "✦", size: "text-2xl", delay: "0.8s", duration: "3.2s" },
    { top: "38%", left: "92%", char: "•", size: "text-xs", delay: "2.5s", duration: "4.5s" },
    { top: "72%", left: "82%", char: "✦", size: "text-xl", delay: "1.0s", duration: "3.6s" },
    { top: "82%", left: "22%", char: "✨", size: "text-sm", delay: "2.8s", duration: "3.9s" },
    { top: "5%", left: "48%", char: "✦", size: "text-base", delay: "1.4s", duration: "4.1s" },
    { top: "55%", left: "6%", char: "•", size: "text-xs", delay: "0.3s", duration: "3.4s" },
    { top: "88%", left: "72%", char: "✦", size: "text-base", delay: "1.9s", duration: "3.7s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {dots.map((d, index) => (
        <span
          key={index}
          className={`absolute text-gold-bright/85 animate-sparkle ${d.size}`}
          style={{
            top: d.top,
            left: d.left,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        >
          {d.char}
        </span>
      ))}
    </div>
  );
}

function WeddingInvitation() {
  return (
    <main className="min-h-screen overflow-hidden bg-maroon-deep text-cream">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-maroon-deep flex flex-col justify-between items-center px-4 py-10">
        {/* Visible Atmosphere Background Couple Image */}
        <img
          src={coupleImg}
          alt="Aadil and Shifa"
          className="portrait-settle absolute inset-0 h-full w-full object-cover object-[50%_20%] opacity-75 sm:opacity-85 brightness-95 pointer-events-none"
        />
        
        {/* Balanced Gradient Overlay for Text Readability & High Photo Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/60 via-40% to-maroon-deep/30 pointer-events-none" />

        {/* Glittering Stars */}
        <GlitterOverlay />

        {/* Top Bismillah */}
        <div className="relative z-20 pt-6 text-center">
          <p lang="ar" dir="rtl" className="font-display text-3xl sm:text-4xl text-gold-bright tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <div className="mt-3 flex items-center justify-center gap-3 text-gold-bright/90 text-xs uppercase tracking-[0.25em] drop-shadow">
            <span className="h-px w-8 bg-gold-bright/60" />
            <span>Together with their families</span>
            <span className="h-px w-8 bg-gold-bright/60" />
          </div>
        </div>

        {/* Center Couple Names */}
        <div className="invitation-rise relative z-20 my-auto text-center py-8">
          <h1 className="font-display text-5xl font-medium sm:text-7xl lg:text-8xl text-gold-bright tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Aadil &amp; Shifa
          </h1>
          <div className="my-5 flex items-center justify-center gap-4 text-gold-bright/90">
            <span className="h-px w-12 bg-gold/60" />
            <span className="font-script text-2xl text-gold-bright drop-shadow">Wedding Celebration</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>

          {/* Quran Verse with Highlighted Gold Border */}
          <div className="mx-auto max-w-lg px-6 mt-6 border border-gold/50 py-4 bg-maroon-rich/70 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <p className="font-display text-sm sm:text-base italic text-cream/95 leading-relaxed">
              “And among His signs is that He created for you mates from yourselves, that you may find tranquillity in them.”
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-gold-bright font-semibold">— QURAN 30:21 —</p>
          </div>
        </div>

        {/* Bottom Date Badge */}
        <div className="relative z-20 pb-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-bright font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Sunday · 11 October 2026
          </p>
        </div>
      </section>

      {/* Main Invitation Section - Highlighted Gold Bordered Card */}
      <section className="relative bg-maroon-deep text-cream px-6 py-20 text-center sm:py-28 border-t border-gold/30 overflow-hidden">
        <GlitterOverlay />
        
        <div className="relative z-20 mx-auto max-w-3xl">
          <div className="mx-auto h-12 w-px bg-gold/60" />
          
          <p lang="ar" dir="rtl" className="mt-6 font-display text-2xl sm:text-3xl text-gold-bright drop-shadow-md">
            السلام عليكم ورحمة الله وبركاته
          </p>
          <p className="mx-auto mt-3 max-w-xl font-display text-base sm:text-lg italic text-gold-bright/90">
            “In the name of Allah, the most beneficent and most merciful”
          </p>

          {/* Gold Highlighted Royal Card */}
          <div className="relative mx-auto mt-10 max-w-2xl border-2 border-gold/60 bg-gradient-to-b from-maroon-rich/80 via-maroon-deep/95 to-maroon-rich/80 p-8 sm:p-12 rounded-2xl shadow-[0_0_35px_rgba(212,175,55,0.25)] backdrop-blur-md overflow-hidden">
            {/* Corner Gold Flourishes */}
            <div className="absolute top-3 left-3 text-gold-bright text-xs opacity-75">✦</div>
            <div className="absolute top-3 right-3 text-gold-bright text-xs opacity-75">✦</div>
            <div className="absolute bottom-3 left-3 text-gold-bright text-xs opacity-75">✦</div>
            <div className="absolute bottom-3 right-3 text-gold-bright text-xs opacity-75">✦</div>

            <p className="mx-auto max-w-lg font-display text-base sm:text-lg italic leading-8 text-cream/95">
              Cordially solicit your prayers and esteemed presence with family on the auspicious occasion of the marriage of our son
            </p>
            
            <div className="my-6 h-px w-28 mx-auto bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
            
            <p className="font-script text-6xl sm:text-7xl text-gold-bright drop-shadow-[0_2px_12px_rgba(254,240,138,0.5)]">
              Aadil <span className="text-2xl sm:text-3xl text-gold-bright/90 italic font-sans">with</span> Shifa
            </p>
          </div>
        </div>
      </section>

      {/* Event Details & Save the Date Section */}
      <section className="bg-maroon-deep px-6 py-20 text-cream sm:py-24 border-t border-gold/30 relative overflow-hidden">
        <GlitterOverlay />

        <div className="relative z-20 mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-bright">Save the date</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-cream">11 October 2026</h2>
          <p className="mt-2 font-display text-sm sm:text-base italic text-gold-bright">Inshah Allah · 29 Rabi-ul-Akhir 1448</p>
          
          <div className="mt-10">
            <Countdown />
          </div>

          <div className="mt-16 grid gap-10 border-t border-gold/30 pt-14 md:grid-cols-3">
            {/* Date Card */}
            <div className="flex flex-col items-center p-6 border border-gold/40 bg-maroon-rich/40 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.12)]">
              <CalendarDays className="mb-4 size-7 text-gold-bright" strokeWidth={1.4} />
              <h3 className="font-display text-2xl text-cream">Sunday</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gold-bright font-medium">11 October 2026</p>
            </div>

            {/* Lunch Card - Highlighted Gold Accent */}
            <div className="flex flex-col items-center p-6 border-2 border-gold/60 bg-maroon-rich/70 rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.25)]">
              <Utensils className="mb-4 size-7 text-gold-bright" strokeWidth={1.4} />
              <h3 className="font-display text-2xl text-gold-bright">Wedding Lunch</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold-bright font-bold drop-shadow">
                11:00 AM – 3:00 PM
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/80">With family &amp; friends</p>
            </div>

            {/* Venue Card */}
            <div className="flex flex-col items-center p-6 border border-gold/40 bg-maroon-rich/40 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.12)]">
              <MapPin className="mb-4 size-7 text-gold-bright" strokeWidth={1.4} />
              <h3 className="font-display text-2xl text-cream">Qamar Palace</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gold-bright font-medium">Kallumpuram</p>
            </div>
          </div>

          <Button variant="wedding" asChild className="mt-12">
            <a href="https://www.google.com/maps/search/?api=1&query=Qamar+Palace+Kallumpuram" target="_blank" rel="noreferrer">
              <MapPin className="mr-2 size-4" /> View location
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}