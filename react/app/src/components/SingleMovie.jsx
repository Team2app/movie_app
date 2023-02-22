import React from 'react';
import { Container } from './NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/SingleMovie.css';
import { useContext } from 'react';
import { Fragment } from 'react';
export default function SingleMovie() {
    const { toggle } = useContext(Container);
    const navigate = useNavigate();
    const { state } = useLocation();
    const movie = state;
    console.log('object', state);
    return (
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'} >
                <section className="movie-section">
                    <div className={toggle ? "movie-card1" : "movie-card2"} >
                        <figure>
                            <img style={{borderTopLeftRadius: "2rem",borderBottomLeftRadius: "2rem"}} src={movie.posterUrl} alt="" />
                        </figure>
                        <div className="card-content">
                            <p className="title">{movie.title}</p>
                            <p className="card-text">{movie.year}</p>
                            <p className='card-text'>{
                                movie.genres.map((genre) => {
                                    return (
                                        <p className="card-text">{genre},</p>
                                    )
                                })
                            }</p>
                            <p className="card-text">{movie.runtime}</p>
                            <p className="card-text">{movie.director}</p>
                            <div style={{ position: "relative" }}>
                                <button className='button1' onClick={() => { navigate("/") }}>Go Back</button>
                                <button className='button2' >Book Ticket</button>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}