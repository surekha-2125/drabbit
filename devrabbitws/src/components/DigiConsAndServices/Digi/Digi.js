import React from "react";
import styles from "./Digi.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function Digi() {
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
            Digital Consulting Services
            </h1>
            <p className={styles.leftPara}>
            With increasing digital transformation of businesses, the need to shift processes, activities and strategies from the traditional operational mode to digital mode is imperative. Our Digital consulting services help create custom solutions based on client needs, industry demands and expected outcome.
            ‍
            </p>
            <p className={styles.leftPara}>Leveraging on its significant experience, DevRabbit has developed a portfolio of services in specific areas, as outlined below:</p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652692d05484ae86297192ca_digital-consulting-services.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Digi;
