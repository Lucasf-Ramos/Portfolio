"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

interface GalleryProps {
  folderName: string;
  images: string[];
}

export default function Gallery({ folderName, images }: GalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (image: string) => {
    setSelected(image);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <div className={styles.galleryContainer}>
      {/* grade de imagens */}
      <div className={styles.galleryGrid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={styles.thumbWrapper}
            onClick={() => handleSelect(img)}
          >
            <img
              src={`/${folderName}/${img}`}
              alt={img}
              className={styles.thumbnail}
            />
          </div>
        ))}
      </div>

      {/* overlay com imagem expandida */}
      {selected && (
        <div className={styles.overlay} onClick={handleClose}>
          <img
            src={`/${folderName}/${selected}`}
            alt="expanded"
            className={styles.expandedImage}
          />
        </div>
      )}
    </div>
  );
}
