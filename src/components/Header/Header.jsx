import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo">Sua Escola</div>
        <div className="nav">
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/events">Eventos</Link></li>
            <li><Link to="">Calendario</Link></li>
            <li><Link to="/adm">Adm</Link></li>
          </ul>
          <div className="singin"><Link to="">Sing In</Link></div>
        </div>
      </nav>
      <div className='line'></div>
    </>
  );
}

export default Header;