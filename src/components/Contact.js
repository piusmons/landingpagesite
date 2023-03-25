import React from 'react';  
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Winnie from "./Winnie"

export default function Contact() {

    return(
        <div className='pageSectionContact'>
            <div className="contactLeft">
                <form className="form">
                    <h2>Contact Us</h2>
                    <input placeholder="name"></input>
                    <input placeholder="email"></input>
                    <textarea rows='10' placeholder="write your message"></textarea>
                    <button class="button-34">send</button>

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