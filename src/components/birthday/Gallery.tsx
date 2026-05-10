import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import img1 from "@/assets/memory-1.jpg";
import img2 from "@/assets/memory-2.jpg";
import img3 from "@/assets/memory-3.jpg";
import img4 from "@/assets/memory-4.jpg";
import img5 from "@/assets/memory-5.jpg";
import img6 from "@/assets/memory-6.jpg";

const photos = [
  { src: img1, caption: "flower era — main character energy" },
  { src: img2, caption: "fancy dinner, fake accents" },
  { src: img3, caption: "balloons & questionable decisions" },
  { src: img4, caption: "yes, we made art out of petals" },
  { src: img5, caption: "sunset spam, no regrets" },
  { src: img6, caption: "cake first, talk later" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="the camera roll, curated" title="The Sharmistha Archives 🎞️" />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setOpen(i)}
              className="group mb-4 break-inside-avoid block w-full overflow-hidden rounded-2xl glass soft-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="font-script text-rose-deep text-lg p-4 text-center">{p.caption}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={photos[open].src} alt={photos[open].caption} className="w-full rounded-2xl soft-shadow" />
              <p className="font-script text-2xl text-center text-white mt-4">{photos[open].caption}</p>
              <button
                onClick={() => setOpen(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full glass flex items-center justify-center text-rose-deep"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
