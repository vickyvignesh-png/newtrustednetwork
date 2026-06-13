import React, { useState } from 'react';
import { FiSend, FiShield, FiUsers, FiTrendingUp, FiX } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';
import footerBg from '../assets/fotterbackgroundimage.jpg';

const Contact = () => {
  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  const [errors, setErrors] = useState({});

  // Modal open states
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Email Validation helper
  const validateEmail = (emailStr) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailStr);
  };

  // Get Field Error message
  const getFieldError = (fieldName, value) => {
    const trimmed = value.trim();
    switch (fieldName) {
      case 'name':
        if (!trimmed || trimmed.length < 3 || trimmed.length > 50 || !/^[A-Za-z\s]+$/.test(value)) {
          return 'Please enter a valid name.';
        }
        return '';
      case 'email':
        if (!trimmed || !validateEmail(value)) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'phone':
        if (value.length !== 10 || !/^\d+$/.test(value)) {
          return 'Please enter a valid 10-digit phone number.';
        }
        return '';
      case 'state':
        if (!trimmed || !/^[A-Za-z\s]+$/.test(value)) {
          return 'Please enter a valid state.';
        }
        return '';
      case 'city':
        if (!trimmed || !/^[A-Za-z\s]+$/.test(value)) {
          return 'Please enter a valid city.';
        }
        return '';
      case 'region':
        if (!trimmed || !/^[A-Za-z\s]+$/.test(value)) {
          return 'Please enter a valid region.';
        }
        return '';

      default:
        return '';
    }
  };

  // Blur validation handler
  const handleBlur = (fieldName, value) => {
    const error = getFieldError(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  // Name Validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setName(value);
      const err = getFieldError('name', value);
      if (!err) {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }
  };

  // Email Validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const err = getFieldError('email', value);
    if (!err) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  // Phone Validation
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
      setPhone(value);
      const err = getFieldError('phone', value);
      if (!err) {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }
  };

  // State Validation
  const handleStateChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setState(value);
      const err = getFieldError('state', value);
      if (!err) {
        setErrors((prev) => ({ ...prev, state: '' }));
      }
    }
  };

  // City Validation
  const handleCityChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setCity(value);
      const err = getFieldError('city', value);
      if (!err) {
        setErrors((prev) => ({ ...prev, city: '' }));
      }
    }
  };

  // Region Validation
  const handleRegionChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setRegion(value);
      const err = getFieldError('region', value);
      if (!err) {
        setErrors((prev) => ({ ...prev, region: '' }));
      }
    }
  };



  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trim leading and trailing spaces before submission.
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedState = state.trim();
    const trimmedCity = city.trim();
    const trimmedRegion = region.trim();

    // Update state to trimmed values
    setName(trimmedName);
    setEmail(trimmedEmail);
    setPhone(trimmedPhone);
    setState(trimmedState);
    setCity(trimmedCity);
    setRegion(trimmedRegion);

    const newErrors = {
      name: getFieldError('name', trimmedName),
      email: getFieldError('email', trimmedEmail),
      phone: getFieldError('phone', trimmedPhone),
      state: getFieldError('state', trimmedState),
      city: getFieldError('city', trimmedCity),
      region: getFieldError('region', trimmedRegion),

    };

    const hasErrors = Object.values(newErrors).some((err) => err !== '');

    if (hasErrors) {
      setErrors(newErrors);
      // Scroll to first invalid field
      const firstErrorField = Object.keys(newErrors).find((field) => newErrors[field]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return;
    }

    alert('Message sent successfully! Our Trusted Network team will get back to you shortly.');
    setName('');
    setEmail('');
    setPhone('');
    setState('');
    setCity('');
    setRegion('');

    setErrors({});
    setIsContactModalOpen(false); // Close modal on success
  };

  const isFormValid = 
    !getFieldError('name', name) &&
    !getFieldError('email', email) &&
    !getFieldError('phone', phone) &&
    !getFieldError('state', state) &&
    !getFieldError('city', city) &&
    !getFieldError('region', region);

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
          <div className={styles.ctaGrid}>
            {/* LEFT SIDE: Existing CTA content */}
            <div className={styles.ctaLeft}>
              <div className={styles.sectionLabelWrapper}>
                <div className={styles.sectionLabel}>
                  <div className={styles.line}></div>
                  <span>START NETWORKING TODAY</span>
                </div>
              </div>

              {/* Centered Heading (font-size reduced to 48px-56px max) */}
              <h2 className={styles.ctaTitle}>
                Build Trusted Business Relationships
              </h2>

              {/* Compact Description with Tighter Spacing */}
              <p className={styles.ctaDesc}>
                Connect with verified professionals, generate referrals, and grow through trusted business networking.
              </p>

              {/* Buttons with Join TN */}
              {/* <div className={styles.btnGroup}>
                <button
                  className={styles.joinBtn}
                  onClick={() => setIsJoinModalOpen(true)}
                >
                  <FiUsers className={styles.btnIcon} /> Join TN
                </button>
              </div> */}
            </div>

            {/* RIGHT SIDE: Premium Contact Form Card */}
            <div className={styles.ctaRight}>
              <div className={styles.premiumFormCard}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formCardTitle}>Get In Touch</h3>
                  <p className={styles.formCardSubtitle}>
                    Fill in your details and our team will contact you shortly.
                  </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name and Email */}
                  <div className={styles.formGridRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.lightLabel}>Name *</label>
                      <input id="name"
                         type="text"
                         value={name}
                         onChange={handleNameChange}
                         onBlur={() => handleBlur('name', name)}
                         placeholder="Enter your name"
                         className={`${styles.inputField} ${styles.lightInput} ${errors.name ? styles.inputError : ''}`}
                       />
                      {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.lightLabel}>Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => handleBlur('email', email)}
                        placeholder="Enter your email"
                        className={`${styles.inputField} ${styles.lightInput} ${errors.email ? styles.inputError : ''}`}
                      />
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2: Phone Number and State */}
                  <div className={styles.formGridRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.lightLabel}>Phone Number *</label>
                      <input id="phone"
                         type="tel"
                         value={phone}
                         onChange={handlePhoneChange}
                         onBlur={() => handleBlur('phone', phone)}
                         placeholder="Enter phone number"
                         className={`${styles.inputField} ${styles.lightInput} ${errors.phone ? styles.inputError : ''}`}
                       />
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.lightLabel}>State *</label>
                      <input id="state"
                         type="text"
                         value={state}
                         onChange={handleStateChange}
                         onBlur={() => handleBlur('state', state)}
                         placeholder="Enter state"
                         className={`${styles.inputField} ${styles.lightInput} ${errors.state ? styles.inputError : ''}`}
                       />
                      {errors.state && <span className={styles.errorText}>{errors.state}</span>}
                    </div>
                  </div>

                  {/* Row 3: City and Region */}
                  <div className={styles.formGridRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.lightLabel}>City *</label>
                      <input id="city"
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        onBlur={() => handleBlur('city', city)}
                        placeholder="Enter city"
                        className={`${styles.inputField} ${styles.lightInput} ${errors.city ? styles.inputError : ''}`}
                      />
                      {errors.city && <span className={styles.errorText}>{errors.city}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.lightLabel}>Region *</label>
                      <input id="region"
                         type="text"
                         value={region}
                         onChange={handleRegionChange}
                         onBlur={() => handleBlur('region', region)}
                         placeholder="Enter region"
                         className={`${styles.inputField} ${styles.lightInput} ${errors.region ? styles.inputError : ''}`}
                       />
                      {errors.region && <span className={styles.errorText}>{errors.region}</span>}
                    </div>
                  </div>



                  <button type="submit" className={styles.fullWidthSubmitBtn}>
                    <span>Send Message</span>
                    <FiSend className={styles.submitBtnIcon} />
                  </button>
                </form>
              </div>
            </div>
          </div>
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
              {/* Row 1: Name and Email */}
              <div className={styles.formGridRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={() => handleBlur('name', name)}
                    placeholder="Enter your name"
                    className={`${styles.inputField} ${errors.name ? styles.inputError : ''}`}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email *</label>
                  <input id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={() => handleBlur('email', email)}
                    placeholder="Enter your email"
                    className={`${styles.inputField} ${errors.email ? styles.inputError : ''}`}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
              </div>

              {/* Row 2: Phone Number and State */}
              <div className={styles.formGridRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur('phone', phone)}
                    placeholder="Enter phone number"
                    className={`${styles.inputField} ${errors.phone ? styles.inputError : ''}`}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>State *</label>
                  <input
                    type="text"
                    value={state}
                    onChange={handleStateChange}
                    onBlur={() => handleBlur('state', state)}
                    placeholder="Enter state"
                    className={`${styles.inputField} ${errors.state ? styles.inputError : ''}`}
                  />
                  {errors.state && <span className={styles.errorText}>{errors.state}</span>}
                </div>
              </div>

              {/* Row 3: City and Region */}
              <div className={styles.formGridRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>City *</label>
                  <input id="city"
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    onBlur={() => handleBlur('city', city)}
                    placeholder="Enter city"
                    className={`${styles.inputField} ${errors.city ? styles.inputError : ''}`}
                  />
                  {errors.city && <span className={styles.errorText}>{errors.city}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Region *</label>
                  <input
                    type="text"
                    value={region}
                    onChange={handleRegionChange}
                    onBlur={() => handleBlur('region', region)}
                    placeholder="Enter region"
                    className={`${styles.inputField} ${errors.region ? styles.inputError : ''}`}
                  />
                  {errors.region && <span className={styles.errorText}>{errors.region}</span>}
                </div>
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