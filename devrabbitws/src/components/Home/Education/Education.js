import React from "react";
import styles from "./Education.module.scss";
import { useNavigate } from "react-router-dom";
// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function Education() {
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
            Education
            </h1>
            <p className={styles.leftPara}>
            Education these days is closely coupled with Technology, and the possibilities are unfolding to be limitless. The virtual classrooms, interactive video sessions and most importantly tracking the performance results of the students, educators and management across the systems all demand very stable and robust systems. In addition to the above, the institutions are all in need of other functionalities — regulation and encapsulation. The answer is simple – an Innovative thought, best-in-class technology, and the right approach.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652a6b2287d36e6c666627f4_education-one-p-800.png"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
