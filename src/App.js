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
            <Route path={`/en/home`} element={<Home />} />
            <Route path={`/th/home`} element={<Home />} />
            <Route path={`/en/aboutus`} element={<AboutUs />} />
            <Route path={`/th/aboutus`} element={<AboutUs />} />
            <Route path={`/en/contact`} element={<ContactUs />} />
            <Route path={`/th/contact`} element={<ContactUs />} />
            <Route path={`/en/service`} element={<Service />} />
            <Route path={`/th/service`} element={<Service />} />
            <Route path={`/en/certificate`} element={<CertificatePage />} />
            <Route path={`/th/certificate`} element={<CertificatePage />} />
            <Route path={`/en/strength`} element={<KeyStrength />} />
            <Route path={`/th/strength`} element={<KeyStrength />} />
            <Route path={`/en/performance`} element={<Performance />} />
            <Route path={`/th/performance`} element={<Performance />} />
            <Route path={`/en/เหมืองเเม่เมาะ`} element={<Maemoh />} />
            <Route path={`/th/เหมืองเเม่เมาะ`} element={<Maemoh />} />
            <Route path={`/en/การประปา`} element={<Prapa />} />
            <Route path={`/th/การประปา`} element={<Prapa />} />
            <Route path={`/en/โรงไฟฟ้าหงสา`} element={<Hongsa />} />
            <Route path={`/th/โรงไฟฟ้าหงสา`} element={<Hongsa />} />
            <Route path={`/en/references`} element={<Reference/>} />
            <Route path={`/th/references`} element={<Reference/>} />

            
        </Routes>
      )}
    </Router>

    </ParallaxProvider>
    
  );
}

export default App;
