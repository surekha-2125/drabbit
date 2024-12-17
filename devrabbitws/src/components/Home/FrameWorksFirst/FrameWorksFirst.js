import React from "react";
import styles from "./FrameWorksFirst.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function FrameWorkFirst() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }
  return (
    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>Frameworks
            </h1>
            <p className={styles.leftPara}>
            A mobile based application framework is designed to support the development of the phone applications that are written to leverage native phone capabilities like geo data or contact list or camera etc.,
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc2ee1039870d56e00e5e_Framework.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FrameWorkFirst;
