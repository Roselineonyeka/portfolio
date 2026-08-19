import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CursorGlow() {
  const [dots, setDots] = useState<Dot[]>([]);
  const idCounter = useRef(0);
  const lastPos = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dt = Math.max(now - lastPos.current.time, 1);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = distance / dt;

      // low threshold = dots spawn close together = continuous trail, not gaps
      if (distance > 8) {
        const size = Math.min(40 + speed * 60, 80);

        lastPos.current = { x: e.clientX, y: e.clientY, time: now };
        const id = idCounter.current++;
        setDots((prev) => [...prev, { id, x: e.clientX, y: e.clientY, size }]);

        setTimeout(() => {
          setDots((prev) => prev.filter((dot) => dot.id !== id));
        }, 700);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block overflow-hidden">
      <AnimatePresence>
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 blur-md"
            style={{
              left: dot.x - dot.size / 2,
              top: dot.y - dot.size / 2,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
