import fs from "fs";
import path from "path";

import styles from "./page.module.css";
import TopicBase from "../Components/topic";
import DynamicBackground from "../Components/DynamicBackground";
import ShowRom from "../Components/showRom";
import Gallery from "../Components/Gallery";

export default function Illustrations() {
  const portfolioDir = path.join(process.cwd(), "public/Portifolio");

  // Lê os arquivos da pasta
  const files = fs.readdirSync(portfolioDir);

  // Filtra e ordena pelos números no nome
  const all = files
    .filter((file) => file.match(/\.(png|jpg|jpeg|gif|webp)$/i))
    .sort((a, b) => {
      // Extrai o número (ex: "charlotte_3-1.png" -> 31)
      const numA = parseFloat((a.match(/(\d+(?:\.\d+)?)/g) || ["0"]).join(""));
      const numB = parseFloat((b.match(/(\d+(?:\.\d+)?)/g) || ["0"]).join(""));
      return numB - numA; // ordem decrescente
    });

  return (
    <div className={styles.backgroundConteiner}>
      <DynamicBackground
        imagePath="Portifolio/helloCharlotte.png"
        offsetY={30}
      />

      <div className={styles.container}>
        <div className={styles.containerBg}></div>
        <div className={styles.subTitle}></div>
        <div className={styles.MainTitle}>Illustrations</div>

        <div className={styles.Main}>
          <TopicBase title="My Drawings" align="c" />
          <Gallery folderName="Portifolio" images={all} />
        </div>
      </div>
    </div>
  );
}
