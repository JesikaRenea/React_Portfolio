import React from 'react';


const Navbar = () => {
    return (
        <div>
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo right">JH</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
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