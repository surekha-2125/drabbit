import DevRabbitRealEs from "../../Home/DevRabbitRealEs/DevRabbitRealEs";
import Integration from "../../Home/Integration/Integration";
import ManagedService from "../../Home/ManagedServices/ManagedServices";
import OurClients from "../../Home/OurClients/OurClients";
import TechExperts from "../../Home/TechExperts/TechExperts";
import Testimonials from "../../Home/Testimonials/Testimonials";
import PartnerShips from "../../PartnerShips/PartnerShips";

const InRealEstate = () => {
    return(
        <>
        <DevRabbitRealEs/>
        <Integration/>
        <TechExperts/>
        <ManagedService/>
        <PartnerShips/>
        <Testimonials/>
        </>
    );
}
export default InRealEstate;