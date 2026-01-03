"use client";

import styles from "./Gallery.module.css";

interface GalleryProps {
  folderName: string;
  images: string[];
}

export default function Gallery({ folderName, images }: GalleryProps) {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryGrid}>
        {images.map((img, i) => (
          <a
            key={i}
            href={`/${folderName}/${img}`}
            target="_blank"
            rel="noopener noreferrer"
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
