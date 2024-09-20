import React, { useState, useEffect } from 'react';
import './HomeScreen.css'; // Import your CSS file containing styles
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

function HomeScreen() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Increment the key to trigger re-render and reapply animation
        setKey(prevKey => prevKey + 1);
    }, []);

    return (
        <AnimatePresence key={key}>
            <motion.div 
                className="background-image" 
                style={{ backgroundImage: `url(/images.jpg)` }}
                initial={{ opacity: 0 }} // Initial state when component is mounted
                animate={{ opacity: 1 }} // Animation to apply on component mount
                exit={{ opacity: 0 }} // Animation to apply on component unmount
                transition={{ duration: 1 }} // Animation duration
            >
                {/* Your content goes here */}
                <div className="content">
                    <motion.h1 
                        className="heading"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Pakistan’s 1st Online Construction Eco-System
                    </motion.h1>
                    <div className="blocks-container">
                        <motion.div 
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 8.5, delay: 0.2 }}
                        >
                            <div className="block-header">
                                <i className="fas fa-shopping-cart block-icon"></i>
                                <span><b>Buy</b></span>
                            </div>
                            <div className="block-line"></div>
                            <div className="block-description">Material & Products</div>
                        </motion.div>
                        <div className="space"></div>
                        <motion.div 
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="block-header">
                                <i className="fas fa-user-plus block-icon"></i>
                                <span><b>Hire</b></span>
                            </div>
                            <div className="block-line"></div>
                            <div className="block-description">Contractor & Architects</div>
                        </motion.div>
                        <div className="space"></div>
                        <motion.div 
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="block-header">
                                <i className="fas fa-house-user block-icon"></i>
                                <span><b>Rent</b></span>
                            </div>
                            <div className="block-line"></div>
                            <div className="block-description">Tools & Machinery</div>
                        </motion.div>
                        <div className="space"></div>
                        <motion.div 
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 11.5, delay: 0.8 }}
                        >
                            <div className="block-header">
                                <i className="fas fa-dollar-sign block-icon"></i>
                                <span><b>Sell</b></span>
                            </div>
                            <div className="block-line"></div>
                            <div className="block-description">Product & Services</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default HomeScreen;
