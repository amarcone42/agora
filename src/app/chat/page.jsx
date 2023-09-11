'use client'

import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'
import Chatbox from '../../components/chatbox/Chatbox';
import React, { useState } from 'react';
import './chat.scss';
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

  return (

    <main>
      {/* Mobile app bar */}
      
      <ResponsiveAppBar name="Chat">
      </ResponsiveAppBar>

      <div id="content-panel" className='panel'>
        {/* Mostra 'firstPage' se showFirstPage è true */}
        {showFirstPage && (
          <div className='firstPage' id='firstPage'>
            
            
            {/* Add the onClick handler to make the component clickable */}
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <Chatbox userName="Marco Rossi" messagePreview="Congratulazioni per tutto!" time="16:02" />
            <Chatbox userName="Luigi Verdi" messagePreview="Va bene." time="15:34" />
            <Chatbox userName="Anna Esposito" messagePreview="Ci vediamo dopo." time="15:09" />
            <Chatbox userName="Luca Bianchi" messagePreview="Capisco, allora poi vediamo." time="14:02" />
            <Chatbox userName="Francesco Neri" messagePreview="LOL, non me l'aspettavo!" time="13:45" />
            <Chatbox userName="Giulia Rossi" messagePreview="Congratulazioni!" time="13:00" />
            <Chatbox userName="Lucy Styles" messagePreview="Ti faremo sapere." time="12:56" />
            <Chatbox userName="Mara Giorgi" messagePreview="Ne è valsa la pena." time="12:13" />
            <Chatbox userName="Antonio Belli" messagePreview="Non ti preoccupare..." time="12:45" />
            <Chatbox userName="Carmela Iantosca" messagePreview="Non mi sento molto bene..." time="12:30" />
            <Chatbox userName="Franco Marcone" messagePreview="Hai fatto benissimo!" time="11:02" />
            <Chatbox userName="Giovanna Giorgia" messagePreview="Giovedì organizzeremo la marcia!" time="11:01" />
            <Chatbox userName="Vincenzo Rossi" messagePreview="Contaci, ti aspetto!" time="09:05" />
            

            </div>

          </div>
        )}

        {/* Mostra 'secondPage' se showSecondPage è true */}
        {showSecondPage && (
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
        
        
        )}

        </div>

        
      
      
    </main>
    
  )
}
