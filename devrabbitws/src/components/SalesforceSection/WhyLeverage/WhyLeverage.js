
import React from "react";
import styles from "./WhyLeverage.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TbMessages } from "react-icons/tb";

// Array of benefits
const benefits = [
  "Futureproof Your Business via Process Automation: Robotic Process Automation (RPA) Technology is growing at scale, thanks to the unprecedented efficiency in making your business operations lean and fast.",
  "Solutions Tailored to make End User’s life Simple:Sales and Marketing consultants and managers are not always the most tech-savvy crowd in an organization. We fully empathize with this situation and channel our efforts into making the User Experience visually rich and guided.",
  "Structured Delivery Matching Your Business Priorities:Every project has an individual delivery scope and client expectations. We fully incorporate this aspect into our solution deliveries, so your expenses are well controlled. Our analysts identify your top priorities and deliver them first. ",
];

function WhyLeverage() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6523f55af3cecf8ea69b231d_illu9.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
        <h1 className={styles.leftHead}>
        Why leverage DevRabbit’s Salesforce services?
        </h1>
        {/* <p>
                </p>
        <p>
          <span className={styles.approach}>DevRabbit's Approach:</span> At DevRabbit, we envision a harmonized digital realm.
        </p> */}
        <div className={styles.subPart}>
          <div className={styles.right}>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TbMessages className={styles.icon_button} />
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

export default WhyLeverage;
