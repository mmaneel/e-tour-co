import React,{useState} from 'react';
import './actualité.css'

function Actualité() {
    const [tab,setTab]=useState([
        {id:1,name:'Journée de l’idependance',desc:'Des fouilles récentes ont révélé un site archéologique rare et bien préservé au cœur de la vieille ville. Les experts estiment que les découvertes pourraient remonter à plus de mille ans.'},
        {id:2,name:'Exposition historique ',desc:'Des fouilles récentes ont révélé un site archéologique rare et bien préservé au cœur de la vieille ville. Les experts estiment que les découvertes pourraient remonter à plus de mille ans.'},
    ])
    return (
        <>
        {tab.map((e)=>(
    <div className='actualité'>
        
        <div className='NewEvent'>
            <h3>{e.name}</h3>
            <div className='dv-sp'>
            <span>{e.desc}</span>
            </div>
            
        </div>
    </div>))} </>);
}

export default Actualité;