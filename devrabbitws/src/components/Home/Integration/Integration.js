

import React from "react";
import styles from "./Integration.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "Close out work orders faster",
  "Exchange information with clients directly",
  "Improved budget forecasting",
  "Accounting teams can process orders more efficiently",
  "Cut down response time for customer inquiries and service requests"
];

function Integration() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652811e19186a9e8285248de_integration-services-new.png"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div className={styles.rightside}>
        
        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
        Integration Services
        </h1>
        <p> CRE companies utilize a blend of legacy and new systems for their day to day operation.  They want to be more efficient with their business operations and are looking for a common component to make all of these systems function as one.</p>
        <p>Out of the box solutions are limited on systems they connect to, so you need a services team that works with you to integrates not only to all aspects of real estate and facilities, but one that easily connects to your finance and HR systems, as well as with the technologies that run and monitor your HVAC, lighting, plumbing, security, conveyance and other operational components of your buildings.
          </p>
          <p>DevRabbits integration team will assess, connect, share data, act, and report on all of the interactions needed to fuel success. Our custom integration services enable users to have a single source of truth and be able to communicate data between these numerous systems.  This allows you to:</p>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p key = {index} className={styles.lines}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
