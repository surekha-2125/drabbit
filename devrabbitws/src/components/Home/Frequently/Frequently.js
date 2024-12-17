// import React, { useState } from "react";
// import styles from "./Frequently.module.scss"; // Import your custom styles if needed

// const Frequently = () => {
//   // Define an array of FAQs
//   const faqData = [
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces."
//     },
//     {
//       question: "What are components in React?",
//       answer: "Components are the building blocks of a React application, which can be either functional or class components."
//     },
//     {
//       question: "What is JSX?",
//       answer: "JSX stands for JavaScript XML. It's a syntax extension that allows you to write HTML elements within JavaScript code."
//     },
//     {
//       question: "How do I create a React app?",
//       answer: "You can create a React app using the Create React App CLI tool, by running 'npx create-react-app my-app'."
//     }
//   ];

//   // State to track the currently expanded question
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Function to handle question click and toggle answer visibility
//   const toggleAnswer = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null); // Collapse if clicked again
//     } else {
//       setExpandedIndex(index); // Expand the clicked question
//     }
//   };

//   return (
//     <div className={styles.faqContainer}>
//       <h2>Frequently Asked Questions</h2>
//       <div className={styles.faqList}>
//         {faqData.map((faq, index) => (
//           <div key={index} className={styles.faqItem}>
//             <div
//               className={styles.question}
//               onClick={() => toggleAnswer(index)}
//             >
//               <p>{faq.question}</p>
//             </div>
//             {expandedIndex === index && (
//               <div className={styles.answer}>
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Frequently;

// import React, { useState } from "react";
// import styles from "./Frequently.module.scss"; // Import your custom styles

// const Freqently = () => {
//   // Define an array of FAQs
//   const faqData = [
//     {
        
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
      
//     },
//     {
//       question: "What are components in React?",
//       answer: "Components are the building blocks of a React application, which can be either functional or class components.",
      
//     },
//     {
//       question: "What is JSX?",
//       answer: "JSX stands for JavaScript XML. It's a syntax extension that allows you to write HTML elements within JavaScript code.",
      
//     },
//     {
//       question: "How do I create a React app?",
//       answer: "You can create a React app using the Create React App CLI tool, by running 'npx create-react-app my-app'.",
      
//     }
//   ];

//   // State to track the currently expanded question
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Function to handle question click and toggle answer visibility
//   const toggleAnswer = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null); // Collapse if clicked again
//     } else {
//       setExpandedIndex(index); // Expand the clicked question
//     }
//   };

//   return (
//     <div className={styles.faqContainer}>
//       <h2>Frequently Asked Questions</h2>
//       <p>Everything you need to know about the product?</p>
//       <div className={styles.faqList}>
//         {faqData.map((faq, index) => (
//           <div key={index} className={styles.faqItem}>
//             <div
//               className={styles.question}
//               onClick={() => toggleAnswer(index)}
//             >
//               <p>{faq.question}</p>
//               {/* Add the arrow icon */}
//               {/* <span
//                 className={`${styles.arrow} ${
//                   expandedIndex === index ? styles.up : styles.down
//                 }`}
//               >
//                 &#9660; {/* Down arrow */}
//               {/* </span> */}
//             </div>
//             {expandedIndex === index && (
//               <div className={styles.answer}>
//                 <p>{faq.answer}</p>
//               </div>
              
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Freqently;

// //-------------------
// import React, { useState } from "react";
// import styles from "./Frequently.module.scss"; // Import your custom styles

// const Freqently = () => {
//   // Define an array of FAQs
//   const faqData = [
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What are components in React?",
//       answer: "Components are the building blocks of a React application, which can be either functional or class components.",
//     },
//     {
//       question: "What is JSX?",
//       answer: "JSX stands for JavaScript XML. It's a syntax extension that allows you to write HTML elements within JavaScript code.",
//     },
//     {
//       question: "How do I create a React app?",
//       answer: "You can create a React app using the Create React App CLI tool, by running 'npx create-react-app my-app'.",
//     },
//   ];

//   // State to track the currently expanded question
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Function to handle question click and toggle answer visibility
//   const toggleAnswer = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null); // Collapse if clicked again
//     } else {
//       setExpandedIndex(index); // Expand the clicked question
//     }
//   };

//   return (
//     <div className={styles.faqContainer}>
//       <h2>Frequently Asked Questions</h2>
//       <p>Everything you need to know about the product</p>
//       <div className={styles.faqList}>
//         {faqData.map((faq, index) => (
//           <div key={index} className={styles.faqItem}>
//             <div
//               className={styles.question}
//               onClick={() => toggleAnswer(index)}
//             >
//               <p>{faq.question}</p>
//             </div>
//             {/* Horizontal line after question */}
//             <hr className={styles.horizontalLine} />
//             {expandedIndex === index && (
//               <div className={styles.answer}>
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//             {/* Horizontal line after answer */}
//             {expandedIndex === index && <hr className={styles.horizontalLine} />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Freqently;

import React, { useState } from "react";
import styles from "./Frequently.module.scss"; // Import your custom styles

const Freqently = () => {
  // Define an array of FAQs
  const faqData = [
    {
      question: "So what does DevRabbit do?",
      answer: "Founded in 2016, DevRabbit provides leading design and development services for Mobile Apps. We help small companies, medium companies, large companies, huge companies, and individual entrepreneurs realize their ideas for Mobile Apps and get them to the market quickly and efficiently.",
    },
    {
      question: "Do I need to work with a professional app development company?",
      answer: "You will encounter a wide variety of app development rates and prices points during your investigation. When hiring an app development company, Price is not THE ONLY Criteria. professional app development company will bring in more than just development. They will contribute and enrich your business requirements to make best.",
    },
    {
      question: "How much does it cost to build an App?",
      answer: "In the past two years, the app market has exploded. In under 9 months the Apple store reported over a billion downloads, and then doubled that number in half the time. The app craze has spread to Android, Blackberry, and every other mobile market under the sun. App cost will determine type of app, complexity of the app and number of features or functions etc.",
    },
    {
      question: "How long does it take to have an app developed?",
      answer: "Typical app will take 6-8 weeks. Based on complexity it may stretch to 6 months.",
    },
    {
        question: "Do you help get the app submitted to the Apple/Android Stores?",
        answer: "YES, we will take extended responsibility and support of App store submission and approval process at free of cost.",
      },
  ];

  // State to track the currently expanded question
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle question click and toggle answer visibility
  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.freqHead}>Frequently Asked Questions</h2>
      <p className={styles.everyHead}>Everything you need to know about the product</p>
      <hr/>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              <p>{faq.question}</p>
            </div>
            {/* If the answer is expanded, show it */}
            {expandedIndex === index && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
            {/* Horizontal line after the question-answer combination */}
            <hr className={styles.horizontalLine} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freqently;

