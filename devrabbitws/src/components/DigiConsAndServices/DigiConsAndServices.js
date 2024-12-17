import Testimonials from "../Home/Testimonials/Testimonials";
import Digi from "./Digi/Digi";
import DigiAnalytics from "./DigiAnalytics/DigiAnalytics";
import DigiStrategy from "./DigiStrategy/DigiStrategy";
import DigitalMarketing from "./DigitalMarketing/DigitalMarketing";
import UnderDigital from "./UnderDigital/UnderDigital";

const DigiConsAndServices = () => {
    return(
        <>
        <Digi/>
        <UnderDigital/>
        <DigiStrategy/>
        <DigitalMarketing/>
        <DigiAnalytics/>
        <Testimonials/>
        </>
    );
}
export default DigiConsAndServices;