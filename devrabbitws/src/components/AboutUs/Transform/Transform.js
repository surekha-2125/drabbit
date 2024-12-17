import React from "react";
import styles from "./Transform.module.scss";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function Transform() {
  return (
    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>
            Transform your business with the help of DevRabbit
            </h1>
            <p className={styles.leftPara}>
            We are your trusted business IT partner. DevRabbit is a US based Tech consulting firm that provides state-of-the-art solutions to make your business better. Our areas of expertise can be divided into three core areas: Enterprise Mobility, Web Application Development and Cloud Consulting. Our goal is to support our clients and partners reduce their time to market and save application development and support costs. We have great vision, passion to drive our clients’ innovation in agility basis to reach their business goals. With a working model that is centred around Integrity and Transparency, every client engagement is a win – win situation at DevRabbit.
            </p>
            
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d318c40eafe92f23d38b9_about-company-p-800.png"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Transform;
