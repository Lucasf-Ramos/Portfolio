import styles from './page.module.css';
import TopicBase from '../Components/topic';
import DynamicBackground from '../Components/DynamicBackground';
import Carousel from '../Components/Carousel';
import Gallery from '../Components/Gallery';
import ShowRom from '../Components/showRom';
import ImgTopic from '../Components/ImgTopic';
import HomeContent from '../Components/PagesContent/home.Content';


export default function gamedev() {
 
  return (
    <div className={styles.backgroundConteiner}>
      <DynamicBackground imagePath='gamedev.png' offsetY={0}></DynamicBackground>
      <div className={styles.container}>
        
          <div className={styles.containerBg}></div>
          <div className={styles.subTitle}></div>
          <div className={styles.MainTitle}>Game Dev </div>


          <div className={styles.Main}>
               
          </div>
      </div>
    </div>
  );
}
