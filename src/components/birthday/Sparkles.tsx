import { useMemo } from "react";

export function Sparkles({ count = 60 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 6px white, 0 0 12px oklch(0.85 0.15 85 / 0.5)",
          }}
        />
      ))}
    </div>
  );
}
