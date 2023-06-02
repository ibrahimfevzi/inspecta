import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import Hizmetler from "./components/Hizmetler";
import Hakkimizda from "./components/Hakkimizda";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="content-container">
        <Carousel />
        <br />
        <br />
        <div id="aboutScroll"></div>
        <Hakkimizda />
        <div id="servicesScroll"></div>
        <Hizmetler />
        <div id="contactScroll"></div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
