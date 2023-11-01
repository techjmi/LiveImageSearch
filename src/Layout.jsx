import React from 'react';
// import { Link } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import "./App.css"

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    
    </>
  );
}

export default Layout;
