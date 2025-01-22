

// export default Contact;
import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    alert('Message Sent!');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-description">
          Have a project or just want to say hello? Drop a message below and I'll get back to you as soon as I can!
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-field">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
