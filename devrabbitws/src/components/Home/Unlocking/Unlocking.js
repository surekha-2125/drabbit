import React, { useState } from "react";
import styles from "./Unlocking.module.scss";

const Unlocking = () => {
  const [data, setData] = useState([
    {
      heading: "",
      cardHead: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e3776f2a9442b6f16b_drupal_fw.png" className={styles.image} />,
      cardPara:
        "Sencha Touch is the leading cross-platform mobile web application framework based on HTML5 and JavaScript for creating universal mobile apps."
    // readmore:""
    },
    {
      heading: "",
      cardHead: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e2b0bd7382ff0203e3_joomla_fw.jpeg" className={styles.image}/>,
      cardPara:
        "jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices. It is Touch-Optimized Web Framework."
    },
    {
      heading: "",
      cardHead: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e2eaacd5cb29a33912_django-fw.png" className={styles.image}/>,
      cardPara:
        "Kendo UI is everything for building web and mobile apps with HTML5 and JavaScript. Fast, light, complete: 70+ jQuery-based UI widgets in one powerful toolset. AngularJS integration, Bootstrap support, mobile controls, offline data solution."
    },
    {
      heading: "",
      cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e2899c8a0e3537057c_cake-php_fw.png" className={styles.image}/>,
      cardPara:
        "Ionic is the beautiful, open source front -end SDK for developing hybrid mobile apps with web technologies . This framework is very much useful to do rapid prototypes of a concept."
    },
    {
      heading: "",
      cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e2f9576b2984ec7231_yii-fw.png" className={styles.image}/>,
      cardPara:
        "Build great mobile experiences faster Native apps. Mobile APIs. Real-time analytics. One Platform. Everything you need to create great, native mobile apps—all from a single JavaScript code base."
    },
    {
      heading: "",
      cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e20643e89774e145ce_wordpress_fw.png" className={styles.image}/>,
      cardPara:
        "Mobilize and Modernize Your Apps. Fast. Cross-Platform Mobile Development for iOS, Android and Windows Phone"
    },
    {
        heading: "",
        cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e2331e0686a5d2df16_ruby-rails_fw.png" className={styles.image}/>,
        cardPara:
          "Mobilize and Modernize Your Apps. Fast. Cross-Platform Mobile Development for iOS, Android and Windows Phone"
      },
      {
        heading: "",
        cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e2b563874295a12514_zend-fw.png" className={styles.image}/>,
        cardPara:
          "Mobilize and Modernize Your Apps. Fast. Cross-Platform Mobile Development for iOS, Android and Windows Phone"
      },
      {
        heading: "",
        cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc8e29cf9277d15393cbd_sitefinity_fw.png" className={styles.image}/>,
        cardPara:
          "Mobilize and Modernize Your Apps. Fast. Cross-Platform Mobile Development for iOS, Android and Windows Phone"
      },

    
  ]);

  return (
    <>
    <div className={styles.background}>
      <h1 className={styles.ourServicesHead}>Unlocking Enhanced Value through CMS-Based Solutions</h1>
      <p>CMS-Based Solutions are the backbone of modern digital operations. They simplify the management of web content, enabling businesses to update information swiftly and efficiently. This dynamic approach to content delivery ensures that your online presence remains fresh, relevant, and engaging.</p>
      <div className={styles.bg}>
        {data.map((item, index) => (
          <div key={index} className={styles.container}>
            {/* <p className={styles.head}>{item.heading}</p> */}
            <p className={styles.mainhead}>{item.cardHead}</p>
            {/* <p className={styles.cardPara}>{item.cardPara}</p> */}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Unlocking;

