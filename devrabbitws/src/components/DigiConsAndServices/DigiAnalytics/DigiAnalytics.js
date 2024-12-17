import styles from './DigiAnalytics.module.scss';
const DigiAnalytics=() => {
    return (
      <>
        <div className={styles.Services}>
          
  
          <div className={styles.subPart}>
            
  
            <div>
              <img
                src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/652937a18077af4d00046f3f_iot-challenges.png"
                alt="Web"
                className={styles.webTransparentImage}
              />
            </div>
            <div className={styles.side}>
              <h1 className={styles.leftHead}>
              Digital Analytics
              </h1>
              <p className={styles.leftPara}>
              Analytics are critical for a growing business. They help businesses streamline, prepare for tomorrow with data adequate for predictions besides helping in consolidation.</p>
              <p className={styles.leftPara}>Analytics help in measuring results and provide data to calculate ROI of all the digital campaigns thereby helping businesses to grow revenue faster.</p>
              <p className={styles.leftPara}>Tools like DTM, Adobe Analytics, Flurry Analytics help gain much-needed insights and metrics to determine digital marketing’s impact and the alignment with the clients’ digital strategy.</p>
             
            </div>
          </div>
        </div>
      </>
    );
  }
  export default DigiAnalytics;
  