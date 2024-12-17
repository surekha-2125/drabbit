import React from "react";
import styles from "./OurTechHowWeAdd.module.scss";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "  Online corporate learning",
  " Skills measurement",
  "  Alternative learning styles",
  " Online competency-based training",
  "Flipped-learning tech",
];
const OurTechCons = [
  "Consulting on Academic Services",
  "Content & Knowledge Management",
  "Donor & Alumni Management",
  "Enterprise Resource Planning",
  "Financial Management",
  "Institutional Development",
  "Library and Media Management",
  "Operational Optimization and IT",
  "Research Projects Management",
  "Strategic Assesment& Planning",
  "Student Lifecycle Management",
];

function OurTechHowWeAdd() {
  return (
    <div className={styles.Services}>
      <div>
        <div className={styles.subPart}>
          <div className={styles.right}>
            <h1 className={styles.leftHead}>
              How we add Value to your Business in
            </h1>

            {/* Using map function to render each benefit */}
            {OurTechCons.map((bene, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p className={styles.ticText}>{bene}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.subPart}>
          <div className={styles.right}>
            <h1 className={styles.leftHead}>
              How we add Value to your Business in
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

export default OurTechHowWeAdd;
