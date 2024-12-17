

import React from "react";
import styles from "./CloudBased.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "  Cloud Strategy and Consulting",
  " IaaS / PaaS Cloud Application Services",
  "  Cloud Management Services",
  "  Cloud Monitoring & Support",
  
  
];

function  CloudBased() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dd6cbcf7abc623aad8d09_Illu6.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div>
        

        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Cloud Based Services we are offering is
        </h1>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                {/* <CheckRoundedIcon className={styles.icon_button} /> */}
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

export default CloudBased;
