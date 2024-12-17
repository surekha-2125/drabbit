import React from "react";
import styles from "./BankingAndFin.module.scss";
import { useNavigate } from "react-router-dom";

// import webTransparent from "../../assets/webTransparent.png";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";

function BankingAndFin() {
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
            Banking & Financial Services (BFS)
            </h1>
            <p className={styles.leftPara}>
            In today's rapidly evolving financial world, the journey of everybank and financial institution is marked by challenges that standtall and daunting. Amidst the rush of technological advancements, themaze of regulatory shifts, and the ever-shifting sands of consumerexpectations, emerges the story of DevRabbit—a story of innovation,foresight, and excellence.
            </p>
            <button className={styles.bookDemo} onClick = {handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bbf5c1ad8b14986b48f9_Banking%26Financial-Services.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default BankingAndFin;
