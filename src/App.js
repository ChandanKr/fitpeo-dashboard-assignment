import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import HeroSection from "./components/herosection/HeroSection";

const App = () => {
  return (
    <div className="parent">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="hero-section">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
