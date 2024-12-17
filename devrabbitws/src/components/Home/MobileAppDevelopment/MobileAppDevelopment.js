
// import styles from './MobileAppDevelopment.module.scss';
// import React, { useState } from "react";
// import { MdSecurity } from "react-icons/md";
// import MessageIcon from "@mui/icons-material/Message";
// import { FaMobileScreenButton } from "react-icons/fa6";
// import { BiAnalyse } from "react-icons/bi";
// import { BsPersonCircle } from "react-icons/bs";
// import { BsBroadcastPin } from "react-icons/bs";
// import { FaMobileRetro } from "react-icons/fa6";

// const MobileAppDevelopment = () => {
//   const [data, setData] = useState([
//     {
//       heading: <MdSecurity  className={styles.icon_button} />,
//       cardHead: "Security Assessment",
      
//     },
//     {
//       heading: <FaMobileScreenButton className={styles.icon_button} />,
//       cardHead: "Strategic Mobile",
//       cardPara:
//         "The Internet of Things (IoT) is the network of physical objects with embedded technology accessed through the Internet."
//     },
//     {
//       heading: <BiAnalyse className={styles.icon_button} />,
//       cardHead: "enterprise Mobility Trends Analysis",
//       cardPara:
//         "According to the United Nations, six of the seven billion people worldwide now have mobile phones."
//     },
//     {
//       heading: <BsPersonCircle className={styles.icon_button} />,
//       cardHead: "Analyzing Market and User Research",
//       cardPara:
//         "Enterprise marketing software can deliver sign, personalized experiences across channels to increase customer engagement"
//     },
//     {
//       heading: <BsBroadcastPin className={styles.icon_button} />,
//       cardHead: "Effective Roadmaps for Project Execution",
//       cardPara:
//         "Our domain expertise includes financial instruments such as Equity, Derivatives, Commodities, Currencies."
//     },
//     {
//       heading: <FaMobileRetro className={styles.icon_button} />,
//       cardHead: "Application Development Management",
//       cardPara:
//         "With increasing digital transformation of businesses, the need to shift processes, activities and strategies"
//     }
   
//   ]);

//   return (
//     <>
//     <div className={styles.totalBg}>
//       <h1 className={styles.ourServicesHead}>Mobile App Development Services</h1>
//       <div className={styles.card}>
//       <div className={styles.bg}>
//         {data.map((item, index) => (
//           <div key={index} className={styles.container}>
//             <p className={styles.head}>{item.heading}</p>
//             <p className={styles.mainhead}>{item.cardHead}</p>
//             {/* <p className={styles.cardPara}>{item.cardPara}</p> */}
//           </div>
//         ))}
//       </div>
     
//       </div>
//       </div>
//     </>
//   );
// };

// export default MobileAppDevelopment;

//===============

import styles from './MobileAppDevelopment.module.scss';
import React, { useState } from "react";
import { MdSecurity } from "react-icons/md";
import MessageIcon from "@mui/icons-material/Message";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BiAnalyse } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { BsBroadcastPin } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";

const MobileAppDevelopment = () => {
  return(
    <>
    <div className={styles.totalBg}>
       <h1 className={styles.ourServicesHead}>Mobile App Development Services</h1>
      <div className={styles.card}>
        <div className={styles.row}>
        <div className={styles.widths}>
        <MdSecurity  className={styles.icon_button} />
        <h1>Security Assesement</h1>
        </div>
        <div  className={styles.widths}>
        <MdSecurity  className={styles.icon_button} />
        <h1>Strategic Mobile Project Approach</h1>
        </div>
        <div  className={styles.widths}>
        <MdSecurity  className={styles.icon_button} />
        <h1>Enterprise Mobility
        Trends Analysis</h1>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={styles.row}>
        <div className={styles.widths}>
        <MdSecurity  className={styles.icon_button} />
        <h1>Analyzing Market and User Research</h1>
        </div>
        <div  className={styles.widths}>
        <MdSecurity  className={styles.icon_button} />
        <h1>Effective Roadmaps for Project Execution</h1>
        </div>
        <div  className={styles.widths}>
        <MdSecurity  className={styles.icon_button} />
        <h1>Application Development Management</h1>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default MobileAppDevelopment;