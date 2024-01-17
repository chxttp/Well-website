import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="logo-container">
      <NavLink to="/home">
         <img src={logo} alt="logo" />
      </NavLink>
       
      </div>
      <nav
        ref={navRef}
        className={isNavOpen ? "responsive_nav" : ""}
      >
        <a href="/aboutus">About Us</a>
        <a href="/service">Service</a>
        <a href="/strength">Key Strength</a>
        <a href="performance">Performance</a>
        <a href="/contact">Contact</a>
        {/* <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button> */}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

