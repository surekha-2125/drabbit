import APIManage from "./APIManage/APIManage";
import ServicesDr from "./BAndPGateway/BAndPGateway";
import BusiAndPayGateway from "./BusiAndPayGetway/BusiAndPayGetway";
import IntegratedCloud from "./IntegratedCloud/IntegratedCloud";
import IntiServices from "./IntiServices/IntiServices";
import Unified from "./Unified/Unified";

const IntegrationServices = () => {
    return(
        <>
        <IntiServices/>
        <IntegratedCloud/>
        <ServicesDr/>
        <BusiAndPayGateway/>
        <APIManage/>
        <Unified/>
        </>
    );
}
export default IntegrationServices;