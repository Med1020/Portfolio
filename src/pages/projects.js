import React from 'react'
import './project.css'
import {projects} from '../data/projects'

function Projects() {
  
  return (
    <>
     <div className='projects page' id='projects'>
       <h1 className='header'>Projects</h1>
       {
        projects.map((project, index)=>{
          return(
            <div key={index} className='proj-div'>
              <span className='projectName' >{project["name"]}</span><br/>
              <span className='projectDesc'>{project["desc"]}</span><br/>
              <a
                className="code-link"
                href={project["github"]}
                target="_blank"
                rel="noopener noreferrer"
              >

                <button className='btn' >View code</button>
              </a>

              <a 
                className='live-link'
                href={project["demo"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className='btn' >Live Project</button><br/>
              </a>
            </div>
          )

        })
       }
     </div>
    
    </>
  )
}

export default Projects