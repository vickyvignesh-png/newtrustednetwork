import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  // Name Validation
  const handleNameChange = (e) => {
    const value = e.target.value;

    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setName(value);

      if (errors.name) {
        setErrors((prev) => ({
          ...prev,
          name: '',
        }));
      }
    }
  };

  // Phone Validation
  const handlePhoneChange = (e) => {
    const value = e.target.value;

    if (
      value === '' ||
      (/^\d+$/.test(value) && value.length <= 10)
    ) {
      setPhone(value);

      if (errors.phone) {
        setErrors((prev) => ({
          ...prev,
          phone: '',
        }));
      }
    }
  };

  // Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: '',
      }));
    }
  };

  // Message
  const handleMessageChange = (e) => {
    setMessage(e.target.value);

    if (errors.message) {
      setErrors((prev) => ({
        ...prev,
        message: '',
      }));
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

    // Name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Phone
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length !== 10) {
      newErrors.phone =
        'Phone number must be exactly 10 digits';
    }

    // Email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email =
        'Please enter a valid email address';
    }

    // Message
    if (!message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    // Error Check
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    alert(
      'Message sent successfully! Our Trusted Network team will get back to you shortly.'
    );

    // Clear Fields
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
    >
      <div className={styles.wrapper}>

        {/* Premium Label */}
        <div className={styles.sectionLabelWrapper}>
          <div className={styles.sectionLabel}>
            <div className={styles.line}></div>
            <span>CONTACT US</span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className={styles.title}>
          Let’s Connect
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Have questions or want to grow your network?
          Send us a message and our Trusted Network
          team will get back to you.
        </p>

        {/* Form */}
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >

          {/* Row */}
          <div className={styles.formRow}>

            {/* Name */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className={`${styles.inputField} ${errors.name
                  ? styles.inputError
                  : ''
                  }`}
              />

              {errors.name && (
                <span className={styles.errorText}>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                className={`${styles.inputField} ${errors.phone
                  ? styles.inputError
                  : ''
                  }`}
              />

              {errors.phone && (
                <span className={styles.errorText}>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`${styles.inputField} ${errors.email
                  ? styles.inputError
                  : ''
                  }`}
              />

              {errors.email && (
                <span className={styles.errorText}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Type Your Message
            </label>

            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Write your message here..."
              className={`${styles.textareaField} ${errors.message
                ? styles.inputError
                : ''
                }`}
            />

            {errors.message && (
              <span className={styles.errorText}>
                {errors.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className={styles.submitBtn}
          >
            <span>Send Message</span>

            <FiSend
              className={styles.submitBtnIcon}
            />
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;