import React from "react";
import styles from "./UnlockHealth.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function UnlockHealth() {
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
            Unlock Healthcare Digitalization with DevRabbit
            </h1>
            <p className={styles.leftPara}>
            The Healthcare is a very complex industry. Improving the quality of care, and reducing the cost of care – is the imperative in today’s healthcare industry.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650b202a8657d72bd5199932_Illu_6.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default UnlockHealth;
