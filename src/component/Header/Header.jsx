import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-Dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} aria-current="page">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            </li>

            <li className="nav-item">
              <Link to="/Menu" className={`nav-link ${location.pathname === '/Menu' ? 'active' : ''}`}>Menu</Link>
            </li>

            <li className="nav-item">
              <Link to="/General" className={`nav-link ${location.pathname === '/General' ? 'active' : ''}`}>General</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`}>Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
