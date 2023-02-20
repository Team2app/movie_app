import React, { Fragment } from 'react';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { Routes, Route, NavLink } from 'react-router-dom';
import '../styles/Navbar.css'
import Home from './Home';
import Movies from './Movies';

export const Container = React.createContext();

export default function NavBar() {
  const [toggle, setToggle] = useState(true);
  return (
    <Container.Provider value={{toggle}}>
      <Fragment>
        <nav className={toggle ? '' : 'navBarColor'} >
          <div className='nav-options'>
            <h1 id={toggle ? '' : 'heading'}> IncedoFlix </h1>
            <NavLink to="/">
              <span id={toggle ? 'Movies' : 'MoviesLight'} >Home</span>
            </NavLink>
            <NavLink to="/movies">
              <span id={toggle ? 'Movies' : 'MoviesLight'} >Movies</span>
            </NavLink>
          </div>
          <div className='input-group'>
            <input type="text" placeholder='Search the city' />
            <HiSearch fontSize={21} color="green" id='search' />
            <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}>

              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/movies" element={<Movies />} ></Route>
        </Routes>
      </Fragment>
    </Container.Provider>
  )
}
