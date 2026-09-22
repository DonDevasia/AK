"use client";

import { motion } from "framer-motion";

export default function ScrapbookDecorations() {
  return (
    <>
      {/* Top Left: Blue Glitter/Star Sticker */}
      <motion.div 
        className="absolute top-4 -left-4 sm:top-8 sm:-left-2 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none z-10"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Sticker border / white edge */}
          <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="#FFFDF1" stroke="#E5E5E5" strokeWidth="2" strokeLinejoin="round" />
          {/* Inner blue star with sketchy fill */}
          <path d="M50,15 L58,42 L85,50 L58,58 L50,85 L42,58 L15,50 L42,42 Z" fill="#28327C" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          {/* Glitter texture lines */}
          <path d="M45,45 L55,55 M55,45 L45,55 M50,30 L50,40 M50,60 L50,70 M30,50 L40,50 M60,50 L70,50" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <circle cx="65" cy="35" r="2" fill="#FFF" opacity="0.8" />
          <circle cx="35" cy="65" r="1.5" fill="#FFF" opacity="0.8" />
          <circle cx="35" cy="35" r="2" fill="#FFF" opacity="0.8" />
          <circle cx="65" cy="65" r="1.5" fill="#FFF" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Bottom Left: Comic Sticker & Hearts */}
      <div className="absolute bottom-0 left-[-10px] sm:left-4 w-40 h-56 pointer-events-none z-10 flex flex-col justify-end">
        {/* Three Hearts Diagonally */}
        <motion.div 
          className="absolute top-0 left-16"
          animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5362A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-8 left-8"
          animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8E44AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute top-16 left-0"
          animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28327C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>

        {/* Comic/Superhero Sticker */}
        <div className="relative w-36 h-36 mt-4 rotate-[-5deg] translate-y-4">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* White sticker border */}
            <path d="M20,90 C10,90 10,70 10,50 C10,30 20,10 50,10 C80,10 90,30 90,50 C90,70 80,90 50,90 Z" fill="#FFFDF1" stroke="#E5E5E5" strokeWidth="2" />
            {/* Sketched comic speech bubble / hero mask shape */}
            <path d="M25,85 C15,85 15,65 15,50 C15,35 25,15 50,15 C75,15 85,35 85,50 C85,65 75,85 50,85 Z" fill="none" stroke="#28327C" strokeWidth="2" strokeDasharray="4,2" />
            
            {/* Comic details */}
            <path d="M30,40 Q50,20 70,40" fill="none" stroke="#5362A3" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="55" r="5" fill="#28327C" />
            <circle cx="60" cy="55" r="5" fill="#28327C" />
            <path d="M45,70 Q50,75 55,70" fill="none" stroke="#28327C" strokeWidth="2" strokeLinecap="round" />
            {/* Lightning bolt sketch */}
            <path d="M50,10 L45,30 L55,30 L50,50" fill="none" stroke="#E6C229" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom Right: Disco Ball Sticker */}
      <motion.div 
        className="absolute bottom-[-30px] right-[-30px] sm:bottom-0 sm:right-4 w-40 h-40 sm:w-48 sm:h-48 pointer-events-none z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
          {/* White sticker border */}
          <circle cx="60" cy="60" r="55" fill="#FFFDF1" stroke="#E5E5E5" strokeWidth="2" />
          {/* Silver/Light gray base */}
          <circle cx="60" cy="60" r="50" fill="#E2E8F0" stroke="#28327C" strokeWidth="2" />
          
          {/* Grid lines for disco ball */}
          <g stroke="#28327C" strokeWidth="1.5" opacity="0.6">
            {/* Latitudes */}
            <path d="M14,40 Q60,50 106,40" fill="none" />
            <path d="M10,60 Q60,75 110,60" fill="none" />
            <path d="M14,80 Q60,100 106,80" fill="none" />
            
            {/* Longitudes */}
            <path d="M40,14 Q50,60 40,106" fill="none" />
            <path d="M60,10 Q75,60 60,110" fill="none" />
            <path d="M80,14 Q100,60 80,106" fill="none" />
          </g>

          {/* Sparkles / Stars on the ball */}
          <path d="M30,30 L35,25 L40,30 L35,35 Z" fill="#FFF" stroke="#28327C" strokeWidth="1" />
          <path d="M85,45 L90,40 L95,45 L90,50 Z" fill="#FFF" stroke="#28327C" strokeWidth="1" />
          <path d="M45,85 L50,80 L55,85 L50,90 Z" fill="#FFF" stroke="#28327C" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Scattered Blue Star Stickers Right Side */}
      <div className="absolute bottom-32 right-12 sm:bottom-40 sm:right-16 w-8 h-8 pointer-events-none z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="#5362A3" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-44 right-4 sm:bottom-52 sm:right-8 w-5 h-5 pointer-events-none z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="#B5C7E8" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

    </>
  );
}
