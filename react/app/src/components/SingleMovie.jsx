import React from 'react';
import { Container } from './NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/SingleMovie.css';
import '../styles/Home.css';
import { useContext } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
export default function SingleMovie() {
    const { toggle } = useContext(Container);
    const logged = useSelector(state => state.movie.logged);
    const navigate = useNavigate();
    const { state } = useLocation();
    const movie = state;
    if (logged) {
        return (
            <Fragment>
                <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'} >
                    <section className="movie-section">
                        <div className={toggle ? "movie-card1" : "movie-card2"} >
                            <figure>
                                <img style={{ borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem" }} src={movie.posterUrl} alt="" />
                            </figure>
                            <div className="card-content">
                                <p className="title">{movie.title}</p>
                                <p className='card-text'>{movie.genres}</p>
                                <p className='card-text'>{movie.rating}/10</p>
                                <p className="card-text">{movie.runtime}</p>
                                <p className="card-text">{movie.director}</p>
                                <div style={{ position: "relative" }}>
                                    <button className='button1' onClick={() => { navigate("/") }}>Go Back</button>
                                    <button className='button2' onClick={() => { navigate("/book", { state: state }) }}>Book Ticket</button>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <div>
                <h1>You are not logged in</h1>
                <h1>Click the below button to move to login page</h1><br /><br />
                <div className="body-arrow">
                    <button className="btn" onClick={() => navigate('/login')}>
                        <span className="circle-1"></span>
                        <span className="circle-2"></span>
                        <span className="text" style={{color:"black"}}>Login</span>
                    </button>
                </div>
            </div>
        )
    }
}