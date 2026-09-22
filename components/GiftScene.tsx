"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GiftScene({ 
  onEnvelopeClick, 
  onCameraClick 
}: { 
  onEnvelopeClick: () => void,
  onCameraClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center p-6 text-center z-10 relative overflow-hidden"
    >
      <motion.div 
        className="absolute top-10 left-10 text-navy z-0 mix-blend-multiply opacity-50 drop-shadow-sm"
        animate={{ rotate: 10, scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Star size={100} fill="currentColor" strokeWidth={1} />
      </motion.div>

      <motion.h1 
        className="font-sans text-3xl sm:text-4xl text-navy font-bold mb-16 z-20 drop-shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Choose Your Gifts
      </motion.h1>

      <div className="flex flex-row items-center justify-center gap-6 sm:gap-16 z-20 w-full max-w-2xl flex-wrap">
        
        {/* Envelope Option (Image) */}
        <motion.div 
          onClick={onEnvelopeClick}
          whileHover={{ scale: 1.05, y: -5, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer w-32 h-32 sm:w-48 sm:h-48 relative flex flex-col items-center justify-center mix-blend-multiply"
        >
          <img src="/images/envelope_new.jpg" alt="Envelope" className="w-full h-full object-contain pointer-events-none drop-shadow-md" />
        </motion.div>

        {/* Camera Option (Image) */}
        <motion.div 
          onClick={onCameraClick}
          whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer w-32 h-32 sm:w-48 sm:h-48 relative flex flex-col items-center justify-center mix-blend-multiply opacity-90"
        >
          <img src="/images/camera_new.jpg" alt="Camera" className="w-full h-full object-contain pointer-events-none drop-shadow-md" />
        </motion.div>

      </div>
    </motion.div>
  );
}
