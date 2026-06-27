import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import mainlogo from '../assets/mainlogo.svg';
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
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(true);

  // Check if current route matches solid pages
  const isSolidPage = ['/blogs', '/blog', '/events', '/event', '/terms', '/privacy-policy', '/refund'].some(path =>
    location.pathname.startsWith(path)
  );

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const showTransparent = isTransparent && !isSolidPage;

  // Apply body class based on transparency
  usePreScrollClass(showTransparent);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    // { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Membership Plans', href: '#pricing' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navBar} ${showTransparent ? styles.transparent : ''}`}>
      {/* LEFT — Logo */}
      <Link to="/" className={styles.logoLink} onClick={() => window.scrollTo(0, 0)}>
        <img src={mainlogo} alt="Trusted Network" className={styles.logoImg} />
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

      {/* RIGHT — Store Buttons + Hamburger */}
      <div className={styles.navRight}>
        <div className={styles.storeButtons}>
          <a href="#" className={styles.storeBtn}>
            <FaApple className={styles.storeIcon} />
            <span>App Store</span>
          </a>
          <a href="#" className={styles.storeBtn}>
            <FaGooglePlay className={styles.storeIcon} />
            <span>Google Play</span>
          </a>
        </div>

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
          <div className={styles.mobileStoreButtons}>
            <a href="#" className={styles.mobileStoreBtn}>
              <FaApple className={styles.storeIcon} />
              <span>App Store</span>
            </a>
            <a href="#" className={styles.mobileStoreBtn}>
              <FaGooglePlay className={styles.storeIcon} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
