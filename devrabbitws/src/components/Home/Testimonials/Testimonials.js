import React, { useState } from "react";
// import styles from "./ Testimonials.module.scss";
import styles from "./Testimonials.module.scss";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const [data, setData] = useState([
    {
      heading: <RiDoubleQuotesL className={styles.iconss} />,
      cardHead: "Robertdran",
      cardPara:
        "Over all I am very satisfied. This was a difficult project and they were easy to work with and seemed like they really wanted to make this work and look good.",
      post: "CEO",
    },
    {
      heading: <RiDoubleQuotesL className={styles.iconss} />,
      cardHead: "Akgo",
      cardPara:
        "It is a wonderful experience working with DevRabbit and I strongly recommend them. I will surely work with their team on my forthcoming projects. Wishing them all the best and hoping that they continue to do this good work always. Cheers!! Akgo",
      post: "CEO",
    },
    {
      heading: <RiDoubleQuotesL className={styles.iconss} />,
      cardHead: "Maxwellrowe",
      cardPara: "Great to work with. Timely, professional and quality work!",
      post: "CEO",
    },
    {
      heading: <RiDoubleQuotesL className={styles.iconss} />,
      cardHead: "Forty35",
      cardPara:
        "These guys did tremendous work on our app development. We are very pleased and will definitely use them again!",
      post: "CEO",
    },
    {
      heading:<RiDoubleQuotesL className={styles.iconss} />,
      cardHead: "Instanursing",
      cardPara:
        "DevRabbit did a great job in helping me for my website and fix the bugs. Thank you for your hard work.",
      post: "CEO",
    },
    {
      heading: <RiDoubleQuotesL className={styles.iconss} />,
      cardHead: "Ssaephan",
      cardPara:
        "I am glad I chose DevRabbit to develop my iPad app. I was able to meet with company personnel locally to discuss the project details and get insight into the app development process.",
      post: "CEO",
    },
    // {
    //   heading: "",
    //   cardHead: "Staffing",
    //   cardPara: "Principals and Senior Staff worked directly in service areas."
    // }
  ]);

  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.ourServicesHead}>Testimonials</h1>
        <div className={styles.bg}>
          {data.map((item, index) => (
            <div key={index} className={styles.container}>
              <p className={styles.head}>{item.heading}</p>
              {/* <p className={styles.mainhead}>{item.cardHead}</p> */}
              <p className={styles.cardPara}>{item.cardPara}</p>
              <hr className={styles.horizontalLine} />
              <p className={styles.mainhead}>{item.cardHead}</p>
              <p className={styles.ceoHead}>{item.post}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
