import React from "react";
import styles from "./EmergingMbl.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function Emerging() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }
  return (
    <>
      <div className={styles.Services}>
        <div className={styles.subPart}>
          <div className={styles.left}>
            <h1 className={styles.leftHead}>
              Emerging mobile technologies that we work with
            </h1>
            <p className={styles.leftPara}>
              We are at the forefront of innovation, actively engaging with
              emerging mobile technologies that redefine the digital landscape.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Contact Us </button>
          </div>
<div className={styles.imageRow}>
          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a8d277b71f435942c4_Img_1.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a8fc412dbad1d3ad43_Img_2.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9f3138c66d4651753_Img_3.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
          <div>
          <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9c0b83e8fd3af1337_Img_4.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a82ae58c2568eb013f_Img_5.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a857cb87f4d05cff85_Img_6.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
            </div>
          </div>
        </div>
        </div>
    
    </>
  );
}
export default Emerging;
