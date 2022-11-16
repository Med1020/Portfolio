import './App.css';
import React from 'react'
// import {animateScroll as scroll} from 'react-scroll'
import NavbarComp from './components/NavbarComp'
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';
import Blog from './pages/blog'



function App() {
 
  return (
    <>
    <NavbarComp/> 
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Blog/>
    <Contact/>
    {/* <button spy={true} smooth={true} onClick={()=>scroll.scrollToTop()} className='btn'>Top</button> */}
    </>
      
        
        
        
    
  )
   
}

export default App;


