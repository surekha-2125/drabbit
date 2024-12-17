import BusAssWe from "./BusAssWe/BusAssWe";
import BusiAssValidation from "./BusiAssValidation/BusiAssValidation";
import BusiAssWellCheck from "./BusiAssWellCheck/BusiAssWellCheck";
import Business from "./Business/Business";
import WeOffer from './WeOffer/WeOffer';
import Testimonials from '../../components/Home/Testimonials/Testimonials'

const BusinessAssuranceServices = () => {
    return(
        <>
        <Business/>
        <WeOffer/>
        <BusiAssWellCheck/>
        <BusiAssValidation/>
        <BusAssWe/>
        <Testimonials/>
        </>

    );
}
export default BusinessAssuranceServices;