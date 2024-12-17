import React from "react";
import Slider from "react-slick";
import styles from "./AppCloudHoisting.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// You can use static images or dynamic data for the slides
const slidesData = [
  {
    title: "App Cloud Hoisting 1",
    description:
      "Cloud for agility, flexibility and scalability, enabling businesses of all sizes to achieve operational efficiencies.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eec96cf5f0a6e8c2361_Illu_2.svg",
  },
  {
    title: "Frameworks",
    description:
      "A mobile based application framework is designed to supportthe development of the phone applications that are written to leverage native phone capabilities like geo data or contact list or camera etc., We at DevRabbit believe providing quick developmentturnaround by using these frameworks depending our client business goals and requirements.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eec96cf5f0a6e8c2361_Illu_2.svg",
  },
  {
    title: "Mobile Strategy",
    description:
      "In partnership with your leadership team, we will develop asolid mobile app development strategy that aligns with yourtechnology and business goals. We create mobile application development solutions that transform your company into a mobile enterprise.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65099eec96cf5f0a6e8c2361_Illu_2.svg",
  }
  
];

function AppCloudHoisting() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contactus')
  }
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
                <button className={styles.bookDemo} onClick={handleNavigate}>Book Demo</button>
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

export default AppCloudHoisting;
//above code

