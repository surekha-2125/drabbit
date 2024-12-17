// import React from "react";
// import styles from "./WeAreOnly.module.scss";

// const WeAreOnly = () => {
//   // Array of numbers to display
//   //   const numbers = ["20+", "200+", "50+", "100+"];
//   const numbers = [
//     {
//       number: "25+",
//       text: "Years of IT" ,
//     },
//     {
//       number: "200+",
//       text: "Successful Projects",
//     },
//     {
//       number: "100+",
//       text: "Fulltime Resources",
//     },
//     {
//       number: "50+",
//       text: "Happy Clients",
//     },
//   ];

//   return (
//     <>
// <div className={styles.bg}>
//   <h1 className={styles.head}>
//     We're only just getting started on our journey
//   </h1>
//         <div className={styles.card}>
//           <div className={styles.cardRow}>
//             {numbers.map((item, index) => (
//               <div key={index} className={styles.cardColumn}>
//                 <li className={styles.cardText}>{item.number}</li>
//                 <h4>{item.text}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WeAreOnly;

import React from "react";
import styles from "./WeAreOnly.module.scss";

const WeAreOnly = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={styles.head}>
          We're only just getting started on our journey
        </h1>
        <div className={styles.card}>
          <div>
          <h1 className={styles.count}>25+</h1>
          <p className={styles.text}>Years of IT Experience</p>
          </div>
          <div>
          <h1 className={styles.count}>200+</h1>
          <p className={styles.text}>Successful Projects</p>
          </div>
          <div>
          <h1 className={styles.count}>100+</h1>
          <p className={styles.text}>Fulltime Resources</p>
          </div>
          <div>
          <h1 className={styles.count}>50+</h1>
          <p className={styles.text}>Happy Clients</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeAreOnly;
