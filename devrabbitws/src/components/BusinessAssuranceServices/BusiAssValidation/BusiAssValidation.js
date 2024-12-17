
import React from "react";
import styles from "./BusiAssValidation.module.scss";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
    "Superior customer experience",
  "Higher employee productivity and efficiency",
  " Higher defect removal effectiveness ",
  "Reduce Time to market ",
  
  
];

function  BusiAssValidation() {
  return (
    <div className={styles.Services}>
      
      <div>
        


        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Business Assurance Validation
        </h1>
        <p>We ensure IT investments by your Business is getting expected ROI.</p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p className={styles.ticText}>{benefit}</p>
              </div>
            ))}
          </div>
          <div className={styles.rightImg}>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650b0aa8f95033f3ff15ef95_Illu_5.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
        </div>
        
      </div>
    </div>
  );
}

export default BusiAssValidation;
