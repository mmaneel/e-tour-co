import React ,{useState,useEffect} from 'react'
import StarIcon from '@mui/icons-material/Star';
import"./Favoris.css"
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import Nav from '../Nav';
function Favoris({favoris}) {
  const [lieux,setLieux] =useState( [
    { id: 1, nom: 'Lieu 1', favori: false, region: 'Lieu', color: '#C1DCAB' },
    { id: 2, nom: 'Lieu 2', favori: false, region: 'Lieu', color: '#88AFDE' },
    { id: 3, nom: 'Lieu 3', favori: false, region: 'Lieu', color: '#F7A832' },
  ]);
  const [favori, setFavori] = useState([]);
  const addToFavorites = (lieu) => {
    setFavori([...favori, lieu]);
  };
  useEffect(() => {
    const favoris = lieux.filter((e) => e.favori);
    addToFavorites(favoris);
  }, [lieux, addToFavorites]);

  const toggleFavorite = (id) => {
    const updatedLieux = lieux.map((e) => {
      if (e.id === id) {
        return { ...e, favori: !e.favori };
      } else {
        return e;
      }
    });

    setLieux(updatedLieux);
  };
 
  
  
  
    const tab=[
        {id:1,nom:'Makam El Chahid',region:'Alger',star:'3.5', photo:'./MMM.png'},
        {id:2,nom:'La Grande mosquée',region:'Alger',star:'4.5', photo:'./Rectangle 19.png'},
        {id:3,nom:'Musé des beaux arts',region:'Alger',star:'4.5', photo:'./Rectangle 20.png'},
        {id:4,nom:'Lac Tonga',region:'Taref',star:'4.5', photo:'./Rectangle 21.png'},
        
    ]
    
  return (
    <>
    <div className='container-fav'>
    <Nav/>
    <img className='ligne-pic' src='./ligne.png' alt="photo"/>
    
        <p
        style={{ color: '#162641' , textAlign:'center',
        marginBottom:'70px',marginTop:'0px',paddingTop:'0px',fontSize:"45px",fontWeight:'bold'}}>Mes Favoris</p>
        
    
    {tab.map((e)=>(
      <div className='lieu-form-fav'  key={e.id}>
        <img src={e.photo} alt="photo"/>
        <div className='lieu-form-R-fav'>
            <div className='lieu-name-fav'>
                 <h3>{e.nom}</h3>
                 <div className='icon-star'>
                    <StarIcon sx={{ color:'#FFC700',marginRight:'8px'}}/>
                    <span>{e.star}</span>
                    <img src="./savedFull.svg" />
                 </div>
            </div>
            <span className="region-name">{e.region}</span>
            
            <div className='hide-detl'>
            <p>Lorem ipsum dolor sit amet. A sapiente neque est voluptas omnis 
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               
                 </p>
              
                </div>
                
                </div>
       
      </div>))}
    
      <img className='ligne-pic1' src='./ligne1.png' alt="photo"/>
      <img className='ligne-pic2' src='./ligne2.png' alt="photo"/>
    </div>
    </>
  )
}

export default Favoris