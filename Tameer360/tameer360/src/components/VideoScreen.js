import React from 'react';
import './VideoScreen.css';
import { motion } from 'framer-motion'; // Import Framer Motion

const VideoPlayer = ({ videoSrc, videoTitle }) => {
  return (
    <motion.div 
      className="video-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="video-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        How to Buy/Sell on Tameer360
      </motion.h2>
      <motion.div 
        className="video-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 24.5, delay: 0.5 }}
      >
        <video controls className="video-player">
          <source src='Tameer 360.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.h3 
          className="video-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {videoTitle}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayer;
