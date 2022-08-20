import React from 'react'
import './NavBar.css'
import TrollFace from '../../resources/icons/Troll Face.png'

function NavBar() {
  return (
    <nav className='nav-container'>
      <section className='left-nav'>
        <img src={TrollFace} alt="" />
        <h1>Meme Generator</h1>
      </section>
      <section className='right-nav'>
        <p>React course - Project 3</p>
      </section>
    </nav>
  )
}

export default NavBar