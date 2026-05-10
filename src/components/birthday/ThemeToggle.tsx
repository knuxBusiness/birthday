import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <motion.button
      onClick={() => setDark((d) => !d)}
      whileHover={{ scale: 1.1, rotate: 12 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 glass rounded-full w-12 h-12 flex items-center justify-center text-rose-deep"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </motion.button>
  );
}
