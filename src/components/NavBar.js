import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


// Create the navbar component

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href={"/"}>Clicky Game!</a>
    <div>
  
    <ul className="navbar-nav">
        <li className="nav-item">
            <div className="score">
                Current Score: {props.score}
            </div>
        </li>
    </ul>
  </div>
</nav>
);

export default NavBar;