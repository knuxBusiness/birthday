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
import { CountdownGuard } from "@/components/birthday/CountdownGuard";

function App() {
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

export default App;
