import OurClients from "../../Home/OurClients/OurClients";
import ContactUsCard from "./ContactUsCard/ContactUsCard";
import styles from './ContactUs.module.scss';
import ContactClients from "./contactClients/contactClients";
import InputCard from "../../inputCard/inputCard";
import OurLocations from "../../OurLocations/OurLocations";


const ContactUs = () => {
  return (
    <>
      <div className = {styles.background}>
      <div className={styles.row}>
      <div className={styles.column}>
      <ContactClients/>
      <ContactUsCard/>
      
      </div>
      
      <div className={styles.inputCard}>
        <InputCard/>

      </div>
      
      </div>
      
      </div>
      <OurLocations/>
    </>
  );
};
export default ContactUs;
