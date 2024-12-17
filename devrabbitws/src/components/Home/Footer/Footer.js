import React from "react";
import styles from "./Footer.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          {/* <h3>DevRabbit</h3>  */}
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg"
            alt="DevRabbit Logo"
            className={styles.image}
          />

          <p className={styles.address}>
            DevRabbit IT Solutions Inc. 1180 Iron Point Rd, Suite 145, Folsom,
            CA 95630
          </p>
          <div className={styles.email}>
            <MdOutlineEmail className={styles.icon} />
            <p style={{color:'#5d1eb4'}}>info@devrabbit.com</p>
          </div>
          <div className={styles.email}>
            <FaPhoneVolume className={styles.icon} />
            <p style={{color:'#5d1eb4'}}>+1-650-352-8686</p>
          </div>

          {/* <p style={{color:'#5d1eb4'}}>Email: info@devrabbit.com</p>
          <p style={{color:'#5d1eb4'}}>Phone: +1-650-352-8686</p> */}
        </div>
        <div className={styles.column}>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Partnerships</p>
          <p>Careers</p>
          <p>Employee Referral</p>
          <p>SMS Disclosure</p>
        </div>
        <div className={styles.column}>
          <h3>Services</h3>
          <p>Salesforce Consulting</p>
          <p>AI Solution Services</p>
          <p>ServiceNow</p>
          <p>Integration Services</p>
          <p>Business Assurance Services</p>
          <p>IoT Solutions and Services</p>
          <p>Digital Consulting Services</p>
          <p>Staffing</p>
        </div>
        <div className={styles.column}>
          <h3>Industries</h3>
          <p>Real Estate</p>
          <p>Healthcare</p>
          <p>BFS</p>
          <p>Education</p>
          <p>Travel & Hospitality</p>
        </div>
        <div className={styles.column}>
          <h3>Technology</h3>
          <p>Mobile Strategy</p>
          <p>Mobile BI</p>
          <p>Frameworks</p>
          <p>DevOps</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Copyright 2023 DevRabbit IT Solutions. All rights reserved.</p>

        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
