import OurClients from "../Home/OurClients/OurClients";
import Testimonials from "../Home/Testimonials/Testimonials";
import WeWorkyourprefer from "../weWorkyourprefer/weWorkyourprefer";
// import WeWorkyourprefer from "../weWorkyourprefer/weWorkyourprefer";
import WhatISInternet from "./WhatISInternet/WhatISInternet";
import WhyIOT from "./WhyIOT/WhyIOT";

const IOTSolnsAndServices=() => {
    return(
        <>
        < WhatISInternet/>
        <WhyIOT/>
        {/* <OurClients/> */}
        <WeWorkyourprefer/>
        <Testimonials/>
        </>
    );
}
export default IOTSolnsAndServices;