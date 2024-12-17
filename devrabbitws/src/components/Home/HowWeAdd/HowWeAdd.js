import styles from './HowWeAdd.module.scss';
const HowWeAdd=() => {
    return (
      <>
        <div className={styles.Services}>
          
  
          <div className={styles.subPart}>
            
  
            
            <div className={styles.side}>
              <h1 className={styles.leftHead}>
              How we add Value to your Business
              </h1>
              <p className={styles.leftPara}>We have ample experience in the Healthcare sector. We come with immense expertise in tech consulting, web and mobile technology and solutions. We deliver solutions that address industry challenges at best prices. We deliver best business values like transformation, innovation and efficiency.
              </p>
              <p className={styles.leftPara}>DevRabbit has significant experience in helping ISVs providing healthcare technology services to Pharma, Medicare, Payers, Public Health and other healthcare segments. Our knowledge and experience of healthcare regulations and standards such as Meaningful Use Certification, HIPAA (covers confidentiality and security), HL7 (interoperability standard) and ICD is reflected in the delivery of high quality and robust healthcare systems we have built.</p>
              
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/65293fa70d33b030ba676a8f_it-services.png"
                alt="Web"
                className={styles.webTransparentImage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  export default HowWeAdd;
  