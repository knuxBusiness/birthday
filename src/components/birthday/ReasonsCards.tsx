import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const reasons = [
  { front: "Your Humor", back: "Certified 10/10. Your jokes belong in a prime-time sitcom." },
  { front: "Your Taste", back: "Basically a professional movie critic. Your watchlist is elite." },
  { front: "Your Loyalty", back: "Ride or die since day one. No notes." },
  { front: "Your Chaos", back: "The plot twist every group chat needs." },
  { front: "Your Style", back: "Fit check? Always slaying. Award-worthy behavior." },
  { front: "Just YOU", back: "The main character of the best series ever: Life." },
];

export function ReasonsCards() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="the receipts, part 2" title="Why You're Iconic" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ReasonCard key={i} index={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ front, back, index }: { front: string; back: string; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="relative h-56 cursor-pointer"
      style={{ perspective: 1200 }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="absolute inset-0 glass rounded-2xl flex items-center justify-center p-6 glow-border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="font-display text-3xl text-gradient-rose text-center">{front}</h3>
        </div>
        <div
          className="absolute inset-0 glass rounded-2xl flex items-center justify-center p-6 glow-border"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "var(--gradient-rose-gold)" }}
        >
          <p className="font-script text-xl text-white text-center leading-relaxed">{back}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
