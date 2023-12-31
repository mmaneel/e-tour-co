import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
//import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useControl } from 'react-map-gl';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl, 
} from "react-map-gl";
import mapboxgl from 'mapbox-gl';
import NavBar from '../navbar'
import { useEffect } from 'react';
import monuments from '../../monuments.json';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

function Search() {
  const [theme, setTheme]=useState(null);
  const [category, setCategory]=useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const [shownMonuments, setShownMonuments]=useState(monuments);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    if (searchClicked) {
      // Filter the monuments based on theme and category
      const filteredMonuments = monuments.filter((monument) => {
        if (theme && monument.theme !== theme) {
          return false;
        }
        if (category && monument.category !== category) {
          return false;
        }
        return true;
      });
      setShownMonuments(filteredMonuments);
      setSearchClicked(false); // Réinitialiser l'état searchClicked
    }
  }, [searchClicked, theme, category]);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };
  const handleThemeChange =(event)=>{
    setTheme(event.target.value)
  }
  const handleCategoryChange =(event)=>{
    setCategory(event.target.value)
}
  
const pins = useMemo(
  () =>
    shownMonuments.map((monument, index) => (
      <Marker
        key={`marker-${index}`}
        longitude={monument.longitude}
        latitude={monument.latitude}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo(monument);
        }}
      >
      </Marker>
    )),
  [shownMonuments]
);
  
  const Geocoder = () => { 
    const ctrl = new MapBoxGeocoder({
      accessToken: "pk.eyJ1IjoiaW5lc2JtenoiLCJhIjoiY2xpd2EzOHB3MGVnZzNycmxuaWVleXVkbSJ9.qD2tXOMKi1rbqldo1mb2zg",
      marker: false,
      placeholder:'Search',
      countries:'dz',
      mapboxgl: mapboxgl,
   });
    useControl(() => ctrl);
    ctrl.on('result', (e) => {
    });
    return null;
  };

  return (
    <div  className='h-screen relative w-full flex flex-col'>
      <Nav/>
      <div className='w-full h-full relative flex flex-col justify-center items-start'>
               
                 <ReactMapGL
                        mapboxAccessToken="pk.eyJ1IjoiaW5lc2JtenoiLCJhIjoiY2xpd2EzOHB3MGVnZzNycmxuaWVleXVkbSJ9.qD2tXOMKi1rbqldo1mb2zg"
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        center= "7.04, 38.907"
                        initialViewState={{
                          longitude: 3.042048,
                          latitude: 36.752887,
                          zoom: 11.5,
                        }}
                   >
                      <div className='absolute top-6 z-10 px-4 py-2 rounded-r-xl bg-white flex flex-row justify-between items-center w-[60%] h-16 gap-3'>
                         <div className='w-2/4 h-full '><Geocoder/></div>
                         <div className='flex flex-row justify-between items-center w-full h-full gap-3'>
                            <div className='border-l border-bgshadow h-full'></div>
                            <div className='w-full px-2 flex justify-center'>
                                <select value={theme} className='w-full font-semibold text-sm rounded py-1 px-1 ' onChange={handleThemeChange}>
                                    <option value="histoire">Histoire</option>
                                    <option value="nature">Nature</option>
                                    <option value="art">Art</option>
                                    <option value="divertissement">Divertissement</option>
                                    <option value="aventure">Aventure</option>
                                    <option value="gastronomie">Gastronomie</option>
                                    <option value="desert">Désert</option>
                                </select>
                            </div>
                            <div className='border-l border-bgshadow h-full'></div>
                            <div className='w-full px-2 justify-center flex'>
                                <select value={category} className='w-full font-semibold text-sm rounded py-1 px-1 ' onChange={handleCategoryChange}>
                                    <option value="monuments">Monuments</option>
                                    <option value="musées">Musées</option>
                                    <option value="palais">Palais</option>
                                    <option value="ruines">Ruines anciennes</option>
                                    <option value="grottes">Grottes</option>
                                    <option value="opéras">Opéras</option>
                                    <option value="montagnes">Montagnes</option>

                                    
                                </select>
                            </div>
                            <div className='border-l border-bgshadow h-full'></div>
                            <div className='h-full w-full flex flex-col items-center justify-center '>
                              <div className='h-2/3 w-full flex flex-row items-center justify-center'>
                                <button className=' bg-orange rounded-2xl px-6 text-base font-medium' onClick={handleSearchClick}>Rechercher</button>
                              </div>
                            </div>
                        </div>
                       </div>
                     
                      <FullscreenControl position="bottom-right"/>
                      <NavigationControl position="bottom-left" />
                      {pins}
                      {popupInfo && (
                        <Popup
                          anchor="top"
                          longitude={Number(popupInfo.longitude)}
                          latitude={Number(popupInfo.latitude)}
                          onClose={() => setPopupInfo(null)}
                        >
                          <div>
                            {popupInfo.site} |{' '}
                            <a
                              target="_new"
                              href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.site}`}
                            >
                              <Link to={`Lieu/${popupInfo.id}`}>
                             Plus d'information
                              </Link>
                            </a>
                          </div>
                          <img width="100%" src={popupInfo.image} />
                        </Popup>
                      )}
                  </ReactMapGL>
                </div>
   
  </div>
  )
}

export default Search;