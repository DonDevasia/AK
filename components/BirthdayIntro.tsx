"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import NotebookGrid from "./NotebookGrid";
import Confetti from "./Confetti";
import BirthdayBunting from "./BirthdayBunting";
import PlaidBorders from "./PlaidBorders";

export default function BirthdayIntro({ onNext }: { onNext: () => void }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const colors = ["#5CE1E6", "#FF66C4", "#FFDE59", "#7ED957", "#CB6CE6", "#38B6FF"];
    
    // First burst
    confetti({ particleCount: 100, spread: 80, origin: { x: 0.1, y: 0.6 }, colors, zIndex: 100 });
    confetti({ particleCount: 100, spread: 80, origin: { x: 0.9, y: 0.6 }, colors, zIndex: 100 });

    // Second burst slightly delayed and higher up
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 100, origin: { x: 0.3, y: 0.5 }, colors, zIndex: 100 });
      confetti({ particleCount: 80, spread: 100, origin: { x: 0.7, y: 0.5 }, colors, zIndex: 100 });
    }, 250);

    // Transition to next scene after poppers fire
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full min-h-[100svh] relative flex flex-col items-center overflow-hidden z-10"
    >
      {/* Background, Borders, and Confetti */}
      <NotebookGrid />
      <Confetti />
      <PlaidBorders />

      {/* Main Content */}
      <motion.h1 
        className="font-caveat text-[40px] min-[375px]:text-[50px] sm:text-[72px] md:text-[90px] text-[#28327C] font-normal z-30 mt-[22vh] sm:mt-[15vh] text-center leading-tight px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Happy Birthday
      </motion.h1>

      <motion.button
        onClick={handleNextClick}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.02, backgroundColor: "#EEF5F4", borderColor: "#4C849E" }}
        whileTap={{ scale: 0.98 }}
        className="relative mt-8 sm:mt-10 w-[85%] sm:w-[400px] md:w-[460px] h-[50px] sm:h-[60px] bg-[#E3F2F8] border-2 border-[#5E9AB8] rounded-full flex items-center justify-center shadow-sm z-30 transition-colors cursor-pointer"
      >
        {/* Inner dotted ring */}
        <div className="absolute inset-1 border-[1.5px] border-dotted border-[#5E9AB8] rounded-full pointer-events-none" />
        
        <span className="font-sans text-[#5E9AB8] tracking-[6px] text-[12px] sm:text-[14px] font-semibold ml-2">
          {isTransitioning ? "✨ Y A Y ✨" : "≋ N E X T"}
        </span>
      </motion.button>

      {/* Bunting (retaining the custom SVG, placed behind text) */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <BirthdayBunting />
      </div>

      {/* Images (retaining reference exact assets) */}
      <motion.div 
        className="absolute bottom-0 w-[85%] max-w-[280px] sm:max-w-none sm:w-[500px] md:w-[600px] mix-blend-multiply z-20 pointer-events-none flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img src="/images/cake.jpg" alt="Cake" className="w-full h-auto object-contain" />
      </motion.div>

      <motion.div className="absolute top-12 left-2 sm:top-12 sm:left-12 w-16 h-16 sm:w-32 sm:h-32 mix-blend-multiply z-20 pointer-events-none"
        animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
        <img src="/images/star.jpg" alt="Star" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div className="absolute top-[20%] right-1 sm:right-8 w-20 h-20 sm:w-48 sm:h-48 mix-blend-multiply z-20 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
        <img src="/images/spiderweb.jpg" alt="Spiderweb" className="w-full h-full object-contain" />
      </motion.div>

    </motion.div>
  );
}
