

import React from "react";
import styles from "./BusiAssWellCheck.module.scss";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "  Understand areas of improvement in QA process",
  " Higher quality at lower cost upon implementation of roadmap",
  "  Prepare the organization to migrate to DevOps culture",

  
  
];

function  BusiAssWellCheck() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650b0aa8d095abf5ac6a1618_Illu_4.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightpart}>
        
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Business Assurance Wellness Check
        </h1>
        <p className={styles.leftparas}>Our test advisory consultants will assess your testing process, tools and people to determine efficiency and effectiveness of your QA Organization.</p>

            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p className={styles.ticText}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusiAssWellCheck;
