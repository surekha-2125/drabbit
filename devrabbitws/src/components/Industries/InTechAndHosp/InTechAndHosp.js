import InTraHowWeAdd from "../../Home/InTraHowWeAdd/InTraHowWeAdd";
import OurClients from "../../Home/OurClients/OurClients";
import OurServiceOfferings from "../../Home/OurServiceOfferings/OurServiceOfferings";
import Testimonials from "../../Home/Testimonials/Testimonials";
import TravelAndHosp from "../../Home/TravelAndHosp/TravelAndHosp";
import TravelChalAndOpp from "../../Home/TravelChalAndOpp/TravelChalAndOpp";

const InTechAndHosp = () => {
    return(
        <>
        <TravelAndHosp/>
        <OurClients/>
        <TravelChalAndOpp/>
        <InTraHowWeAdd/>
        <OurServiceOfferings/>
        <Testimonials/>
        </>
    );
}
export default InTechAndHosp;