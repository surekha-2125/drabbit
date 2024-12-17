import React from "react";
import styles from "./Business.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function Business() {
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
            Business Assurance Services
            </h1>
            <p className={styles.leftPara}>
            Traditional QA services have proved inadequate in addressing today’s business needs.
            </p>
            <button className={styles.bookDemo} onClick ={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650afca880576a3f684ab2d8_Illu_3.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Business;
