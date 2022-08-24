import React from 'react'
import './Die.css'

function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : '#fff'
    }
  return (
    <div 
        className="die-face"
        onClick={props.holdDice}
        style={styles}
    >
        <h2 className="die-num">{props.value}</h2>
    </div>
  )
}

export default Die
