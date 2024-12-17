import React, { useState } from "react";
import styles from "./TechAndTools.module.scss";

const TechAndTools = () => {
  

  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.ourServicesHead}>Technologies and Tools</h1>
        <p className={styles.middle}>Cutting-Edge Skills for Cutting-Edge Solutions</p>
        <p className={styles.middle}>
          Our team is proficient in a wide array of AI technologies and tools,
          ensuring we can tackle any challenge
        </p>
       

        <div className={styles.bg}>
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/663378feb38c7487c048c54e_tool-logo-1.svg"
            className={styles.image}
          />
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/66337941889fef9314a74a9a_tool-logo-2.svg"
            className={styles.image}
          />
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6633795901ad57b796269a74_tool-logo-3.svg"
            className={styles.image}
          />
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6633796a7340b5934e75c41e_tool-logo-4.svg"
            className={styles.image}
          />
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/66337977a82eacb64ecd636c_tool-logo-5.svg"
            className={styles.image}
          />
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/66337986b059b7cf612eb65d_tool-logo-6.svg"
            className={styles.image}
          />
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6633799bfd6cc82651f59fae_tool-logo-7.svg"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
};

export default TechAndTools;
