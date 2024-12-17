
import React from "react";
import styles from "./Sustainable.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "ESG Integration Tools: Seamlessly integrating ESG factors into financial strategies and decisions.",
  "Transparent Reporting: Tools for accurate impact measurement and clear communication.",
  "Green Financing Solutions: Products and strategies tailored for sustainable financial growth.",
];

function Sustainable() {
  return (
    <div className={styles.Services}>
      {/* <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bc40e1c2a86a531cfa0f_Digital-Banking%26Customer.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div> */}
      <div className={styles.rightside}>
        
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Sustainable Finance & ESG (Environmental, Social, andGovernance) Integration
        </h1>
        <p className={styles.para}>
        <span className={styles.approach}>
        The Green Quest: </span>As the world awakens to sustainability, thefinancier's path is lit by ESG factors. With growing cries forsustainable solutions and the riddles of impact measurement, thejourney towards green seems fraught with challenges.


        </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> In our sustainable vision, we offer:
        </p>
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
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/653771eb0e3ce3036be692ce_Sustainable%20Finance%20%26%20ESG.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
    </div>
  );
}

export default Sustainable;
