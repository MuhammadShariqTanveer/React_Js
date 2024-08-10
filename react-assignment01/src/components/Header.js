import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>React Assignment 01</h1>
      <nav style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 15px' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 15px' }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
