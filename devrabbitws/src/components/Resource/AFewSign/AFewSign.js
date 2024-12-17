import React, { useState } from "react";
import styles from "./AFewSign.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const AFewSign = () => {
  const [data, setData] = useState([
    {
      heading: <img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566e0fc62ade8340e11668c_OneHubPOS.png" className={styles.image}/>,
      cardHead: "Salesforce Consulting",
      cardPara:
        "An integrated platform and user-friendly point-of-sale software company that helps businesses drive profitability through customized POS solutions.",
    readmore : "Readmore"
    },
    {
      heading: <img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566e2578416eed5e5308dc0_notifii.png" className={styles.image}/>,
      cardHead: "ServiceNow",
      cardPara:
        "Notifii is the leading package tracking software and communication platform for apartments, student housing & corporate buildings.",
        readmore : "Readmore"
    },
    {
      heading: <img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566fc7f1dacc3fe990f01ed_mckesson.png" className={styles.image}/>,
      cardHead: "Integration Services",
      cardPara:
        "A global healthcare company working with biopharma, care providers, pharmacies, manufacturers, governments, and others to deliver accessible and affordable products and services.",
        readmore : "Readmore"
    },
    {
      heading: <img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566e2c91b0c0cb5712d6d55_SmartQE.png" className={styles.image}/>,
      cardHead: "Business Assurance Services",
      cardPara:
        "Powered by AI and ML, SmartQE is a cloud-based, open-source framework used for functional test automation and mobile platform releases.",
        readmore : "Readmore"
    },
    {
      heading: <img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566e3077ffbc38321346724_SuiteAmerica.png" className={styles.image}/>,
      cardHead: "IoT Solutions and Services",
      cardPara:
        "Suite America provides platinum-level service in Corporate Housing, Short Term Apartments and GSA Contract Housing.",
        readmore : "Readmore"
    },
    {
      heading: <img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566faadd7c989e36605c352_p2plogo.png" className={styles.image}/>,
      cardHead: "Digital Consulting Services",
      cardPara:
        "A cloud based dispatch platform that is simple and mobile based enabling dispatch management for drivers besides verifying parking reg. lot management and driver management.",
        readmore : "Readmore"
    },
    {
      heading:<img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566faea7345521f6d0fa8ad_Century-property.png" className={styles.image}/>,
      cardHead: "Staffing",
      cardPara: "Century Property Management Services is a real estate company that offers residential rental services.",
      readmore : "Readmore"
    },
    {
      heading:<img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566fbfe518b379a3aa3d63d_Clinical%20Research%20Company.png" className={styles.image}/>,
      cardHead: "Staffing",
      cardPara: "A reputed Clinical Research Company that enables scientists, researchers and clinicians to address their most critical challenges across science and healthcare.",
      readmore : "Readmore"
    },
    {
      heading:<img src = "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6566fb9f308dac76718eb618_SAAS-based.png" className={styles.image}/>,
      cardHead: "Staffing",
      cardPara: "Provides software-as-a-service products related to customer support, sales, and other customer data and communications for agents to create a smoother, more personalised experience.",
     readmore : "Readmore"
    }
  ]);

  return (
    <>
      <h1 className={styles.ourServicesHead}>A few significant case studies</h1>
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

export default AFewSign;

