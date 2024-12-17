import OurClients from "../Home/OurClients/OurClients";
import Testimonials from "../Home/Testimonials/Testimonials";
import Differentiatory from "./Differentiatory/Differentiatory";
import StafFirst from "./StafFirst/StafFirst";
import StafInduServed from "./StafInduServed/StafInduServed";
import StafServiceOfferings from "./StafServiceOfferings/StafServiceOfferings";

const Staffing=() => {
    return(
        <>
        
        <StafFirst/>
        <OurClients/>
        <StafServiceOfferings/>
        <StafInduServed/>
        <Differentiatory/>
        <Testimonials/>
        </>
    );

}
export default Staffing;