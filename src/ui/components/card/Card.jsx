import React from 'react'
import './Card.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'


function Card(props) {
  return (
    <div className="card-container">
      <div className='card-img'>
        <img src={`${props.coverImage}`} alt="profile" />
      </div>
      <div className='card-content'>
        <div className='header'>
            <p><HiOutlineLocationMarker className='icon'/>  {props.country}</p>
            <a href="#">{props.link}</a>
        </div>
        <div className='content'>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Card
