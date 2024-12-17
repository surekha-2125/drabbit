import styles from './ContactUsCard.module.scss'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
const ContactUsCard = () => {
  return (
    <>
    <div className={styles.card}>
      <h1>Contact Us</h1>
      <p>Let us take care of your next event, talk to our event experts today!</p>
      <div className={styles.email}>
            <MdOutlineEmail className={styles.icon} />
            <p style={{color:'#5d1eb4'}}>info@devrabbit.com</p>
          </div>
          <div className={styles.email}>
            <FaPhoneVolume className={styles.icon} />
            <p style={{color:'#5d1eb4'}}>+1-650-352-8686</p>
          </div>
      </div>
    </>
  );
};
export default ContactUsCard;
