import React from "react";
import styles from "./Cases.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function Cases() {
  const navigate = useNavigate();
   
  const handleNavigate = () => {
    navigate('/contactus');
  }
  
  return (
    <>
      <div className={styles.Services}>
        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>Case Studies</h1>
            <p className={styles.leftPara}>
              DevRabbit has a vast experience working with Tier 1 companies to
              provide enterprise solutions in Mobility, Cloud, Salesforce,
              ServiceNow and QA Automation for their businesses.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65670ad0065f0aba8fd8b04e_CaseStudies.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cases;
