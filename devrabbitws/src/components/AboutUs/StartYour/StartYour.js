import React from "react";
import styles from "./StartYour.module.scss";
import { useNavigate } from "react-router-dom";

const StartYour = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contactus')
  }
  return (
    <>
      <div className={styles.bg}>
        <h1 className={styles.text}>
          Start your Digital now.
          <br />
          Contact our solution specialists
        </h1>
        <button className={styles.bookDemo} onClick={handleNavigate}>Contact Us</button>
      </div>
    </>
  );
};
export default StartYour;
