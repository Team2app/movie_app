import React, { Fragment } from 'react';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import '../styles/Navbar.css'
import { getMovieData } from '../toolkit/Slice';
import BookingPage from './BookingPage';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Login from './Login';
import Movies from './Movies';
import Signup from './Signup';
import SingleMovie from './SingleMovie';

export const Container = React.createContext();

export default function NavBar() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const handleSubmit = (e) =>{
    dispatch(getMovieData(e.target.value));
  }
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
          <div className='input-group-nav'>
            <input type="text" placeholder='Search the movie' onChange={(e)=>handleSubmit(e)} />
            <HiSearch fontSize={21} color="green" style={{marginLeft:"290px"}} id='search' />
            <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}>

              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/movies" element={<Movies />} ></Route>
          <Route path="/single" element={<SingleMovie />}></Route>
          <Route path="/book" element={<BookingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          
          <Route path='/sign' element={<Signup />}></Route>
          <Route path='/forgot' element={<ForgotPassword />}></Route>
        </Routes>
      </Fragment>
    </Container.Provider>
  )
}
