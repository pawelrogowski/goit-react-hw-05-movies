import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact="true" to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/movies" activeclassname="active">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
