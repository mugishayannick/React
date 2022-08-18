import React from 'react'
import './ButtonLinkedin.css'
import linkedin from '../../resources/icons/linkedin.png'

function buttonLinkedin() {
  return (
    <button className='linkedin'>
      <img className='image' src={linkedin} alt="linkedin icon" />
      <span>Linkedin</span>
    </button>
  )
}

export default buttonLinkedin
