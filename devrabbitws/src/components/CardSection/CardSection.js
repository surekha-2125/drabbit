// import styles from './CardSection.module.scss';
// const CardSection = ()=> {
//     return(
//         <>
//         <div className={styles.cardSec}>

//         <div className={styles.card}>
//         <div className={styles.cardimageline}>
//             <img
//               src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9c0b83e8fd3af1337_Img_4.svg"
//               alt="Web"
//               className={styles.webTransparentImage}
//             />
//             <h1 className={styles.head}>Salesforce Analytics Cloud</h1>
//             </div>
//         <li>Designed for business users, analysts, developers and IT/admin</li>
//         <li>High-speed search based query index</li>
//         <li>Designed for business users, analysts, developers and IT/admin</li>
//         <li>Accessible from any device</li>
//         <li>Accessible from any device</li>
//         <li>Configurable permissions</li>
//         <li>Easily compare datasets</li>
//         <li>Measure, group, filter, view and share data</li>
//         <li>Designed for mobile and rapid visualization across all devices</li>
//         <li>Native Salesforce integration</li>

//         </div>
//         </div>

//         </>
//     );
// }
// export default CardSection;
// import React from "react";
// import styles from "./CardSection.module.scss"; // Add your CSS file path
// import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

// const listItems = [
//   "Make better decisions through in-depth analysis",
//   "Quickly summarize business information",
//   "Collaborate with your co-workers and share reports",
//   "Consult metrics and key performance indicators (KPIs)",
//   "Increased productivity of the workforce",
//   "Edit and share comments along with and about data",
//   "Speed up return on investment",
//   "Improve decision-making with real-time data",
//   "Boost profitability with actionable insights"
// ];

// function CardSection() {
//   return (
//     <div className={styles.card}>
//       <h2 className={styles.cardTitle}>Business Data Intelligence Benefits</h2>
//       <div className={styles.cardContent}>
//         <ul className={styles.list}>
//           {listItems.map((item, index) => (
//             <li key={index} className={styles.listItem}>
//               <CheckRoundedIcon className={styles.icon} />
//               <p className={styles.itemText}>{item}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default CardSection;

// import styles from './CardSection.module.scss';

// const CardSection = () => {
//   const cardsData = [
//     {
//       title: "Salesforce Analytics Cloud",
//       imgSrc: "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9c0b83e8fd3af1337_Img_4.svg",
//       items: [
//         "Designed for business users, analysts, developers and IT/admin",
//         "High-speed search based query index",
//         "Designed for business users, analysts, developers and IT/admin",
//         "Accessible from any device",
//         "Configurable permissions",
//         "Easily compare datasets",
//         "Measure, group, filter, view and share data",
//         "Designed for mobile and rapid visualization across all devices",
//         "Native Salesforce integration",
//       ],
//     },
//     {
//       title: "Analytics Dashboard",
//       imgSrc: "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9c0b83e8fd3af1337_Img_4.svg",
//       items: [
//         "Visualize data in real-time",
//         "Interactive charts and graphs",
//         "Drag and drop widgets",
//         "Share insights across teams",
//         "Collaborate on data analysis",
//         "Customizable filters and views",
//         "Automated reporting",
//         "Integration with cloud services",
//         "Mobile-friendly interface",
//       ],
//     },
//     {
//       title: "Data Analytics Platform",
//       imgSrc: "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9c0b83e8fd3af1337_Img_4.svg",
//       items: [
//         "Predictive analytics capabilities",
//         "Big data processing",
//         "Customizable dashboards",
//         "AI-powered insights",
//         "Real-time data updates",
//         "Robust security protocols",
//         "Seamless data integration",
//         "Collaboration features",
//         "Cloud-based infrastructure",
//       ],
//     },
//     {
//       title: "Business Intelligence Suite",
//       imgSrc: "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650d98a9c0b83e8fd3af1337_Img_4.svg",
//       items: [
//         "Advanced data visualization tools",
//         "Comprehensive analytics reporting",
//         "Integration with third-party tools",
//         "Easy-to-use interface",
//         "Customizable permissions",
//         "Multi-device accessibility",
//         "Real-time collaboration",
//         "Automated data syncing",
//         "Secure data storage",
//       ],
//     },
//   ];

//   return (
//     <div className={styles.cardSection}>
//       {cardsData.map((card, index) => (
//         <div className={styles.card} key={index}>
//           <div className={styles.cardimageline}>
//             <img
//               src={card.imgSrc}
//               alt={card.title}
//               className={styles.webTransparentImage}
//             />
//             <h1 className={styles.head}>{card.title}</h1>
//           </div>
//           <ul className={styles.cardList}>
//             {card.items.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardSection;

import styles from "./CardSection.module.scss";

const CardSection = () => {
  const cardsData = [
    {
      title: "Salesforce Analytics Cloud",
      imgSrc:
        "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650dda2af863ae34fe1848e7_salesforce.jpeg",
      items: [
        "Designed for business users, analysts, developers and IT/admin",
        "High-speed search based query index",
        "Designed for business users, analysts, developers and IT/admin",
        "Accessible from any device",
        "Configurable permissions",
        "Easily compare datasets",
        "Measure, group, filter, view and share data",
        "Designed for mobile and rapid visualization across all devices",
        "Native Salesforce integration",
      ],
    },
    {
      title: "BIRST",
      imgSrc:
        "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650e71fd39aef13035a91d88_birst.jpeg",
      items: [
        "Unified business analytics Collaborate and distribute",
        "Analyses Integrate data from many systems Automate complex",
        "Data management tasks Deploy BI in weeks Single interface",
        "Accessible from any device",
        "Reports and queries Interactive data visualizations",
        "Precise layout across any medium Real-time alerts Secure",
        "Report distribution and automated scheduling Report",
        "Caching APIs to extend the design on any report",
        "Point-and-click interface",
      ],
    },
    {
      title: "Qlik View",
      imgSrc:
        "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650e71fd39aef13035a91d8e_Qlik-View.jpeg",
      items: [
        "Consolidates data from multiple sources into a single application",
        "Social decision-making through secure, real time collaboration",
        "Data visualizations with state-of-the-art graphics",
        "Data search engine",
        "Interactive apps, dashboards and analytics",
        "Access, analyze and capture data from mobile devices",
        "Access, analyze and capture data from mobile devices",
        "Easily create and manage data definitions and transformations",
        "Quickly design Business Discovery apps",
      ],
    },
    {
      title: "Tableau",
      imgSrc:
        "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650e71fd4186384a25421226_tableau.jpeg",
      items: [
        "The flexible data architecture allows users to connect live to their data source, or extract all or a portion of their data into memory",
        "Scalable for hardware and memory",
        "Automatic updates",
        "Embed, share, comment on and subscribe to interactive dashboards",
        "Publish dashboards through Tableau Desktop and share within your organization or with customers and partners through Tableau or",
        "Tableau Online",
        "Permission settings",
        "Dashboards automatically optimized for mobile devices",
        "Can extract from 45+ data source",
      ],
    },
    {
      title: "Micro Power BI",
      imgSrc:
        "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/650e71fd6cf62f0b69e9918b_microsoft.jpeg",
      items: [
        "Microsoft Power BI is a cloud -based business analytics service that gives you a single view of your most critical business data. Monitor the health of your business using a live dashboard, create rich interactive reports with Power BI Desktop and access your data on the go with native Power BI Mobile apps. It’s easy and fast",
        "All your data, wherever it is",
        "Be informed: always real time",
        "Ask questions, get answers",
        "Curated content, just for your organization",
        "End chaos: Everyone on the same page",
        "Make data-driven decisions, from anywhere",
        "Integrate with Power BI",
      ],
    },
  ];

  return (
    <div className={styles.cardSection}>
      {cardsData.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.cardimageline}>
            <img
              src={card.imgSrc}
              alt={card.title}
              className={styles.webTransparentImage}
            />
            
          </div>
          <ul className={styles.cardList}>
            {card.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
