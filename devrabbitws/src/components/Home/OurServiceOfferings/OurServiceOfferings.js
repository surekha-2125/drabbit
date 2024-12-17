import React from "react";
import styles from "./OurServiceOfferings.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  " Consulting & solutions for Travel, Hospitality industries ",
  "Migrations from legacy systems to cloud and mobility systems. ",
  " Support existing systems ",
  " Enhance existing systems ",
  "Testing services",

  "Digital Marketing",
  "Business data insights for Travel and Hospitality systems.",
  "Custom data Reports",
];

function OurServiceOfferings() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538c0e2e1c2a86a5322416f_Our%20service%20offerings%20for%20travel%20%26%20hospitality%20industry%20cover.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div>
        

        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
          Our service offerings for travel & hospitality industry cover:
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

export default OurServiceOfferings;
