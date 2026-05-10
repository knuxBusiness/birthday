import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

export function Envelope() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-24 px-4">
      <motion.div 
        className="max-w-2xl mx-auto"
        onViewportLeave={() => setOpen(false)}
        viewport={{ margin: "-100px" }}
      >
        <SectionTitle kicker="for your eyes only" title="A Secret Note 💌" />
        <div className="relative h-[420px] flex items-center justify-center">
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: open ? 1 : 1.04 }}
            className="relative w-72 h-48 cursor-pointer"
            aria-label="Open envelope"
            disabled={open}
          >
            {/* envelope body */}
            <div
              className="absolute inset-0 rounded-md soft-shadow"
              style={{ background: "var(--gradient-rose-gold)" }}
            />
            {/* letter sliding up */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ y: 0, opacity: 0, scale: 0.95 }}
                  animate={{ y: -260, opacity: 1, scale: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="absolute left-1/2 top-4 -translate-x-1/2 w-80 md:w-[420px] glass rounded-xl p-6 md:p-8 z-10 soft-shadow"
                >
                  <p className="font-script text-2xl text-rose-deep mb-3">Dearest {BIRTHDAY_CONFIG.name},</p>
                  <p className="text-foreground/90 leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {BIRTHDAY_CONFIG.letter}
                  </p>
                  <p className="font-script text-xl text-rose-deep mt-4 text-right">— with love 💖</p>
                </motion.div>
              )}
            </AnimatePresence>
            {/* flap */}
            <motion.div
              className="absolute inset-x-0 top-0 origin-top"
              style={{
                width: 0,
                height: 0,
                borderLeft: "144px solid transparent",
                borderRight: "144px solid transparent",
                borderTop: "96px solid oklch(0.78 0.15 85)",
                transformOrigin: "top",
              }}
              animate={{ rotateX: open ? 180 : 0 }}
              transition={{ duration: 0.7 }}
            />
            {!open && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-white text-2xl drop-shadow">click me ♡</span>
              </div>
            )}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
