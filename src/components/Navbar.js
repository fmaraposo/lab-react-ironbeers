import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
            <NavLink exact to="/">
            <h1>Home</h1>
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
