import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo right">JH</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/fs-portfolio">Full-Stack Portfolio</Link></li>

        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/fs-portfolio">Full-Stack Portfolio</a></li>

      </ul>
    </div>
  </nav>
        
        </div>
    );
};

export default Navbar