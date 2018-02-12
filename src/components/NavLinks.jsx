import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavLinks.css';

export default function NavLinks() {
  return (
    <ul className="inline-list">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>        
      </li>
    </ul>
  );
}
