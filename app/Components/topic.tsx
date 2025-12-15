"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./topic.module.css";

export default function TopicBase({ 
  title = "", 
  subtitle = "", 
  content = "", 
  align = "l" 
}) {
  const ref = useRef(null);
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
      className={`${styles.banner} ${styles[align]} ${isVisible ? styles.animate : ""}`}
    >
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
