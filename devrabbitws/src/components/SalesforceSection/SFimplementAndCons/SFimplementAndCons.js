import React from "react";
import styles from "./SFimplementAndCons.module.scss";
import { useNavigate } from "react-router-dom";


function SFimplementAndCons() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }

  return (
    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>
            Salesforce Implementation & Consulting
            </h1>
            <p className={styles.leftPara}>
            Cloud service that provides unmatched online shopping performance for retailers. Lead the E-Commerce race by providing your customers a personalized shopping journey via our Salesforce Commerce Cloud implementations.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6523da7f3382f556e00fdaca_Salesforce_illu.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default SFimplementAndCons;
