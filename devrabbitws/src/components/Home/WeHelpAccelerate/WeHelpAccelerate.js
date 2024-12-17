// import React from "react";
// import styles from "./WeHelpAccelerate.module.scss";
// import { useNavigate } from "react-router-dom";

// // import webTransparent from "../../assets/webTransparent.png";
// // import { Footer } from "../Footer/Footer";
// // import { Header } from "../Header/Header";

// const WeHelpAccelerate=() => {
//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate('/services/business_assurance_services')
//   }
//   return (
//     <>
//       <div className={styles.Services}>
        

//         <div className={styles.subPart}>
          

//           <div>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eecfd24774fa15796c1_Illu_1.svg"
//               alt="Web"
//               className={styles.webTransparentImage}
//             />
//           </div>
//           <div className={styles.side}>
//             <h1 className={styles.leftHead}>
//               We help accelerate your Business Growth by using mobility
//             </h1>
//             <p className={styles.leftPara}>
//                In partnership with your team, we will develop and execute an end to end mobile strategy that will enable you to truly embrace mobility and deliver real business value.           </p>
//             <button className={styles.bookDemo} onClick={handleNavigate}> Read More </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default WeHelpAccelerate;

//above code
import React from "react";
import styles from "./WeHelpAccelerate.module.scss";
import { useNavigate } from "react-router-dom";

const WeHelpAccelerate = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/services/business_assurance_services')
  }

  return (
    <>
      <div className={styles.Services}>
        <div className={styles.subPart}>
          <div className={styles.imageContainer}>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eecfd24774fa15796c1_Illu_1.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
          <div className={styles.side}>
            <h1 className={styles.leftHead}>
              We help accelerate your Business Growth by using mobility
            </h1>
            <p className={styles.leftPara}>
              In partnership with your team, we will develop and execute an end to end mobile strategy that will enable you to truly embrace mobility and deliver real business value.
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeHelpAccelerate;

