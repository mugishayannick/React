import React from 'react'
import './NavBar.css'
import {FaFirefoxBrowser} from 'react-icons/fa'

function NavBar() {
  return (
    <nav className='nav-container'>
        <FaFirefoxBrowser className='fa-icon'/> 
        <h1>my travel journal</h1>
    </nav>
  )
}

export default NavBar
