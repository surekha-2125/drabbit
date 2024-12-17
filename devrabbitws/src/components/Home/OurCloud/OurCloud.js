
import React from "react";
import styles from "./OurCloud.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "  Recommend the best cloud hosting solutions strategy for your business requirements —hosted cloud (public cloud), in your own data center (private cloud), or a combination of both.",
  "Build your application solutions in the cloud type that fits",
  " Create a cloud-based supporting infrastructure, including private app store, database, media storage, auto-scaling capability, and security. ",
  " Here are the steps for migrating existing product or building new cloud application with cloud service providers company DevRabbit.",
  
  
];

function  OurCloud() {
  return (
    <div className={styles.Services}>
      
      <div>
        

        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Our cloud technology partners are
        </h1>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                {/* <CheckRoundedIcon className={styles.icon_button} /> */}
                {/* <TiTick className={styles.icon_button} /> */}
                <TiTick className={styles.icon_button}/>
                <p className={styles.ticText}>{benefit}</p>
              </div>
            ))}
          </div>
          <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dd16c474c6a54df5163e6_MAB_illu3.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
        </div>
        
      </div>
    </div>
  );
}

export default OurCloud;
