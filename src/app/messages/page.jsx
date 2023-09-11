'use client'

import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'
import Chatbox from '../../components/chatbox/Chatbox';
import React, { useState } from 'react';
import './messages.scss';
import { useRouter } from 'next/navigation'
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from '../../components/searchbar/Searchbar'
import ChatMessage from '../../components/chatmessage/ChatMessage'
import ChatRecMessage from '../../components/chatmessage/ChatRecMessage'
import SearchLayout from './layout';
import SimpleBottomNavigation from '../../components/navbar/Navbar'

 
export default function Chat() {

 
  const [showFirstPage, setShowFirstPage] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);

  // Funzione per cambiare la visibilità delle classi
  const handleClick = () => {
    setShowFirstPage(!showFirstPage);
    setShowSecondPage(!showSecondPage);
  };

  const router = useRouter()
  
  return (

    <main>
      {/* Mobile app bar */}
      
      <ResponsiveAppBar name="Chat">
      </ResponsiveAppBar>

      <div id="content-panel" className='panel'>

          <div className='secondPage' id='secondPage'>
          
          <div className="rightContainer">
            <ChatMessage className='rightelement' contenuto="Ciao Ugo, devo darti una notizia sul gruppo ambientale che seguiamo..." data="12:02" />
          </div>
          <div className="rightContainer">
            <ChatMessage className='rightelement' contenuto="Non sapevo che avessero creato un evento!" data="12:05" />
          </div>

          <div className="leftContainer">
            <ChatRecMessage className='leftelement' contenuto="Me ne sono accorto solo adesso! Anche se non so se riuscirò a partecipare insieme a te. C’è un progetto a cui sto lavorando che mi sta prendendo parecchio tempo..." data="12:12" />
          </div>
          
          <div className="rightContainer">
            <ChatMessage className='rightelement' contenuto="Ah, capisco... Secondo me dovresti prenderti del tempo libero per rilassarti." data="12:25" />
          </div>

          <div className="rightContainer">
            <ChatMessage className='rightelement' contenuto="Sai, ci sono tanti eventi a cui vorrei partecipare insieme a te. Comprendo che tu debba dedicare tempo ed energie all’università, però se riesci a ritagliarti del tempo per andare insieme a questo evento che ti ho menzionato, mi farebbe davvero piacere!" data="12:35" />
          </div>

          <div className="leftContainer">
            <ChatRecMessage className='leftelement' contenuto="Va bene, Ugo. Sono contento della tua passione sull’ argomento e di quanto tu ci tenga alla mia compagnia, per cui mi impegnerò per riuscire a partecipare a questo evento!" data="12:42" />
          </div>
          
        </div>


        </div>

        
      
      
    </main>
    
  )
}
