"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function FlowerScene({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7 }}
      className="w-full h-full flex flex-col sm:flex-row items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Left side text/notes */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center p-8 z-10">
        <motion.div
          initial={{ rotate: -5, opacity: 0, x: -50 }}
          animate={{ rotate: -5, opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-paper p-6 border-2 border-navy shadow-scrapbook mb-8 transform -rotate-6"
        >
          <div className="w-8 h-2 bg-red/60 absolute -top-1 left-1/2 transform -translate-x-1/2 -rotate-2" />
          <h2 className="font-caveat text-4xl text-navy">flowers for</h2>
          <h2 className="font-caveat text-4xl text-navy">my sweetheart!</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap gap-2 justify-center sm:justify-start"
        >
          <div className="px-3 py-1 bg-white border border-navy rounded-full font-hand text-sm shadow-sm flex items-center gap-1">
            <Heart size={12} className="text-red" fill="currentColor" /> cute
          </div>
          <div className="px-3 py-1 bg-white border border-navy rounded-full font-hand text-sm shadow-sm flex items-center gap-1">
            <Sparkles size={12} className="text-yellow-500" /> for you
          </div>
        </motion.div>
      </div>

      {/* Right side animated flowers */}
      <div className="w-full sm:w-1/2 flex items-center justify-center relative mt-10 sm:mt-0">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 50, delay: 0.2 }}
          className="relative"
        >
          {/* Simple Flower Illustration made with div/SVG */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-48 h-64 flex flex-col items-center"
          >
            {/* Flowers */}
            <div className="flex gap-2 relative z-10 -mb-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-10 h-14 bg-white border-2 border-navy rounded-full shadow-sm relative ${i%2===0 ? 'mt-4' : ''} ${i===2 ? '-mt-4' : ''}`}>
                  <div className="absolute inset-x-2 bottom-0 h-8 bg-lightblue/20 rounded-t-full" />
                </div>
              ))}
            </div>
            
            {/* Stems */}
            <div className="w-16 h-32 bg-green-200 border-2 border-navy rounded-t-lg shadow-inner z-0" />
            
            {/* Ribbon */}
            <div className="absolute bottom-12 w-24 h-10 bg-navy rounded-lg z-20 flex justify-center items-center shadow-lg">
              <div className="w-4 h-12 bg-navy absolute -bottom-6 -left-2 rotate-12 rounded-full" />
              <div className="w-4 h-12 bg-navy absolute -bottom-6 -right-2 -rotate-12 rounded-full" />
              <div className="w-6 h-6 border-4 border-lightblue rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 10 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="absolute -right-4 top-10 bg-yellow-100 p-3 shadow-md border border-navy/20 w-32"
        >
          <div className="font-hand text-sm text-navy text-center">
            Some flowers for you ♡
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 border-2 border-navy rounded-lg font-hand text-xl hover:bg-lightblue/20 active:scale-95 shadow-scrapbook bg-white"
        >
          NEXT →
        </button>
      </motion.div>
    </motion.div>
  );
}
