import React from "react";
import styles from "./DRCrafting.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function DRCrafting() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }

  return (
    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>DevRabbit: Crafting ServiceNow Solutions for All - from Startups to Giants
            </h1>
            <p className={styles.leftPara}>
            ServiceNow, while being a robust platform, often requires fine-tuning to truly resonate with the unique challenges and aspirations of an organization.  As a ServiceNow partner, we help solve those challenges and ensure you get the most out of your investment
‍
            </p>
            <button className={styles.bookDemo} onClick= {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652f802df07d0af704eb096a_servicenow.png"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default DRCrafting;
