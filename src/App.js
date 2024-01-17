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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time with a setTimeout
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust the time as needed

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <ParallaxProvider>
      <Router>
      {!isLoaded && (window.location.pathname === '/' || window.location.pathname === '/home') && (
        <LoadingScreen />
      )}
      {isLoaded && (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/strength" element={<KeyStrength />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/เหมืองเเม่เมาะ" element={<Maemoh />} />
        </Routes>
      )}
    </Router>

    </ParallaxProvider>
    
  );
}

export default App;
