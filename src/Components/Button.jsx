import React from 'react'
import dices from "../Resources/images/icon-dice.svg"

function Button({fetch}) {
  return (
    <button className='btn' onClick={fetch}>
        <img src={dices} alt='generate advice'></img>
    </button>
  )
}

export default Button