import React, { useState, useEffect } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-scroll";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container-navigation ${menuOpen ? "open" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="menu-items">
          <Link to="aboutScroll" smooth={true} duration={700}>
            <a id="about" href="#about" className="hover">
              Hakkımızda
            </a>
          </Link>
          <Link to="servicesScroll" smooth={true} duration={700}>
            <a id="services" href="#services" className="hover">
              Hizmetler
            </a>
          </Link>
          <Link to="publishScroll" smooth={true} duration={700}>
            <a id="publish" href="#publish" className="hover">
              Yayınlar
            </a>
          </Link>
          <Link to="contactScroll" smooth={true} duration={700}>
            <a id="contact" href="#contact" className="hover">
              İletişim
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
