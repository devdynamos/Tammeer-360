import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RoutingContext from './RoutingContext'; // Correct import path
import './HomeCostCalculator.css';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion

function HomeCostCalculator() {
  const { basename } = useContext(RoutingContext);
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleClick = () => {
    navigate(`${basename}home-calculator`);
  };

  return (
    <div className="Calculator">
      <div className="container" ref={ref}>
        <motion.div 
          className="left"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 13.5 }}
        >
          <h2 className='left-align'>TRY NOW-ITS FREE</h2>
          <h1>HOME COST CALCULATOR</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nunc eget enim tincidunt dignissim. Donec eu metus magna. Nulla vehicula sed diam a tempor. Donec iaculis ac dui ac porttitor.</p>
          <motion.button 
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Try Now
          </motion.button>
        </motion.div>
        <motion.div 
          className="right"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 8.5 }}
        >
          <img src="Calculator_logo.png" alt="TAMEER360" />
        </motion.div>
      </div>
    </div>
  );
}

export default HomeCostCalculator;
