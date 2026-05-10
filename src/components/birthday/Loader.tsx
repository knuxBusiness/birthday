import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--gradient-dream)" }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <Heart className="w-20 h-20 text-rose fill-rose drop-shadow-[0_0_30px_oklch(0.78_0.14_5/0.6)]" />
            </motion.div>
            <motion.p
              className="font-script text-2xl text-rose-deep mt-6 text-center"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              preparing your surprise...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
