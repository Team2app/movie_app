import React from 'react'
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Container } from './NavBar';
import { AiFillPlayCircle } from 'react-icons/ai'
import '../styles/Videos.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction, pseudoMoviesAction } from '../toolkit/Slice';

export default function Movies() {
  const movies = useSelector((state) => state.movie.movies);
  const movies1 = useSelector((state) => state.movie.movies1);
  console.log('movies list', movies1);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { toggle } = useContext(Container);
  const [movieData, setMovieData] = useState([]);

  const MovieCall = () =>{
    dispatch(getMoviesAction());
    dispatch(pseudoMoviesAction());
    setMovieData(movies1);
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
            movieData.map((movie,key) => {
              return (
                <Fragment key={key}>
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
