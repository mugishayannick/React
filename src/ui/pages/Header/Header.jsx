import React from 'react'
import './Header.css'
import ButtonEmail from '../../components/buttonEmail/ButtonEmail'
import ButtonLinkedin from '../../components/buttonLinkedin/ButtonLinkedin'
import Footer from '../../components/Footer/Footer'

function Header() {
  return (
    <header className="header">
      <h1>Laura Smith</h1>
      <h2>Front Developer</h2>
      <p className="site">laurasmith.website</p>
      <div className= "button">
        <ButtonEmail className="btn-email"/>
        <ButtonLinkedin />
      </div>
      <div className='content-container'>
        <div className='contentOne'>
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest 
            in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, 
            and am always looking for new things to learn.
          </p>
        </div>
        <div className='contentTwo'>
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <Footer />
    </header>
  )
}

export default Header
