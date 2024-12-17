import OurClients from "../Home/OurClients/OurClients";
import GetInTouch from "./GetInTouch/GetInTouch";
import OurAIBuildProcess from "./OurAIBuildProcess/OurAIBuildProcess";
import OurAIServices from "./OurAIServices/OurAIServices";
import TechAndTools from "./TechAndTools/TechAndTools";
import YourPartnerInAI from "./YourPartnerInAI/YourPartnerInAI";

const AISolutionServices = () => {
  return (
    <>
      <YourPartnerInAI />
      <OurAIServices/>
      <OurClients/>
      <TechAndTools/>
      <OurAIBuildProcess/>
      <GetInTouch/>
    </>
  );
};
export default AISolutionServices;
