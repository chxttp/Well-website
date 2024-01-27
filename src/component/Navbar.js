import { useState, useRef, useEffect } from "react";
import { NavLink} from "react-router-dom";
import { FaBars} from "react-icons/fa";
import logo from "../Images/logo.png";
import en from '../Images/en.jpg'
import th from "../Images/th.jpg"
import "../styles/Navbar.css";
import locales from "../data/locales";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('defaultLanguage') || 'th');
  const navRef = useRef();
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language

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
      <NavLink to={`/${localStorage.getItem('defaultLanguage')}/home`}>
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
    <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
      <NavLink to={`/${localStorage.getItem('defaultLanguage')}/aboutus`}>{locales[currentLanguage].aboutUsText}</NavLink>
      <NavLink to={`/${localStorage.getItem('defaultLanguage')}/service`}>{locales[currentLanguage].serviceText}</NavLink>
      <NavLink to={`/${localStorage.getItem('defaultLanguage')}/strength`}>{locales[currentLanguage].keyStrengthText}</NavLink>
      <NavLink to={`/${localStorage.getItem('defaultLanguage')}/performance`}>{locales[currentLanguage].performanceText}</NavLink>
      <NavLink to={`/${localStorage.getItem('defaultLanguage')}/contact`}>{locales[currentLanguage].contactUsText}</NavLink>

      <img src={en} alt="" className={`language-en ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => switchLanguage('en')} />
      <img src={th} alt="" className={`language-th ${selectedLanguage === 'th' ? 'selected' : ''}`} onClick={() => switchLanguage('th')} />
    </nav>

    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
  </header>
  );
}

export default Navbar;

