import { motion } from "framer-motion";
import { PartyPopper, Pizza, Plane, Music, Camera, Cake } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const events = [
  { date: "the day we became us", text: "Two strangers, one terrible joke, instant chaos.", icon: PartyPopper },
  { date: "midnight pizza era", text: "We invented a new food group. Worth it.", icon: Pizza },
  { date: "that one trip", text: "Lost in a city, laughing until we cried. Iconic.", icon: Plane },
  { date: "concert night", text: "Lost our voices. Found our anthem.", icon: Music },
  { date: "10,000 selfies later", text: "Camera roll: 90% you and me being unhinged.", icon: Camera },
  { date: "today", text: "Another year of you ruling the planet. 🎂", icon: Cake },
];

export function Timeline() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionTitle kicker="the receipts" title="Our Greatest Hits" />
        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "var(--gradient-rose-gold)" }}
          />
          {events.map((e, i) => {
            const Icon = e.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className={`relative mb-10 md:w-1/2 pl-16 md:pl-0 ${
                  left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-3 w-12 h-12 rounded-full glass flex items-center justify-center text-rose-deep glow-border ${
                    left ? "left-0 md:left-auto md:-right-6" : "left-0 md:-left-6"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="glass rounded-2xl p-5 soft-shadow">
                  <p className="font-script text-rose-deep text-xl">{e.date}</p>
                  <p className="text-foreground/80 mt-1">{e.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
