import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useMemo } from "react";

export function Cake() {
  const [blown, setBlown] = useState(false);

  const makeWish = () => {
    if (blown) return;
    setBlown(true);
    const fire = (opts: confetti.Options) =>
      confetti({
        particleCount: 80,
        spread: 70,
        startVelocity: 45,
        scalar: 1.1,
        colors: ["#ffd700", "#ffaa00", "#ffffff", "#fef3c7", "#d4af37"],
        ...opts,
      });
    fire({ origin: { x: 0.2, y: 0.7 } });
    fire({ origin: { x: 0.5, y: 0.4 } });
    fire({ origin: { x: 0.8, y: 0.7 } });
    setTimeout(() => fire({ origin: { y: 0.3 }, particleCount: 150, spread: 120 }), 400);
    setTimeout(() => fire({ origin: { x: 0.5, y: 0.5 }, particleCount: 200, spread: 160, scalar: 1.4 }), 900);
  };

    const dripHeights1 = useMemo(() => [...Array(8)].map(() => Math.random() * 15 + 10), []);
    const dripHeights2 = useMemo(() => [...Array(12)].map(() => Math.random() * 20 + 15), []);

  return (
    <section className="relative py-24 px-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        onViewportLeave={() => setBlown(false)}
        viewport={{ margin: "-100px" }}
      >
        <SectionTitle kicker="time to celebrate" title="Make a Wish" />
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* candles */}
            <div className="flex justify-center gap-3 mb-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="relative z-50">
                  <div className="w-1.5 h-12 bg-gradient-to-b from-rose-gold to-rose rounded-full" />
                  {!blown && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 rounded-full animate-flicker"
                      style={{
                        background: "radial-gradient(circle at 50% 70%, #fff7c0 0%, #ffb347 50%, #ff5e3a 90%, transparent 100%)",
                        boxShadow: "0 0 20px #ffb347, 0 0 40px #ff8a3a",
                      }}
                    />
                  )}
                  {blown && (
                    <motion.div
                      initial={{ opacity: 0.6, y: 0 }}
                      animate={{ opacity: 0, y: -40 }}
                      transition={{ duration: 1.4 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/30 blur-sm"
                    />
                  )}
                </div>
              ))}
            </div>
            {/* cake tiers */}
            <motion.div
              animate={blown ? { y: [0, -12, 0], scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Top Tier */}
              <div className="relative z-30">
                <div className="w-40 h-10 bg-gradient-to-b from-rose-50 to-rose-200 rounded-t-full mx-auto shadow-inner" />
                {/* Drip Effect */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1 z-40">
                  {dripHeights1.map((h, i) => (
                    <div 
                      key={i} 
                      className="w-2 bg-rose-100 rounded-full shadow-sm"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* Middle Tier */}
              <div className="relative z-20 -mt-1">
                <div className="w-56 h-20 bg-gradient-to-b from-rose-300 via-rose-400 to-rose-500 rounded-2xl mx-auto shadow-lg relative overflow-hidden">
                  {/* Pearls / Decorations */}
                  <div className="absolute inset-x-2 top-4 flex justify-around opacity-80">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-white animate-twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
                    ))}
                  </div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />
                </div>
                {/* Drip Effect */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
                  {dripHeights2.map((h, i) => (
                    <div 
                      key={i} 
                      className="w-2.5 bg-rose-200 rounded-full shadow-sm"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Tier */}
              <div className="w-72 h-24 bg-gradient-to-b from-rose-600 via-rose-700 to-rose-800 rounded-2xl mx-auto -mt-1 shadow-2xl relative overflow-hidden z-10">
                <div className="absolute inset-x-4 bottom-4 flex justify-between opacity-40">
                   {[...Array(15)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-rose-200" />
                    ))}
                </div>
              </div>

              {/* Cake Stand */}
              <div className="relative z-0">
                <div className="w-80 h-3 bg-gradient-to-r from-gray-400 via-white to-gray-400 rounded-full mx-auto -mt-2 shadow-xl" />
                <div className="w-32 h-6 bg-gradient-to-b from-gray-300 to-gray-500 mx-auto rounded-b-xl" />
              </div>
              
              {/* Shadow */}
              <div className="w-80 h-4 bg-black/30 rounded-full mx-auto blur-md mt-2" />
            </motion.div>
          </div>

          <motion.button
            onClick={makeWish}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 rounded-full font-display text-lg text-primary-foreground glow-border relative z-50"
            style={{ background: "var(--gradient-rose-gold)", boxShadow: "var(--shadow-glow)" }}
          >
            {blown ? "🎉 Wish Made!" : "Blow the Candles"}
          </motion.button>

          {blown && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 font-script text-2xl md:text-3xl text-gradient-rose"
            >
              ✨ Happy Birthday, Sharmistha! May all your dreams come true ✨
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
