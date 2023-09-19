import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'
import Post from '../../components/post/Post'
import Avatar from '@mui/material/Avatar'



export default function Home() {
  return (
    <main>
      {/* Mobile app bar */}
      <ResponsiveAppBar name="Home"></ResponsiveAppBar>
      <div id="content-panel" className='panel'>
      <Post title='Lucia Maggi' imageSrc='https://mui.com/static/images/avatar/3.jpg' name='catARTico' content='Sono felicissima dei risultati dei corsi di pittura ad olio che stiamo svolgendo ogni martedì. In molti sono riusciti a migliorare tantissimo le loro capacità, alcuni stanno imparando da zero con ottimi risultati. Con enorme piacere volevo mostrare una delle opere realizzare da un ragazzo che sta frequentando il corso.'/>
      <Post type="News" title='Politics Entry Plug' imageSrc='https://play-lh.googleusercontent.com/R6YzQy3BvYaMZ6BrnDw7fUdXskhTPqOIHLz42gfynLEm4aOo81fCsJVev-N9MrE9vQ' name='Melissa Casuraghi' content='Approvata la mozione che permette di utilizzare telecamere di sorveglianza in stanze d’ospedale. Di seguito è riportato il link alla notizia per ottenere più informazioni.'/>
      <Post title='Francesco Bianchi' name='ArT Field' imageSrc='https://mui.com/static/images/avatar/5.jpg' content='Il corso di pittura ad olio è fantastico. Tutti sono simpatici e cordiali, sempre pronti ad aiutare. Dopo diversi incontri sento finalmente di star migliorando in questa passione. Non vedo l’ora di poter realizzare una tela più grande ed impegnativa di quelle che riesco a dipingere ora.'/>
      <Post type="Event" name= "Anna Sacchi" imageSrc='https://learningsciencehub.unifg.it/wp-content/uploads/2023/06/logo-mission-inclusion.png' title="Circolo dell'inclusione" content="Cari amici, Sono qui oggi per condividere con tutti voi la possibilità di partecipare a un'esperienza indimenticabile sulla filosofia politica con l'ultimo evento del nostro gruppo di riferimento."/>
      <Post title='Rita Acari' name='Ambiente LCL' imageSrc='https://mui.com/static/images/avatar/4.jpg' content="Lottiamo per sensibilizzare le persone sul tema dell’ambiente. Oggi abbiamo ottenuto grandi risultati con la festa a Napoli! Congratulazioni!"/>
      </div>
    </main>
  )
}
