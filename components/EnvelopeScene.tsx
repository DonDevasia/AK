"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Letter {
  id: number;
  title: string;
  icon: string;
  message: string;
  rotation: number;
}

const LETTERS: Letter[] = [
  {
    id: 1,
    title: "Happy birthday kanmani",
    icon: "💌",
    message: "🥹🩷\nYou ll be always spl to me as much as i saw you first… more than a roomie or classmate you’re my lil sister and will be the same no matter how time change … and ofc i care about you and i want all the best for youu… Happy birthday anuoooo😘🥹❤️\n\n- Veena",
    rotation: -6
  },
  {
    id: 2,
    title: "Happiest Birthday, Ananyeee ❤️✨",
    icon: "💗",
    message: ` You are one of the best friends I’ve ever had \n Unlike A Friend You're Special \n "The Special One💎"\n and When you text me “Doneee” I can Literally hear your voice ... Happy Birthdayhh Anuuhhh....<3 \n\n -Don
      .`,
    rotation: 0
  },
  {
    id: 3,
    title: "Happieee b'day anumol.....❤️",
    icon: "✨",
    message: "✨wishing you all the happiness and success you deserve.Lovee uu soo much muthe.....🫶🏻😘\n\n -Lakshmi",
    rotation: 6
  }
];

export default function EnvelopeScene({ onBack }: { onBack?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [readLetters, setReadLetters] = useState<number[]>([]);
  const [showParticles, setShowParticles] = useState(false);

  // Soft cream texture
  const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`;

  // Heart pattern for inner lining
  const heartPattern = `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='%23ffffff' opacity='0.3'/%3E%3C/svg%3E")`;

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 2000);
    }
  };

  const handleLetterClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedLetter === id) return;
    setSelectedLetter(id);
  };

  const closeLetter = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedLetter !== null) {
      setReadLetters(prev => [...prev, selectedLetter]);
    }
    setSelectedLetter(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center p-4 z-10 relative overflow-hidden"
    >

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-full text-[#D96B79] text-sm font-semibold shadow-sm transition-colors"
        >
          ← Back to Gifts
        </button>
      )}

      {/* Particles Burst */}
      <AnimatePresence>
        {showParticles && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            {['♡', '♥', '✦', '✨', '♡', '✦'].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1.5,
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 1) * 200 - 50,
                  rotate: Math.random() * 90 - 45
                }}
                transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
                className="absolute text-2xl text-[#D96B79]"
              >
                {p}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* SELECTED LETTER MODAL (Rendered outside the envelope to prevent 3D clipping) */}
      <AnimatePresence>
        {selectedLetter !== null && (
          <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
            {LETTERS.filter(l => l.id === selectedLetter).map(letter => (
              <motion.div
                layoutId={`letter-${letter.id}`}
                key={`modal-${letter.id}`}
                className="pointer-events-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
              >
                <div
                  className="w-[95vw] max-w-[500px] min-h-[60vh] h-auto max-h-[90vh] rounded-sm p-6 sm:p-10 flex flex-col shadow-2xl relative"
                  style={{
                    background: `linear-gradient(135deg, #FFFDFC, #F8F4EB 60%, #EFE8D6), ${paperTexture}`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 0 40px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Stamp graphic placeholder */}
                  <div className="absolute top-6 right-6 w-12 h-14 border-2 border-red-400/30 flex items-center justify-center opacity-50 rotate-12">
                    <span className="text-red-400/40 text-[10px] font-bold tracking-widest uppercase rotate-90">Postage</span>
                  </div>

                  {/* Fold creases */}
                  <div className="absolute inset-x-0 top-1/3 h-px bg-black/5 opacity-50 shadow-[0_1px_0_rgba(255,255,255,1)]" />
                  <div className="absolute inset-x-0 top-2/3 h-px bg-black/5 opacity-50 shadow-[0_1px_0_rgba(255,255,255,1)]" />

                  <button
                    onClick={closeLetter}
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#D96B79] transition-colors z-20"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <span className="text-4xl sm:text-5xl mb-1 mt-2 z-10">{letter.icon}</span>
                  <h3 className="font-caveat text-3xl sm:text-4xl text-[#D96B79] font-bold mb-4 z-10">{letter.title}</h3>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex flex-col w-full flex-grow z-10 overflow-y-auto pr-2 pb-2"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(217, 107, 121, 0.4) transparent' }}
                  >
                    <p className="font-caveat text-xl sm:text-2xl text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {letter.message}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Floor Shadow */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute w-[250px] sm:w-[350px] h-12 bg-black/10 rounded-[100%] blur-xl translate-y-36 sm:translate-y-44 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={!isOpen ? { y: [-4, 4, -4] } : { y: 0 }}
        transition={{ duration: 4, repeat: !isOpen ? Infinity : 0, ease: "easeInOut" }}
        className="relative flex justify-center items-end"
      >

        {/* Envelope Container */}
        <div
          onClick={handleOpen}
          className={`relative w-[280px] h-[195px] sm:w-[450px] sm:h-[300px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${!isOpen ? "cursor-pointer hover:-translate-y-2" : ""}`}
          style={{ perspective: "1200px" }}
        >

          {/* 1. Envelope Back (Inside) */}
          <div
            className="absolute inset-0 rounded-md z-0"
            style={{
              background: `linear-gradient(to bottom, #F8DADF, #F6CDD3), ${paperTexture}`,
              boxShadow: 'inset 0 0 30px rgba(217, 107, 121, 0.2)'
            }}
          >
            {/* 3. Inner Lining Pattern (Rendered on top of back) */}
            <div
              className="absolute inset-0 z-10 opacity-70 mix-blend-overlay"
              style={{ background: heartPattern, backgroundSize: '30px 30px' }}
            />
          </div>

          {/* 2. Letters Array (Only Unselected Letters) */}
          {LETTERS.filter(l => !readLetters.includes(l.id)).map((letter, index) => {
            const isSelected = selectedLetter === letter.id;
            if (isSelected) return null; // Let the modal render it

            const isOtherSelected = selectedLetter !== null;
            const delay = isOpen && selectedLetter === null ? index * 0.15 + 0.6 : 0;

            return (
              <motion.div
                layoutId={`letter-${letter.id}`}
                key={letter.id}
                onClick={(e) => isOpen && handleLetterClick(letter.id, e)}
                initial={{ y: 50, x: "-50%", opacity: 0, rotate: 0, scale: 1 }}
                animate={{
                  y: isOpen ? -100 - (Math.abs(letter.rotation) * 2) : 50,
                  x: "-50%",
                  rotate: isOpen ? letter.rotation : 0,
                  scale: 1,
                  opacity: isOtherSelected ? 0.3 : (isOpen ? 1 : 0)
                }}
                whileHover={
                  !selectedLetter && isOpen
                    ? { y: -130, scale: 1.05, transition: { duration: 0.3 } }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: !selectedLetter && isOpen && !isOtherSelected ? delay : 0,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`absolute bottom-2 left-1/2 origin-bottom ${isOpen && !selectedLetter ? "cursor-pointer" : ""}`}
                style={{ zIndex: 20 + index }}
              >
                <div
                  className="w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] rounded-sm p-4 sm:p-6 flex flex-col shadow-lg relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #FFFDFC, #F8F4EB), ${paperTexture}`,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1), inset 0 0 20px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Fold creases */}
                  <div className="absolute inset-x-0 top-1/3 h-px bg-black/5 opacity-50 shadow-[0_1px_0_rgba(255,255,255,1)]" />
                  <div className="absolute inset-x-0 top-2/3 h-px bg-black/5 opacity-50 shadow-[0_1px_0_rgba(255,255,255,1)]" />

                  <span className="text-3xl sm:text-4xl mb-2 mt-2">{letter.icon}</span>
                  <h3 className="font-caveat text-2xl sm:text-3xl text-[#D96B79] font-bold mb-1">{letter.title}</h3>
                  <span className="font-sans text-[10px] sm:text-xs text-gray-400 mt-auto self-center">Tap to read</span>
                </div>
              </motion.div>
            );
          })}

          {/* 4. Envelope Front Pocket (Left, Right, Bottom shapes) */}
          <div className="absolute inset-0 z-30 pointer-events-none rounded-b-md">
            {/* Left */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                background: `linear-gradient(to right, #FFFDFC, #F6F1E7), ${paperTexture}`,
                filter: 'drop-shadow(2px 0 5px rgba(0,0,0,0.15))'
              }}
            />
            {/* Right */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
                background: `linear-gradient(to left, #FFFDFC, #F6F1E7), ${paperTexture}`,
                filter: 'drop-shadow(-2px 0 5px rgba(0,0,0,0.15))'
              }}
            />
            {/* Bottom */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
                background: `linear-gradient(to top, #F2E8D5, #F6F1E7), ${paperTexture}`,
                filter: 'drop-shadow(0 -3px 5px rgba(0,0,0,0.2))'
              }}
            />
          </div>

          {/* 5. Envelope Flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 origin-top z-40 rounded-t-md"
            animate={isOpen ? { rotateX: 170, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transformStyle: "preserve-3d",
              background: `linear-gradient(to bottom, #FFF9F0, #EAE0CD), ${paperTexture}`,
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}
          >
            {/* Flap inside pattern (visible when open due to 3D rotation) */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #F8DADF, #F6CDD3), ${paperTexture}`,
                transform: "rotateY(180deg) translateZ(1px)",
                backfaceVisibility: "hidden"
              }}
            >
              <div
                className="absolute inset-0 mix-blend-overlay opacity-70"
                style={{ background: heartPattern, backgroundSize: '30px 30px' }}
              />
            </div>
          </motion.div>

          {/* 6. Heart Wax Seal */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none drop-shadow-xl"
              >
                <div
                  className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #F09BA8 0%, #D96B79 30%, #9C3341 100%)',
                    boxShadow: 'inset 0 4px 6px rgba(255,255,255,0.4), inset 0 -4px 6px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.3)',
                    border: '1px solid #9C3341'
                  }}
                >
                  {/* Wax rim bumps to look organic */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#B04554] mix-blend-multiply opacity-50 blur-[1px]"></div>
                  <div className="absolute inset-1 rounded-full border border-white/20"></div>

                  {/* Wax Stamp Impression */}
                  <svg viewBox="0 0 24 24" className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 text-[#751B27] drop-shadow-sm transform -translate-y-px" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>

      {/* "Tap to open" hint */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 sm:bottom-24 text-[#D96B79] font-sans text-sm font-semibold tracking-wide drop-shadow-sm pointer-events-none"
          >
            Tap to open 💌
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
