
import styles from './UnderDigital.module.scss';
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
const UnderDigital = () => {
    return(
        <>
        <div className={styles.background}>
            <h1>Under DIGITAL CONSULTING SERVICES, we help client businesses to</h1>
            <div className={styles.bg}>
                <div className={styles.card}>
                <CheckRoundedIcon className={styles.icon_button} />
                    
                    <p className={styles.para}>Create a digital blueprint to streamline the process of digital transformation and help arrive at a digital strategy that leverages digital capabilities.</p>
                </div>
                <div className={styles.card}>
                <CheckRoundedIcon className={styles.icon_button} />
                    
                    <p className={styles.para}>Making the best use of the various facets Digital marketing to help businesses grow in revenue and in the process positioning them in the market place.</p>
                </div>
                <div className={styles.card}>
                <CheckRoundedIcon className={styles.icon_button} />
          
                    <p className={styles.para}>Help businesses in using data to fine tune business models, enhance productivity and make informed decisions.</p>
                </div>

            </div>

        </div>
        </>
    );
}
export default UnderDigital ;