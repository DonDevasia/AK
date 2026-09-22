"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Colors from the reference image: light blue, pink/magenta, yellow, green/teal, light purple
const CONFETTI_COLORS = ["#5CE1E6", "#FF66C4", "#FFDE59", "#7ED957", "#CB6CE6", "#38B6FF"];
const CONFETTI_TYPES = ["dot", "stroke", "square"];

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  type: string;
  scale: number;
  rotation: number;
  duration: number;
  delay: number;
}

export default function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Increase density massively to match the screenshot
    const isMobile = window.innerWidth < 600;
    const numPieces = isMobile ? 80 : 250;
    
    const newPieces: ConfettiPiece[] = Array.from({ length: numPieces }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      type: CONFETTI_TYPES[Math.floor(Math.random() * CONFETTI_TYPES.length)],
      scale: 0.3 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden mix-blend-multiply opacity-80">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}vw`, top: `${p.y}vh` }}
          animate={{
            y: [0, 50, 100],
            rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        >
          {p.type === "dot" && (
            <div 
              className="rounded-full" 
              style={{ width: 8 * p.scale, height: 8 * p.scale, backgroundColor: p.color }} 
            />
          )}
          {p.type === "square" && (
            <div 
              style={{ width: 6 * p.scale, height: 6 * p.scale, backgroundColor: p.color }} 
            />
          )}
          {p.type === "stroke" && (
            <div 
              className="rounded-full" 
              style={{ width: 12 * p.scale, height: 3 * p.scale, backgroundColor: p.color, transform: `rotate(${p.rotation}deg)` }} 
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
