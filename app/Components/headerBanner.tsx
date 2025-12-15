"use client";

import { useEffect } from "react";
import styles from "./headerBanner.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderBanner() {
  const pathname = usePathname();

  // 🎨 Define aqui as cores principais de cada página
  const pageColors: Record<string, string> = {
    "/": "#ff560a", // Home
    "/drawing": "#ffe81aff", // Illustrations
    "/gamedev": "#0051ffff", // Game Dev
    "/resume": "#ffffffff", // Resume
    "/contacts": "#ff5c5cff", // Contacts
  };

  // 🧠 Sempre que a rota mudar, troca a variável CSS
  useEffect(() => {
    const newColor = pageColors[pathname] || "#ff560a"; // cor padrão
    document.documentElement.style.setProperty("--color-primary", newColor);
  }, [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Illustrations", path: "/drawing" },
    { name: "Game Dev", path: "/gamedev" },
    { name: "Resume", path: "/resume" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link key={link.name} href={link.path} passHref>
          <div
            className={
              pathname === link.path
                ? styles.linkBoxSelected
                : styles.linkBox
            }
          >
            {link.name}
          </div>
        </Link>
      ))}
    </nav>
  );
}
