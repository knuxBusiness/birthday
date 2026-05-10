import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

function getNext(dateStr: string) {
  const now = new Date();
  const [m, d] = dateStr.split("-").map(Number);
  let target = new Date(now.getFullYear(), m - 1, d);
  if (target.getTime() < now.getTime()) target = new Date(now.getFullYear() + 1, m - 1, d);
  return target;
}

export function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = getNext(BIRTHDAY_CONFIG.birthdayMonthDay);
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "days", v: time.d },
    { label: "hours", v: time.h },
    { label: "minutes", v: time.m },
    { label: "seconds", v: time.s },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle kicker="party loading…" title="Until the Next Birthday Bash" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center glow-border"
            >
              <motion.div
                key={u.v}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-5xl md:text-6xl font-bold text-gradient-rose tabular-nums"
              >
                {String(u.v).padStart(2, "0")}
              </motion.div>
              <p className="font-script text-rose-deep mt-2 text-lg">{u.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
