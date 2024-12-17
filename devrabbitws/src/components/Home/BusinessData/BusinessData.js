// import React from "react";
// import styles from "./BusinessData.module.scss";
// import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
// import AppsIcon from "@mui/icons-material/Apps";

// // import webTransparent from "../../assets/webTransparent.png";
// // import { Footer } from "../Footer/Footer";
// // import { Header } from "../Header/Header";

// 
//             {/* <p>Quickly summarize business information</p>
//             <p></p>
//             <p>Consult metrics and key performance indicators (KPIs)</p>
//             <p>Increased productivity of the workforce</p>
//             <p>Edit and share comments along with and about data</p>
//             <p>Speed up return on investment</p> */}
//           </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Services;


import React from "react";
import styles from "./BusinessData.module.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { TiTick } from "react-icons/ti";

// Array of benefits
const benefits = [
  "  Make better decisions through in-depth analysis",
  "  Quickly summarize business information",
  "  Collaborate with your co-workers and share reports",
  "  Consult metrics and key performance indicators (KPIs)",
  "  Increased productivity of the workforce",
  "  Edit and share comments along with and about data",
  "  Speed up return on investment",
  
];

function  BusinessData() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dd6cbcf7abc623aad8d09_Illu6.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div>
        {/* <h1 className={styles.leftHead}>
          Business data intelligence will have following benefits
        </h1> */}

        <div className={styles.subPart}>
          <div className={styles.right}>
          <h1 className={styles.leftHead}>
          Business data intelligence will have following benefits
        </h1>
            {/* Using map function to render each benefit */}
            {benefits.map((benefit, index) => (
              <div className={styles.text} key={index}>
                <TiTick className={styles.icon_button} />
                <p className={styles.ticText}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessData;
