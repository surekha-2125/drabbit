// import React from "react";
// import styles from "./StafServiceOfferings.module.scss";
// import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
// import { TiTick } from "react-icons/ti";

// // Array of benefits
// const benefits = [
//   "  Dedicated Team",
//   " Right Sized",
//   " Just-in-Time Staffing",
 
// ];
// const benefitss = [
//     "  Dedicated Team",
//     " Right Sized",
//     " Just-in-Time Staffing",
   
//   ];
//   const benefitsss = [
//     "  Dedicated Team",
//     " Right Sized",
//     " Just-in-Time Staffing",
   
//   ];
//   const benefitssss = [
//     "  Dedicated Team",
//     " Right Sized",
//     " Just-in-Time Staffing",
   
//   ];

// function StafServiceOfferings() {
//   return (
//     <div className={styles.Services}>
//       <div>
//         <img
//           src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bfd2ee21d29da9f46d93_Service%20Offerings.svg"
//           alt="Web"
//           className={styles.webTransparentImage}
//         />
//       </div>
//       <div>
//         {/* <h1 className={styles.leftHead}>
//           Our Tech Consulting, IT Service Offerings for healthcare cover
//         </h1> */}

//         <div className={styles.subPart}>
//           <div className={styles.right}>
//           <h1 className={styles.leftHead}>
//           Service Offerings
//         </h1>
//           <h1 className={styles.leftHead}>
//           Project Resource Solutions
//         </h1>
//             {/* Using map function to render each benefit */}
//             {benefits.map((benefit, index) => (
//               <div className={styles.text} key={index}>
//                 <TiTick className={styles.icon_button} />
//                 <p className={styles.ticText}>{benefit}</p>
//               </div>
//             ))}
//             <h1 className={styles.leftHead}>
//             Contract to Hire
//         </h1>
//              {benefitss.map((benefiti, index) => (
//               <div className={styles.text} key={index}>
//                 <TiTick className={styles.icon_button} />
//                 <p className={styles.ticText}>{benefiti}</p>
//               </div>
//             ))}
//             <h1 className={styles.leftHead}>
//             Direct Hire
//         </h1>
//              {benefitss.map((benefitu, index) => (
//               <div className={styles.text} key={index}>
//                 <TiTick className={styles.icon_button} />
//                 <p className={styles.ticText}>{benefitu}</p>
//               </div>
//             ))}
//             <h1 className={styles.leftHead}>
//             Direct Hire
//         </h1>
//              {benefitsss.map((benefitz, index) => (
//               <div className={styles.text} key={index}>
//                 <TiTick className={styles.icon_button} />
//                 <p className={styles.ticText}>{benefitz}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StafServiceOfferings;

// //========
import React from "react";
import styles from "./Differentiatory.module.scss";
import { TiTick } from "react-icons/ti";

// Object containing all service offerings
const serviceOfferings = {
  "Service Flexibility": [
    "Easy Conversion from Contract to Contract –To-Hire or Direct Hire",
    "Partner in Project life Cycle",
    "Backfill in no time",
    "Bundled Placements",
  ],
  "Candidate Sourcing": [
    "Professional Networking",
    "PrepResource Unique Program that gives Day 1 productivity Resources",
    "Archival database",
    "Targeted Recruiting",
    "Flexible Geographic Reach",
  ],
  
};

function Differentiatory() {
  return (
    <div className={styles.Services}>
      <div>
        <img
          src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bf7ec52e6856c7dfe277_Differentiators-2.svg"
          alt="Web"
          className={styles.webTransparentImage}
        />
      </div>
      <div>
        <div className={styles.subPart}>
          <div className={styles.right}>
            <h1 className={styles.leftHead}>Differentiators</h1>
            
            {/* Iterate through the object keys (service categories) */}
            {Object.keys(serviceOfferings).map((category, index) => (
              <div key={index}>
                <h1 className={styles.leftHead}>{category}</h1>
                {/* Iterate over each benefit in the current category */}
                {serviceOfferings[category].map((benefit, index) => (
                  <div className={styles.text} key={index}>
                    <TiTick className={styles.icon_button} />
                    <p className={styles.ticText}>{benefit}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Differentiatory;
//00000000000000
// import React from "react";
// import styles from "./Differentiatory.module.scss";
// import { TiTick } from "react-icons/ti";

// // Object containing all service offerings
// const serviceOfferings = {
//   "Service Flexibility": [
//     "Easy Conversion from Contract to Contract –To-Hire or Direct Hire",
//     "Partner in Project life Cycle",
//     "Backfill in no time",
//     "Bundled Placements",
//   ],
//   "Candidate Sourcing": [
//     "Professional Networking",
//     "PrepResource Unique Program that gives Day 1 productivity Resources",
//     "Archival database",
//     "Targeted Recruiting",
//     "Flexible Geographic Reach",
//   ],
// };

// function Differentiatory() {
//   return (
//     <div className={styles.Services}>
//       <div>
//         <img
//           src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bf7ec52e6856c7dfe277_Differentiators-2.svg"
//           alt="Web"
//           className={styles.webTransparentImage}
//         />
//       </div>
//       <div className={styles.subPart}>
//         <div className={styles.right}>
//           <h1 className={styles.leftHead}>Differentiators</h1>

//           {/* Iterate through the object keys (service categories) */}
//           {Object.keys(serviceOfferings).map((category, index) => (
//             <div key={index}>
//               <h2 className={styles.categoryTitle}>{category}</h2>
//               {/* Iterate over each benefit in the current category */}
//               {serviceOfferings[category].map((benefit, index) => (
//                 <div className={styles.text} key={index}>
//                   <TiTick className={styles.icon_button} />
//                   <p className={styles.ticText}>{benefit}</p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Differentiatory;


