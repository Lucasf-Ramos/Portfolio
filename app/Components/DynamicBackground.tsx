"use client";

import { useEffect } from "react";
import styles from "./DynamicBackground.module.css";

interface DynamicBackgroundProps {
  imagePath: string; // caminho relativo dentro da public/
  offsetY?: number;  // deslocamento vertical em %, positivo ou negativo
}

export default function DynamicBackground({ 
  imagePath, 
  offsetY = 0  // 👈 valor padrão = sem deslocamento
}: DynamicBackgroundProps) {
  
  const CONFIG = {
    initialBlur: 0,
    maxBlur: 30,
    initialBrightness: 1,
    minBrightness: 0.5,
    parallaxIntensity: 500,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollY / maxScroll, 1);

      const blurValue =
        CONFIG.initialBlur +
        (CONFIG.maxBlur - CONFIG.initialBlur) * scrollPercent;

      const brightnessValue =
        CONFIG.initialBrightness -
        (CONFIG.initialBrightness - CONFIG.minBrightness) * scrollPercent;

      const parallaxOffset =
        -(scrollY * CONFIG.parallaxIntensity) / window.innerHeight;

      // Atualiza variáveis CSS
      document.documentElement.style.setProperty("--blur-amount", `${blurValue}px`);
      document.documentElement.style.setProperty("--brightness", `${brightnessValue}`);
      document.documentElement.style.setProperty("--parallax-offset", `${parallaxOffset}px`);
      document.documentElement.style.setProperty("--base-offset", `${offsetY}%`);
    };

    handleScroll(); // executa uma vez ao montar
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <div
      className={styles.backgroundLayer}
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    />
  );
}
