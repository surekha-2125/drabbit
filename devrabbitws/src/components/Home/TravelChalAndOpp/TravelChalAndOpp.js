import styles from './TravelChalAndOpp.module.scss';
const TravelChalAndOpp=() => {
    return (
      <>
        <div className={styles.Services}>
          
  
          <div className={styles.subPart}>
            
  
            <div>
              <img
                src="https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6538f14765d88cb2518becd9_Challenges%26Opportunities.svg"
                alt="Web"
                className={styles.webTransparentImage}
              />
            </div>
            <div className={styles.side}>
              <h1 className={styles.leftHead}>
              Challenges & Opportunities
              </h1>
              <p className={styles.leftPara}>
              Advent of newer technologies has facilitated integration of third-party tools and regulators. Social media, institutional design and interactive platforms are a few ways to stay ahead in this revolution.</p>
              <p className={styles.leftPara}>The expectations from the institutes are vast. In addition to high-tech learning, it is also expected that the institutions train their students as market-ready.</p>
              <p className={styles.leftPara}>The measure of the accountability in terms of student success and employability is growing rapidly. The solution is to have in place the required metrics and mechanisms that can help demonstrate proof of ‘value addition’.</p>
              {/* <button className={styles.bookDemo}> Read More </button> */}
            </div>
          </div>
        </div>
      </>
    );
  }
  export default TravelChalAndOpp;
  