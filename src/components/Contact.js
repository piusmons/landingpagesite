import React from 'react';  
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Winnie from "./Winnie"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';






export default function Contact() {

    const ref = useRef()
    const [success, setSuccess] = useState(false)
    
    function handleSubmit(e) {
        e.preventDefault()

        emailjs.sendForm('service_ece66ki', 'template_lvtksin', ref.current, 'ykB88cWUlw1XNo6Nb')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
        
    }
    
    return(
        <div className='pageSectionContact'>
            <div className="contactLeft">
                <form ref={ref} onSubmit={handleSubmit} className="form">
                    <h2>Contact Us</h2>
                    <input placeholder="name" name="name"></input>
                    <input placeholder="email" name="email"></input>
                    <textarea rows='10' placeholder="write your message" name="message"></textarea>
                    <button type="submit" class="button-34">send</button>
                    {success && "message sent! we'll get back to you as soon as we can"}

                </form>



            </div>


            <div className="contactRight">
                <Canvas >
                    <Stage environment="city" intensity={.6}>
                        <Winnie/>
                    </Stage>
                    <OrbitControls enableZoom={false}/>
                </Canvas>


            </div>
        

            </div>

    )
}