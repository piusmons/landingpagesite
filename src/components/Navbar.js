import React from 'react';  
import logo from '../hexa.png';

export default function Navbar() {

    return(
        <div className='Navbar'>
            <div className="links">
                <img src={logo} className="logo" alt="logo"></img>
                <h1>Honeycomb Labs</h1>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        works
                    </li>
                    <li>
                        contact
                    </li>
                </ul>
            </div>
            <div className='hireButtonContainer'>
                <button class="button-34" >Hire Me</button>


            </div>
            
            
            
            
            </div>
         
    )
}