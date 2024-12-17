import React from "react";
import styles from "./TechExperts.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {TiTick} from "react-icons/ti";

// Array of benefits
const benefits = [
  "Web Development/CMS",
  "Mobile App Development/Integration",
  "Analytics",
  "Cloud Migration",
  "DevOps Automation",
  "Data Science",
  "AI/ML"
];

function TechExperts() {
  return (
    <div className={styles.Services}>
      {/* <div>
        <img
          src=""
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div> */}
      <div className={styles.rightside}>
        
        
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Technology Experts
        </h1>
        <p>
          
        There is never a one size fits all when it comes to technology needs for CRE space.  CRE brands require custom work, however, resources for custom development are limited.  DevRabbits Technology Consulting team provides resources from your most basic website project to a custom framework.  Our services include:
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
             <p>DevRabbit's Real Estate Transformation and Technology services help organizations address this inflection point by developing strategies and implementing programs to improve service delivery, mitigate risk, and enable the future of work.</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6528169edd1260c022915a67_realestate-technology.png"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
    </div>
  );
}

export default TechExperts;
