
import React from "react";
import styles from "./Regulatory.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "Adaptive Platforms: Automated systems that adjust in real-time to regulatory changes.",
  "Efficient Monitoring: Tools for continuous surveillance and immediate reporting.",
  "Cost-Effective Compliance: Minimizing manual interventions, reducing errors, and maximizing efficiency.",
];

function Regulatory() {
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
        {/* <h1 className={styles.leftHead}>
        Regulatory Technology (RegTech) and Compliance
        </h1>
        <p>
        <span className={styles.approach}>
        The Compliance Conundrum: </span>Navigating the stormy seas of aconstantly changing regulatory environment, financial institutionsface the Herculean task of real-time monitoring and reporting. The weight of compliance costs and complexities only adds to thechallenge.
        </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> Through the RegTech landscape, DevRabbit offers:
        </p> */}
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Regulatory Technology (RegTech) and Compliance
        </h1>
        <p className={styles.para}>
        <span className={styles.approach}>
        The Compliance Conundrum: </span>Navigating the stormy seas of aconstantly changing regulatory environment, financial institutionsface the Herculean task of real-time monitoring and reporting. The weight of compliance costs and complexities only adds to thechallenge.
        </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> Through the RegTech landscape, DevRabbit offers:
        </p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
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
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bc5852c9d82323327931_Regulatory-Technology.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
    </div>
  );
}

export default Regulatory;
