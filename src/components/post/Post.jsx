'use client'
import { Card } from "../../lib/mui"
import React from "react"
import './post.scss'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ImageIcon from '@mui/icons-material/Image';

import EventIcon from '@mui/icons-material/Event';
import Button from '@mui/material/Button';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';

const Post = ({imageSrcNews, titleNews, nameNews, contentNews, imgContentNews, linkNews, titleContentNews, 
    imgSourceEvent, titleEvent, nameEvent, nameofEvent, dateEvent, contentEvent,
    imageProfiloPost, namePost, nameGroupPost, contentPost, imageContentPost, type}) => {
        
    if(type ==="News")
    {
        return (
        <Card className="post">
            <div className='info'>
                <div className="user-info"> 
                    
                <img 
                className="icona-news"
                src={imageSrcNews}/>

                    <div className="names">
                        <h2 className="main-name">{titleNews}</h2>
                        <h5 className="sec-name">{nameNews}</h5>
                    </div>
                </div> 
                <NewspaperIcon className ='post-type'/>
            </div>

            <div className='content'>
                <p>{contentNews}</p>
            </div>

            <div className="content-imm">
                <img 
                className="imm"
                src={imgContentNews}/> 
            </div>

            <div className="link-div">
                <Link href="#" className="link"><LinkIcon className="link-icon"/>{linkNews}</Link>
                <h4 className="title">{titleContentNews}</h4>
            </div>

            <div className='interactions'>

                 <IconButton
                    className="like" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <FavoriteBorderIcon/>
                    <h5 className="zero">0</h5>
                 </IconButton>
                 
                 <IconButton
                    className="commento" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <ChatBubbleOutlineIcon/>
                    <h5 className="zero">0</h5>
                 </IconButton>

                 <IconButton
                    className="save" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <TurnedInNotIcon/>
                 </IconButton>

                 <IconButton
                    className="share" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <ShareIcon/>
                 </IconButton>

            </div>
        </Card>
    )
}

else if (type === "Event")
    {
    return (
        <Card className="post">
            <div className='info'>
                <div className="user-info"> 
                    
                <img 
                className="icona-event"
                src={imgSourceEvent}/>

                    <div className="names">
                        <h2 className="main-name">{titleEvent}</h2>
                        <h5 className="sec-name">{nameEvent}</h5>
                    </div>
                </div> 
                <EventIcon className ='post-type'/>
            </div>

            <div className="info-event">
             <h4 className="name-event">{nameofEvent}</h4>
             <h4 className="date">{dateEvent}</h4>
            </div>

            <div className='content'>
                <p className="text-content">{contentEvent}</p>
            </div>

            <div className='follow'>
             <Button variant="outlined" className="follow-button">Partecipa all'evento</Button>
            </div>


            <div className='interactions'>
                 <IconButton
                    className="like" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <FavoriteBorderIcon/>
                    <h5 className="zero">0</h5>
                 </IconButton>
                 
                 <IconButton
                    className="commento" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <ChatBubbleOutlineIcon/>
                    <h5 className="zero">0</h5>
                 </IconButton>

                 <IconButton
                    className="save" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <TurnedInNotIcon/>
                 </IconButton>

                 <IconButton
                    className="share" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <ShareIcon/>
                 </IconButton>

            </div>
        </Card>
    )
}
else if(type === "Post")
{
    return (
        <Card className="post">
            <div className='info'>
                <div className="user-info"> 
                    
                <img 
                className="icona-profilo"
                src={imageProfiloPost}/>

                    <div className="names">
                        <h2 className="main-name">{namePost}</h2>
                        <h5 className="sec-name">{nameGroupPost}</h5>
                    </div>
                </div> 
                <ImageIcon className ='post-type'/>
            </div>

            <div className='content'>
                <p>{contentPost}</p>
            </div>

            <div className="content-imm">
                <img 
                className="imm"
                src={imageContentPost}/> 
            </div>

            <div className='interactions'>

                 <IconButton
                    className="like" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <FavoriteBorderIcon/>
                    <h5 className="zero">0</h5>
                 </IconButton>
                 
                 <IconButton
                    className="commento" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <ChatBubbleOutlineIcon/>
                    <h5 className="zero">0</h5>
                 </IconButton>

                 <IconButton
                    className="save" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <TurnedInNotIcon/>
                 </IconButton>

                 <IconButton
                    className="share" 
                    onClick={() => {// Gestisci il clic sull'icona qui
                    }}>
                    <ShareIcon/>
                 </IconButton>

            </div>
        </Card>
    )
 }
}

export default Post