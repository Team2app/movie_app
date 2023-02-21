import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '../styles/SingleMovie.css';
export default function SingleMovie() {
    const { state } = useLocation();
    const movie = state;
    console.log('object', state);
    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src="data:image/jpeg;base64,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" alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.title}</p>
                    <p className="card-text">{movie.year}</p>
                    <p className="card-text">{movie.genres}</p>
                    <p className="card-text">{movie.runtime}</p>
                    <p className="card-text">{movie.director}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    )
}