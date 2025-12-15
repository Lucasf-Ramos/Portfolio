"use client";

import { useState } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  folderName: string;
  images: string[];
}

export default function Carousel({ folderName, images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [phase, setPhase] = useState<"closing" | "opening" | null>(null);
  const [expanded, setExpanded] = useState(false); // 👈 estado de imagem expandida

  const changeImage = (newIndex: number) => {
    setPhase("closing");
    setAnimating(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setPhase("opening");
    }, 300);

    setTimeout(() => {
      setPhase(null);
      setAnimating(false);
    }, 600);
  };

  const prev = () => {
    if (animating) return;
    const newIndex = (current - 1 + images.length) % images.length;
    changeImage(newIndex);
  };

  const next = () => {
    if (animating) return;
    const newIndex = (current + 1) % images.length;
    changeImage(newIndex);
  };

  const leftIndex = (current - 1 + images.length) % images.length;
  const rightIndex = (current + 1) % images.length;

  return (
    <div className={styles.carousel}>
      <button className={`${styles.navButton} ${styles.left}`} onClick={prev}>◀</button>

      <div className={styles.imagesContainer}>
        {[leftIndex, current, rightIndex].map((index, i) => (
          <div
            key={i}
            className={`
              ${styles.imageWrapper}
              ${i === 1 ? styles.centerImage : styles.sideImage}
              ${phase === "closing" ? styles.closing : ""}
              ${phase === "opening" ? styles.opening : ""}
            `}
            onClick={() => i === 1 && setExpanded(true)} // 👈 só a central pode expandir
          >
            <img
              src={`/${folderName}/${images[index]}`}
              alt={`img-${index}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.right}`} onClick={next}>▶</button>

      {/* 👇 imagem expandida */}
      {expanded && (
        <div className={styles.overlay} onClick={() => setExpanded(false)}>
          <img
            src={`/${folderName}/${images[current]}`}
            alt="expanded"
            className={styles.expandedImage}
          />
        </div>
      )}
    </div>
  );
}
