
import React, { useState } from "react";
import styles from "./SGOfDevRabbit.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";


const SGOfDevRabbit = () => {
  const [data, setData] = useState([
    {
      heading: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6567075e77ae9ad084424496_servicenow.png" className={styles.image}/>,
      cardHead: "Salesforce Consulting",
      cardPara:
        "An integrated platform and user-friendly point-of-sale software company that helps businesses drive profitability through customized POS solutions.",
     readmore:"Readmore"
    }
    
  ]);

  return (
    <>
 
      <h1 className={styles.ourServicesHead}>Solution guides of DevRabbit Implementations with its Technology Partners
      </h1>
      
      <div className={styles.bg}>
        {data.map((item, index) => (
          <div key={index} className={styles.container}>
            <p className={styles.head}>{item.heading}</p>
            {/* <p className={styles.mainhead}>{item.cardHead}</p> */}
            <p className={styles.cardPara}>{item.cardPara}</p>
            <div className={styles.read}>
            <p className={styles.readmore}>{item.readmore}</p>
            <FaArrowRightLong className={styles.arrow}/>
            </div>

          </div>
        ))}
      </div>
     
    </>
  );
};

export default SGOfDevRabbit;
