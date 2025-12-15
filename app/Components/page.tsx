import TopicBase from './topic';
import Carousel from './Carousel';
import Gallery from './Gallery';
import ShowRom from './showRom';
import ImgTopic from './ImgTopic';


export default function def() {
    
    
     const images = ['helloCharlotte.png', 'ponyo2.png', 'SplatToon.png', 'rpgSquad.png', 'spacialMiku_ver01.png', 'Xmosaic.png'];
    return (
        <div>
             <TopicBase 
              title='Loren' 
              subtitle='Iepsum' 
              content='Donec vitae elementum ligula, eu faucibus nisl. Duis in nibh mi. Duis accumsan, nisi sit amet gravida pretium, magna dui dignissim elit, eget molestie nulla ipsum et turpis. Fusce cursus accumsan mauris, ac congue tortor sagittis vel. Morbi quis purus tempus, scelerisque purus eu, varius metus. Duis venenatis consequat orci, quis tempus est mollis a. Integer ac fringilla massa. Donec mattis laoreet vestibulum.'/>
             <TopicBase 
              title='' 
              subtitle='' 
              content='Donec pharetra urna hendrerit risus venenatis, id vehicula nulla bibendum. Nulla id nisi eget erat rhoncus iaculis. Fusce et consequat ipsum. Aliquam ac blandit magna. Integer suscipit nisl nec orci mollis consequat. Donec accumsan, elit ut vulputate tincidunt, nulla arcu tempor odio, at ullamcorper sem justo eu tellus. Praesent luctus quam est, vel tristique dui pretium nec. Cras congue leo a odio eleifend pharetra. Maecenas facilisis lorem risus, sed mattis justo aliquam vitae.'/>
         
             
             <TopicBase 
              title='Loren' 
              subtitle='Iepsum' 
              align='r'
              content='Donec vitae elementum ligula, eu faucibus nisl. Duis in nibh mi. Duis accumsan, nisi sit amet gravida pretium, magna dui dignissim elit, eget molestie nulla ipsum et turpis. Fusce cursus accumsan mauris, ac congue tortor sagittis vel. Morbi quis purus tempus, scelerisque purus eu, varius metus. Duis venenatis consequat orci, quis tempus est mollis a. Integer ac fringilla massa. Donec mattis laoreet vestibulum.

Donec pharetra urna hendrerit risus venenatis, id vehicula nulla bibendum. Nulla id nisi eget erat rhoncus iaculis. Fusce et consequat ipsum. Aliquam ac blandit magna. Integer suscipit nisl nec orci mollis consequat. Donec accumsan, elit ut vulputate tincidunt, nulla arcu tempor odio, at ullamcorper sem justo eu tellus. Praesent luctus quam est, vel tristique dui pretium nec. Cras congue leo a odio eleifend pharetra. Maecenas facilisis lorem risus, sed mattis justo aliquam vitae.'/>
            <TopicBase 
              title='Caroussel' 
              subtitle='Click e mude a imagem' 
              align='c'
              content=''/>
             <Carousel folderName='Portifolio' images={images}></Carousel>
            <TopicBase 
              title='Gallery' 
              subtitle='Click para expandir' 
              align='c'
              content=''/>
              <Gallery folderName='Portifolio' images={images}></Gallery>
              <br/>
              <TopicBase 
              title='ShowRom' 
              subtitle='Click para expandir' 
              align='c'
              content=''/>
              <ShowRom folderName='Portifolio' images={images}/>
              <ImgTopic 
              title='Image topic Left' 
              subtitle='Subtitulo' 
              align='l'
              content='Texto muito maneiro sobre esses bastidores'
              image='Portifolio/bastidores.png'
              size='40vw'
              />  
               <ImgTopic 
              title='Image topic Rigth' 
              subtitle='Subtitulo' 
              align='r'
              content='Texto muito maneiro sobre esses bastidores'
              image='Portifolio/caramujo infinito.png'
              size='20vw'
              />  
        </div>
    )
}