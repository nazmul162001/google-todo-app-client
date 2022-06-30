import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className=' w-full h-20 flex justify-center items-center'>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4' : 'link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4' : 'link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4')}
          to="/todo"
        >
          To-Do
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4' : 'link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4')}
          to="/complete"
        >
          Completed Tasks
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4' : 'link text-sm md:text-xl lg:text-2xl mx-1 md:mx-3 lg:mx-4')}
          to="calender"
        >
          Calender
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
