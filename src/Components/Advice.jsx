import React from 'react'
import Button from './Button'
import divisionMobile from "../Resources/images/pattern-divider-mobile.svg"
import divisionDesktop from "../Resources/images/pattern-divider-desktop.svg"

function Advice() {
  return (
    <div className='box flex-center'>
        <h2>Title</h2>
        <h1>Advice</h1>
        <img src={divisionMobile} alt="patter divider" className='mobile-divider'></img>
        <img src={divisionDesktop} alt="patter divider" className='desktop-divider'></img>
        <Button/>
    </div>
  )
}

export default Advice