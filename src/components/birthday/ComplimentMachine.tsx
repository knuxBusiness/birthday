import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star, Zap, Smile, Trophy } from "lucide-react";
import confetti from "canvas-confetti";
import { SectionTitle } from "./SectionTitle";

const compliments = [
  { text: "Certified 10/10 Human", icon: Trophy, color: "text-yellow-500" },
  { text: "Professional Vibe Creator", icon: Zap, color: "text-blue-500" },
  { text: "Main Character Energy", icon: Star, color: "text-purple-500" },
  { text: "Illegal Levels of Coolness", icon: Sparkles, color: "text-pink-500" },
  { text: "World-Class Smile", icon: Smile, color: "text-green-500" },
  { text: "Absolute Icon behavior", icon: Heart, color: "text-rose-500" },
  { text: "Expert in Making Everything Better", icon: Sparkles, color: "text-amber-500" },
  { text: "Basically a Human Ray of Sunshine", icon: Zap, color: "text-orange-500" },
];

export function ComplimentMachine() {
  const [index, setIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const getCompliment = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Simulate a "spin" effect
    let count = 0;
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * compliments.length));
      count++;
      if (count > 10) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * compliments.length);
        setIndex(finalIndex);
        setIsSpinning(false);
        triggerFun();
      }
    }, 80);
  };

  const triggerFun = () => {
    const scalar = 2;
    const heart = confetti.shapeFromText({ text: "✨", scalar });
    const star = confetti.shapeFromText({ text: "⭐", scalar });

    confetti({
      shapes: [heart, star],
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#ffd700", "#ffaa00", "#ffffff"],
    });
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <SectionTitle kicker="interactive vibes" title="The Sharmistha-Meter 📈" />
        
        <div className="glass rounded-3xl p-8 md:p-12 soft-shadow border-2 border-rose/20 relative">
          <div className="mb-8">
            <p className="text-muted-foreground font-body text-lg mb-6">
              Need a quick reminder of how awesome you are? 
              <br />Hit the button below for a randomized vibe check.
            </p>
          </div>

          <div className="h-40 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              {index !== null ? (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.1, opacity: 0, y: -20 }}
                  className="flex flex-col items-center gap-4"
                >
                  {(() => {
                    const CompIcon = compliments[index].icon;
                    return <CompIcon className={`w-12 h-12 ${compliments[index].color} animate-pulse`} />;
                  })()}
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gradient-rose">
                    {compliments[index].text}
                  </h3>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-muted-foreground italic font-script text-2xl"
                >
                  Waiting for your input...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={getCompliment}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSpinning}
            className={`px-10 py-5 rounded-full font-display text-xl text-primary-foreground glow-border transition-all ${
              isSpinning ? "opacity-50 grayscale cursor-not-allowed" : ""
            }`}
            style={{ background: "var(--gradient-rose-gold)", boxShadow: "var(--shadow-glow)" }}
          >
            {isSpinning ? "Checking Vibes..." : "Spin the Vibe Wheel 🎡"}
          </motion.button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-rose/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-lavender/10 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
