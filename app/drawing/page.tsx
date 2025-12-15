import styles from './page.module.css';
import TopicBase from '../Components/topic';
import DynamicBackground from '../Components/DynamicBackground';
import Carousel from '../Components/Carousel';
import Gallery from '../Components/Gallery';
import ShowRom from '../Components/showRom';
import ImgTopic from '../Components/ImgTopic';
import HomeContent from '../Components/PagesContent/home.Content';

export default function illustrations() {
   const a25 = ['spacialMiku_ver01.png', 'SplatToon.png', 'patoEleganteColor.png'];
   const a24 = ['ponyo2.png', 'ladyFurina.png', 'Doll_Charlotte_4.png'];
   const a23 = ['helloCharlotte.png', 'sunflower_girl.png', 'bastidores.png'];
  const all = [
  "bastidores.png",
  "caramujo infinito.png",
  "Charlotte_vitral.png",
  "Doll Charlie.png",
  "doll_charlotte 3-1.png",
  "Doll_Charlotte.png",
  "Doll_Charlotte_4.png",
  "helloCharlotte.png",
  "ladyFurina.png",
  "megacharizard.png",
  "patoEleganteColor.png",
  "ponyo2.png",
  "rpgSquad.png",
  "shigeo.png",
  "spacialMiku_ver01.png",
  "SplatToon.png",
  "sunflower_girl.png",
  "Xmosaic.png"
]

  return (
    <div className={styles.backgroundConteiner}>
      <DynamicBackground imagePath='Portifolio/helloCharlotte.png' offsetY={30}></DynamicBackground>
      <div className={styles.container}>
        
          <div className={styles.containerBg}></div>
          <div className={styles.subTitle}></div>
          <div className={styles.MainTitle}>Illustrations </div>

          <div className={styles.Main}>
               

                <TopicBase title='2025' align='c'/>
                 <ShowRom folderName='Portifolio' images={a25}/>
                  <TopicBase title='2024' align='c'/>
                 <ShowRom folderName='Portifolio' images={a24}/>
                  <TopicBase title='2023' align='c'/>
                 <ShowRom folderName='Portifolio' images={a23}/>

                 <TopicBase title='Mix' align='c'/>
                 <ShowRom folderName='Portifolio' images={all}/>

          </div>
      </div>
    </div>
  );
}
