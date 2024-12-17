import styles from './IntegratedCloud.module.scss';
import IC from '../../../assets/icons (2)/icons/IC/48.png';
import IOT from '../../../assets/icons (2)/icons/IOT/48px.png';
import staff from '../../../assets/icons (2)/icons/Staff/48px.png'
const IntegratedCloud = () => {
    return(
        <>
        <div className={styles.background}>
            <h1 className={styles.intehead}>Integrated Cloud & Data Solutions</h1>
            <p className={styles.empowerhead}>Empower your enterprise with our cloud and data expertise. We simplify your digital transformation, guiding you through every phase, ensuring agility and robustness.</p>
            <div className={styles.bg}>
                <div className={styles.card}>
                <img src={IOT} className={styles.image}/>
                    <p className={styles.firstside}>Multi-cloud Strategies:</p>
                    <p className={styles.secondside}>Leverage the unique advantages of platforms like AWS, Azure, and Google Cloud under our expert guidance.</p>
                </div>
                <div className={styles.card}>
                <img src={IC} className={styles.image}/>
                    <p className={styles.firstside}>Cloud Migration:</p>
                    <p className={styles.secondside}>We take the complexity out of migrating your business to the cloud, prioritizing data security and process integrity.</p>
                </div>
                <div className={styles.card}>
                <img src={staff} className={styles.image}/>
                    <p className={styles.firstside}>Data Warehousing & Synchronization:</p>
                    <p className={styles.secondside}>Centralize and maintain data integrity across platforms, fostering business intelligence.</p>
                </div>

            </div>

        </div>
        </>
    );
}
export default IntegratedCloud;