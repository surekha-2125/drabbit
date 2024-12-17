// // import React, { useState } from "react";
// // import AppsIcon from "@mui/icons-material/Apps";
// // import styles from "./Header.module.scss"; // Import SCSS for styling
// // import { Link } from "react-router-dom";
// // import StorefrontIcon from "@mui/icons-material/Storefront";
// // import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
// // import MessageIcon from "@mui/icons-material/Message";

// // const Header = () => {
// //   const [activeDropdown, setActiveDropdown] = useState(null);

// //   const handleDropdownToggle = (menu) => {
// //     // setActiveDropdown(activeDropdown === menu ? null : menu);
// //     setActiveDropdown(menu);
// //   };

// //   return (
// //     <header className={styles.header}>
// //       <div className={styles.header_left}>
// //         <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg"/>

// //       </div>
// //       <nav className={styles.header_right}>
// //         <ul className={styles.nav_links}>
// //           {/* Services Dropdown */}
// //           <li
// //             className={styles.nav_item}
// //             onMouseEnter={() => handleDropdownToggle("services")}
// //             onMouseLeave={() => handleDropdownToggle(null)}
// //           >
// //             <span>Services</span>
// //             {activeDropdown === "services" && (
// //               <ul className={styles.dropdown}>
// //                 <li>
// //                   <MessageIcon className={styles.icon_button} />
// //                   <Link to="/services/salesforce_consulting">
// //                     Salesforce Consulting
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <OndemandVideoIcon className={styles.icon_button} />
// //                   <Link to="/services/service_now">Service Now</Link>
// //                 </li>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/services/ai_solution_services">
// //                     AI Solution Services
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <StorefrontIcon className={styles.icon_button} />
// //                   <Link to="/services/business_assurance_services">
// //                     Business Assurance
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <MessageIcon className={styles.icon_button} />

// //                   <Link to="/services/integration_services">
// //                     Integration Services
// //                   </Link>

// //                 </li>
// //                 <li>
// //                   <OndemandVideoIcon className={styles.icon_button} />
// //                   <Link to="/services/digital_consulting_services">
// //                     Digital Consulting
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/services/iot_solutions_and_services">
// //                     IoT Solutions and Services
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <StorefrontIcon className={styles.icon_button} />
// //                   <Link to="/services/staffing">Staffing</Link>
// //                 </li>
// //               </ul>
// //             )}
// //           </li>
// //           <ul/>

// //           {/* Industries Dropdown */}
// //           <li
// //             className={styles.nav_item}
// //             onMouseEnter={() => handleDropdownToggle("industries")}
// //             onMouseLeave={() => handleDropdownToggle(null)}
// //           >
// //             <span>Industries</span>
// //             {activeDropdown === "industries" && (
// //               <ul className={styles.dropdown}>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/industries/real_estate">Real Estate</Link>
// //                 </li>
// //                 <li>
// //                   <MessageIcon className={styles.icon_button} />
// //                   <Link to="/industries/healthcare">HealthCare</Link>
// //                 </li>
// //                 <li>
// //                   <OndemandVideoIcon className={styles.icon_button} />
// //                   <Link to="/industries/bfs">BFS</Link>
// //                 </li>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/industries/education">Education</Link>
// //                 </li>
// //                 <li>
// //                   <StorefrontIcon className={styles.icon_button} />
// //                   <Link to="/industries/travel">Travel</Link>
// //                 </li>
// //               </ul>
// //             )}
// //           </li>

// //           {/* Technology Dropdown */}
// //           <li
// //             className={styles.nav_item}
// //             onMouseEnter={() => handleDropdownToggle("technology")}
// //             onMouseLeave={() => handleDropdownToggle(null)}
// //           >
// //             <span>Technology</span>
// //             {activeDropdown === "technology" && (
// //               <ul className={styles.dropdown}>
// //                 <li>
// //                   <StorefrontIcon className={styles.icon_button} />
// //                   <Link to="/technology/mobile_strategy">Mobile Strategy</Link>
// //                 </li>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/technology/mobile_bi">Mobile BI</Link>
// //                 </li>
// //                 <li>
// //                   <MessageIcon className={styles.icon_button} />
// //                   <Link to="/technology/frameworks">Frameworks</Link>
// //                 </li>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/technology/devops">DevOps</Link>
// //                 </li>
// //               </ul>
// //             )}
// //           </li>

// //           {/* Resources Dropdown */}
// //           <li
// //             className={styles.nav_item}
// //             onMouseEnter={() => handleDropdownToggle("resources")}
// //             onMouseLeave={() => handleDropdownToggle(null)}
// //           >
// //             <span>Resources</span>
// //             {activeDropdown === "resources" && (
// //               <ul className={styles.dropdown}>
// //                 <li>
// //                   <AppsIcon className={styles.icon_button} />
// //                   <Link to="/resources/case_studies">Case Studies</Link>
// //                 </li>
// //                 <li>
// //                   <MessageIcon className={styles.icon_button} />
// //                   <Link to="/resources/solution_guides">Solution Guides</Link>
// //                 </li>
// //               </ul>
// //             )}
// //           </li>

// //           {/* About Us */}
// //           <li
// //             className={styles.nav_item}
// //             onMouseEnter={() => handleDropdownToggle("about")}
// //             onMouseLeave={() => handleDropdownToggle(null)}
// //           >
// //             {/* <span>About Us</span> */}
// //             <Link to="/aboutus">About Us</Link>
// //             {/* You can add links here if you have pages for About Us */}
// //           </li>

// //           {/* Contact Us */}
// //           <li
// //             className={styles.nav_item}
// //             onMouseEnter={() => handleDropdownToggle("contact")}
// //             onMouseLeave={() => handleDropdownToggle(null)}
// //           >
// //             {/* <span>Contact Us</span> */}
// //             <Link to="/contactus">Contact Us</Link>
// //             {/* You can add a link to your contact page here */}
// //           </li>
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;

// // // import React, { useState } from "react";
// // // import AppsIcon from "@mui/icons-material/Apps";
// // // import styles from "./Header.module.scss"; // Import SCSS for styling
// // // import { Link } from "react-router-dom";
// // // import StorefrontIcon from "@mui/icons-material/Storefront";
// // // import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
// // // import MessageIcon from "@mui/icons-material/Message";
// // // import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'; // Downward arrow
// // // import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';// Upward arrow

// // // const Header = () => {
// // //   const [activeDropdown, setActiveDropdown] = useState(null);

// // //   const handleDropdownToggle = (menu) => {
// // //     setActiveDropdown(activeDropdown === menu ? null : menu);
// // //   };

// // //   return (
// // //     <header className={styles.header}>
// // //       <div className={styles.header_left}>
// // //         <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg" alt="DevRabbit Logo" />
// // //       </div>
// // //       <nav className={styles.header_right}>
// // //         <ul className={styles.nav_links}>
// // //           {/* Services Dropdown */}
// // //           <li
// // //             className={styles.nav_item}
// // //             onMouseEnter={() => handleDropdownToggle("services")}
// // //             onMouseLeave={() => handleDropdownToggle(null)}
// // //           >
// // //             <span>Services</span>
// // //             {/* Display downward or upward arrow based on active dropdown */}
// // //             {activeDropdown === "services" ? (
// // //               <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
// // //             ) : (
// // //               <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
// // //             )}
// // //             {activeDropdown === "services" && (
// // //               <ul className={styles.dropdown}>
// // //                 <li>
// // //                   <MessageIcon className={styles.icon_button} />
// // //                   <Link to="/services/salesforce_consulting">Salesforce Consulting</Link>
// // //                 </li>
// // //                 <li>
// // //                   <OndemandVideoIcon className={styles.icon_button} />
// // //                   <Link to="/services/service_now">Service Now</Link>
// // //                 </li>
// // //                 <li>
// // //                   <AppsIcon className={styles.icon_button} />
// // //                   <Link to="/services/ai_solution_services">AI Solution Services</Link>
// // //                 </li>
// // //                 <li>
// // //                   <StorefrontIcon className={styles.icon_button} />
// // //                   <Link to="/services/business_assurance_services">Business Assurance</Link>
// // //                 </li>
// // //                 <li>
// // //                   <MessageIcon className={styles.icon_button} />
// // //                   <Link to="/services/integration_services">Integration Services</Link>
// // //                 </li>
// // //                 <li>
// // //                   <OndemandVideoIcon className={styles.icon_button} />
// // //                   <Link to="/services/digital_consulting_services">Digital Consulting</Link>
// // //                 </li>
// // //                 <li>
// // //                   <AppsIcon className={styles.icon_button} />
// // //                   <Link to="/services/iot_solutions_and_services">IoT Solutions and Services</Link>
// // //                 </li>
// // //                 <li>
// // //                   <StorefrontIcon className={styles.icon_button} />
// // //                   <Link to="/services/staffing">Staffing</Link>
// // //                 </li>
// // //               </ul>
// // //             )}
// // //           </li>
// // //         </ul>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// //=========

// import React, { useState } from "react";
// import AppsIcon from "@mui/icons-material/Apps";
// import styles from "./Header.module.scss"; // Import SCSS for styling
// import { Link } from "react-router-dom";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
// import MessageIcon from "@mui/icons-material/Message";
// import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"; // Upward arrow
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Downward arrow

// import realstate from "../../assets/zip realestate/realstate.jpeg";
// import Salesforce from'../../assets/48px.png';
// import real from '../../assets/zip/real.png';
// import rea from '../../assets/REAL ESTATE WHITE/rea.png'
// import HeaderResources from "../HeaderResources/HeaderResources";
// import HeaderTechno from "./HeaderTechno/HeaderTechno";
// import HeaderIndustries from "./HeaderIndustries/HeaderIndustries";
// import HeaderServices from "./HeaderServices/HeaderServices";

// const Header = () => {
  // const [activeDropdown, setActiveDropdown] = useState(null);

  // const handleDropdownToggle = (menu) => {
  //   setActiveDropdown(activeDropdown === menu ? null : menu);
  // };

//   return (
    // <header className={styles.header}>
      // <div className={styles.header_left}>
      // <HeaderServices/>
      //   {/* <img
      //     src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg"
      //     alt="DevRabbit Logo"
      //   />
      // </div>
//       <nav className={styles.header_right}>
//         <ul className={styles.nav_links}> */}
//           {/* <HeaderServices/> */}
//           {/* Services Dropdown
//           <li
//             className={styles.nav_item}
//             onMouseEnter={() => handleDropdownToggle("services")}
//             onMouseLeave={() => handleDropdownToggle(null)}
//           >
//             <span className={styles.headtext}>Services</span>
//             {activeDropdown === "services" ? (
//               <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
//             ) : (
//               <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
//             )}
//             {activeDropdown === "services" && (
//               <ul className={styles.dropdown}>
//                 <div className={styles.twosides}>
//                   <div className={styles.icontext}>
//                     <li>
//                       <img
//                         src={realstate}
//                         alt="profile"
//                         className={styles.icon_buttons}
//                       />
//                     </li>
//                     <div className={styles.linkhead}>
//                       <Link to="/services/salesforce_consulting">
//                         <p className={styles.links}>Salesforce Consulting</p>
//                       </Link>
//                       <p className={styles.subpara}>
//                         Salesforce salesforce_consulting Salesforce
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.icontext}>
//                     <li>
//                     <img
//                         src={rea}
//                         alt="profile"
//                         className={styles.icon_buttonz}
//                       />
//                       <img
//                         src={real}
//                         alt="profile"
//                         className={styles.icon_buttoni}
//                       />
//                     </li>
//                     <div className={styles.linkhead}>
//                       <Link to="/services/salesforce_consulting">
//                         <p className={styles.links}>Salesforce Consulting</p>
//                       </Link>
//                       <p className={styles.subpara}>
//                         Salesforce salesforce_consulting Salesforce
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={styles.twosides}>
//                   <div className={styles.icontext}>
//                     <li>
//                       <img
//                         src={Salesforce}
//                         alt="profile"
//                         className={styles.icon_button}
//                       />
//                     </li>
//                     <div className={styles.linkhead}>
//                       <Link to="/services/salesforce_consulting">
//                         <p className={styles.links}>Salesforce Consulting</p>
//                       </Link>
//                       <p className={styles.subpara}>
//                         Salesforce salesforce_consulting Salesforce
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.icontext}>
//                     <li>
//                       <img
//                         src={Salesforce}
//                         alt="profile"
//                         className={styles.icon_button}
//                       />
//                     </li>
//                     <div className={styles.linkhead}>
//                       <Link to="/services/salesforce_consulting">
//                         <p className={styles.links}>Salesforce Consulting</p>
//                       </Link>
//                       <p className={styles.subpara}>
//                         Salesforce salesforce_consulting Salesforce
//                       </p>
//                     </div>
//                   </div>


//                    <div className={styles.twosides}>
//                   <div className={styles.icontext}>
//                     <li>
//                       <img
//                         src={Salesforce}
//                         alt="profile"
//                         className={styles.icon_button}
//                       />
//                     </li>
//                     <div className={styles.linkhead}>
//                       <Link to="/services/salesforce_consulting">
//                         <p className={styles.links}>Salesforce Consulting</p>
//                       </Link>
//                       <p className={styles.subpara}>
//                         Salesforce salesforce_consulting Salesforce
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.icontext}>
//                     <li>
//                       <img
//                         src={Salesforce}
//                         alt="profile"
//                         className={styles.icon_button}
//                       />
//                     </li>
//                     <div className={styles.linkhead}>
//                       <Link to="/services/salesforce_consulting">
//                         <p className={styles.links}>Salesforce Consulting</p>
//                       </Link>
//                       <p className={styles.subpara}>
//                         Salesforce salesforce_consulting Salesforce
//                       </p>
//                     </div>
//                   </div>
//                   {/* //====== */}

//                   {/* <li>
//                   <img src={icon} alt ="profile" className={styles.icon_button}/>
                  
//                   <Link to="/services/service_now">Service Now</Link>
//                 </li> */}
//                   {/* </div> */}

//                   {/* //=======************888 */}
// {/* 
//                   <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/services/ai_solution_services">AI Solution Services</Link>
//                 </li>
//                 <li>
//                   <StorefrontIcon className={styles.icon_button} />
//                   <Link to="/services/business_assurance_services">Business Assurance</Link>
//                 </li>
//                 <li>
//                   <MessageIcon className={styles.icon_button} />
//                   <Link to="/services/integration_services">Integration Services</Link>
//                 </li>
//                 <li>
//                   <OndemandVideoIcon className={styles.icon_button} />
//                   <Link to="/services/digital_consulting_services">Digital Consulting</Link>
//                 </li>
//                 <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/services/iot_solutions_and_services">IoT Solutions and Services</Link>
//                 </li>
//                 <li>
//                   <StorefrontIcon className={styles.icon_button} />
//                   <Link to="/services/staffing">Staffing</Link>
//                 </li> */}

//                 {/* //==========*************8888 */}
//                 {/* </div>



//                 </div>
//               </ul>
            
//             )}
//           </li> */} */}

//           {/* Industries Dropdown */}
//           {/* <li
//             className={styles.nav_item}
//             onMouseEnter={() => handleDropdownToggle("industries")}
//             onMouseLeave={() => handleDropdownToggle(null)}
//           >
//             <span>Industries</span>
//             {activeDropdown === "industries" ? (
//               <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
//             ) : (
//               <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
//             )}
//             {activeDropdown === "industries" && (
//               <ul className={styles.dropdown}>
//                 <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/industries/real_estate">Real Estate</Link>
//                 </li>
//                 <li>
//                   <MessageIcon className={styles.icon_button} />
//                   <Link to="/industries/healthcare">HealthCare</Link>
//                 </li>
//                 <li>
//                   <OndemandVideoIcon className={styles.icon_button} />
//                   <Link to="/industries/bfs">BFS</Link>
//                 </li>
//                 <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/industries/education">Education</Link>
//                 </li>
//                 <li>
//                   <StorefrontIcon className={styles.icon_button} />
//                   <Link to="/industries/travel">Travel</Link>
//                 </li>
//               </ul>
//             )}
//           </li> */}
// <HeaderIndustries/>
//           {/* Technology Dropdown */}
//           {/* <li
//             className={styles.nav_item}
//             onMouseEnter={() => handleDropdownToggle("technology")}
//             onMouseLeave={() => handleDropdownToggle(null)}
//           >
//             <span>Technology</span>
//             {activeDropdown === "technology" ? (
//               <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
//             ) : (
//               <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
//             )}
//             {activeDropdown === "technology" && (
//               <ul className={styles.dropdown}>
//                 <li>
//                   <StorefrontIcon className={styles.icon_button} />
//                   <Link to="/technology/mobile_strategy">Mobile Strategy</Link>
//                 </li>
//                 <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/technology/mobile_bi">Mobile BI</Link>
//                 </li>
//                 <li>
//                   <MessageIcon className={styles.icon_button} />
//                   <Link to="/technology/frameworks">Frameworks</Link>
//                 </li>
//                 <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/technology/devops">DevOps</Link>
//                 </li>
//               </ul>
//             )}
//           </li> */}
// <HeaderTechno/>
//           {/* Resources Dropdown */}
//           {/* <li
//             className={styles.nav_item}
//             onMouseEnter={() => handleDropdownToggle("resources")}
//             onMouseLeave={() => handleDropdownToggle(null)}
//           >
//             <span>Resources</span>
//             {activeDropdown === "resources" ? (
//               <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
//             ) : (
//               <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
//             )}
//             {activeDropdown === "resources" && (
//               <ul className={styles.dropdown}>
//                 <li>
//                   <AppsIcon className={styles.icon_button} />
//                   <Link to="/resources/case_studies">Case Studies</Link>
//                 </li>
//                 <li>
//                   <MessageIcon className={styles.icon_button} />
//                   <Link to="/resources/solution_guides">Solution Guides</Link>
//                 </li>
//               </ul>
//             )}
//           </li> */}
//           <HeaderResources/>

//           {/* About Us */}
          // <li
          //   className={styles.nav_item}
          //   onMouseEnter={() => handleDropdownToggle("about")}
          //   onMouseLeave={() => handleDropdownToggle(null)}
          // >
          //   <Link to="/aboutus" className={styles.aboutus}>About Us</Link>
          // </li>

//           {/* Contact Us */}
          // <li
          //   className={styles.nav_item}
          //   onMouseEnter={() => handleDropdownToggle("contact")}
          //   onMouseLeave={() => handleDropdownToggle(null)}
          // >
          //   <Link to="/contactus" className={styles.aboutus}>Contact Us</Link>
          // </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


//==============

//below code


// import React, { useState } from "react";

// import styles from "./Header.module.scss"; // Import SCSS for styling
// import { Link } from "react-router-dom";


// import HeaderResources from "../HeaderResources/HeaderResources";
// import HeaderTechno from "./HeaderTechno/HeaderTechno";
// import HeaderIndustries from "./HeaderIndustries/HeaderIndustries";
// import HeaderServices from "./HeaderServices/HeaderServices";

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleDropdownToggle = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };
//   return(
//     <>
//      <header className={styles.header}>
//       <div className={styles.headerr}>
    
//       <div className={styles.left}>
//       <div className={styles.header_left}>
      
//       <img
//        src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg" className={styles.image}
//        alt="DevRabbit Logo"
//      />
//    </div>
//     <HeaderServices/>
//     <HeaderIndustries/>
//     <HeaderTechno/>
//     <HeaderResources/>
//     <div className={styles.aboutcontact}>
//     <p
//             className={styles.nav_item}
//             onMouseEnter={() => handleDropdownToggle("about")}
//             onMouseLeave={() => handleDropdownToggle(null)}
//           >
//             <Link to="/aboutus" className={styles.aboutus}>About Us</Link>
//           </p>
//           <p
//             className={styles.nav_item}
//             onMouseEnter={() => handleDropdownToggle("contact")}
//             onMouseLeave={() => handleDropdownToggle(null)}
//           >
//             <Link to="/contactus" className={styles.aboutus}>Contact Us</Link>
//           </p>
//           </div>
//           </div>
//     </div>
   
//     </header>
//     </>
//   );
// }
// export default Header;

//above code 
// import React, { useState } from "react";
// import styles from "./Header.module.scss"; // Import SCSS for styling
// import { Link } from "react-router-dom";

// // Component imports
// import HeaderResources from "../HeaderResources/HeaderResources";
// import HeaderTechno from "./HeaderTechno/HeaderTechno";
// import HeaderIndustries from "./HeaderIndustries/HeaderIndustries";
// import HeaderServices from "./HeaderServices/HeaderServices";

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleDropdownToggle = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <>
//       <header className={styles.header}>
//         <div className={styles.headerr}>
//           {/* <div className={styles.header_left}>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg"
//               className={styles.image}
//               alt="DevRabbit Logo"
//             />
//           </div> */}
//           <div className={styles.left}>
//           <div className={styles.header_left}>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg"
//               className={styles.image}
//               alt="DevRabbit Logo"
//             />
//           </div>
//             {/* Services Dropdown */}
//             <HeaderServices />

//             {/* Industries Dropdown */}
//             <HeaderIndustries />

//             {/* Technology Dropdown */}
//             <HeaderTechno />

//             {/* Resources Dropdown */}
//             <HeaderResources />

//             {/* About Us and Contact Us Links */}
//             <div className={styles.aboutcontact}>
//               <p
//                 className={styles.nav_item}
//                 onMouseEnter={() => handleDropdownToggle("about")}
//                 onMouseLeave={() => handleDropdownToggle(null)}
//               >
//                 <Link to="/aboutus" className={styles.aboutus}>About Us</Link>
//               </p>
//               <p
//                 className={styles.nav_item}
//                 onMouseEnter={() => handleDropdownToggle("contact")}
//                 onMouseLeave={() => handleDropdownToggle(null)}
//               >
//                 <Link to="/contactus" className={styles.aboutus}>Contact Us</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import styles from "./Header.module.scss"; // Import SCSS for styling
import { Link } from "react-router-dom";

// Component imports
import HeaderResources from "../HeaderResources/HeaderResources";
import HeaderTechno from "./HeaderTechno/HeaderTechno";
import HeaderIndustries from "./HeaderIndustries/HeaderIndustries";
import HeaderServices from "./HeaderServices/HeaderServices";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerr}>
        
        <div className={styles.left}>
          <div className={styles.header_left}>
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099ef36b78d7de670dd4f2_DevRabbit%20Logo.svg"
            className={styles.image}
            alt="DevRabbit Logo"
          />
        </div> 
        
          {/* Services Dropdown */}
          <HeaderServices />

          {/* Industries Dropdown */}
          <HeaderIndustries />

          {/* Technology Dropdown */}
          <HeaderTechno />

          {/* Resources Dropdown */}
          <HeaderResources />

          {/* About Us and Contact Us Links */}
          <div className={styles.aboutcontact}>
            <p
              className={styles.nav_item}
              onMouseEnter={() => handleDropdownToggle("about")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <Link to="/aboutus" className={styles.aboutus}>About Us</Link>
            </p>
            <p
              className={styles.nav_item}
              onMouseEnter={() => handleDropdownToggle("contact")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <Link to="/contactus" className={styles.aboutus}>Contact Us</Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

