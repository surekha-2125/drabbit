

import React from "react";
import styles from "./ManagedServices.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "Better Cost Control",
  "Improved Risk Management",
  "High availability, efficiency and productivity",
  "Future-proofing IT services",
  
];

function ManagedService() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6527d56079fe9fb6cfc66763_managed-services.png"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
        {/* <h1 className={styles.leftHead}>
        Managed Services
        </h1>
        <p>A comprehensive approach to data analytics has become a strategic imperative for leaders charged with making the critical decisions impacting their businesses. We can help you implement and manage an agile information management program that assesses and aligns your people, processes, and technology systems to help you make smarter, data-driven decisions.</p>
        <p>CRE IT staff may not be experienced with a new technology or able to maintain new services or applications.  DevRabbits Managed Service Solutions are perfect for when you are setting future strategic goals or deploying new services to your IT environment.
          </p>
          <p>DevRabbits Managed Services span from basic monitoring service all the way to a comprehensive offering that covers everything from alerts through problem resolution.</p>
        
        <p>Key Benefits of our Managed Service Solution</p> */}
            <div className={styles.subPart}>
          <div className={styles.right}>
          {/* <div className={styles.rightside}> */}
          <h1 className={styles.leftHead}>
        Managed Services
        </h1>
        <p>A comprehensive approach to data analytics has become a strategic imperative for leaders charged with making the critical decisions impacting their businesses. We can help you implement and manage an agile information management program that assesses and aligns your people, processes, and technology systems to help you make smarter, data-driven decisions.</p>
        <p>CRE IT staff may not be experienced with a new technology or able to maintain new services or applications.  DevRabbits Managed Service Solutions are perfect for when you are setting future strategic goals or deploying new services to your IT environment.
          </p>
          <p>DevRabbits Managed Services span from basic monitoring service all the way to a comprehensive offering that covers everything from alerts through problem resolution.</p>
        
        <p>Key Benefits of our Managed Service Solution</p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick  className={styles.icon_button} />
                <p className={styles.ticText}>
                  {/* Bold the specific part */}
                  {benefit.split(':').map((part, idx) => (
                    <span key={idx}>
                      {idx === 0 ? <span className={styles.boldText}>{part}:</span> : part}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ManagedService;
