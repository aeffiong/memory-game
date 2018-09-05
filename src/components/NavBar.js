import React from "react";
import { Link } from "react-router-dom";


// Create the navbar component

const NavBar = props => (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
            Clicky Game
        </a> 
        <span className="navbar-text">
            Click an image to begin!   {' '}
        </span>
        
        <span className="navbar-score">
            Score: 0 | Top Score: 0
        </span>
    
    </nav>
);

export default NavBar;