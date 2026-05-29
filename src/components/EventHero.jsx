import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import styles from "../styles/EventHero.module.css";
import heroImg from "../assets/eventsbanner.jpg"; // placeholder path

const EventHero = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <div className={styles.left}>
        <SectionLabel label="EVENTS & NETWORKING" />
        <h2 className={styles.title}>Explore Trusted Network Events</h2>
        <p className={styles.description}>
          Join premium business networking meets, startup gatherings, referral events, expos, and professional growth sessions across India.
        </p>
        <Link to="#events-list" className={styles.cta}>Explore Events</Link>
      </div>
      <div className={styles.right}>
        <img src={heroImg} alt="Events hero" className={styles.image} />
      </div>
    </div>
  </section>
);

export default EventHero;
