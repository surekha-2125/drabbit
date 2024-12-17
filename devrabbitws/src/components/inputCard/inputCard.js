import React, { useState } from "react";
import "./inputCard.module.scss"; // Import the CSS file
import styles from './inputCard.module.scss';

function InputCard() {
  // State to store form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "product",
    requirements: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
    <div className = {styles.contactCard}>
    <div className="contact-us-form">
      <h2 className={styles.head}>Contact With Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
        <div className={styles.pair}> 
          <label htmlFor="firstName" className= {styles.headings}>First Name</label>
          
          <input
          className={styles.inputs} placeholder="   First Name"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.pair}>
          <label htmlFor="lastName" className= {styles.headings}>Last Name</label>
          
          <input
          className={styles.inputs} placeholder="   Last Name"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.pair}>
          <label htmlFor="email" className= {styles.headings} placeholder="   your@company.com">Email Address</label>
          
          <input
          className={styles.inputs}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.pair}>
          <label htmlFor="phone" className= {styles.headings} placeholder="   +1(555) 000-000">Phone Number</label>
         
          <input
          className={styles.inputs}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className={styles.pair}> 
          <label htmlFor="interest" className= {styles.headings}>Interested In</label>
        
          <select
          className={styles.inputs}
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="product">Select one</option>
            <option value="service">Start Up</option>
            <option value="consultation">Enterprise Application</option>
            <option value="other">Enterprise Marketing</option>
            <option value="other">Product</option>
            <option value="other">Staffing</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className={styles.pair}>
          <label htmlFor="requirements" className= {styles.headings}>Tell Us About Your Requirements</label>
         
          <textarea
          className={styles.textareaa}
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className={styles.pair}>
          <label>
            <input
              type="checkbox"
              name="privacyPolicyAgreed"
              checked={formData.privacyPolicyAgreed}
              onChange={handleChange}
              required
            />
            You agree to our friendly <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          </label>
        </div>
        <button type="submit" className= {styles.buttons}>Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default InputCard;
