import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader } from "@/components/birthday/Loader";
import { Sparkles } from "@/components/birthday/Sparkles";
import { CursorGlow } from "@/components/birthday/CursorGlow";
import { MusicToggle } from "@/components/birthday/MusicToggle";
import { ThemeToggle } from "@/components/birthday/ThemeToggle";
import { Hero } from "@/components/birthday/Hero";
import { LoveMessage } from "@/components/birthday/LoveMessage";
import { CinemaCorner } from "@/components/birthday/CinemaCorner";
import { ComplimentMachine } from "@/components/birthday/ComplimentMachine";
import { Envelope } from "@/components/birthday/Envelope";
import { Cake } from "@/components/birthday/Cake";
import { Footer } from "@/components/birthday/Footer";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";
import { CountdownGuard } from "@/components/birthday/CountdownGuard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `Happy Birthday ${BIRTHDAY_CONFIG.name} — A Surprise Made With Love` },
      {
        name: "description",
        content: `A romantic, heartfelt birthday surprise made just for ${BIRTHDAY_CONFIG.name}. Memories, messages, a wish, and a whole lot of love.`,
      },
      { property: "og:title", content: `Happy Birthday ${BIRTHDAY_CONFIG.name} ❤️` },
      { property: "og:description", content: "A surprise made with love." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const openSurprise = () => {
    document.getElementById("love-message")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Loader visible={loading} />
      <Sparkles count={70} />
      <CursorGlow />
      <ThemeToggle />
      <MusicToggle />

      <CountdownGuard>
        <main className="relative z-10">
          <Hero onOpenSurprise={openSurprise} />
          <div id="love-message"><LoveMessage /></div>
          <CinemaCorner />
          <ComplimentMachine />
          <Envelope />
          <Cake />
          <Footer />
        </main>
      </CountdownGuard>
    </>
  );
}
