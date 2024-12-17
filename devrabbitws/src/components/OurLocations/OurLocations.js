import styles from './OurLocations.module.scss'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const OurLocations = () => {
    return(
        <>
        <h1 className={styles.head}>Our Locations</h1>
        <div className={styles.row}>
        <div className={styles.cardlike}>
            <img src ="https://tse1.mm.bing.net/th?id=OIP.BziTAu2olODynD2df1zrgAHaEg&pid=Api&P=0&h=180" alt = "image" className={styles.image} />
            <h1>California</h1>
            <p>1180 Iron Point Rd, Suite 145,
            Folsom, CA 95630</p>
            <div className={styles.email}>
            <MdOutlineEmail className={styles.icon}/>
            <p>info@devrabbit.com</p>
            </div>
            <div className={styles.email}>
            <FaPhoneVolume  className={styles.icon}/>
            <p>+1-650-352-8686</p>
            </div>
        </div>
        <div className={styles.cardlike}>
            <img src ="https://tse2.mm.bing.net/th?id=OIP.mj6ZxHH_YhezE3baAh0MNwHaEs&pid=Api&P=0&h=180" alt = "image" className={styles.image}/>
            <h1>Hyderabad</h1>
            <p>8-2-268/R/5, Sagar Society, Road No.2,
            Banjara Hills, Hyderabad, India</p>
            <div className={styles.email}>
            <MdOutlineEmail className={styles.icon}/>
            <p>info@devrabbit.com</p>
            </div>
            <div className={styles.email}>
            <FaPhoneVolume  className={styles.icon} />
            <p>+1-650-352-8686</p>
            </div>
        </div>
        <div className={styles.cardlike}>
            <img src ="https://tse2.mm.bing.net/th?id=OIP.mj6ZxHH_YhezE3baAh0MNwHaEs&pid=Api&P=0&h=180" alt = "image" className={styles.image}/>
            <h1>Tirupati</h1>
            <p>19-12-167, 2nd & 3rd Floors,
            Bairagipatteda, Tirupati, India</p>
            <div className={styles.email}>
            <MdOutlineEmail className={styles.icon}/>
            <p>info@devrabbit.com</p>
            </div>
            <div className={styles.email}>
            <FaPhoneVolume  className={styles.icon}/>
            <p>+1-650-352-8686</p>
            </div>
        </div>
        </div>
        </>
    );
}
export default OurLocations;