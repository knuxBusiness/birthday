import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const TRACK = "https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(TRACK);
    a.loop = true;
    a.volume = 0.4;
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { try { await a.play(); setPlaying(true); } catch { /* blocked */ } }
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 glass rounded-full w-14 h-14 flex items-center justify-center text-rose-deep glow-border"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? <Music className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
    </motion.button>
  );
}
