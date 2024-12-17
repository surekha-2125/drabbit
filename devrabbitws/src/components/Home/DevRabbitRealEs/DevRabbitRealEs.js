import React from "react";
import styles from "./DevRabbitRealEs.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

// Array of benefits
const benefits = [
  "87% of organizations admit that not transforming will impact their ability to compete and thrive in the short term",
  "84% of organizations recognize the urgency to transform their legacy system to smart, cloud-based infrastructure",
  "50% of all executives say that lack of familiarity with technology is a barrier to transformation",
];

function DevRabbitRealEs() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus');
  }
  return (
    <div className={styles.Services}>
      
      <div className={styles.rightside}>
        
        
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        DevRabbit: Shaping the Future of Real Estate
        </h1>
        <p>
          
        We are at an inflection point in Real Estate and technology
        </p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p key={index} className={styles.lines}>{benefit}</p>
               
               
              </div>
            ))}
             <p>DevRabbit's Real Estate Transformation and Technology services help organizations address this inflection point by developing strategies and implementing programs to improve service delivery, mitigate risk, and enable the future of work.</p>
             <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65280ef2c2fb66f60db67828_real-estate-new.png"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
    </div>
  );
}

export default DevRabbitRealEs;
