import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='navbar-container'>
       <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className={`links ${isOpen ? 'open' : ''}`}>
          <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>About</NavLink>
          <NavLink to='/skills' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Skills</NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Projects</NavLink>
          <NavLink to='/contacts' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Contacts</NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
