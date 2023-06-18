import React from 'react'
import "./RecVisiteur.css"
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';





function RecVisiteur() {
  const tab=[
    {id:1,nom:'Lac Tonga',region:'El Taref',star:'3.5',color:'#C1DCAB',photo:'./Rectangle 21.png'},
    {id:4,nom:'Musé des beaux arts',region:'Alger',star:'4.5',color:'#C1DCAB',photo:'./Rectangle 20.png'},
    {id:3,nom:'Grande Mosquée',region:'Alger',star:'4.5',color:'#F7A832',photo:'./Rectangle 19.png'},
    {id:4,nom:'Musé des beaux arts',region:'Alger',star:'4.5',color:'#C1DCAB',photo:'./Rectangle 20.png'},
    {id:1,nom:'Lac Tonga',region:'El Taref',star:'3.5',color:'#C1DCAB',photo:'./Rectangle 21.png'},
    ]
  return (
    <div>
      
  <div className='container-lieuDV'>
       {tab.map((e)=>(
        <div className='lieu-form'>
        <img src={e.photo} alt="photo"/>
    <div className='lieu-name'>
      <h3>{e.nom}</h3>
      <span className="region-name">{e.region}</span>
      <div className='icon-star'>
      <StarIcon
       sx={{ color:'#FFC700',marginRight:'8px'}}/>
       <span>{e.star}</span>
      </div>
    </div>
    </div>  
       ))}
       </div>
       
      
    </div>
  )
}

export default RecVisiteur