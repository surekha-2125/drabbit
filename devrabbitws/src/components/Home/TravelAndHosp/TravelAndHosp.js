import React from "react";
import styles from "./TravelAndHosp.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function TravelAndHosp() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contactus");
  };
  return (
    <>
      <div className={styles.Services}>
        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>Travel & Hospitality</h1>
            <p className={styles.leftPara}>
              The Travel & Hospitality industry has changed dramatically over
              the past few years into a highly complex and competitive
              environment with major challenges being the ever-changing consumer
              demographics, access to information and opinions with just a click
              and above all, the need for an inexpensive yet exotic experiences.
              These demands doesn’t trouble enterprises geared up with the right
              information technology and strategy at their service. Today,
              companies are competing with each other to attract consumerthrough
              their preferred websites, the social media pages, via mobiles.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}>
              {" "}
              Book Demo{" "}
            </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538ed0daaccf2320d24af4d_Travel%26Hospitality.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default TravelAndHosp;
