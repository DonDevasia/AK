"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer({ autoPlay = false }: { autoPlay?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/birthday-song.mp3");
    
    const updateProgress = () => {
      if (audioRef.current) {
        const { currentTime, duration } = audioRef.current;
        if (duration) {
          setProgress((currentTime / duration) * 100);
        }
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
    audioRef.current.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlay && !isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {
          // Autoplay was prevented by browser, wait for user interaction
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-white border-2 border-navy rounded-lg p-2 shadow-scrapbook flex items-center gap-3 w-48 rotate-2 hover:rotate-0 transition-transform"
    >
      <div className="w-10 h-10 bg-lightblue rounded flex items-center justify-center border border-navy/20 relative overflow-hidden shrink-0">
        <Music size={20} className="text-navy" />
        {isPlaying && (
          <motion.div 
            className="absolute inset-0 bg-white/20"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}
      </div>
      
      <div className="flex-grow flex flex-col justify-center min-w-0">
        <div className="font-hand text-sm text-navy truncate font-bold">Birthday Song</div>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden border border-gray-300">
          <div 
            className="h-full bg-red transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button 
        onClick={togglePlay}
        className="w-8 h-8 flex items-center justify-center bg-cream border border-navy rounded-full shadow-sm shrink-0 hover:bg-lightblue transition-colors"
      >
        {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
      </button>
    </motion.div>
  );
}
