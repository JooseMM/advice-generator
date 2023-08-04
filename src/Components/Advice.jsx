import React from 'react'
import Button from './Button'
import divisionMobile from "../Resources/images/pattern-divider-mobile.svg"
import divisionDesktop from "../Resources/images/pattern-divider-desktop.svg"
import useData from '../CustomHook/UseData'

function Advice() {
    const {fetchFunction, data} = useData();
  
  return (
    <div className='box flex-center'>
        <h2>Advice #{data.id}</h2>
        <h1><q>{data.advice}</q></h1>
        <img src={divisionMobile} alt="patter divider" className='mobile-divider'></img>
        <img src={divisionDesktop} alt="patter divider" className='desktop-divider'></img>
        <Button fetch={fetchFunction} alt="Generate random advice"/>
    </div>
  )
}

export default Advice