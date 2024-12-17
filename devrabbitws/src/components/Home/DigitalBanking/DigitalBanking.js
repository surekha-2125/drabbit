
import React from "react";
import styles from "./DigitalBanking.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "Seamless Integration: Merging legacy systems with modern digital channels for a unified experience.",
  "AI-Driven Personalization: Leveraging AI to curate experiences tailored to individual customers.",
  "Robust Security Protocols: Ensuring that every digital interaction is fortified against threats.",
];

function DigitalBanking() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bc40e1c2a86a531cfa0f_Digital-Banking%26Customer.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
        {/* <h1 className={styles.leftHead}>
          Digital Banking & Customer Experience Transformation
        </h1>
        <p>
        <span className={styles.approach}>
          The Tale of the Modern Banker:</span>In an age where everything is digital, the modern banker grapples with integrating new-age channels with age-old legacy systems. As customers demand a tailored, AI-driven experience, the challenge grows: How to ensure every online transaction remains as secure as the vaulted doors of old?
        </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> At DevRabbit, we envision a harmonized digital realm.
        </p> */}
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
          Digital Banking & Customer Experience Transformation
        </h1>
        <p className={styles.tale}>
        <span className={styles.approach}>
          The Tale of the Modern Banker:</span>In an age where everything is digital, the modern banker grapples with integrating new-age channels with age-old legacy systems. As customers demand a tailored, AI-driven experience, the challenge grows: How to ensure every online transaction remains as secure as the vaulted doors of old?
        </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> At DevRabbit, we envision a harmonized digital realm.
        </p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                < TiTick  className={styles.icon_button} />
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
  );
}

export default DigitalBanking;
