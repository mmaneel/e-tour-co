import React from 'react'
import './Statistic.css'
import ZdestinationList from './ZdestinationList'

function Statistic() {
  return (
    <div  className='container-Statistic'>
         <ZdestinationList/>
         <img src='./statistic.png' alt='statistic'/>
    </div>
  )
}

export default Statistic