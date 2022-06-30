import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className=' w-full h-20 flex justify-center items-center'>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/todo"
        >
          To-Do
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/complete"
        >
          Completed Tasks
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="calender"
        >
          Calender
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
