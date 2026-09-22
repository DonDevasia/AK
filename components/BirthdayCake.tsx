"use client";

import { motion } from "framer-motion";

export default function BirthdayCake() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="absolute bottom-0 translate-y-[20%] left-1/2 -translate-x-1/2 w-[85%] sm:w-[500px] z-20 flex flex-col items-center pointer-events-none"
    >
      <div className="relative w-full aspect-square flex flex-col items-center justify-end">
        
        {/* Animated Flame */}
        <motion.div 
          className="absolute top-[8%] sm:top-[10%] z-30"
          animate={{ 
            scale: [1, 1.1, 0.9, 1.05, 1],
            rotate: [-2, 2, -1, 3, 0],
            skewX: [-1, 2, -2, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
            <path d="M12 0C12 0 4 14 4 22C4 26.4183 7.58172 30 12 30C16.4183 30 20 26.4183 20 22C20 14 12 0 12 0Z" fill="#F4D03F" stroke="#28327C" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 10C12 10 8 18 8 23C8 25.2091 9.79086 27 12 27C14.2091 27 16 25.2091 16 23C16 18 12 10 12 10Z" fill="#E67E22"/>
          </svg>
        </motion.div>

        {/* Hand-drawn Cake SVG */}
        <svg viewBox="0 20 400 360" className="w-full h-full drop-shadow-md">
          <g stroke="#28327C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            
            {/* Candle */}
            <path d="M190,140 L190,50 L210,50 L210,140" fill="#FFFDF1" />
            <path d="M190,60 L210,70 M190,80 L210,90 M190,100 L210,110 M190,120 L210,130" strokeWidth="2" />
            <path d="M200,40 L200,50" strokeWidth="1.5" /> {/* Wick */}
            
            {/* Top Tier */}
            <path d="M120,150 Q200,135 280,150 L280,220 Q200,235 120,220 Z" fill="#FFFDF1" />
            <path d="M117,148 Q200,132 283,148 L283,222 Q200,238 117,222 Z" strokeWidth="1" strokeDasharray="3,4" opacity="0.5" />
            
            {/* Icing Top Tier */}
            <path d="M120,150 Q130,170 145,155 Q160,180 180,155 Q200,190 225,155 Q250,175 265,155 Q275,165 280,150" fill="#FFFDF1" strokeWidth="2" />
            
            {/* Bottom Tier */}
            <path d="M60,230 Q200,210 340,230 L340,330 Q200,350 60,330 Z" fill="#FFFDF1" />
            <path d="M56,228 Q200,206 344,228 L344,334 Q200,356 56,334 Z" strokeWidth="1" strokeDasharray="4,5" opacity="0.5" />
            
            {/* Icing Bottom Tier */}
            <path d="M60,230 Q80,260 100,235 Q130,280 170,235 Q200,290 240,235 Q280,270 310,235 Q330,250 340,230" fill="#FFFDF1" strokeWidth="2.5" />
            
            {/* Cake Stand / Plate */}
            <path d="M40,340 Q200,370 360,340 Q200,355 40,340 Z" fill="#F5F9F8" strokeWidth="3" />
            <path d="M150,355 L150,380 M250,355 L250,380" strokeWidth="3" />
            <path d="M130,380 L270,380" strokeWidth="3" />
            
            {/* Decorative Ribbons / Details */}
            {/* Top Tier Ribbon */}
            <path d="M120,200 Q200,215 280,200" strokeWidth="1.5" />
            <path d="M120,210 Q200,225 280,210" strokeWidth="1.5" />
            {/* Bow Top */}
            <path d="M200,207 C180,190 170,220 200,207 C220,190 230,220 200,207" fill="#B5C7E8" strokeWidth="1.5" />
            
            {/* Bottom Tier Ribbon */}
            <path d="M60,300 Q200,320 340,300" strokeWidth="2" />
            <path d="M60,315 Q200,335 340,315" strokeWidth="2" />
            {/* Bow Bottom */}
            <path d="M200,310 C160,290 150,330 200,310 C240,290 250,330 200,310" fill="#B5C7E8" strokeWidth="2" />
            <path d="M200,310 Q180,340 170,360 M200,310 Q220,340 230,360" strokeWidth="1.5" />

            {/* Sketched Flowers/Stars on tiers */}
            <path d="M140,180 L145,185 M145,180 L140,185" strokeWidth="1.5" />
            <path d="M250,175 L255,180 M255,175 L250,180" strokeWidth="1.5" />
            <path d="M110,265 L115,270 M115,265 L110,270 M112.5,262.5 L112.5,272.5 M107.5,267.5 L117.5,267.5" strokeWidth="1.5" />
            <path d="M290,265 L295,270 M295,265 L290,270 M292.5,262.5 L292.5,272.5 M287.5,267.5 L297.5,267.5" strokeWidth="1.5" />
            
            {/* Imperfect sketchy shading lines */}
            <path d="M80,300 L75,320 M90,305 L85,323 M100,308 L95,325" strokeWidth="1" strokeDasharray="2,3" opacity="0.6" />
            <path d="M310,298 L315,315 M325,295 L330,310" strokeWidth="1" strokeDasharray="2,3" opacity="0.6" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
