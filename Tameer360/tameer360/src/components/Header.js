import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Import Framer Motion

import LanguageSelect from '../LanguageSelect';
import Sidebar from '../Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <motion.header 
        className={`header ${isSidebarOpen ? 'open' : ''}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 8.5 }}
      >
        <div className="header__logo">
          <img src="logo.png" alt="Company Logo" />
        </div>
        <div className="header__search">
          <input type="text" placeholder='Search Tameer360' className="header__searchInput" />
          <FontAwesomeIcon icon={faSearch} className="header__searchIcon" />
        </div>
        <div className="header__language">
          <LanguageSelect />
        </div>
        <div className="header__login">
          <FontAwesomeIcon icon={faUser} className="header__loginIcon" />
          <span>Login</span>
        </div>
        <div className="header__cart">
          <FontAwesomeIcon icon={faShoppingCart} className="header__cartIcon" />
          <span>Cart</span>
        </div>
        <div className="header__sidebar">
          <FontAwesomeIcon icon={faBars} className="header__sidebarIcon" onClick={toggleSidebar} />
          <span>All</span>
        </div>
      </motion.header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Header;
