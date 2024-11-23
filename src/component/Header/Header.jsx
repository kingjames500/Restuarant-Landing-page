import React from "react";
import "./Header.css";
// Import FontAwesomeIcon and the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <span className="logo-icon">F</span>
        <span className="logo-text">OODI</span>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li className="dropdown">
          <a href="#menu">Menu</a>
        </li>
        <li className="dropdown">
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#offers">Offers</a>
        </li>
      </ul>

      {/* Navbar Icons */}
      <div className="navbar-icons">
        {/* Search Icon */}
        <button className="icon-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        {/* Cart Icon */}
        <button className="icon-button cart">
          <FontAwesomeIcon icon={faBagShopping} />
          <span className="cart-badge">8</span>
        </button>

        {/* Contact Button */}
        <button className="contact-button">Contact</button>
      </div>
    </nav>
  );
};

function Header() {
  return (
    <header>
      <Navbar />
    </header>
  );
}

export default Header;
