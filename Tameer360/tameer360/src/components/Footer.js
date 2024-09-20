import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Footer.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Scroll animation when the component mounts or updates
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer');
            if (footer) {
                const topPosition = footer.getBoundingClientRect().top;
                if (topPosition < window.innerHeight) {
                    footer.classList.add('animate-footer');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Sub-footer with "Back to Top" link */}
            <div className="sub-footer" onClick={scrollToTop}>
                <p className="back-to-top">Back to Top</p>
            </div>

            {/* Main footer */}
            <motion.footer
                className="footer"
                style={{ backgroundColor: '#000', color: '#fff' }}
                initial={{ opacity: 0, y: 20 }} // Initial animation when component mounts
                animate={{ opacity: 1, y: 0 }} // Animation when component is visible
                transition={{ duration: 30.5 }} // Animation duration
            >
                <div className="footer-section">
                    <h3>Get to Know Us</h3>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Science</p>
                </div>

                <div className="footer-section">
                    <h3>Make Money with Us</h3>
                    <p>Sell products on Amazon</p>
                    <p>Sell on Amazon Business</p>
                    <p>Sell apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise Your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>See More Make Money with Us</p>
                </div>

                <div className="footer-section">
                    <h3>Amazon Payment Products</h3>
                    <p>Amazon Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                </div>

                <div className="footer-section">
                    <h3>Let Us Help You</h3>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage Your Content and Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </motion.footer>
        </div>
    );
}

export default Footer;
