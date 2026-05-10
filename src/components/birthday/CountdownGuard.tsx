import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

interface CountdownGuardProps {
  children: React.ReactNode;
}

export function CountdownGuard({ children }: CountdownGuardProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    // Target date: May 11, 2026, 00:00:00
    const target = new Date(2026, 4, 11, 0, 0, 0); // Month is 0-indexed, so 4 is May
    
    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setIsUnlocked(true);
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({ d, h, m, s });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isUnlocked) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [isUnlocked]);

  if (isUnlocked) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    );
  }

  const units = [
    { label: "days", v: timeLeft.d },
    { label: "hours", v: timeLeft.h },
    { label: "mins", v: timeLeft.m },
    { label: "secs", v: timeLeft.s },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Coming Soon to Screens Near You
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-rose mb-6 leading-tight">
            The Main Character <br /> is Getting Ready
          </h1>
          <p className="text-xl md:text-2xl font-script text-rose-deep italic">
            "Wait for it... the blockbuster of the year is about to premiere! 🎬🍿"
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-6 mb-12">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="glass rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center min-w-[70px] md:min-w-[120px] glow-border"
            >
              <span className="text-3xl md:text-5xl font-display font-bold text-primary tabular-nums">
                {String(u.v).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm font-body uppercase tracking-tighter text-muted-foreground mt-2">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="glass p-6 rounded-3xl border-primary/20 max-w-lg mx-auto"
        >
          <p className="text-foreground/80 leading-relaxed italic">
            "Shhh... {BIRTHDAY_CONFIG.name} is currently in the makeup trailer, making sure every sparkle is perfectly placed for her big day. Please maintain silence on the set! 🤫✨"
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/40 text-4xl"
            animate={{
              y: [0, -100],
              x: [0, Math.sin(i) * 50],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            style={{
              left: `${15 + i * 15}%`,
              bottom: "-10%"
            }}
          >
            {["🎬", "⭐", "🍿", "🎥", "🎭", "✨"][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
