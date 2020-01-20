import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="container">
      <ul className="menu">
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/variables">Variables</NavLink>
        </li>
      </ul>
    </div>
  </div>
)

export default Header;