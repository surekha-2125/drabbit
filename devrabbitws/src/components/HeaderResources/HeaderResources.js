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
import styles from "./HeaderResources.module.scss"; 
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"; // Upward arrow
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Downward arrow
import cases from '../../assets/mobile stratagy blue/caseMSBlue.png';

const HeaderResources = () => {
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
              <span>Resources</span>
              {activeDropdown ? (
                <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
              ) : (
                <KeyboardArrowDownRoundedIcon className={styles.dropdown_arrow} />
              )}
            </div>

            {activeDropdown && (
              <ul className={`${styles.dropdown} ${activeDropdown ? styles.show : ''}`}>
                <li className={styles.listItems}>
                  <img src={cases} className={styles.icon_button} alt="case studies" />
                  <div>
                    <Link to="/resources/case_studies" className={styles.linkss}>
                      Case Studies
                    </Link>
                    <p className={styles.subhead}>Case Studies that showcase our vast development expertise</p>
                  </div>
                </li>

                <li className={styles.listItems}>
                  <img src={cases} className={styles.icon_button} alt="solution guides" />
                  <div>
                    <Link to="/resources/solution_guides" className={styles.linkss}>
                      Solution Guides
                    </Link>
                    <p className={styles.subhead}>Solution guides of DevRabbit implementations with its technology partners</p>
                  </div>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderResources;
