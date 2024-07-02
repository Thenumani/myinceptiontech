import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './Aboutus';
import Courses from './Courses';
import Services from './Services';
import It from './It'; // Import the It component
import Nonit from './Nonit'; // Import the Nonit component
import Core from './Core'; // Import the Core component
import './Main.css'; // Import the styles

import yourLogo from './myinception.jpg'; // Import the logo

const Main = () => {
  // State to toggle dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src={yourLogo} alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              <li className="dropdown">
                <div onClick={toggleDropdown} className="nav-link">Courses</div>
                {/* Dropdown content */}
                {dropdownOpen && (
                  <div className="dropdown-content">
                    <Link to="/courses/it" className="nav-link">IT</Link>
                    <Link to="/courses/non-it" className="nav-link">Non-IT</Link>
                    <Link to="/courses/core" className="nav-link">Core</Link>
                  </div>
                )}
              </li>
              <li><Link to="/services" className="nav-link">Services</Link></li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses/" element={<Courses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses/it" element={<It />} />
            <Route path="/courses/non-it" element={<Nonit />} />
            <Route path="/courses/core" element={<Core />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Main;
