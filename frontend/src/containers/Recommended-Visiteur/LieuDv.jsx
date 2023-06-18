import React, { useState ,useEffect} from 'react'; 
import axios from 'axios';
import './LieuDv.css';
import { Link } from 'react-router-dom';

function LieuDv({ addToFavorites }) {
  const [lieux,setLieux] =useState( [
    { id: 1, nom: 'Exposition Temporelle', favori: false, region: 'Musé des beaux arts, Alger', color: '#C1DCAB', photo:'./Rectangle 18.png',
  description:' une grande célebration de la journée nationale de l’independance à Makam El Chahid à Alger, des expositions historiques, des cérémonies ...' },
    { id: 2, nom: 'Festival d’ornithologie', favori: false, region: 'Lac Tonga, El Taref', color: '#88AFDE',photo:'./Group 774.png',
    description:' Un grand festival dans lequel se rejoint les plus grands enthusiastses d’ornithologie pour observer les especes d’oiseaux rares au Lac Tonga.' },
    { id: 3, nom: 'Journée de l’independance', favori: false, region: 'Makam El Chahid, Alger', color: '#F7A832',photo:'./LLL.png',
    description:' Un grand festival dans lequel se rejoint les plus grands enthusiastses d’ornithologie pour observer les especes d’oiseaux rares au Lac Tonga.' },
  ]);

  
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
  const [Events, setEvents] = useState([])

  /*onst fetchannonces = async () => {
    const events = await axios.get('http://localhost:8000/api/Event');
       
        console.log(events.data)
        setEvents(events.data)



    }

    useEffect(() => {
        fetchannonces();
    }, [])*/


  return (
    <>
      <div className='container-DV'>
        {lieux.map((e) => (
          <div className='lieu-form-DV' key={e.id}>
            <img src={e.photo} alt='photo' />
            <div className='lieu-form-R-DV'>
              <div className='lieu-name-DV'>
                <h3>{e.nom}</h3>
                <button className='icon-star' onClick={() =>  toggleFavorite (e.id)}>
                  {e.favori? (
                    <img src='./savedFull.svg' alt='saved' />
                  ) : (
                    <img src='./saved.svg' alt='unsaved' />
                  )}
                </button>
              </div>
              <span style={{ color: e.color, textDecoration: 'underline' }}>{e.date} :</span>
              <span style={{ color: e.color, textDecoration: 'underline' }}>{e.region} :</span>
              <div className='dscp-actl'>
                <p>
                  <span style={{ color: e.color, paddingTop: '-5px' }}>Details de l’événement: </span>
                 {e.description}
                </p>
              </div>
              <button className='btn-show-detl'>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LieuDv;