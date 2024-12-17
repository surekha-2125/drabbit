import React from "react";
import styles from "./IntiServices.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function IntiServices() {
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
            Integration Services
            </h1>
            <p className={styles.leftPara}>
            In today's interconnected digital landscape, seamless integration is essential for business growth and efficiency. Our integration services are designed to bridge the gap between diverse systems and processes. Whether you're looking to connect various tools, transition to the cloud, or harness the potential of IoT, we're hereto simplify the journey, setting the stage for a cohesive and future-ready enterprise.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bcdca3276a7a6a5efcd5_Integration-Services.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default IntiServices;
