'use client'

import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'
import Chatbox from '../../components/chatbox/Chatbox';
import React, { useState } from 'react';
import './chat.scss';
import { useRouter } from 'next/navigation'
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from '../../components/searchbar/Searchbar'
import ChatMessage from '../../components/chatmessage/ChatMessage'
import ChatRecMessage from '../../components/chatmessage/ChatRecMessage'
import SearchLayout from './layout';
import SimpleBottomNavigation from '../../components/navbar/Navbar'
import ChatResponsiveAppBar from '@/src/components/appbar/ChatResponsiveAppBar';

 
export default function Chat() {

  const router = useRouter()

  return (

    <main>
      {/* Mobile app bar */}
      
      <ChatResponsiveAppBar name="Chat">
      </ChatResponsiveAppBar>

      <div id="content-panel" className='panel'>

      <div class="center-box">
  <h3 class="selectconvo">Seleziona una chat per aprire la conversazione</h3>
</div>
          <div className='firstPage' id='firstPage'>
            
         
            {/* Add the onClick handler to make the component clickable */}
            <div onClick={() => router.push('/messages')} style={{ cursor: 'pointer' }}> 
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


      
        </div>

        
      
      
    </main>
    
  )
}
