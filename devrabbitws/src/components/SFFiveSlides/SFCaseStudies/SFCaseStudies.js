import React from "react";
import Slider from "react-slick";
import styles from "./SFCaseStudies.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// You can use static images or dynamic data for the slides
const slidesData = [
  {
    title: "Connecting Touchpoints Delivers New Sales Opportunities & Customer Journeys",
    description:
      "Deeper insights and personalisation enabled by single customer ID across Service, Marketing, and Commerce Fast deployment of international sites customised for each region that includes international consumables and electronic gadgets New sales channel opened by connecting Einstein Chatbots and Einstein Product Recommendations",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6523e4cb4117a3efd98c0f29_Slider_img1.jpg",
      imageHead:"A Leading Online Gadget Store",
  },
  {
    title: "A Giant Step Forward in Site Performance",
    description:
      "Mobile traffic was approaching 70% in some geographies, but conversions lagged behind.This leading sports brand had re-architected the site with SFRA, focusing on site speed, ease of navigation, product findability and minimal clicks to purchase so that shoppers wouldn’t abandon their purchases on mobile. Total site conversion improved 50%.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/653109932881e690650ad51a_Sports-brand.png",
      imageHead:"A leading Sports brand",
  },
  {
    title: "True Alliance continues to bring shoppers and brands together during COVID-19",
    description:
      "Optimised merchandising and promotions based on real-time search data and changes in consumer product preferences Launched outlet and clearance sections on sites in response to changes in consumer spending Reallocated new product lines and best sellers intended for retail stores and wholesalers to online Reallocated new product lines and best sellers intended for retail stores and wholesalers to online.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/653109932b15680d7690ad16_lifestyle-brand.png",
      imageHead:"A leading lifestyle brand",
  },
  {
    title: "The Revenue Solution",
    description:
      "A manufacturer of advanced sensing solution Implemented Salesforce CPQ to facilitate Sales to automate their discounts and quotes based on customer intent, thus elevating the customer experience.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65310992f812bc6b61822336_technology-company.png",
      imageHead:"A Technology Company",
  },
  {
    title: "Global Scale with Headless Commerce",
    description:
      "Existing solution not equipped for high scale and demand Replatformed on Salesforce in 2019, starting with cart, checkout & account Replaced the back end, kept existing front end & middleware (ReactJS & GraphQL) “Integrating the state-of-the-art API-based ecommerce platform enabled us to manage the incredible uptick in peak demand of global transactions that was crucial this holiday season.”  -  Michelle Garvey, CIO, J.Crew.",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65310991a149a429502440aa_ecommerce-brand.png",
      imageHead:"A leading e-Commerce brand",
  }
  
];

function SFCaseStudies() {
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
        <h1 className={styles.head}>Case Studies</h1>
      <Slider {...sliderSettings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.subPart}>
            <div >
                <img
                  src={slide.image}
                  alt="Web"
                  className={styles.webTransparentImage}
                />
                <h1 className={styles.imageheading}>{slide.imageHead}</h1>
              </div>
              <div>
                <h1 className={styles.leftHead}>{slide.title}</h1>
                <p className={styles.leftPara}>{slide.description}</p>
                {/* <button className={styles.bookDemo}>Book Demo</button> */}
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

export default SFCaseStudies;

