"use client";

import { motion } from "framer-motion";
import { Star, Heart, Sparkles, Paperclip } from "lucide-react";
import { useEffect, useState } from "react";

type Decoration = {
  id: number;
  type: "star" | "heart" | "sparkles" | "paperclip";
  x: number;
  y: number;
  scale: number;
  rotation: number;
  delay: number;
  duration: number;
};

export default function FloatingDecorations() {
  const [decorations, setDecorations] = useState<Decoration[]>([]);

  useEffect(() => {
    // Generate static random positions on client side to avoid hydration mismatch
    const generated: Decoration[] = [];
    const types: Decoration["type"][] = ["star", "heart", "sparkles", "paperclip"];
    
    for (let i = 0; i < 12; i++) {
      generated.push({
        id: i,
        type: types[i % types.length],
        x: Math.random() * 90, // percentage
        y: Math.random() * 90, // percentage
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10, // 10-20s
      });
    }
    setDecorations(generated);
  }, []);

  if (decorations.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {decorations.map((dec) => (
        <motion.div
          key={dec.id}
          className="absolute text-navy/20"
          style={{ left: `${dec.x}%`, top: `${dec.y}%` }}
          initial={{ opacity: 0, scale: dec.scale, rotate: dec.rotation }}
          animate={{ 
            opacity: 0.5, 
            y: [0, -20, 0], 
            rotate: [dec.rotation, dec.rotation + 20, dec.rotation] 
          }}
          transition={{ 
            opacity: { duration: 2 },
            y: { repeat: Infinity, duration: dec.duration, ease: "easeInOut", delay: dec.delay },
            rotate: { repeat: Infinity, duration: dec.duration, ease: "easeInOut", delay: dec.delay }
          }}
        >
          {dec.type === "star" && <Star size={24} />}
          {dec.type === "heart" && <Heart size={20} />}
          {dec.type === "sparkles" && <Sparkles size={20} />}
          {dec.type === "paperclip" && <Paperclip size={24} />}
        </motion.div>
      ))}
      
      {/* Tape on corners */}
      <div className="absolute top-2 left-2 w-16 h-6 bg-yellow-900/10 -rotate-45 backdrop-blur-sm z-50" />
      <div className="absolute bottom-2 right-2 w-16 h-6 bg-yellow-900/10 -rotate-45 backdrop-blur-sm z-50" />
    </div>
  );
}
