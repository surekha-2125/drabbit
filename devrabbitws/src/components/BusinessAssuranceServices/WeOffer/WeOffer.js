import styles from './WeOffer.module.scss';
import integration from '../../../assets/BFS BLUE/WhatsApp_Image_2024-12-11_at_3.47.02_PM-removebg-preview.png';
import symbol from '../../../assets/HEALTH CARE BLUE/WhatsApp_Image_2024-12-11_at_4.15.25_PM-removebg-preview.png'
import ima from '../../../assets/devops blue/devops blue.png';
const WeOffer = () => {
    return(
        <>
        <div className={styles.background}>
            <h1>We offer the following core Business Assurance Services</h1>
            <div className={styles.bg}>
                <div className={styles.card}>
                <img src = {symbol} className={styles.icon_button}/>
                    <p className={styles.head}>Business Assurance Wellness Check</p>
                    <p>Our test advisory consultants will assess your testing process, tools and people.</p>
                </div>
                <div className={styles.card}>
                <img src = {ima} className={styles.icon_button}/>
                    <p className={styles.head}>Business Assurance Validation</p>
                    <p>We ensure IT investments by your Business is getting expected ROI.</p>
                </div>
                <div className={styles.card}>
                    {/* <h1 className={styles.head}>icone</h1> */}
                    <img src = {integration} className={styles.icon_button}/>
                    <p className={styles.head}>Business Assurance Test Life Cycle Automation</p>
                    <p>We automate key business assurance life cycle activities to increase efficiency.</p>
                </div>

            </div>

        </div>
        </>
    );
}
export default WeOffer;