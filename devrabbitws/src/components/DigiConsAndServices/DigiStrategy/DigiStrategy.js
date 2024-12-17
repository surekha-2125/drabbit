import styles from './DigiStrategy.module.scss';
const DigiStrategy=() => {
    return (
      <>
        <div className={styles.Services}>
          
  
          <div className={styles.subPart}>
            
  
            <div>
              <img
                src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65269a8701a64c30b8b9c5fd_digital-strategie.svg"
                alt="Web"
                className={styles.webTransparentImage}
              />
            </div>
            <div className={styles.side}>
              <h1 className={styles.leftHead}>
              Digital Strategy
              </h1>
              <p className={styles.leftPara}>Making use of digital data to create products that have intrinsic smartness and bring in personalized services. A proven digital strategy is one that puts to best use, a combination of clients services, skills and technologies that accelerate the clients journey to reach their business goals.
             </p>
              <p className={styles.leftPara}>Digital strategy is a Key area of digital transformation process that encompasses Clients’ business models, Operational processes and customer interaction and acquisition. This strategy further influences greatly the business strategy of an organization.</p>
             
            </div>
          </div>
        </div>
      </>
    );
  }
  export default DigiStrategy;
  