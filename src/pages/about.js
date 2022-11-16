import React from 'react'
import './about.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <>
      <div className='about page' id='about'>
        
          <h1 className='header'>About Me</h1>
          <p className="intro text">
            Hi there! I'm Medha and I am an aspiring web developer.<br/>
            I got hooked onto web dev last year when I took on the task of building my startup's web presence, 
            and found myself enjoying the process.<br/>
            I hope to combine my passion for design and love for coding to build beautiful and functional sites
            for everyone.
          </p>
          <p className='techstack text'>
            Some of the tools I am familiar with:<br/>
            <ul className='ts-list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>React</li>
              <li>Sass</li>
              <li>SQL</li>
            </ul>
          </p>
          <p className="intro2 text ">
            
          </p>
          
      </div>
    </>
  )
}

export default About


