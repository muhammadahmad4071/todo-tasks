import React from 'react'
import { Link } from 'react-router';
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav id='top-nav'>
      <div className="container mx-auto">
        <Link to="/" className='logo'>To-Do</Link>
        <div className='nav-links'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/todo" className='nav-link'>To-Do</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
