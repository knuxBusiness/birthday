import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTyping } from "@/hooks/use-typing";
import { SectionTitle } from "./SectionTitle";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

export function LoveMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const typed = useTyping(BIRTHDAY_CONFIG.message, 28, inView);

  return (
    <section className="relative py-24 px-4">
      <Petals />
      <div className="max-w-3xl mx-auto relative z-10">
        <SectionTitle kicker="a quick note from me" title="A Note for You ✍️" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 soft-shadow"
        >
          <p className="text-base md:text-lg leading-relaxed text-foreground/90 min-h-[180px] whitespace-pre-line">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-rose-deep ml-1 animate-pulse" />
          </p>
          <div className="mt-8 space-y-3">
            {BIRTHDAY_CONFIG.quotes.map((q, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 + i * 0.3 }}
                className="font-script text-xl md:text-2xl text-rose-deep"
              >
                — {q}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const floatingIcons = ["✨", "👑", "🔱", "⭐", "💎"];

function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl"
          initial={{ y: -50, x: `${Math.random() * 100}%`, rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [0, 1, 1, 0],
            x: `${Math.random() * 100}%`,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {floatingIcons[i % floatingIcons.length]}
        </motion.span>
      ))}
    </div>
  );
}
