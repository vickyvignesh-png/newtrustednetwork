import React, { useState } from 'react';
import { FiSend, FiShield, FiUsers, FiTrendingUp, FiX, FiMessageSquare } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';
import footerBg from '../assets/fotterbackgroundimage.jpg';

const Contact = () => {
  // Contact form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Modal open states
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Name Validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setName(value);
      if (errors.name) {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }
  };

  // Phone Validation
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
      setPhone(value);
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }
  };

  // Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  // Message
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: '' }));
    }
  };

  // Email Validation
  const validateEmail = (emailStr) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailStr);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Message sent successfully! Our Trusted Network team will get back to you shortly.');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
    setIsContactModalOpen(false); // Close modal on success
  };

  return (
    <>
      {/* ====================================================
          NEW CTA SECTION (ACTIVE UI)
          ==================================================== */}
      <section 
        id="contact" 
        className={styles.ctaSection}
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        {/* Brighter White Overlay */}
        <div className={styles.overlay}></div>

        {/* Network dots background pattern */}
        <div className={styles.networkPattern}>
          <svg width="100%" height="100%" opacity="0.05" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <circle cx="40" cy="0" r="1.5" fill="#D4AF37" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className={styles.wrapper}>
          {/* Label style matching rest of website */}
          <div className={styles.sectionLabelWrapper}>
            <div className={styles.sectionLabel}>
              <div className={styles.line}></div>
              <span>START NETWORKING TODAY</span>
            </div>
          </div>

          {/* Centered Heading (font-size reduced to 48px-56px max) */}
          <h2 className={styles.ctaTitle}>
            Build Trusted<br />Business Relationships
          </h2>

          {/* Compact Description with Tighter Spacing */}
          <p className={styles.ctaDesc}>
            Connect with verified professionals, generate referrals, and grow through trusted business networking.
          </p>

          {/* Buttons Side-by-Side on Desktop, Stacked on Mobile with Icons */}
          <div className={styles.btnGroup}>
            <button 
              className={styles.joinBtn}
              onClick={() => setIsJoinModalOpen(true)}
            >
              <FiUsers className={styles.btnIcon} /> Join TN
            </button>
            <button 
              className={styles.contactBtn}
              onClick={() => setIsContactModalOpen(true)}
            >
              <FiMessageSquare className={styles.btnIcon} /> Contact Us
            </button>
          </div>

          {/* Premium Trust Review Strip (Single compact horizontal row) */}

        </div>
      </section>

      {/* ====================================================
          JOIN TN MODAL POPUP
          ==================================================== */}
      {isJoinModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsJoinModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsJoinModalOpen(false)}>
              <FiX size={20} />
            </button>
            <div className={styles.sectionLabelWrapper}>
              <div className={styles.sectionLabel}>
                <div className={styles.line}></div>
                <span>WELCOME TO TRUSTED NETWORK</span>
              </div>
            </div>
            <h3 className={styles.modalTitle}>Download TN App</h3>
            <p className={styles.modalDesc}>
              Get the Trusted Network mobile application and start your verified networking journey.
            </p>
            
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeCard}>
                <div className={styles.storeIcon}><FaApple /></div>
                <div className={styles.storeText}>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className={styles.storeCard}>
                <div className={styles.storeIcon}><FaGooglePlay /></div>
                <div className={styles.storeText}>
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          CONTACT US MODAL POPUP
          ==================================================== */}
      {isContactModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsContactModalOpen(false)}>
          <div className={`${styles.modalContent} ${styles.formModal}`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsContactModalOpen(false)}>
              <FiX size={20} />
            </button>
            
            <div className={styles.sectionLabelWrapper}>
              <div className={styles.sectionLabel}>
                <div className={styles.line}></div>
                <span>GET IN TOUCH</span>
              </div>
            </div>
            
            <h3 className={styles.modalTitle}>Contact Our Team</h3>
            
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className={`${styles.inputField} ${errors.name ? styles.inputError : ''}`}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    className={`${styles.inputField} ${errors.phone ? styles.inputError : ''}`}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`${styles.inputField} ${errors.email ? styles.inputError : ''}`}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Type Your Message</label>
                <textarea
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Write your message here..."
                  className={`${styles.textareaField} ${errors.message ? styles.inputError : ''}`}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <FiSend className={styles.submitBtnIcon} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

/* ====================================================
   PREVIOUS CONTACT FORM SECTION
   BACKUP VERSION - DO NOT DELETE
   Can be restored later if required
   ====================================================
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from '../styles/Contact.module.css';

const ContactBackup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setName(value);
      if (errors.name) {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
      setPhone(value);
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: '' }));
    }
  };

  const validateEmail = (emailStr) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailStr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Message sent successfully! Our Trusted Network team will get back to you shortly.');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.wrapper}>
        <div className={styles.sectionLabelWrapper}>
          <div className={styles.sectionLabel}>
            <div className={styles.line}></div>
            <span>CONTACT US</span>
          </div>
        </div>

        <h2 className={styles.title}>Let’s Connect</h2>
        <p className={styles.description}>
          Have questions or want to grow your network? Send us a message and our Trusted Network team will get back to you.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className={`${styles.inputField} ${errors.name ? styles.inputError : ''}`}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                className={`${styles.inputField} ${errors.phone ? styles.inputError : ''}`}
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`${styles.inputField} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Type Your Message</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Write your message here..."
              className={`${styles.textareaField} ${errors.message ? styles.inputError : ''}`}
            />
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>
            <span>Send Message</span>
            <FiSend className={styles.submitBtnIcon} />
          </button>
        </form>
      </div>
    </section>
  );
};
*/