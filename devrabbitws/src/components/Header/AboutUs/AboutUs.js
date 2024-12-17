import Transform from "../../AboutUs/Transform/Transform";
import WeAreOnly from "../../AboutUs/WeAreOnly/WeAreOnly";
import OurClients from "../../Home/OurClients/OurClients";
import MeetOurTeam from "../../AboutUs/MeetOurTeam/MeetOurTeam";
import StartYour from "../../AboutUs/StartYour/StartYour";
import styles from './AboutUs.module.scss'

const ABOUTUS = () => {
    return(
        <>
        <div className={styles.whole}>
<Transform/>
<OurClients/>
<WeAreOnly/>
<MeetOurTeam/>
<StartYour/>
</div>

        </>
    );
}
export default ABOUTUS;