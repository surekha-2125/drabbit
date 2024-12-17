import React from "react";
import styles from "./YourPartnerInAI.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function YourPartnerInAI() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }
  return (
    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>Your Partner in AI Innovation
            </h1>
            <p className={styles.leftPara}>
            At DevRabbit, we leverage Artificial Intelligence to revolutionize business operations, making them more efficient and opening up new possibilities with our cutting-edge, practical solutions.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/663200dd1e4bcda548fc1c4c_AI-1.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default YourPartnerInAI;
