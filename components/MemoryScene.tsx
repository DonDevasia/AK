"use client";

import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

export default function MemoryScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full p-6 sm:p-10 relative flex flex-col"
    >
      <div className="flex justify-between items-start w-full">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-caveat text-5xl sm:text-6xl text-navy leading-none">
            happy<br/>birthday
          </h1>
        </motion.div>
        
        <motion.div
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="text-yellow-500 mt-2"
        >
          <Star size={48} fill="currentColor" strokeWidth={1} />
        </motion.div>
      </div>

      <div className="flex-grow relative mt-8">
        
        {/* Polaroid 1 */}
        <motion.div
          initial={{ opacity: 0, rotate: -15, x: -50 }}
          animate={{ opacity: 1, rotate: -8, x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute top-0 left-4 sm:left-10 w-40 sm:w-48 bg-white p-3 pb-10 shadow-scrapbook border border-gray-200 z-10"
        >
          <div className="w-full h-32 sm:h-40 bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden">
             <Heart size={32} className="text-gray-400" />
          </div>
          <div className="absolute bottom-3 left-0 w-full text-center font-hand text-lg text-navy">
            best day!
          </div>
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-900/10 rotate-3 backdrop-blur-sm" />
        </motion.div>

        {/* Polaroid 2 */}
        <motion.div
          initial={{ opacity: 0, rotate: 15, x: 50 }}
          animate={{ opacity: 1, rotate: 6, x: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="absolute top-20 right-4 sm:right-10 w-44 sm:w-52 bg-white p-3 pb-12 shadow-scrapbook border border-gray-200 z-20"
        >
          <div className="w-full h-36 sm:h-44 bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden">
             <Star size={32} className="text-gray-400" />
          </div>
          <div className="absolute bottom-3 left-0 w-full text-center font-hand text-lg text-navy">
            memories
          </div>
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-yellow-900/10 -rotate-2 backdrop-blur-sm" />
        </motion.div>

        {/* Paper Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-10 w-32 h-24 bg-red text-white p-3 shadow-scrapbook -rotate-12 flex items-center justify-center z-30"
          style={{ clipPath: "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)" }}
        >
          <span className="font-hand text-2xl font-bold">I LOVE YOU</span>
        </motion.div>

        {/* Paper Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 right-16 w-36 h-28 bg-lightblue text-navy p-3 shadow-scrapbook rotate-6 flex flex-col items-center justify-center z-30 border border-navy/20"
        >
          <span className="font-hand text-2xl font-bold">SOOOO</span>
          <span className="font-hand text-2xl font-bold flex items-center gap-2">
            MUCH <Heart size={18} fill="currentColor" className="text-red" />
          </span>
          {/* Pin */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red shadow-sm border border-navy" />
        </motion.div>

      </div>
    </motion.div>
  );
}
