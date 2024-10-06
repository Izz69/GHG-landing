import "../styles/contact.css"
import React from 'react'
import { useState } from 'react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        purpose: "",
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validateForm = () => {
        let formErrors = {};
        let valid = true;
    
        if (!formData.name.trim()) {
          formErrors.name = "Name is required";
          valid = false;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
          formErrors.email = "Email is required";
          valid = false;
        } else if (!emailRegex.test(formData.email)) {
          formErrors.email = "Invalid email format";
          valid = false;
        }
    
        if (!formData.purpose.trim()) {
          formErrors.purpose = "Purpose is required";
          valid = false;
        }
    
        setErrors(formErrors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log("Form Submitted:", formData);
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            purpose: "",
          });
        }
      };
    
      return (
        <div class="contact">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
    
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
    
            <div className="input-group">
              <label htmlFor="purpose">Purpose:</label>
              <textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              />
              {errors.purpose && <p className="error-message">{errors.purpose}</p>}
            </div>
    
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
        </div>
      );
}

export default ContactUs