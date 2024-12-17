import React from "react";
import styles from "./MobileStrategy.module.scss";
import { useNavigate } from "react-router-dom";
// import ShareIcon from "@mui/icons-material/Share";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function MobileStrategy() {
  const navigate = useNavigate();
   const handleNavigate = () => {
    navigate('/contactus')
   }
  return (
    <>
      {/* <div className={styles.post_actions}>
     <div className={styles.action}>
              <ShareIcon className={styles.icon} />
              <span>Share</span>
            </div>
    </div> */}
      <div className={styles.Services}>
        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>Mobile Strategy</h1>
            <p className={styles.leftPara}>
            We will develop a solid mobile app development strategy that aligns with your technology and business goals.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="	https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d9abf1affe99985f94670_Illu-MS.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileStrategy;
