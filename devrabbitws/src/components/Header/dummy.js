import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import styles from './Header.module.scss';

import { Link } from "react-router-dom";

function Dummy() {
  return (
    <div>
      <Link to="/">Services</Link>
      <div className={styles.action}>
              <ShareIcon className={styles.icon} />
              <span>Share</span>
            </div>
    </div>
  );
}

export default Dummy;
