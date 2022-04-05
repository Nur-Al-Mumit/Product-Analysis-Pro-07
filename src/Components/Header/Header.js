import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
    <div>
        <h1>Welcome to your Book Shop </h1>
        <nav className='nav-container'>
            <Link to="/home">Home</Link>
            <Link to="/Reviews">Reviews</Link>
            <Link to="/Dshboard">Dshboard</Link>
            <Link to="/About">About</Link>
            </nav>
            </div>        
    );
};

export default Header;