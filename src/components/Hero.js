import React from 'react';  
import Navbar from "./Navbar.js"
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Hero() {

    return(
        

        <div className='pageSectionHero'>
            <Navbar/>
            <div className='heroSectionContainer'>
                <div className='heroTextContainer'>
                    <h1 className='title'>Sweet.Golden.Smooth.</h1>
                    <h3>That's how development is like working with us</h3>
                    <button class="button-34" >Click for a surprise</button>
                    
                </div>
                <div className='hero3dContainer'>
                    <Canvas camera={{fov:25, position:[5,5,5]}}>
                        <OrbitControls enableZoom={false} autoRotate/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]} />
                        <Sphere args={[1,100,200]} scale={1}>
                            <MeshDistortMaterial color="#EEA944" attach="material" distort={0.5}/>
                        </Sphere>
                    </Canvas>
                </div>



            </div>
            
            </div>
         
    )
}