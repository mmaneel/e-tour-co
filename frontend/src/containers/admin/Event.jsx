import React from 'react'
import './Event.css'
import ZdestinationList from './ZdestinationList'

function Event() {
  return (
    <div  className='container-Event'>
         <ZdestinationList/>
         
         <img src='./Event.png' alt='event'/>
    </div>
  )
}

export default Event