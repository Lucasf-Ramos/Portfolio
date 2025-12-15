"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./imagTopic.module.css";

interface ImgTopicProps {
  title?: string;
  subtitle?: string;
  content?: string;
  align?: "l" | "r";
  image?: string;
  size?: string;
}

export default function ImgTopic({
  title = "",
  subtitle = "",
  content = "",
  align = "l",
  image = "blank.png",
  size = "30vw"
}: ImgTopicProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.banner} ${styles[align]} ${
        isVisible ? styles.animate : ""
      }`}
      style={{ "--imageSize": size } as React.CSSProperties}
    >
      {/* 👇 container flex para texto + imagem */}
      <div className={styles.contentWrapper}>
        {/* se o alinhamento for 'r', inverte a ordem */}
        {align === "r" && image && (
          <img src={image} alt={title} className={styles.image} />
        )}

        <div className={styles.textBlock}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <p className={styles.content}>{content}</p>
        </div>

        {align !== "r" && image && (
          <img src={image} alt={title} className={styles.image} />
        )}
      </div>
    </div>
  );
}
