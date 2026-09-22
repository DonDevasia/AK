"use client";

import { motion } from "framer-motion";

export default function OutroScene({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col items-center justify-center p-4 z-10 relative overflow-hidden bg-gradient-to-b from-transparent to-[#F8F4EB]/80"
    >
      {/* Decorative ambient glowing blobs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#FFB6C1]/20 rounded-full blur-[40px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ADD8E6]/20 rounded-full blur-[40px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div 
        className="w-[90%] max-w-[450px] mix-blend-multiply z-20 flex flex-col items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 50 }}
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/images/outro_banner.png" 
            alt="Happy Birthday Banner" 
            className="w-full h-auto object-contain drop-shadow-md"
            style={{ clipPath: "inset(0 0 12% 0)", marginBottom: "-12%" }}
          />
        </motion.div>

        <motion.p
          className="font-caveat text-2xl sm:text-3xl text-gray-700 mt-8 text-center max-w-[80%]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Here's to another beautiful year of memories! ✨
        </motion.p>
      </motion.div>

      <motion.button 
        onClick={onBackToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.05, backgroundColor: "#EEF5F4" }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 z-50 px-6 py-2 bg-white/60 backdrop-blur-md text-[#5E9AB8] border border-[#5E9AB8]/30 rounded-full font-sans text-sm font-semibold tracking-wider transition-colors shadow-sm flex items-center gap-2"
      >
        <span>↑</span> BACK TO TOP
      </motion.button>
    </motion.div>
  );
}
