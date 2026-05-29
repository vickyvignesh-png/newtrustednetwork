import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import mainLogo from '../assets/mainlogo.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Membership Plans', href: '#membership' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={styles.navBar}>
      {/* LEFT — Logo */}
      <Link to="/" className={styles.logoLink} onClick={() => window.scrollTo(0, 0)}>
        <img src={mainLogo} alt="Trusted Network" className={styles.logoImg} />
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
