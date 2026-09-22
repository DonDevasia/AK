"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BirthdayIntro from "./BirthdayIntro";
import GiftScene from "./GiftScene";
import EnvelopeScene from "./EnvelopeScene";
import CameraScene from "./CameraScene";
import NotebookGrid from "./NotebookGrid";

export type Scene = "intro" | "gift" | "envelope" | "camera";

export default function BirthdayExperience() {
  const [currentScene, setCurrentScene] = useState<Scene>("intro");

  const nextScene = (scene: Scene) => {
    setCurrentScene(scene);
  };

  return (
    <div className="w-full h-[100svh] relative font-sans text-navy overflow-hidden">
      
      {/* Global Background Grid */}
      <NotebookGrid />

      <AnimatePresence mode="wait">
        {currentScene === "intro" && (
          <BirthdayIntro key="intro" onNext={() => nextScene("gift")} />
        )}
        {currentScene === "gift" && (
          <GiftScene 
            key="gift" 
            onEnvelopeClick={() => nextScene("envelope")} 
            onCameraClick={() => nextScene("camera")} 
          />
        )}
        {currentScene === "envelope" && (
          <EnvelopeScene key="envelope" onBack={() => nextScene("gift")} />
        )}
        {currentScene === "camera" && (
          <CameraScene key="camera" onBack={() => nextScene("gift")} />
        )}
      </AnimatePresence>
    </div>
  );
}
