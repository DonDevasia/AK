"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BirthdayIntro from "./BirthdayIntro";
import GiftScene from "./GiftScene";
import EnvelopeScene from "./EnvelopeScene";
import CameraScene from "./CameraScene";
import OutroScene from "./OutroScene";
import NotebookGrid from "./NotebookGrid";

export default function BirthdayExperience() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Find the scroll container (this component's root div)
      const container = document.getElementById('scroll-container');
      if (container) {
        container.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div 
      id="scroll-container"
      className="w-full h-full relative font-sans text-navy overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for a cleaner look
    >
      <style dangerouslySetInnerHTML={{__html: `
        #scroll-container::-webkit-scrollbar { display: none; }
      `}} />
      
      {/* Global Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <NotebookGrid />
      </div>

      <section id="intro" className="w-full h-full snap-start snap-always relative shrink-0">
        <BirthdayIntro onNext={() => scrollTo("gift")} />
      </section>

      <section id="gift" className="w-full h-full snap-start snap-always relative shrink-0">
        <GiftScene 
          onEnvelopeClick={() => scrollTo("envelope")} 
          onCameraClick={() => scrollTo("camera")} 
        />
      </section>

      <section id="envelope" className="w-full h-full snap-start snap-always relative shrink-0">
        <EnvelopeScene onBack={() => scrollTo("gift")} />
      </section>

      <section id="camera" className="w-full h-full snap-start snap-always relative shrink-0">
        <CameraScene onBack={() => scrollTo("gift")} />
      </section>

      <section id="outro" className="w-full h-full snap-start snap-always relative shrink-0">
        <OutroScene onBackToTop={() => scrollTo("intro")} />
      </section>
    </div>
  );
}
