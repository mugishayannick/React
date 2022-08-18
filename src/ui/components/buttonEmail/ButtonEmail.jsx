import React from 'react'
import './ButtonEmail.css'
import email from '../../resources/icons/email.png'

function ButtonEmail() {
  return (
    <button className='email'>
      <img className='image' src={email} alt="email icon" />
      <span>Email</span>
    </button>
  )
}

export default ButtonEmail
