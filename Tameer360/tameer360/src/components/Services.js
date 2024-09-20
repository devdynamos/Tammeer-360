import React, { useState } from 'react';
import './Services.css'; // Import your CSS file containing styles
import { motion } from 'framer-motion'; // Import Framer Motion

function Services() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3); // Show 4 blocks at a time

  const services = [
    { id: 1, name: "Buy", description: "Service for buying products" },
    { id: 2, name: "Sell", description: "Service for selling products" },
    { id: 3, name: "Rent", description: "Service for renting products" },
    { id: 4, name: "Sale", description: "Service for sale transactions" },
    { id: 5, name: "Buy", description: "Service for buying products" },
    { id: 6, name: "Sell", description: "Service for selling products" },
    { id: 7, name: "Rent", description: "Service for renting products" },
    { id: 8, name: "Sale", description: "Service for sale transactions" },
    { id: 9, name: "Buy", description: "Service for buying products" },
    { id: 10, name: "Sell", description: "Service for selling products" },
    { id: 11, name: "Rent", description: "Service for renting products" },
    { id: 12, name: "Sale", description: "Service for sale transactions" },
    // Add more services here
  ];

  const handleBackClick = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };

  const handleForwardClick = () => {
    if (end < services.length - 1) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-heading">Popular Products & Services</h2>
      <div className="arrow-container">
        <button className="arrow left-arrow" onClick={handleBackClick}><i className="fas fa-chevron-left"></i></button>
        <div className="services">
          {services.slice(start, end + 1).map((service, index) => (
            <motion.div 
              className="service" 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 20.5, delay: index * 0.2 }}
            >
              <div className="service-header">
                <i className="fas fa-cogs service-icon"></i>
                <span>{service.name}</span>
              </div>
              <div className="service-line"></div>
              <div className="service-description">{service.description}</div>
            </motion.div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleForwardClick}><i className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  );
}

export default Services;
