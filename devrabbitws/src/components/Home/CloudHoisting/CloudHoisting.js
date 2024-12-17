import React from "react";
import styles from "./CloudHoisting.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function CloudHoisting() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus');
  }
  return (
    <>
      <div className={styles.Services}>
        

        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>
            Cloud Hosting <br/>Services
            </h1>
            <p className={styles.leftPara}>
            Cloud for agility, flexibility and scalability and is enabling businesses of all sizes to achieve operational efficiencies and save costs on numerous processes.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eec96cf5f0a6e8c2361_Illu_2.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default CloudHoisting;
