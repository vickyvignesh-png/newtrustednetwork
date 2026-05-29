import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiStar,
  FiCheckCircle,
  FiUsers,
  FiPhone,
  FiGlobe,
  FiShare2,
  FiInfo,
} from "react-icons/fi";

import styles from "../styles/MemberSharing.module.css";
import memberShareImg from "../assets/mebershare.svg";


const shareItems = [
  {
    icon: FiBriefcase,
    title: "Business Requirements",
  },
  {
    icon: FiStar,
    title: "Recommendations",
  },
  {
    icon: FiCheckCircle,
    title: "Wins & Milestones",
  },
  {
    icon: FiUsers,
    title: "Professional Opportunities",
  },
  {
    icon: FiPhone,
    title: "Business Contacts",
  },
  {
    icon: FiGlobe,
    title: "Success Stories",
  },
  {
    icon: FiShare2,
    title: "Networking Requests",
  },
  {
    icon: FiInfo,
    title: "Industry Knowledge",
  },
];

const MemberSharing = () => {
  return (
    <section style={{ background: '#0a1628', padding: '40px 30px' }}>
      {/* Premium Label */}
      <div className={styles.sectionLabelWrapper}>
        <div className={styles.sectionLabel}>
          <div className={styles.line}></div>
          <span>TRUSTED NETWORK FEATURES</span>
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 className={styles.shareTitle}>
          What Members Can Share
        </h2>
        <p className={styles.shareDescription}>
          Trusted Network (TN) creates a referral economy ecosystem where businesses grow together by sharing trusted recommendations, valuable introductions, and quality business opportunities.
        </p>
      </div>

      {/* 3 Column Row */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px'
      }}>
        {/* LEFT — first 4 existing cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '460px',
          flexShrink: 0
        }}>
          {shareItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.shareCard} ${styles.leftCard}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.iconBox}>
                <item.icon />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CENTER — existing phone mockup */}
        <div style={{ flexShrink: 0, alignSelf: 'center' }}>
          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
            <img src={memberShareImg} alt="Member Sharing" style={{ maxWidth: "240px", width: "100%" }} />
          </div>
        </div>

        {/* RIGHT — last 4 existing cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '460px',
          flexShrink: 0
        }}>
          {shareItems.slice(4, 8).map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.shareCard} ${styles.rightCard}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <div className={styles.iconBox}>
                <item.icon />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSharing;