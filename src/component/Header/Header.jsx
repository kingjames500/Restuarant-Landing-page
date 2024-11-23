import React from "react";
import "./Header.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">F</span>
        <span className="logo-text">OODI</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li className="dropdown">
          <a href="#menu">Menu ▼</a>
        </li>
        <li className="dropdown">
          <a href="#services">Services ▼</a>
        </li>
        <li>
          <a href="#offers">Offers</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <button className="icon-button">
          <i className="search-icon">🔍</i>
        </button>
        <button className="icon-button cart">
          <i className="cart-icon">🛒</i>
          <span className="cart-badge">8</span>
        </button>
        <button className="contact-button">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
