import React from 'react'
import './Footer.css'
import twitter from '../../resources/icons/Twitter.png'
import facebook from '../../resources/icons/Facebook.png'
import instagram from '../../resources/icons/Instagram.png'
import github from '../../resources/icons/GitHub.png'

function Footer() {
  return (
    <footer className='social-icons'>
      <ul>
        <li>
            <img src={twitter} alt="twitter icon" />
        </li>
        <li>
            <img src={facebook} alt="facebook icon" />
        </li>
        <li>
            <img src={instagram} alt="instgram icon" />
        </li>
        <li>
            <img src={github} alt="github icon" />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
