// import styles from './StafFirst.module.scss';
// import React from "react";

// import { useNavigate } from "react-router-dom";
// import { TiTick } from "react-icons/ti";


// function StafFirst() {
//   const navigate = useNavigate();
//    const handleNavigate = () => {
//     navigate('/contactus')
//    }
//   return (
//     <>
      
//       <div className={styles.Services}>
//         <div className={styles.subPart}>
//           <div>
//             <h1 className={styles.leftHead}>Staffing</h1>
//             <div className={styles.pair}>
//                 <TiTick className={styles.icon_button}/>
//             <p>Principals and Senior Staff worked directly in service areas.</p>
//             </div>
//             <div className={styles.pair}>
//                 <TiTick className={styles.icon_button}/>
//             <p>10+ years of staffing experienced team.</p>
//             </div>
//             <div className={styles.pair}>
//                 <TiTick className={styles.icon_button}/>
//             <p>Business partner in meeting challenges.</p>
//             </div>
//             <div className={styles.pair}>
//                 <TiTick className={styles.icon_button}/>
//             <p>Understand business,Industry & Operational challenges.</p>
//             </div>
//             <div className={styles.pair}>
//                 <TiTick className={styles.icon_button}/>
//             <p>Represent Highly Skilled and Seasoned Professionals for Project, Contingent and Direct Hire situations.</p>
//             </div>
            

//             <button className={styles.bookDemo} onClick={handleNavigate}> Book Demo </button>
//           </div>

//           <div>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bff8199327061c7fc00c_Staffing.svg"
//               alt="Web"
//               className={styles.webTransparentImage}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default StafFirst;

//=====

import styles from './StafFirst.module.scss';
import React from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";

function StafFirst() {
  const navigate = useNavigate();

  // Array of benefits
  const benefits = [
    "Principals and Senior Staff worked directly in service areas.",
    "10+ years of staffing experienced team.",
    "Business partner in meeting challenges.",
    "Understand business, Industry & Operational challenges.",
    "Represent Highly Skilled and Seasoned Professionals for Project, Contingent and Direct Hire situations."
  ];

  const handleNavigate = () => {
    navigate('/contactus');
  };

  return (
    <div className={styles.Services}>
      <div className={styles.subPart}>
        <div>
          <h1 className={styles.leftHead}>Staffing</h1>
          
          {/* Use map to iterate over the benefits array */}
          {benefits.map((benefit, index) => (
            <div className={styles.pair} key={index}>
              <TiTick className={styles.icon_button} />
              <p>{benefit}</p>
            </div>
          ))}

          <button className={styles.bookDemo} onClick={handleNavigate}>Book Demo</button>
        </div>

        <div>
          <img
            src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538bff8199327061c7fc00c_Staffing.svg"
            alt="Web"
            className={styles.webTransparentImage}
          />
        </div>
      </div>
    </div>
  );
}

export default StafFirst;
