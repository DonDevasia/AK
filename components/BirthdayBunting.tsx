"use client";

import { motion } from "framer-motion";

export default function BirthdayBunting() {
  return (
    <>
      {/* Left Bunting */}
      <motion.div 
        className="absolute top-[-2%] left-[-2%] w-[45vw] sm:w-[35vw] min-w-[200px] pointer-events-none z-10 origin-top-left"
        animate={{ rotate: [-1, 2, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 400 120" className="w-full h-auto drop-shadow-sm">
          {/* Main sketchy string */}
          <path d="M0,10 Q150,80 350,30" fill="none" stroke="#28327C" strokeWidth="2" strokeLinecap="round" />
          <path d="M2,13 Q148,82 348,33" fill="none" stroke="#28327C" strokeWidth="1" strokeDasharray="5,5" opacity="0.6" />
          
          {/* Flag 1 */}
          <polygon points="40,22 80,32 50,75" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="43,23 77,33 51,70" fill="rgba(83, 98, 163, 0.1)" stroke="none" />
          <path d="M45,30 L60,40 M48,40 L65,50 M50,55 L58,60" stroke="#28327C" strokeWidth="1" opacity="0.5" />
          
          {/* Flag 2 */}
          <polygon points="120,44 165,52 140,100" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="122,46 162,53 141,95" fill="rgba(40, 50, 124, 0.15)" stroke="none" />
          
          {/* Flag 3 */}
          <polygon points="210,58 255,58 240,110" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <path d="M220,65 L245,65 M225,75 L245,75 M230,85 L245,85" stroke="#28327C" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Flag 4 */}
          <polygon points="295,48 335,38 330,85" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="298,49 332,40 328,80" fill="rgba(181, 199, 232, 0.3)" stroke="none" />
        </svg>
      </motion.div>

      {/* Right Bunting */}
      <motion.div 
        className="absolute top-[-2%] right-[-2%] w-[45vw] sm:w-[35vw] min-w-[200px] pointer-events-none z-10 origin-top-right"
        animate={{ rotate: [1, -2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 400 120" className="w-full h-auto drop-shadow-sm">
          {/* Main sketchy string */}
          <path d="M400,10 Q250,80 50,30" fill="none" stroke="#28327C" strokeWidth="2" strokeLinecap="round" />
          <path d="M398,13 Q252,82 52,33" fill="none" stroke="#28327C" strokeWidth="1" strokeDasharray="5,5" opacity="0.6" />
          
          {/* Flag 1 */}
          <polygon points="360,22 320,32 350,75" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="357,23 323,33 349,70" fill="rgba(83, 98, 163, 0.1)" stroke="none" />
          
          {/* Flag 2 */}
          <polygon points="280,44 235,52 260,100" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <path d="M270,55 L250,65 M265,65 L245,75 M260,75 L245,85" stroke="#28327C" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Flag 3 */}
          <polygon points="190,58 145,58 160,110" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="188,59 148,59 161,105" fill="rgba(40, 50, 124, 0.15)" stroke="none" />
          
          {/* Flag 4 */}
          <polygon points="105,48 65,38 70,85" fill="none" stroke="#28327C" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="102,49 68,40 72,80" fill="rgba(181, 199, 232, 0.3)" stroke="none" />
        </svg>
      </motion.div>
    </>
  );
}
