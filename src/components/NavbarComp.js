import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


function NavbarComp() {

  return (
   <Navbar className='navbar'>
      <Nav className="nav-items">
        
        <Nav.Link href="#home" className='item' >Home</Nav.Link>
        <Nav.Link href="#about"  className='item'>About</Nav.Link>
        <Nav.Link href="#experience" className='item'>Work</Nav.Link>
        <Nav.Link href="#projects" className='item'>Projects</Nav.Link>
        <Nav.Link href="#blog" className='item'>Blogs</Nav.Link>
        <Nav.Link href="#contact" className='item'>Contact</Nav.Link>
      </Nav>
     
    
   </Navbar>


  )
}

export default NavbarComp