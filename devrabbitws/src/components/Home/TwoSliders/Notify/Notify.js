// import React from "react";
// import styles from "./Notify.module.scss";
// // import webTransparent from "../../assets/webTransparent.png";
// // import { Footer } from "../Footer/Footer";
// // import { Header } from "../Header/Header";

// function Notify() {
//   return (
//     <>
//       <div className={styles.Services}>
//         <div className={styles.card}>

//         <div className={styles.subPart}>
//           <div>
//             <h1 className={styles.leftHead}>
//             Notifii is Packaging platform for local citizens</h1>
//             {/* <p className={styles.leftPara}>Cloud for agility, flexibility and scalability and is enabling businesses of all sizes to achieve operational efficiencies and save costs on numerous processes.</p>
//             <p className={styles.leftPara}>DevRabbit is committed to delivering tailored, scalable and secure cloud solutions, a one-stop shop for all your cloud computing needs, eliminating the hassle of upgrading or maintaining hardware and software.</p> */}
//             <button className={styles.bookDemo}> Read More </button>
//           </div>

//           <div>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6509bcf3064feaad787885c8_Slider_img1.png"
//               alt="Web"
//               className={styles.webTransparentImage}
//             />
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
// export default Notify;

import React from "react";
import Slider from "react-slick";
import styles from "./Notify.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// You can use static images or dynamic data for the slides
const slidesData = [
  {
    title: "Notifii is Packaging platform for local citizens",
    description:
      "",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6509bcf3064feaad787885c8_Slider_img1.png",
  },
  {
    title: "SuiteAmerica",
    description:
      "Suite America provides platinum-level service in Corporate Housing, Short Term Apartments and GSA Contract Housing.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6509bcf3064feaad787885c8_Slider_img1.png",
  },
  
];

function Notify() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.Services}>
      <Slider {...sliderSettings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.subPart}>
              <div>
                <h1 className={styles.leftHead}>{slide.title}</h1>
                <p className={styles.leftPara}>{slide.description}</p>
                <button className={styles.bookDemo}>Book Demo</button>
              </div>
              <div>
                <img
                  src={slide.image}
                  alt="Web"
                  className={styles.webTransparentImage}
                />
              </div>
            </div>
          </div>
        ))}
        
      </Slider>
    </div>
    
  );
}
const CustomPrevArrow = ({ onClick }) => (
  <div className={styles.customArrowLeft} onClick={onClick}>
    &#8592; {/* Left arrow symbol */}
  </div>
);

// Custom next arrow component
const CustomNextArrow = ({ onClick }) => (
  <div className={styles.customArrowRight} onClick={onClick}>
    &#8594; {/* Right arrow symbol */}
  </div>
);

export default Notify;


