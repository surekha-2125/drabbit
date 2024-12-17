// import React from "react";
// import styles from './MeetOurTeam.module.scss';

// const MeetOurTeam = () => {
//   return (
//     <>
//       <h1>Meet our team</h1>
//       <div className={styles.bg}>
//         <img
//           src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc5222a1e9f8b17d2e9_team-1.png"
//           alt="image"
//         />
//         <p className={styles.heading}>Satheesh Kanchi</p>
//         <p className={styles.head}>Chief Executive Officer</p>
//         <p className={styles.para}>hello</p>
//       </div>
//     </>
//   );
// };
// export default MeetOurTeam;

import React from "react";
import styles from "./MeetOurTeam.module.scss";

const teamMembers = [
  {
    name: "Satheesh Kanchi",
    role: "Chief Executive Officer",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc5222a1e9f8b17d2e9_team-1.png",
    description: "hello",
  },
  {
    name: "Murali Bojjala",
    role: "Chief Technology Officer",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc5e4e95fb82f136a44_team-2.png",
    description: "Passionate about tech",
  },
  {
    name: "Gabe Veach",
    role: "Chief Growth Officer",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc8ef4575c0c9d33a31_team-5.png",
    description: "Creative thinker",
  },
  {
    name: "Ron Culver",
    role: "Lead Developer",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/66a73a0a1164f8a371fd0e55_RON-CULVER.png",
    description: "Expert in frontend",
  },
  {
    name: "Viswanath Mallichetty",
    role: "Product Manager",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc7988a64a768176684_team-6.png",
    description: "Loves building products",
  },
  {
    name: "Uday Tanikonda",
    role: "UX/UI Designer",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc75bd5a436f0a32cb4_team-7.png",
    description: "Designs with empathy",
  },
  {
    name: "Kuladeep Yeduru",
    role: "Business Analyst",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652d2bc5642dc4fe5c3742a7_team-3.png",
    description: "Analyzing business trends",
  },
  {
    name: "Krishna Mohan Gorle",
    role: "Customer Success Manager",
    image:
      "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65376e350360b8ed50de5a05_KM.png",
    description: "Making customers happy",
  },
];

const MeetOurTeam = () => {
  return (
    <>
      <h1 className={styles.meet}>Meet our team</h1>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.bg}>
            <img src={member.image} alt="image" className={styles.image} />
            <p className={styles.heading}>{member.name}</p>
            <p className={styles.head}>{member.role}</p>
            <p className={styles.para}>{member.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MeetOurTeam;
