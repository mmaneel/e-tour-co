import React, {useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const NotifComponent = () => {
   const tab=[
      {id:1,nom:'Festival d’ornithologie',lieu:' Lac Tonga El Taref ',Description :' lieu touristique de renommée mondiale description lieu touristique de renommée mondiale',color:'#C1DCAB',photo:'./Rectangle 30.png'},
      {id:1,nom:'Journée de l’independance',lieu:'Makam El Chahid Alger ',Description :' lieu touristique de renommée mondiale description lieu touristique de renommée mondiale',color:'#C1DCAB',photo:'./Rectangle 31.png'},
      {id:1,nom:'Visite guidée à la grande mosquée',lieu:'La grande mosquée, Alger',Description :' lieu touristique de renommée mondiale description lieu touristique de renommée mondiale',color:'#C1DCAB',photo:'./Rectangle 32.png'}
      
      ]
 return(
<>
   {tab.map((e)=>(
   <div className='shadow-md w-full h-[100px] flex flex-row items-center px-4 py-2'>
         <div className=' w-3/12 h-full' ><img width='90px' height='90px' className='bg-slate-300' src={e.photo} /></div>
         <div className=' w-9/12 flex h-full flex-col justify-between gap-1'>
            <p className='font-semibold text-sm '> Nouvel evenement :{e.nom}</p>
            <p className='font-normal text-xs text-[]'> {e.lieu}</p>
            <p className='font-normal text-xs text-[]'>Description :  {e.Description } </p>
         </div>

  </div>
   ))}
   </>
 );

};

export default NotifComponent ;