import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <div>
          <h1 className="header-heading">Talking Shop </h1>
        </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/Dshboard">Dshboard</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/About">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
