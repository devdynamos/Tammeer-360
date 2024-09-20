import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, closeSidebar }) => {
  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <h2>Digital Content & Devices</h2>
        <p>Amazon Music</p>
        <p>Kindle E-readers & Books</p>
        <p>Amazon Appstore</p>
        <h2>Shop by Department</h2>
        <p>Electronics</p>
        <p>Computers</p>
        <p>Smart Home</p>
        <p>Arts & Crafts</p>
        <p>See all</p>
        <h2>Programs & Features</h2>
        <p>Gift Cards</p>
        <p>Shop By Interest</p>
        <p>Amazon Live</p>
        <p>International Shopping</p>
        <p>See all</p>
        <h2>Help & Settings</h2>
        <p>Your Account</p>
        <p>English</p>
        <p>United States</p>
        <p>Customer Service</p>
        <p>Sign in</p>
      </div>
    </>
  );
};

export default Sidebar;
