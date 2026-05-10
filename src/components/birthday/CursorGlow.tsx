import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  if (!enabled) return null;
  return (
    <div
      className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen transition-transform"
      style={{
        left: pos.x,
        top: pos.y,
        width: 320,
        height: 320,
        background:
          "radial-gradient(circle, oklch(0.85 0.15 85 / 0.2), oklch(0.78 0.12 70 / 0.08) 40%, transparent 70%)",
        filter: "blur(20px)",
      }}
      aria-hidden
    />
  );
}
