import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


// Create the navbar component

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href={"/"}>Clicky Game!</a>
  
  
    <span className="navbar-text justify-content-center">
      Score: {props.score} | TopScore: {props.topScore}
    </span>
  
</nav>
);

export default NavBar;