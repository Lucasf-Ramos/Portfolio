"use client";

import styles from "./ShowRom.module.css";

interface GalleryProps {
  folderName: string;
  images: string[];
}

export default function ShowRom({ folderName, images }: GalleryProps) {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryGrid}>
        {images.map((img, i) => (
          <a
            key={i}
            href={`/${folderName}/${img}`} // 🔗 abre diretamente a imagem
            target="_blank"                // abre em nova aba
            rel="noopener noreferrer"      // segurança
            className={styles.thumbWrapper}
          >
            <img
              src={`/${folderName}/${img}`}
              alt={img}
              className={styles.thumbnail}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
