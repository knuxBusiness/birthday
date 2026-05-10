import { motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";
import { FloatingHearts } from "./FloatingHearts";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

export function Hero({ onOpenSurprise }: { onOpenSurprise: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <FloatingHearts count={20} />
      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-script text-2xl md:text-3xl text-rose-deep mb-4"
        >
          stop the scroll — it's your day!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
        >
          Happy Birthday{" "}
          <span className="text-gradient-rose block md:inline">{BIRTHDAY_CONFIG.name}</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block ml-2"
          >🎉</motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto"
        >
          A little surprise — built just for you, Sharmistha.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpenSurprise}
          className="group mt-10 relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-display text-lg text-primary-foreground glow-border"
          style={{ background: "var(--gradient-rose-gold)", boxShadow: "var(--shadow-glow)" }}
        >
          <SparklesIcon className="w-5 h-5" />
          Tap to Start the Party
          <SparklesIcon className="w-5 h-5" />
        </motion.button>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rose-deep text-sm font-script"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        keep scrolling, the chaos continues ↓
      </motion.div>
    </section>
  );
}
