import React from 'react'
import {data} from '../data/work'
import './experience.css'

function Experience() {
  return (
    <>
      <div className='experience page' id='experience'>
        <h1 className='header'>Work Experience</h1>
        <ul className='work-exp'>
         {
          data.map(item=>{
            return(

            <li className='work item' key={item.id}>
              <h4 className="timeline-title">{item.company}</h4>
              <p style={{fontSize:"17px",opacity:"0.4"}}>{item.date}</p>
              <div className="timeline-body">
                <p>{item.text}</p>
              </div>
            </li>
            )
          })
         }
        </ul>

      </div>
    </>
  )
}

export default Experience