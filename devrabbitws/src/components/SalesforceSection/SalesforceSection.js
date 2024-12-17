// import SFCaseStudies from "../SFFiveSlides/SFCaseStudies/SFCaseStudies";
import Testimonials from "../Home/Testimonials/Testimonials";
import SFCaseStudies from "../SFFiveSlides/SFCaseStudies/SFCaseStudies";
import SFimplementAndCons from "./SFimplementAndCons/SFimplementAndCons";
import WhyLeverage from "./WhyLeverage/WhyLeverage";

const SalesforceSection = () => {
  return (
    <>
      <SFimplementAndCons />
      <WhyLeverage/>
      <SFCaseStudies/>
      <Testimonials/>
    </>
  );
};
export default SalesforceSection;
