import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import StarIcon from '@mui/icons-material/Star';
import CommuteOutlinedIcon from '@mui/icons-material/CommuteOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

import monumentsData from '../../monuments.json';
import './page_lieu.css';
import Actualité from './actualité';
import Comment from './comment';
import { Link } from 'react-router-dom';

function Lieu() {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const { id } = useParams();
  const [lieu, setLieu] = useState(null);
  const [horaire, setHoraire] = useState([]);
  const [event, setEvent] = useState([]);
  const [transport, setTransport] = useState([]);
  const [monument, setMonument] = useState(null);

  useEffect(() => {
    fetchMonumentDetails();
  }, []);

  const fetchMonumentDetails = () => {
    const selectedMonument = monumentsData.find((m) => m.id === parseInt(id));
    console.log(fetchMonumentDetails)
    setMonument(selectedMonument);
  };

  return (
    <div className="lieu">
      <div className="return_button">
        <button className="return">
         
          <KeyboardReturnOutlinedIcon  />
          <span><Link to='/Search' >Return</Link></span>
        </button>
      </div>

      <div className="content">
        <div className="content_left">
          <div className="lieu_image">
            <img src={monument ? monument.image : ''} alt="Lieu" />
          </div>
          <div className="name" style={{ color: '#162641' }}>
            <p>
              {monument ? `${monument.Nom}, ${monument.wilaya}` : ''}
            </p>
          </div>
          <div className="name">
            <p style={{ color: '#88AFDE' }}>
              {monument ? `${monument.theme}, ${monument.categorie}` : ''}
            </p>
          </div>
        </div>
        <div className="content_middle">
          <span> </span>
        </div>
        <div className="content_right">
          <h4>{monument ? monument.Nom : ''}</h4>
          <div>
            <p>{monument ? monument.description : ''}</p>
          </div>
          <div className="plus" style={{ width: '100%', marginTop: '2em' }}>
            <h4>Plus d'informations</h4>
            <div className="moyens_de_transports" style={{ marginBottom: '-0.5em' }}>
              <div className="start_elements">
              <CommuteOutlinedIcon />
                <span>Moyens de transports disponibles</span>
              </div>
              <div>
                <KeyboardArrowDownOutlinedIcon onClick={() => setHide(!hide)} />
              </div>
            </div>

            {hide ? (
              <div className="list">
                <div className="unmoyen">
                  <ul>
                    {monument &&
                      monument.transport &&
                      monument.transport.map((h) => (
                        <>
                        
                        <li className='ll-moyen'> 
                          <p style={{ marginRight: '2em', fontWeight:'bold' }}>{h.moyen}</p>
                          <p>{h.temps}</p>
                        </li>
                        </>
                      ))}
                  </ul>
                </div>
              </div>
            ) : null}
            <div className="horaires">
              <div className="start_elements">
                <img src="/horaires.png" alt="icon" className="moyens" />
                <span>Horaires d'ouverture et de fermeture</span>
              </div>
              <div>
                <KeyboardArrowDownOutlinedIcon onClick={() => setHide1(!hide1)} />
              </div>
            </div>
            {hide1 ? (
              <div className="list">
                <div className="list_item">
                  {monument &&
                    monument.horaire &&
                    monument.horaire.map((m) => (
                      <div>
                        
                        <span style={{ marginLeft: '1em',fontWeight:'bold'}}>
                          Ouvert de {m.heure_ouverture}h jusqu’à {m.heure_fermeture}h {m.jourD} à {m.jourF}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ) : null}
            <div className="Actualités">
              <div className="start_elements">
                <img src="/actualités.png" alt="icon" className="actualités" />
                <span>Actualités</span>
              </div>
              <div>
                <KeyboardArrowDownOutlinedIcon onClick={() => setHide2(!hide2)} />
              </div>
            </div>
            {hide2 ? <Actualité /> : null}
          </div>
          <div className="Commentaires">
            <div className="start_elements">
              <span>Commentaires</span>
              <QuestionAnswerOutlinedIcon sx={{ marginLeft: '10px' }} />
            </div>
            <div>
              <StarIcon sx={{ color: '#FFC700', marginRight: '8px' }} />
              <span>4.6</span>
            </div>
          </div>

          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Lieu;
