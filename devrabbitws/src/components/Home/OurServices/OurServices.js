// import React from "react";
// import styles from "./OurServices.module.scss";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const OurServices = () => {
//   const [data, setData] = useState([
//     {
//       heading: "Cricket",
//       cardHead:"Salesforce Consulting",
//       cardPara:"Traditional QA services have proved inadequate in addressing today’s business needs."
        
//       //path: "/cricket", // Add path for routing
//     },
//     {
//       heading: "Football",
//      cardHead:
//         "ServiceNow",
//         cardPara:"The Internet of Things (IoT) is the network of physical objects with embedded technology accessed through the Internet."
//       //path: "/football", // Add path for routing
//     },
//     {
//      heading: "Hockey",
//       cardHead:
//         "Integration Services",
//         cardPara:"According to the United Nations, six of the seven billion people worldwide now have mobile phones."
// //path: "/hockey", // Add path for routing
//     },
//     {
//         heading: "Hockey",
//          cardHead:
//            "Business Assurance Services",
//             cardPara:"Enterprise marketing software can deliver sign, personalized experiences across channels to increase customer engagement"
//          //path: "/hockey", // Add path for routing
//        },
//        {
//         heading: "Hockey",
//          cardHead:
//            "IoT Solutions and Services",
//             cardPara:"Our domain expertise includes financial instruments such as Equity, Derivatives, Commodities, Currencies."
//          //path: "/hockey", // Add path for routing
//        },
//        {
//         heading: "Hockey",
//          CardHead:
//            "Digital Consulting Services",
//             cardPara:"With increasing digital transformation of businesses, the need to shift processes, activities and strategies"
//          //path: "/hockey", // Add path for routing
//        },
//        {
//         heading: "Hockey",
//          CardHead:
//            "Staffing",
//             cardPara:"Principals and Senior Staff worked directly in service areas."
//          //path: "/hockey", // Add path for routing
//        }
       
    
//   ]);

//   return (
//     <>
//     <h1>Our Services</h1>
//     <div className={styles.bg}>
        
//       {data.map((item) => (
//         <div key={item.heading} className={styles.container}>
//           <p className={styles.head}>{item.heading}</p>
//           {/* <img
//             src={item.image}
//             alt={`${item.heading} Image`}
//             className={styles.image}
//           /> */}
//           <p className={styles.mainhead}>{item.cardHead}</p>
//           <p className={styles.head}>{item.cardPara}</p>
         
            
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default OurServices;

//-----------------------------

// import React, { useState } from "react";
// import styles from "./OurServices.module.scss";
// import { LiaSalesforce  } from "react-icons/lia";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoSettingsOutline } from "react-icons/io5";
// import { GrSettingsOption } from "react-icons/gr";
// import { CiUmbrella } from "react-icons/ci";
// import { TbCloudDataConnection } from "react-icons/tb";
// import { GiDigitalTrace } from "react-icons/gi";
// import { MdPeopleAlt } from "react-icons/md";



// const OurServices = () => {
//   const [data, setData] = useState([
//     {
//       heading: <LiaSalesforce className={styles.iconss}/>,
//       cardHead: "Salesforce Consulting",
//       cardPara:
//         "Traditional QA services have proved inadequate in addressing today’s business needs.",
//      readmore:"ReadMore" 
//     },
//     {
//       heading: <IoSettingsOutline className={styles.iconss}/>,
//       cardHead: "ServiceNow",
//       cardPara:
//         "The Internet of Things (IoT) is the network of physical objects with embedded technology accessed through the Internet.",
//          readmore:"ReadMore "
//     },
//     {
//       heading: <GrSettingsOption className={styles.iconss}/>,
//       cardHead: "Integration Services",
//       cardPara:
//         "According to the United Nations, six of the seven billion people worldwide now have mobile phones.",
//          readmore:"ReadMore "
//     },
//     {
//       heading: <CiUmbrella className={styles.iconss}/>,
//       cardHead: "Business Assurance Services",
//       cardPara:
//         "Enterprise marketing software can deliver sign, personalized experiences across channels to increase customer engagement",
//          readmore:"ReadMore "
//     },
//     {
//       heading: <TbCloudDataConnection className={styles.iconss}/>,
//       cardHead: "IoT Solutions and Services",
//       cardPara:
//         "Our domain expertise includes financial instruments such as Equity, Derivatives, Commodities, Currencies.",
//          readmore:"ReadMore "
//     },
//     {
//       heading: <GiDigitalTrace className={styles.iconss}/>,
//       cardHead: "Digital Consulting Services",
//       cardPara:
//         "With increasing digital transformation of businesses, the need to shift processes, activities and strategies",
//          readmore:"ReadMore "
//     },
//     {
//       heading: <MdPeopleAlt className={styles.iconss}/>,
//       cardHead: "Staffing",
//       cardPara: "Principals and Senior Staff worked directly in service areas.",
//        readmore:"ReadMore "
//     }
//   ]);

//   return (
//     <>
//       <h1 className={styles.ourServicesHead}>Our Services</h1>
//       <div className={styles.bg}>
//         {data.map((item, index) => (
//           <div key={index} className={styles.container}>
//             <p >{item.heading}</p>
//             <p className={styles.mainhead}>{item.cardHead}</p>
//             <p className={styles.cardPara}>{item.cardPara}</p>
//             <div className={styles.readmoree}>
//             <p className={styles.readmore}>{item.readmore}</p>
//             <FaArrowRightLong className={styles.arrow}/>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default OurServices;

///======above code is good

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./OurServices.module.scss";
import { LiaSalesforce } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GrSettingsOption } from "react-icons/gr";
import { CiUmbrella } from "react-icons/ci";
import { TbCloudDataConnection } from "react-icons/tb";
import { GiDigitalTrace } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";

const OurServices = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [data, setData] = useState([
    {
      heading: <LiaSalesforce className={styles.iconss} />,
      cardHead: "Salesforce Consulting",
      cardPara:
        "Traditional QA services have proved inadequate in addressing today’s business needs.",
      readmore: "ReadMore",
      route: "/services/salesforce_consulting" // Add a route for each service
    },
    {
      heading: <IoSettingsOutline className={styles.iconss} />,
      cardHead: "ServiceNow",
      cardPara:
        "The Internet of Things (IoT) is the network of physical objects with embedded technology accessed through the Internet.",
      readmore: "ReadMore",
      route: "/services/service_now" // Add a route for each service
    },
    {
      heading: <GrSettingsOption className={styles.iconss} />,
      cardHead: "Integration Services",
      cardPara:
        "According to the United Nations, six of the seven billion people worldwide now have mobile phones.",
      readmore: "ReadMore",
      route: "/services/integration_services" // Add a route for each service
    },
    {
      heading: <CiUmbrella className={styles.iconss} />,
      cardHead: "Business Assurance Services",
      cardPara:
        "Enterprise marketing software can deliver sign, personalized experiences across channels to increase customer engagement",
      readmore: "ReadMore",
      route: "/services/business_assurance_services" // Add a route for each service
    },
    {
      heading: <TbCloudDataConnection className={styles.iconss} />,
      cardHead: "IoT Solutions and Services",
      cardPara:
        "Our domain expertise includes financial instruments such as Equity, Derivatives, Commodities, Currencies.",
      readmore: "ReadMore",
      route: "/services/iot_solutions_and_services" // Add a route for each service
    },
    {
      heading: <GiDigitalTrace className={styles.iconss} />,
      cardHead: "Digital Consulting Services",
      cardPara:
        "With increasing digital transformation of businesses, the need to shift processes, activities and strategies",
      readmore: "ReadMore",
      route: "/services/digital_consulting_services" // Add a route for each service
    },
    {
      heading: <MdPeopleAlt className={styles.iconss} />,
      cardHead: "Staffing",
      cardPara: "Principals and Senior Staff worked directly in service areas.",
      readmore: "ReadMore",
      route: "/services/staffing" // Add a route for each service
    }
  ]);

  const handleReadMoreClick = (route) => {
    navigate(route); // Navigate to the specific route when Read More is clicked
  };

  return (
    <>
      <h1 className={styles.ourServicesHead}>Our Services</h1>
      <div className={styles.bg}>
        {data.map((item, index) => (
          <div key={index} className={styles.container}>
            <p>{item.heading}</p>
            <p className={styles.mainhead}>{item.cardHead}</p>
            <p className={styles.cardPara}>{item.cardPara}</p>
            <div className={styles.readmoree}>
              <p
                className={styles.readmore}
                onClick={() => handleReadMoreClick(item.route)} // Pass the route to the click handler
              >
                {item.readmore}
              </p>
              <FaArrowRightLong className={styles.arrow} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurServices;

