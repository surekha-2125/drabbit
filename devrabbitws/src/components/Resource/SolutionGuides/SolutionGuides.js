import React from "react";
import styles from "./SolutionGuides.module.scss";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import ShareIcon from "@mui/icons-material/Share";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function SolutionGuides() {
  const navigate= useNavigate();
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
         
            <h1 className={styles.leftHead}>Solution Guides</h1>
            <p className={styles.leftPara}>
            With a vast domain centric application development experience, DevRabbit with its technology partners delivered comprehensive, tailored IT solutions designed
            to optimize adoptability and enhance efficiency.
            </p>
            {/* <div className={styles.textarrow}> */}
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo 
            {/* <FaArrowRightLong className={styles.arrow}/> */}
            </button>
            </div>
          {/* </div> */}

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/656717c6d044d83c525aab12_SolutionGuides.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default SolutionGuides;
