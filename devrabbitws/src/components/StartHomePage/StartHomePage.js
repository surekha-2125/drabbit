import OurClients from "../Home/OurClients/OurClients";
import Services from "../Home/SuperCharge/SuperCharge";
import Testimonials from "../Home/Testimonials/Testimonials";
import Notify from "../Home/TwoSliders/Notify/Notify";
import WeHelpAccelerate from "../Home/WeHelpAccelerate/WeHelpAccelerate";
import Frequently from "../Home/Frequently/Frequently";
import OurServices from "../Home/OurServices/OurServices"
import AppCloudHoisting from "../ThreeSliders/AppCloudHoisting/AppCloudHoisting";

const StartHomePage = () => {
    return(
        <>
        <Services/>
        <OurClients/>
        <WeHelpAccelerate/>
        <AppCloudHoisting/>
        <OurServices/>
          <Notify/>
 <Frequently/>
   < Testimonials/>
        </>
    );
}
export default StartHomePage;