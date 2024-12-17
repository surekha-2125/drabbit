import styles from './DigitalMarketing.module.scss';
const DigitalMarketing=() => {
    return (
      <>
        <div className={styles.Services}>
          
  
          <div className={styles.subPart}>
            
  
            
            <div className={styles.side}>
              <h1 className={styles.leftHead}>
              Digital Marketing
              </h1>
              <p className={styles.leftPara}>Keeping the client’s digital strategy in view, our digital marketing services majorly target branding, advertising delivered through multiple digital channels viz., search engine optimization, email campaign, social media campaign, website optimization, mobile apps etc,
              </p>
              <p className={styles.leftPara}>We use tools like Outbrain, Taboola for Native Ad management, Facebook and Google for Standard Ads and Criteo for Re-targeting.</p>
              
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65269b7d6ed1035b12b90636_digital-marketing.svg"
                alt="Web"
                className={styles.webTransparentImage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  export default DigitalMarketing;
  