

import React, { useState } from "react";
import styles from "./BAndPGateway.module.scss";
import IC from '../../../assets/icons (2)/icons/IC/48.png';
import IOT from '../../../assets/icons (2)/icons/IOT/48px.png';
import staff from '../../../assets/icons (2)/icons/Staff/48px.png'

const ServicesDr= () => {
  const [data, setData] = useState([
    {
      heading:<img src={IOT} className={styles.image}/> ,
      cardHead: "Supply Chain Integration:",
      cardPara:
        "By integrating data flows within your supply chain, we drive efficiency, enhance collaboration, and ensure you remain in sync with suppliers and partners."
    // readmore:""
    },
    {
      heading:<img src={IC} className={styles.image}/>,
      cardHead: "Payment Gateway Integration:",
      cardPara:
        "We integrate payment gateways like PayPal or Stripe into your platforms for smooth transactions, ensuring both security and convenience for your users."
    },
    {
      heading: <img src={staff} className={styles.image}/> ,
      cardHead: "B2B Integrations:",
      cardPara:
        "Our B2B integration services ensure seamless system-to-system communications, driving effective collaborations and streamlined operations between businesses."
    },
    
  ]);

  return (
    <>
      <h1 className={styles.ourServicesHead}>Business and Payment Gateway Integrations</h1>
      <p className={styles.para}>Boost your transactional efficiency with our integration expertise. Whether it's B2B or customer-facing, we craft solutions that amplify your business agility.</p>
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

export default ServicesDr;