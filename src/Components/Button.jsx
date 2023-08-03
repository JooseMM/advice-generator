import React from 'react'
import dices from "../Resources/images/icon-dice.svg"

function Button() {
  return (
    <button className='btn'>
        <img src={dices} alt='generate advice'></img>
    </button>
  )
}

export default Button