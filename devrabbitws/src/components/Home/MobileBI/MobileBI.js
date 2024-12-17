import React from "react";
import styles from "./MobileBI.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function MobileBI() {
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
             Mobile BI
            </h1>
            <p className={styles.leftPara}>
            Business intelligence is critical for enterprises as it not only helps them to fortify their core capabilities but also to explore new opportunities.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dcc6db6337e389e956928_Mobile%20BI%20Illu_1.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileBI;
