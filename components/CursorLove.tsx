"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Heart = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
};

export default function CursorLove() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const lastHeartTime = useRef(0);
  const heartId = useRef(0);

  useEffect(() => {
    const addHeart = (e: MouseEvent, force: boolean = false) => {
      const now = Date.now();
      // Throttle mousemove hearts to one every 100ms
      if (!force && now - lastHeartTime.current < 80) return;
      
      lastHeartTime.current = now;
      
      // Jitter click coordinates slightly for burst effect
      const jitterX = force ? (Math.random() - 0.5) * 40 : 0;
      const jitterY = force ? (Math.random() - 0.5) * 40 : 0;

      const newHeart: Heart = {
        id: heartId.current++,
        x: e.clientX + jitterX,
        y: e.clientY + jitterY,
        size: force ? 20 + Math.random() * 16 : 10 + Math.random() * 10,
        rotation: (Math.random() - 0.5) * 60,
      };

      setHearts((prev) => [...prev.slice(-25), newHeart]);

      // Auto-remove heart after 1 second
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => addHeart(e, false);
    const handleClick = (e: MouseEvent) => {
      // Add a burst of hearts on click
      for (let i = 0; i < 5; i++) {
        setTimeout(() => addHeart(e, true), i * 30);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.5, x: heart.x - heart.size/2, y: heart.y - heart.size/2, rotate: heart.rotation }}
            animate={{ opacity: 0, scale: 1.5, y: heart.y - heart.size/2 - 60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute drop-shadow-sm text-[#FF66C4]"
            style={{ fontSize: heart.size }}
          >
            ❤
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
