

import styles from './Unified.module.scss';
import IC from '../../../assets/icons (2)/icons/IC/48.png';
import IOT from '../../../assets/icons (2)/icons/IOT/48px.png';
import staff from '../../../assets/icons (2)/icons/Staff/48px.png'
const Unified= () => {
    return(
        <>
        <div className={styles.background}>
            <h1 className={styles.intehead}>Unified Business Systems Integration</h1>
            <p className={styles.empowerhead}>Simplify your operations by leveraging our expertise in business system unification. With us, you're not just integrating systems; you're harmonizing your business strategies with the latest technological innovations.</p>
            <div className={styles.bg}>
                <div className={styles.card}>
                <img src={IOT} className={styles.image}/>
                    <p className={styles.firstside}>Unified Communication:</p>
                    <p className={styles.secondside}>By converging tools like email, VoIP, and chat, we provide an interconnected communication ecosystem, ensuring that your teams collaborate more efficiently, and decisions are made faster.</p>
                </div>
                <div className={styles.card}>
                <img src={IC} className={styles.image}/>
                    <p className={styles.firstside}>CRM Integration:</p>
                    <p className={styles.secondside}>We integrate CRMs to enhance your customer journey, aligning interactions and data management, so that you capture every customer touchpoint and provide delighted experience.</p>
                </div>
                <div className={styles.card}>
                <img src={staff} className={styles.image}/>
                    <p className={styles.firstside}>ERP Systems:</p>
                    <p className={styles.secondside}>We recognize the challenges in managing back-office tasks. Through our integrated ERP solutions, we centralize tech, service, and HR functionalities, driving streamlined operations and actionable insights.</p>
                </div>

            </div>

        </div>
        </>
    );
}
export default Unified;