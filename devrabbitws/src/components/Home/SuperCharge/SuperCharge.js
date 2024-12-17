// import React from "react";
// import styles from "./SuperCharge.module.scss";
// import { useNavigate } from "react-router-dom";


// function Services() {
//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate('/contactus')
//   }

//   return (
//     <>
//       <div className={styles.Services}>
        

//         <div className={styles.subPart}>
//           <div>
//             <h1 className={styles.leftHead}>
//               Supercharge your Digital Transformation with DevRabbit
//             </h1>
//             <p className={styles.leftPara}>
//               Unlock the power of Digital Transformation using next generation IT services from DevRabbit
//             </p>
//             <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
//           </div>

//           <div>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eec13a39b97c8549312_Hero-asset.svg"
//               alt="Web"
//               className={styles.webTransparentImage}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Services;

//above code
import React from "react";
import styles from "./SuperCharge.module.scss";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }

  return (
    <>
      <div className={styles.Services}>
        <div className={styles.subPart}>
          <div>
            <h1 className={styles.leftHead}>
              Supercharge your Digital Transformation with DevRabbit
            </h1>
            <p className={styles.leftPara}>
              Unlock the power of Digital Transformation using next generation IT services from DevRabbit
            </p>
            <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eec13a39b97c8549312_Hero-asset.svg"
              alt="Web"
              className={styles.webTransparentImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;



