import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


// Create the navbar component

const NavBar = props => (
    <nav className="navbar navbar-expand-lg">
    <a href="/clicky-game/">Clicky Game</a>
       <ul>    
        <span className="navbar-text">
            Click an image to begin!
        </span>
        </ul>
        <ul>
        <span className="navbar-score">
             Score: {props.score} | Top Score: {props.topScore}
        </span>
        </ul>
    
    </nav>
);

export default NavBar;