

import React from "react";
import styles from "./WhatISInternet.module.scss";
import { useNavigate } from "react-router-dom";



function WhatISInternet() {
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
            What is Internet Of Things (IoT) ?
            </h1>
            <p className={styles.leftPara}>
            Internet of Things (IoT) is the network of physical objects with embedded technology accessed through the Internet. When objects can sense and communicate, it changes how and where decisions are made, and who makes them.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6527da8a6b5eaa663afdd3aa_iot-solutions-services.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default WhatISInternet;

