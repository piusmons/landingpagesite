import React from 'react';  
import { useState } from 'react';

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
        <button class="buttonMeme" onClick={handleClick}>press me</button>
        </>
    )
}





export default function Cool() {

    return(
        
        <div className='pageSection'>
            <div className='coolContainer'>
                <Meme/>
            </div>
            <div className='rightCoolContainer'>wew</div>
        


        </div>
    )
}