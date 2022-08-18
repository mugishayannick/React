import React from 'react'
import './imageheader.css'
import profile from '../../resources/images/profile.png'

function ImageHeader() {
  return (
    <header className="img-header">
      <img src={profile} alt="" />
    </header>
  )
}

export default ImageHeader
