import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Service from "./screens/Service";
import CertificatePage from "./screens/CertificatePage";
import KeyStrength from "./screens/KeyStrength";
import Performance from "./screens/Performance";
import Maemoh from "./screens/Maemoh";

import LoadingScreen from "./screens/LoadingScreen"; // Import your LoadingScreen component
import { ParallaxProvider } from 'react-scroll-parallax';
import Prapa from "./screens/Prapa";
import Hongsa from '../src/screens/Hongsa'
import Reference from "./screens/Reference";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
    
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); 

    return () => clearTimeout(loadingTimer);
  }, []);

  
  
  const defaultLanguage = localStorage.getItem('defaultLanguage') || 'th' || 'en';
  return (
    <ParallaxProvider>
      <Router>
      {!isLoaded && (window.location.pathname === `/`) && (
        <LoadingScreen />
      )}
      {isLoaded && (
        <Routes>
           <Route path={`/`} element={<Navigate to={`/${defaultLanguage}/home`} replace />} />
           <Route path="/:lang/home" element={<Home />} />
            <Route path="/:lang/aboutus" element={<AboutUs />} />
            <Route path="/:lang/contact" element={<ContactUs />} />
            <Route path="/:lang/service" element={<Service />} />
            <Route path="/:lang/certificate" element={<CertificatePage />} />
            <Route path="/:lang/strength" element={<KeyStrength />} />
            <Route path="/:lang/performance" element={<Performance />} />
            <Route path="/:lang/เหมืองเเม่เมาะ" element={<Maemoh />} />
            <Route path="/:lang/การประปา" element={<Prapa />} />
            <Route path="/:lang/โรงไฟฟ้าหงสา" element={<Hongsa />} />
            <Route path="/:lang/references" element={<Reference />} />
            
        </Routes>
      )}
    </Router>

    </ParallaxProvider>
    
  );
}

export default App;
