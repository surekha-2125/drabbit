import React, { useState } from "react";
import styles from "./SomeOfTheApp.module.scss";

const SomeOfTheApp = () => {
  const [data, setData] = useState([
    {
      heading: "",
      cardHead: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc794fb2c27da6cbaacad_sencha_logo.png" className={styles.image} />,
      cardPara:
        "Sencha Touch is the leading cross-platform mobile web application framework based on HTML5 and JavaScript for creating universal mobile apps."
    // readmore:""
    },
    {
      heading: "",
      cardHead: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc7947fcea5faab55435a_jquery-mobile.png" className={styles.image}/>,
      cardPara:
        "jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices. It is Touch-Optimized Web Framework."
    },
    {
      heading: "",
      cardHead: <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc794dcc2ab0bf5de102e_kendu-UI.png" className={styles.image}/>,
      cardPara:
        "Kendo UI is everything for building web and mobile apps with HTML5 and JavaScript. Fast, light, complete: 70+ jQuery-based UI widgets in one powerful toolset. AngularJS integration, Bootstrap support, mobile controls, offline data solution."
    },
    {
      heading: "",
      cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc7945727e9c98e7a8082_ionic-logo.png" className={styles.image}/>,
      cardPara:
        "Ionic is the beautiful, open source front -end SDK for developing hybrid mobile apps with web technologies . This framework is very much useful to do rapid prototypes of a concept."
    },
    {
      heading: "",
      cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc7936f9b93793f3e96ed_telerik-logo.png" className={styles.image}/>,
      cardPara:
        "Build great mobile experiences faster Native apps. Mobile APIs. Real-time analytics. One Platform. Everything you need to create great, native mobile apps—all from a single JavaScript code base."
    },
    {
      heading: "",
      cardHead:  <img src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dc79418bc633192f270d0_appcellator-logo.png" className={styles.image}/>,
      cardPara:
        "Mobilize and Modernize Your Apps. Fast. Cross-Platform Mobile Development for iOS, Android and Windows Phone"
    },
    
  ]);

  return (
    <>
      <h1 className={styles.ourServicesHead}>Some of the mobile app frameworks that we are expert at</h1>
      <div className={styles.bg}>
        {data.map((item, index) => (
          <div key={index} className={styles.container}>
            <p className={styles.head}>{item.heading}</p>
            <p className={styles.mainhead}>{item.cardHead}</p>
            <p className={styles.cardPara}>{item.cardPara}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SomeOfTheApp;

