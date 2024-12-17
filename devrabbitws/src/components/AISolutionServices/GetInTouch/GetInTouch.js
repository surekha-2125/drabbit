import React from "react";
import styles from "./GetInTouch.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function GetInTouch() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }
  return (

    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>Get In Touch
            </h1>
            <p className={styles.leftPara}>
            Let s Talk AI
            </p>
            <p className={styles.leftPara}>
            Ready to explore what AI can do for your business? Contact us today to schedule a free consultation. Together, we can unlock the potential of AI for your company.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Call To Action </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/663376c657eba941c82ad98b_AI-4.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default GetInTouch;
