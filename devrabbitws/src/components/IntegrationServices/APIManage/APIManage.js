import React, { useState } from "react";
import styles from "./APIManage.module.scss";
import IC from '../../../assets/icons (2)/icons/IC/48.png';
import IOT from '../../../assets/icons (2)/icons/IOT/48px.png';
import staff from '../../../assets/icons (2)/icons/Staff/48px.png'

const APIManage= () => {
  const [data, setData] = useState([
    {
      heading:<img src={IOT} className={styles.image}/> ,
      cardHead: "API Development:",
      cardPara:
        "We craft APIs that address specific challenges, ensuring seamless communication and enhancing interoperability across your tech landscape."
    // readmore:""
    },
    {
      heading:<img src={IC} className={styles.image}/>,
      cardHead: "API Management:",
      cardPara:
        "Beyond just development, we oversee the lifecycle of your APIs.Our focus is on ensuring scalability, security, and top-tier performance."
    },
    {
      heading: <img src={staff} className={styles.image}/> ,
      cardHead: "Third-party API Integration:",
      cardPara:
        "We effortlessly blend third-party services, be it payment gateways or data analytics, into your core operations, amplifying functionality and business value"
    },
    
  ]);

  return (
    <>
      <h1 className={styles.ourServicesHead}>API Management & Integrations</h1>
      <p className={styles.para}>We architect, design, and manage API solutions ensure that your platforms are not just connected but also optimized for peak performance, scalability, and security.</p>
      <div className={styles.bg}>
        {data.map((item, index) => (
          <div key={index} className={styles.container}>
            <p className={styles.head}>{item.heading}</p>
            <p className={styles.mainhead}>{item.cardHead}</p>
            <p className={styles.cardPara}>{item.cardPara}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default APIManage;

