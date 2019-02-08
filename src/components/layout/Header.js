import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return(
    <header>
      <div style={headerStyle} className='text'>
        <h1>T</h1>
        <h1 className='hidden'>o</h1>
        <h1 className='hidden'>d</h1>
        <h1 className='hidden'>o</h1>
        <h1>L</h1>
        <h1 className='hidden'>i</h1>
        <h1 className='hidden'>s</h1>
        <h1 className='hidden'>t</h1>

      </div>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

// style with variable

const headerStyle = {
  background: '#8c7ae6',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer'
}

const linkStyle = {
  color: '#fff',
  background: '#fbc531',
  textDecoration: 'none',
}

const hidden = {
  maxWidth: '1em',
  opacity: 0.5,
  transition: 'all 0.5s ease-in',

}

export default Header;
