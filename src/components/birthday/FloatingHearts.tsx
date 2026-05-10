import { useMemo } from "react";
import { Star } from "lucide-react";

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 28,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <Star
          key={s.id}
          className="absolute text-primary fill-primary animate-float-up"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            filter: "drop-shadow(0 0 12px oklch(0.85 0.15 85 / 0.5))",
          }}
        />
      ))}
    </div>
  );
}
