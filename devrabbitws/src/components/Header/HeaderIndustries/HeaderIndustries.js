// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./HeaderResources.module.scss"; 
// import MessageIcon from "@mui/icons-material/Message";
// import AppsIcon from "@mui/icons-material/Apps";
// import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"; // Upward arrow
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Downward arrow
// // import cases from "../../assets/devops blue/devops blue.png";
// import cases from '../../assets/mobile stratagy blue/caseMSBlue.png'

// import realstate from "../../assets/zip realestate/realstate.jpeg";

// const HeaderResources = () => {
//     const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleDropdownToggle = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//     return(
//         <>
//         <header className={styles.header}>
//         <nav className={styles.header_right}>
//         <ul className={styles.nav_links}>
//         <li
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
//                 <li className={styles.listItems}>
//                   <img src={cases} className={styles.icon_button} />
//                   <div >
//                   <Link to="/resources/case_studies" className={styles.linkss}>Case Studies</Link>
//                   <p className={styles.subhead}>Case Studies that showcase our vast developement expertise</p>
//                   </div>
//                 </li>
                
//                 <li className={styles.listItems}>
//                   <img src={cases} className={styles.icon_button} />
//                   <div >
//                   <Link to="/resources/solution_guides" className={styles.linkss}>Solution Guides</Link>
//                   <p className={styles.subhead}>Solution guides of DevRabbit
//                     <br/>
//                     Implementations with its Technology Partners
//                   </p>
//                   </div>
//                 </li>
//               </ul>
//             )}
//           </li>
//           </ul>
//           </nav>
//           </header>
//         </>
//     );
// }
// export default HeaderResources;

// --------------------------------------------

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderIndustries.module.scss"; 
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"; // Upward arrow
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Downward arrow
import cases from '../../../assets/mobile stratagy blue/caseMSBlue.png';
import devops from '../../../assets/devops blue/devops blue.png';
import mobilebi from '../../../assets/mobile bi blue/mobile bi blue.png';
import real from '../../../assets/zip/real.png';
import bfs from '../../../assets/BFS BLUE/WhatsApp_Image_2024-12-11_at_3.47.02_PM-removebg-preview.png';
import health from '../../../assets/HEALTH CARE BLUE/WhatsApp_Image_2024-12-11_at_4.15.25_PM-removebg-preview.png';
import education from '../../../assets/education  blue/WhatsApp_Image_2024-12-11_at_9.56.25_PM-removebg-preview.png';
import travel from '../../../assets/TRAVEL HEALTH BLUE/WhatsApp_Image_2024-12-11_at_4.00.20_PM-removebg-preview.png';


const HeaderIndustries = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  // Handle mouse enter and leave for opening/closing the dropdown
  const handleDropdownToggle = (isActive) => {
    setActiveDropdown(isActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header_right}>
        <ul className={styles.nav_links}>
          <li
            className={styles.nav_item}
            onMouseEnter={() => handleDropdownToggle(true)}  // Show dropdown on hover
            onMouseLeave={() => handleDropdownToggle(false)} // Hide dropdown when hover ends
          >
            <div className={styles.nav_item_content}>
              <span>Industries</span>
              {activeDropdown ? (
                <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
              ) : (
                <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
              )}
            </div>

            {activeDropdown && (
              <ul className={`${styles.dropdown} ${activeDropdown ? styles.show : ''}`}>
                <div className={styles.arrange}>
                <div>
                <li className={styles.listItems}>
                  <img src={real} className={styles.icon_button} alt="case studies" />
                  <div>
                    <Link to="/industries/real_estate" className={styles.linkss}>
                      Real Estate
                    </Link>
                    <p className={styles.subhead}>Smart Properties, Smarter Solutions: Your <br/>
                    Tech Ally in Real Estate</p>
                  </div>
                </li>

                
                 <li className={styles.listItems}>
                  <img src={bfs} className={styles.icon_button} alt="case studies" />
                  <div>
                    <Link to="/industries/bfs" className={styles.linkss}>
                      BFS
                    </Link>
                    <p className={styles.subhead}>Secure Futures: Advancing Financial <br/>
                    Institutions with Trustworthy Tech
                    <br/> Innovations.</p>
                  </div>
                </li>
                <li className={styles.listItems}>
                  <img src={travel} className={styles.icon_button} alt="case studies" />
                  <div>
                    <Link to="/industries/travel" className={styles.linkss}>
                      Travel & Hospitality
                    </Link>
                    <p className={styles.subhead}>Destinations & Digitalization: Your Tech  <br/>
                    Co-Pilot Travel & Hospitality Success.</p>
                  </div>
                </li>
                </div>


<div>
<li className={styles.listItems}>
                  <img src={health} className={styles.icon_button} alt="solution guides" />
                  <div>
                    <Link to="/industries/healthcare" className={styles.linkss}>
                      Health Care
                    </Link>
                    <p className={styles.subhead}>Innovating Care: Your Partner in
                        <br/>
                         Advancing Helath-Tech Solutions</p>
                  </div>
                </li>
               

                <li className={styles.listItems}>
                  <img src={education} className={styles.icon_button} alt="solution guides" />
                  <div>
                    <Link to="/industries/education" className={styles.linkss}>
                     Education
                    </Link>
                    <p className={styles.subhead}>Knowledge Meets Innovation:Shaping <br/>
                    Future Minds with Tech Expertise.
                    
                   </p>
                  </div>
                </li>
                </div>
                </div>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderIndustries;
