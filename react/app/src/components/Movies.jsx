import React from 'react'
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Container } from './NavBar';
import { AiFillPlayCircle } from 'react-icons/ai'
import '../styles/Videos.css'
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Movies() {

  const navigate = useNavigate();
  const { toggle } = useContext(Container);
  const [movieData, setMovieData] = useState([]);
  const Api = "http://localhost:3000/data/data";

  const MovieCall = async () => {
    const data = await axios.get(Api)
    const results = data.data;
    setMovieData(results);
    console.log(results)
  }

  useEffect(() => {
    MovieCall();
  }, []);

  const handleClick = (movie) =>{
    navigate("/single", {state:movie})
  }

  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'} >
        <div className='movies-container'>
          {
            movieData.map((movie) => {
              return (
                <Fragment>
                  <div id='container' onClick={()=>handleClick(movie)} key = {movie.id}>
                    <AiFillPlayCircle color='green' fontSize={40} id='playIcon' />
                    <img src={movie.posterUrl ? movie.posterUrl : "https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"} alt='' />
                    <h3 id={movie.title.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'DarkTheme' : 'LightThemeClose'}>{movie.title}</h3>
                  </div>
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}
