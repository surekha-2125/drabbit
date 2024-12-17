
import React from "react";
import styles from "./DataAnalytics.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "Advanced Analytics: Translating raw data into meaningful insights and foresights.",
  "Decision Support Tools: Empowering financial institutions for instantaneous and informed decisions.",
  "Data Security & Integrity: Ensuring impeccable data quality while maintaining absolute privacy.",
];

function DataAnalytics() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bc243f9f52c64268b2ab_Data-Analytics%26Financial-Insights.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
        
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Data Analytics & Financial Insights
        </h1>
        <p className={styles.para}>
        <span className={styles.approach}>
        The Data Dilemma: </span> In a world drowning in data, the financialsage seeks to decipher this deluge, striving to transform it intoactionable wisdom. The quest for real-time decision-making meets theguardians of data integrity and privacy.       </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> To the data conundrum, DevRabbit provides:
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
            <p className={styles.lastPara}>With this structured approach, DevRabbit's solutions are presentednot just as remedies but as comprehensive strategies, ensuringclarity and emphasizing our commitment to addressing BFS challenges.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DataAnalytics;
