import React from "react";
import styles from "./OurTechCons.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "  Software Development and Support Service",
  " Cloud Hosting and Transition Services",
  " Big data , BI and Analytics",
  "  Mobility Solutions",
  "System Customization and Integration Services",
  "Performance Solutions",
];

function OurTechCons() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652942a18077af4d00123040_health-services.png"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div>
        {/* <h1 className={styles.leftHead}>
          Our Tech Consulting, IT Service Offerings for healthcare cover
        </h1> */}

        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
          Our Tech Consulting, IT Service Offerings for healthcare cover
        </h1>
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

export default OurTechCons;
