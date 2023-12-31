import React from 'react'
import './ListUsers.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function ListUsers() {
    const data = [
        { id: 1,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'UserName' ,date: '23-09-2023',icon:<DeleteIcon/> },
        { id: 2,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'UserName' ,date: '03-08-2023',icon:<DeleteIcon/> },
        { id: 3,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'UserName' ,date: '25-08-2023',icon:<DeleteIcon/>},
        { id: 4,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'UserName' ,date: '01-05-2023',icon:<DeleteIcon/>},
         { id: 5,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'UserName' ,date: '01-05-2023',icon:<DeleteIcon/>},
         { id: 6,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'UserName' ,date: '01-05-2023',icon:<DeleteIcon/>},
         
        
      ];
      const myList = data.map((item) => (
        <li className='ul-user1' key={item.id}> 
        <p className='li-user1'>{item.profil}</p>
        <p className='li-user1 n'>{item.name}</p>
        <p className='li-user1'>{item.date}</p>
        <p className='li-user1'>{item.icon}</p>
         </li>
      ));
  return (
    <div className='container-List-users'>
     
        <div className='titre-li'>
        <h3 className='h-name1'>Nom</h3>
        <h3 className='h-name'>Date d'inscription</h3>
        </div>
        
      <ul >{myList}</ul>

    </div>
  )
}

export default ListUsers