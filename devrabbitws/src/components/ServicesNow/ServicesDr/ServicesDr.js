import React, { useState } from "react";
import styles from "./ServicesDr.module.scss";

import { LiaSalesforce  } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { GrSettingsOption } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";



const ServicesDr = () => {
  const [data, setData] = useState([
    {
      heading: <LiaSalesforce className={styles.iconss}/>,
      cardHead: "ServiceNow Implementation:",
      cardPara:
        "End-to-end solutions from setup to deployment.",
        readmore:"ReadMore" 
   
    },
    {
      heading: <IoSettingsOutline className={styles.iconss}/>,
      cardHead: "ServiceNow Industry Solutions:",
      cardPara:
        "Targeted solutions optimized for various industry verticals.",
        readmore:"ReadMore" 
    },
    {
      heading: <GrSettingsOption className={styles.iconss}/>,
      cardHead: "ServiceNow Modules Expertise:",
      cardPara:
        "Specializing in ITSM, ITOM, HRSD, CSM, and beyond.",
        readmore:"ReadMore" 
    },
    
  ]);

  return (
    <>
      <h1 className={styles.ourServicesHead}>Services</h1>
      <div className={styles.bg}>
        {data.map((item, index) => (
          <div key={index} className={styles.container}>
            <p className={styles.head}>{item.heading}</p>
            <p className={styles.mainhead}>{item.cardHead}</p>
            <p className={styles.cardPara}>{item.cardPara}</p>
            <div className={styles.readmoree}>
            {/* <p className={styles.readmore}>{item.readmore}</p>
            <FaArrowRightLong className={styles.arrow}/> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesDr;

