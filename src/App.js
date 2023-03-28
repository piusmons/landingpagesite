import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero.js"
import Contact from "./components/Contact.js"
import Cool from "./components/Cool.js"


function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <div className='siteContainer' >
      
        <Hero/>
        <Cool/>
        <Contact/>

    </div>
    </>
  );
}

export default App;
