import React from "react";
import styles from "./OurAIServices.module.scss";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "AI Strategy Consulting: ‍Craft strategies that mesh your business goals with emerging AI innovations.",
  "Custom AI Solutions: Develop tailored AI applications designed to meet yourspecific needs.",
  "Data Analytics & Insight Generation: Transform your data into actionable insights using predictive analytics.",
  "AI Integration: Effortlessly meld AI capabilities into your current systems for enhanced efficiency.",
  "Continuous AI Enhancement: Provide ongoing support to adapt and upgrade your AI solutions alongside your business growth.",
];

function OurAIServices() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/663201a5c84041962bab5cf9_AI-2.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
       
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>Our AI Services</h1>
        <p>Tailored AI Solutions to Propel Your Business Forward</p>
        <p className={styles.para}>
          Our suite of AI services is designed to meet your business at its
          point of need, offering everything from strategic consulting to
          end-to-end solution development:
        </p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p className={styles.ticText}>
                  {/* Bold the specific part */}
                  {benefit.split(":").map((part, idx) => (
                    <span key={idx}>
                      {idx === 0 ? (
                        <span className={styles.boldText}>{part}:</span>
                      ) : (
                        part
                      )}
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

export default OurAIServices;
