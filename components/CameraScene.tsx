"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Pictures from the public/pp directory for the gift box reveal
const IMAGES = [
  "/pp/IMG_1717.webp",
  "/pp/IMG_3124.webp",
  "/pp/IMG_3125.webp",
  "/pp/IMG_3129.webp",
  "/pp/IMG_3135.webp",
  "/pp/IMG_3136.webp",
  "/pp/dg41ntkzbc149jqtaxfm.webp",
  "/pp/dpotfzaqu4yi7na9ia2h.webp",
  "/pp/zcgily5zbv7qhirpqqp8.webp",
  "/pp/IMG_3121.webp"
];

export default function CameraScene({ onBack }: { onBack: () => void }) {
  const [boxState, setBoxState] = useState<'closed' | 'opening' | 'open'>('closed');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleBoxClick = () => {
    if (boxState === 'closed') {
      setBoxState('opening');
      setTimeout(() => setBoxState('open'), 1200); // Lid animation duration
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col items-center justify-center p-4 z-10 relative overflow-hidden bg-[#F6F1E7]"
    >
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-full text-[#D96B79] text-sm font-semibold shadow-sm transition-colors"
      >
        ← Back to Gifts
      </button>

      {/* 3D Scene Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Floor Shadow */}
        <AnimatePresence>
          {boxState !== 'open' && (
            <motion.div 
              exit={{ opacity: 0 }}
              className="absolute w-64 h-24 bg-black/10 rounded-[100%] blur-xl translate-y-32" 
            />
          )}
        </AnimatePresence>

        {/* The Gift Box */}
        <AnimatePresence>
          {boxState !== 'open' && (
            <motion.div
              className="absolute z-40 w-40 h-40 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              animate={
                boxState === 'closed' 
                  ? { rotateY: [0, 360], rotateX: 15 } 
                  : { rotateY: 0, rotateX: 10, scale: 0.9, opacity: 0 }
              }
              transition={
                boxState === 'closed' 
                  ? { duration: 12, repeat: Infinity, ease: "linear" } 
                  : { duration: 1.2, ease: "easeInOut" }
              }
              onClick={handleBoxClick}
            >
              
              {/* Box Faces (Base) */}
              <BoxFace bg="bg-[#D96B79]" transform="rotateY(0deg) translateZ(80px)" isLid={false} />
              <BoxFace bg="bg-[#C85A68]" transform="rotateY(90deg) translateZ(80px)" isLid={false} />
              <BoxFace bg="bg-[#C85A68]" transform="rotateY(-90deg) translateZ(80px)" isLid={false} />
              <BoxFace bg="bg-[#B74957]" transform="rotateY(180deg) translateZ(80px)" isLid={false} />
              <BoxFace bg="bg-[#B74957]" transform="rotateX(-90deg) translateZ(80px)" isLid={false} />

              {/* Box Lid - Flies off when opening */}
              <motion.div
                className="absolute inset-0 z-20 origin-center"
                style={{ transformStyle: "preserve-3d", transform: "scale3d(1.05, 1.05, 1.05) translateY(-5px)" }}
                animate={boxState === 'opening' ? { y: -200, rotateX: 45, rotateZ: 20, opacity: 0, scale: 1.05 } : { y: -5, scale: 1.05 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                {/* Lid Top */}
                <BoxFace bg="bg-[#E98591]" transform="rotateX(90deg) translateZ(80px)" isLid={true} hasBow={true} />
                {/* Lid Skirts (Drop down) */}
                <BoxFace bg="bg-[#D96B79]" transform="rotateY(0deg) translateZ(80px) translateY(-60px) scaleY(0.25)" isLid={true} />
                <BoxFace bg="bg-[#C85A68]" transform="rotateY(90deg) translateZ(80px) translateY(-60px) scaleY(0.25)" isLid={true} />
                <BoxFace bg="bg-[#C85A68]" transform="rotateY(-90deg) translateZ(80px) translateY(-60px) scaleY(0.25)" isLid={true} />
                <BoxFace bg="bg-[#B74957]" transform="rotateY(180deg) translateZ(80px) translateY(-60px) scaleY(0.25)" isLid={true} />
              </motion.div>

              {boxState === 'closed' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none mt-28">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-[#D96B79] shadow-sm whitespace-nowrap">
                    Tap to Open
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Butterflies & Polaroids Container */}
        {boxState === 'open' && IMAGES.map((img, index) => (
          <Butterfly 
            key={`butterfly-${index}`} 
            image={img} 
            index={index} 
            total={IMAGES.length}
            onSelect={() => setActiveImageIndex(index)}
          />
        ))}
      </div>

      {/* Full Image Reveal Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100, rotate: 5 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-12 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveImageIndex(null)}
          >
            <div 
              className="relative max-w-sm sm:max-w-md w-full bg-[#FFFDFC] p-4 sm:p-6 pb-8 sm:pb-10 rounded-sm shadow-2xl border border-gray-200"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveImageIndex(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-[#D96B79] text-white hover:bg-[#C85A68] rounded-full flex items-center justify-center transition-colors shadow-lg border-2 border-white"
              >
                ✕
              </button>
              
              <div className="w-full aspect-square relative overflow-hidden bg-gray-100 shadow-inner">
                <img 
                  src={IMAGES[activeImageIndex]} 
                  alt="Memory" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ---------------------------------
// 3D Box Face Component
// ---------------------------------
function BoxFace({ bg, transform, isLid, hasBow }: { bg: string, transform: string, isLid: boolean, hasBow?: boolean }) {
  // A subtle noise texture to make it look like real wrapping paper
  const texture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <div 
      className={`absolute inset-0 ${bg} flex items-center justify-center`} 
      style={{ 
        transform, 
        backfaceVisibility: 'hidden',
        backgroundImage: texture,
        boxShadow: "inset 0 0 40px rgba(0,0,0,0.15)" // Internal shadowing for depth
      }}
    >
      {/* Horizontal Ribbon */}
      <div 
        className="absolute w-full h-[22%] bg-gradient-to-b from-[#FFFAEF] via-[#FFF0D4] to-[#FFE4B5] shadow-[0_2px_10px_rgba(0,0,0,0.2)]" 
        style={{ top: '39%' }}
      >
         <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)" }} />
      </div>
      
      {/* Vertical Ribbon */}
      <div 
        className="absolute h-full w-[22%] bg-gradient-to-r from-[#FFFAEF] via-[#FFF0D4] to-[#FFE4B5] shadow-[2px_0_10px_rgba(0,0,0,0.2)]" 
        style={{ left: '39%' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)" }} />
      </div>
      
      {/* Realistic 3D Bow (Only on top lid) */}
      {hasBow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {/* Ribbon Tails */}
          <div 
            className="absolute top-4 -left-6 w-8 h-16 origin-top-right transform -rotate-12 bg-gradient-to-b from-[#FFE4B5] to-[#E6C687] shadow-lg"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}
          />
          <div 
            className="absolute top-4 -right-6 w-8 h-16 origin-top-left transform rotate-12 bg-gradient-to-b from-[#FFE4B5] to-[#E6C687] shadow-lg"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}
          />

          {/* Bow Loops */}
          <div className="absolute -top-4 -left-10 w-14 h-12 bg-gradient-to-br from-[#FFFAEF] to-[#FFE4B5] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-2 border-white/40 transform -rotate-12" />
          <div className="absolute -top-4 -right-10 w-14 h-12 bg-gradient-to-bl from-[#FFFAEF] to-[#FFE4B5] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-2 border-white/40 transform rotate-12" />
          
          {/* Inner dark holes for loops */}
          <div className="absolute -top-1 -left-7 w-6 h-4 bg-black/20 rounded-full transform -rotate-12" />
          <div className="absolute -top-1 -right-7 w-6 h-4 bg-black/20 rounded-full transform rotate-12" />

          {/* Center Knot */}
          <div className="absolute -top-2 -left-3 w-8 h-8 bg-gradient-to-br from-[#FFF0D4] to-[#E6C687] rounded-md shadow-xl border border-white/50" />
        </div>
      )}
    </div>
  );
}

// ---------------------------------
// Butterfly / Polaroid Component
// ---------------------------------
function Butterfly({ image, index, total, onSelect }: { image: string; index: number; total: number; onSelect: () => void }) {
  const [isPinned, setIsPinned] = useState(false);

  // Spread evenly across the screen using a jittered grid
  // We must constrain to the actual container dimensions (max 800w x 600h on desktop, 430w x 750h on mobile)
  // because page.tsx wraps the app in a bounded scrapbook container.
  const containerWidth = typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 800) : 800;
  const containerHeight = typeof window !== "undefined" ? (window.innerWidth >= 640 ? 600 : 750) : 600;
  
  const cols = 3;
  const rows = Math.ceil(total / cols);
  const colIndex = index % cols;
  const rowIndex = Math.floor(index / cols);

  const paddingX = containerWidth < 500 ? 60 : 120;
  const paddingY = 160;

  const cellWidth = (containerWidth - paddingX) / cols;
  const cellHeight = (containerHeight - paddingY) / rows;

  // Center of the target cell
  const baseX = (colIndex * cellWidth) + (cellWidth / 2) - ((containerWidth - paddingX) / 2);
  const baseY = (rowIndex * cellHeight) + (cellHeight / 2) - ((containerHeight - paddingY) / 2);

  // Add random jitter within the cell
  const finalX = baseX + (Math.random() - 0.5) * (cellWidth * 0.5);
  const finalY = baseY + (Math.random() - 0.5) * (cellHeight * 0.5);
  
  // Random flight path parameters
  const maxRangeX = (containerWidth / 2) - 40;
  const randomPathX = Array.from({ length: 3 }, () => (Math.random() - 0.5) * maxRangeX * 1.5);
  const randomPathY = Array.from({ length: 3 }, () => (Math.random() - 0.5) * 400 - 100);
  
  const finalRotation = (Math.random() - 0.5) * 40; // Pin rotation
  
  // Timing
  const delay = index * 1.5;
  const flightDuration = 4 + (Math.random() * 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPinned(true);
    }, (delay + flightDuration) * 1000);
    return () => clearTimeout(timer);
  }, [delay, flightDuration]);

  return (
    <motion.div
      className="absolute z-30"
      initial={{ x: 0, y: 50, scale: 0, opacity: 0 }}
      animate={isPinned ? {
        x: finalX,
        y: finalY,
        scale: 1,
        rotateZ: finalRotation,
        opacity: 1
      } : {
        x: [0, ...randomPathX, finalX],
        y: [50, ...randomPathY, finalY],
        rotateZ: [(Math.random() - 0.5) * 90, (Math.random() - 0.5) * 90, 0],
        scale: [0, 0.8, 1, 0.9, 1],
        opacity: [0, 1, 1, 1, 1],
      }}
      transition={isPinned ? {
        type: "spring", stiffness: 100, damping: 15
      } : {
        duration: flightDuration,
        delay: delay,
        ease: "easeInOut",
      }}
      style={!isPinned ? { transformStyle: "preserve-3d", perspective: "800px" } : { zIndex: 20 + index }}
      whileHover={isPinned ? { scale: 1.1, zIndex: 100 } : {}}
      onClick={() => {
        if (!isPinned) {
          setIsPinned(true);
        } else {
          onSelect();
        }
      }}
    >
      <AnimatePresence mode="wait">
        {!isPinned ? (
          // --- 3D REALISTIC ORIGAMI BUTTERFLY ---
          <motion.div 
            key="butterfly"
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
            className="relative w-24 h-24 flex justify-center items-center cursor-pointer drop-shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Left Wing Container (handles flapping) */}
            <motion.div
              className="absolute right-1/2 w-12 h-20 origin-right"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: [25, 75, 25] }}
              transition={{ duration: 0.15 + (Math.random() * 0.1), repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Left Upper Wing */}
              <div 
                className="absolute top-0 right-0 w-12 h-12 origin-bottom-right"
                style={{
                  clipPath: "polygon(100% 100%, 0% 70%, 15% 0%, 80% 20%)",
                  background: `url(${image})`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: "left top",
                  transform: "rotateX(25deg) rotateZ(5deg)",
                  boxShadow: "inset -2px -2px 10px rgba(0,0,0,0.3)",
                }}
              >
                <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: "repeating-linear-gradient(20deg, transparent, transparent 8px, rgba(0,0,0,0.5) 8px, rgba(255,255,255,0.5) 16px)" }} />
              </div>

              {/* Left Lower Wing */}
              <div 
                className="absolute bottom-0 right-0 w-10 h-10 origin-top-right"
                style={{
                  clipPath: "polygon(100% 0%, 20% 0%, 30% 100%, 80% 80%)",
                  background: `url(${image})`,
                  backgroundSize: "250% 250%",
                  backgroundPosition: "left bottom",
                  transform: "rotateX(-30deg) rotateZ(-10deg) translateZ(-2px)",
                  boxShadow: "inset -2px 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                <div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{ background: "repeating-linear-gradient(-10deg, transparent, transparent 6px, rgba(0,0,0,0.5) 6px, rgba(255,255,255,0.5) 12px)" }} />
              </div>
            </motion.div>
            
            {/* Origami Spine (Center Fold) */}
            <div className="absolute w-[2px] h-12 bg-black/40 rounded-full z-10 opacity-80 shadow-md transform translateZ(1px)"></div>

            {/* Right Wing Container (handles flapping) */}
            <motion.div
              className="absolute left-1/2 w-12 h-20 origin-left"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: [-25, -75, -25] }}
              transition={{ duration: 0.15 + (Math.random() * 0.1), repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Right Upper Wing */}
              <div 
                className="absolute top-0 left-0 w-12 h-12 origin-bottom-left"
                style={{
                  clipPath: "polygon(0% 100%, 100% 70%, 85% 0%, 20% 20%)",
                  background: `url(${image})`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: "right top",
                  transform: "rotateX(25deg) rotateZ(-5deg)",
                  boxShadow: "inset 2px -2px 10px rgba(0,0,0,0.3)",
                }}
              >
                 <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: "repeating-linear-gradient(-20deg, transparent, transparent 8px, rgba(0,0,0,0.5) 8px, rgba(255,255,255,0.5) 16px)" }} />
              </div>

              {/* Right Lower Wing */}
              <div 
                className="absolute bottom-0 left-0 w-10 h-10 origin-top-left"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 70% 100%, 20% 80%)",
                  background: `url(${image})`,
                  backgroundSize: "250% 250%",
                  backgroundPosition: "right bottom",
                  transform: "rotateX(-30deg) rotateZ(10deg) translateZ(-2px)",
                  boxShadow: "inset 2px 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                <div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{ background: "repeating-linear-gradient(10deg, transparent, transparent 6px, rgba(0,0,0,0.5) 6px, rgba(255,255,255,0.5) 12px)" }} />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // --- PINNED POLAROID ---
          <motion.div 
            key="polaroid"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="relative w-28 h-32 sm:w-32 sm:h-40 bg-[#FFFDFC] p-2 sm:p-3 pb-8 sm:pb-10 shadow-lg border border-gray-200 cursor-pointer flex flex-col items-center"
          >
            {/* Push Pin */}
            <div className="absolute -top-3 z-10 w-4 h-4 rounded-full bg-red-500 shadow-md border border-red-700 flex items-center justify-center">
              <div className="w-1 h-1 bg-white/60 rounded-full absolute top-1 left-1"></div>
              {/* Pin shadow */}
              <div className="absolute -bottom-2 -right-1 w-2 h-4 bg-black/20 rounded-full blur-[2px] -z-10"></div>
            </div>
            
            <div className="w-full h-full relative overflow-hidden bg-gray-100 shadow-inner">
              <img 
                src={image} 
                alt="Memory" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
