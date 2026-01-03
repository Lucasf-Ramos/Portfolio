import styles from './page.module.css';
import TopicBase from './Components/topic';
import DynamicBackground from './Components/DynamicBackground';
import ShowRom from './Components/showRom';
import ImgTopic from './Components/ImgTopic';
import path from 'path';
import fs from "fs";
import Gallery from './Components/Gallery';

export default function Home() {



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
    
 const images = all.slice(0,5);


  return (
    <div className={styles.backgroundConteiner}>

      <DynamicBackground imagePath='Portifolio/ponyo2.png'></DynamicBackground>
      <div className={styles.container}>
        
          <div className={styles.containerBg}></div>
          <div className={styles.subTitle}>2025</div>
          <div className={styles.MainTitle}><span className={styles.select2}>P</span>or<span className={styles.select1}>t</span>ifo<span className={styles.select2}>li</span>o </div>
          <div className={styles.Main}>
               <TopicBase 
              title='Welcome'
              subtitle=''
              content='Welcome! Here you’ll get a glimpse into my world of creativity and code. From crafting games and apps to bringing characters and ideas to life through art and animation, this is where my projects come together. Take a look around, and see what I’ve been building.'
              align='l'
               />
               <TopicBase/>
               <ImgTopic 
              title='About Me'
              subtitle=''
              content='My name is Lucas, and I am a programmer and artist. I specialize in creating games, apps, and websites, combining logic and creativity to bring ideas to life. I also work with illustrations, animations, and concept art, exploring different styles and techniques to express stories and emotions. I am passionate about continuous learning and pushing the boundaries of what I can create.'
              align='r'
           
               />
     
              <TopicBase 
              title='About My Portfolio'
              subtitle=''
              content='This site is my portfolio—a small window into my world. Here, you will find projects in various stages: ongoing, completed, or even some that were left behind over time. Each piece represents a step in my creative journey, reflecting both experimentation and growth. The portfolio is constantly evolving, so feel free to explore, discover, and immerse yourself in my work.'
              align='r'
               />
             <TopicBase/>
             <TopicBase 
              title='Illustrations'
              subtitle='Some of my favorits works'
              align='c'
               />
              <Gallery folderName='Portifolio' images={images}/>

              <TopicBase/>
             <TopicBase 
              title='Games'
              subtitle='About some games i published'
              align='c'
               />
              <ImgTopic 
              title='Breath Out'
              subtitle='2024'
              content='breath out é um jogo 2d side scroller onde voce trabalha em uma black company, onde sua chefe ira gritar com voce até sua morte - literalmente.'
              align='r'
              size='25vw'
               />
               <ImgTopic 
              title='Memory`s Park'
              subtitle='2023'
              content='Um cozy game para jogar localmente com seus amigos. Encontre as cartas com o desenho igual e faça seu patinho ganhar muitos pontos'
              align='l'
              size='25vw'
               />
              <ImgTopic 
              title='Galact'
              subtitle='2021'
              content='A terra está em perigo, voce deve destruir o maximo de meteoros posiveis para tentar salvala. Um jogo shooter com diversas naves para passar o tempo'
              align='r'
              size='25vw'
               />

       

          </div>
      </div>
    </div>
  );
}
