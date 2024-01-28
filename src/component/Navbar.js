import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../Images/logo.png";
import en from '../Images/en.jpg';
import th from "../Images/th.jpg";
import "../styles/Navbar.css";
import locales from "../data/locales";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('defaultLanguage') || 'th');
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const pathLanguage = location.pathname.split('/')[1];
    if (pathLanguage && pathLanguage !== selectedLanguage) {
      setSelectedLanguage(pathLanguage);
    }
  }, [location.pathname, selectedLanguage]);

  const switchLanguage = (language) => {
    localStorage.setItem('defaultLanguage', language);
    setSelectedLanguage(language);

    const currentPath = window.location.pathname.replace(/\/(th|en)/, '');
    const newPath = `/${language}${currentPath}`;

    window.location.href = newPath;
  };

  return (
    <header>
      <div className="logo-container">
        <NavLink to={`/${selectedLanguage}/home`}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <NavLink to={`/${selectedLanguage}/aboutus`}>{locales[selectedLanguage].aboutUsText}</NavLink>
        <NavLink to={`/${selectedLanguage}/service`}>{locales[selectedLanguage].serviceText}</NavLink>
        <NavLink to={`/${selectedLanguage}/strength`}>{locales[selectedLanguage].keyStrengthText}</NavLink>
        <NavLink to={`/${selectedLanguage}/performance`}>{locales[selectedLanguage].performanceText}</NavLink>
        <NavLink to={`/${selectedLanguage}/contact`}>{locales[selectedLanguage].contactUsText}</NavLink>

        <img
          src={en}
          alt=""
          className={`language-en ${selectedLanguage === 'en' ? 'selected' : ''}`}
          style={{ filter: selectedLanguage !== 'en' ? 'contrast(0.5)' : 'none' }}
          onClick={() => switchLanguage('en')}
        />
        <img
          src={th}
          alt=""
          className={`language-th ${selectedLanguage === 'th' ? 'selected' : ''}`}
          style={{ filter: selectedLanguage !== 'th' ? 'contrast(0.5)' : 'none' }}
          onClick={() => switchLanguage('th')}
        />
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
