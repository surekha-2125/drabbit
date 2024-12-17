
import React from "react";
import styles from "./WhyConsiderDr.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "Expertise Tailored for You: With years of hands-on experience and a deep understanding of ServiceNow, we at DevRabbit don't just bring technical proficiency. We recognize the unique challenges of each organization and craft solutions that are specifically aligned with your business objectives.",
  "24x7 Support & Training: Our managed services commitment doesn’t end post-deployment. As your journey with ServiceNow is continuous, and so is our support. Day or night, we're always available for assistance, training, and updates with our global team. We ensure your team remains adept and equipped, allowing you to focus on growing your business without any technological turmoil.",
  "Holistic Client-First Approach: Beyond mere implementation, we envision ServiceNow as a transformative tool. From startups to industry leaders, we've optimized countless ServiceNow Projects and ensured clientele success with growth and satisfaction.",
];

function WhyConsiderDr() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bd01ee21d29da9f12b4a_why-Consider-DevRabbit-for-your-ServiceNow-needs.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
        <h1 className={styles.leftHead}>
        Why Consider DevRabbit for your ServiceNow needs?
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
                <CheckRoundedIcon className={styles.icon_button} />
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

export default WhyConsiderDr;
