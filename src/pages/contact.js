import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  

} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

function Contact() {
  return (
    <>
      <div className='contact ' id='contact'>
        <h1 className='header'>Contact me here:</h1><br/>
        <ul className="social-media-list">
          
              {SocialData.map((data) => {
                return (

                  <li key={data.name}>
                    <a
                      className="social-media-list-link"
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={data.icon} className="media-icons" />
                    </a>
                  </li>
                  
                );
              })}
            </ul>
              
            <p className="footer">Designed and Built by Medha Moorching</p>
        </div>
    </>
  )
}

export default Contact

const SocialData = [
  { name: "github",
    link: "https://github.com/Med1020",
    icon: faGithub,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/medha-moorching-576107171/",
    icon: faLinkedin,
  },
  {
    name: "email",
    link: "mailto:medhamoorching@gmail.com",
    icon: faEnvelope,
  },
 
];