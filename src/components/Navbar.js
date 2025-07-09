import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='links'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>About</NavLink>
            <NavLink to='/skills' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Skills</NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Projects</NavLink>
            <NavLink to='/contacts' className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Contacts</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar
