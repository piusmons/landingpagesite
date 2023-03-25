import React from 'react';  
import { useState } from 'react';
import WidgetBot, { API } from '@widgetbot/react-embed'




let memeImg = ''


function Meme() {
    const [image, setImage] = useState('')

    function handleClick() {

        fetch("https://meme-api.com/gimme")
            .then(response => {
                return response.json();
            })
            .then(function(response){
               let memeImg = response.url
               setImage(memeImg)
            })
    }

    return(
        <>
        <img className="memeImage" src={image} ></img>
        <button class="buttonMeme" onClick={handleClick}>Get memes</button>
        </>
    )
}


const Widget = () => (
    <WidgetBot
      className="widgetBot"
      server="1089138647984504955"
      channel="1089138649226039339"
      
    />
  )


export default function Cool() {

    return(
        
        <div className='pageSection'>
            <div className='coolContainer'>
                <h2>Here's some fresh memes for you</h2>
                <Meme/>
            </div>
            <div className='rightCoolContainer'>
                <h2>Say hi to the team. bzz bzz!</h2>
                <Widget  />
            </div>



        </div>
    )
}