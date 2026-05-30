import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import mainlogo from '../assets/mainlogo.svg';
import bfscrolllogo from '../assets/bfscrolllogo.png';
import styles from '../styles/Navbar.module.css';

// Add effect to toggle a body class for pre-scroll styling
const usePreScrollClass = (isTransparent) => {
  useEffect(() => {
    if (isTransparent) {
      document.body.classList.add('preScroll');
    } else {
      document.body.classList.remove('preScroll');
    }
  }, [isTransparent]);
};

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply body class based on transparency
  usePreScrollClass(isTransparent);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    // { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Membership Plans', href: '#membership' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navBar} ${isTransparent ? styles.transparent : ''}`}>
      {/* LEFT — Logo */}
      <Link to="/" className={styles.logoLink} onClick={() => window.scrollTo(0, 0)}>
        <img src={isTransparent ? bfscrolllogo : mainlogo} alt="Trusted Network" className={styles.logoImg} />
      </Link>

      {/* CENTER — Nav Links */}
      <ul className={styles.navLinksList}>
        {navLinks.map((link) => (
          <li key={link.name} className={styles.navLinkItem}>
            <a href={link.href} className={styles.navLinkAnchor}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* RIGHT — Join TN + Hamburger */}
      <div className={styles.navRight}>
        <button className={styles.joinBtn}>
          <span className={styles.joinBtnText}>Join TN</span>
        </button>

        <button
          className={styles.hamburgerBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileJoinWrapper}>
            <button className={styles.mobileJoinBtn}>Join TN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
