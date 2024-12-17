import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderServices.module.scss";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"; // Upward arrow
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Downward arrow
import cases from "../../../assets/mobile stratagy blue/caseMSBlue.png";
import devops from "../../../assets/devops blue/devops blue.png";
import mobilebi from "../../../assets/mobile bi blue/mobile bi blue.png";
import real from "../../../assets/zip/real.png";
import bfs from "../../../assets/BFS BLUE/WhatsApp_Image_2024-12-11_at_3.47.02_PM-removebg-preview.png";
import health from "../../../assets/HEALTH CARE BLUE/WhatsApp_Image_2024-12-11_at_4.15.25_PM-removebg-preview.png";
import education from "../../../assets/education  blue/WhatsApp_Image_2024-12-11_at_9.56.25_PM-removebg-preview.png";
import travel from "../../../assets/TRAVEL HEALTH BLUE/WhatsApp_Image_2024-12-11_at_4.00.20_PM-removebg-preview.png";
import business from '../../../assets/TRAVEL HEALTH BLUE/WhatsApp_Image_2024-12-11_at_4.00.20_PM-removebg-preview.png';
import educ from '../../../assets/devops blue/devops blue.png';

const HeaderServices = () => {
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
            onMouseEnter={() => handleDropdownToggle(true)} // Show dropdown on hover
            onMouseLeave={() => handleDropdownToggle(false)} // Hide dropdown when hover ends
          >
            <div className={styles.nav_item_content}>
              <span>Services</span>
              {activeDropdown ? (
                <KeyboardArrowUpRoundedIcon className={styles.dropdown_arrow} />
              ) : (
                <KeyboardArrowDownRoundedIcon
                  className={styles.dropdown_arrow}
                />
              )}
            </div>

            {activeDropdown && (
              <ul
                className={`${styles.dropdown} ${
                  activeDropdown ? styles.show : ""
                }`}
              >
                <div className={styles.arrange}>
                  <div>
                    <li className={styles.listItems}>
                      <img
                        src={real}
                        className={styles.icon_button}
                        alt="case studies"
                      />
                      <div>
                        <Link
                          to="/services/salesforce_consulting"
                          className={styles.linkss}
                        >
                          Salesforce Consulting
                        </Link>
                        <p className={styles.subhead}>
                          SalesForce solutions, Tailored for You
                        </p>
                      </div>
                    </li>

                    <li className={styles.listItems}>
                      <img
                        src={bfs}
                        className={styles.icon_button}
                        alt="case studies"
                      />
                      <div>
                        <Link to="/services/ai_solution_services" className={styles.linkss}>
                          AI Solution Services
                        </Link>
                        <p className={styles.subhead}>
                          AI Solutions for your business
                        </p>
                      </div>
                    </li>
                    <li className={styles.listItems}>
                      <img
                        src={travel}
                        className={styles.icon_button}
                        alt="case studies"
                      />
                      <div>
                        <Link to="/services/integration_services" className={styles.linkss}>
                          Integration Services
                        </Link>
                        <p className={styles.subhead}>
                          Integration Excellence: Streamlining Your <br />
                          Tech Landscape
                        </p>
                      </div>
                    </li>
                    <li className={styles.listItems}>
                      <img
                        src={travel}
                        className={styles.icon_button}
                        alt="case studies"
                      />
                      <div>
                        <Link to="/services/iot_solutions_and_services" className={styles.linkss}>
                          IOT Solutions and Services
                        </Link>
                        <p className={styles.subhead}>
                          IoT Excellence: Paving Your Way to a Connected Future.
                        </p>
                      </div>
                    </li>
                  </div>

                  <div>
                    <li className={styles.listItems}>
                      <img
                        src={health}
                        className={styles.icon_button}
                        alt="solution guides"
                      />
                      <div>
                        <Link
                          to="/services/service_now"
                          className={styles.linkss}
                        >
                          ServiceNow
                        </Link>
                        <p className={styles.subhead}>
                          Streamline Your Operations with ServiceNow experts
                        </p>
                      </div>
                    </li>

                    <li className={styles.listItems}>
                      <img
                        src={business}
                        className={styles.icon_button}
                        alt="solution guides"
                      />
                      <div>
                        <Link
                          to="/services/business_assurance_services"
                          className={styles.linkss}
                        >
                          Business Assurance Services
                        </Link>
                        <p className={styles.subhead}>
                          Assured Business Solutions for Optional <br />
                          Performance
                        </p>
                      </div>
                      </li>
                      <li className={styles.listItems}>
                        <img
                          src={education}
                          className={styles.icon_button}
                          alt="solution guides"
                        />
                        <div>
                          <Link
                            to="/services/digital_consulting_services"
                            className={styles.linkss}
                          >
                            Digital Consulting Services
                          </Link>
                          <p className={styles.subhead}>
                            Strategic Digital Solutions for Tomorrow's <br />
                            Leaders.
                          </p>
                        </div>
                      </li>
                      <li className={styles.listItems}>
                        <img
                          src={educ}
                          className={styles.icon_button}
                          alt="solution guides"
                        />
                        <div>
                          <Link
                            to="/services/staffing"
                            className={styles.linkss}
                          >
                            Staffing
                          </Link>
                          <p className={styles.subhead}>
                            Your Success, Our Commitment: Right <br />
                            Talent, Right Time.
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

export default HeaderServices;
