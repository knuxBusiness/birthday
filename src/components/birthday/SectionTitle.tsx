import { motion } from "framer-motion";

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-12">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-script text-xl md:text-2xl text-rose-deep mb-2"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold text-gradient-rose"
      >
        {title}
      </motion.h2>
    </div>
  );
}
