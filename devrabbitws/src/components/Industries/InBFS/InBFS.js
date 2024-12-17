import BankingAndFin from "../../Home/BankingAndFin/BankingAndFin";
import DataAnalytics from "../../Home/DataAnalytics/DataAnalytics";
import DigitalBanking from "../../Home/DigitalBanking/DigitalBanking";
import OurClients from "../../Home/OurClients/OurClients";
import Regulatory from "../../Home/Regulatory/Regulatory";
import Sustainable from "../../Home/Sustainable/Sustainable";
import Testimonials from "../../Home/Testimonials/Testimonials";

const BFS = () => {
    return(
        <>
        <BankingAndFin/>
        <OurClients/>
        <DigitalBanking/>
        <Regulatory/>
        <DataAnalytics/>
        <Sustainable/>
        <Testimonials/>
        </>
    );
}
export default BFS;