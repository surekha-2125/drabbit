

import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import CaseStudiesTotal from "./components/CaseStudiesTotal/CaseStudiesTotal"; // Your example component
import SolutionGuideTotal from "./components/SolutionGuideTotal/SolutionGuideTotal";
import Dummy from "./components/Header/dummy";
import MobileStrategy from "./components/Technology/MobileStrategy/MobileStrategy";
import TechMs from "./components/Technology/TechMS/TechMS";
import StartHomePage from "./components/StartHomePage/StartHomePage";
import TechMBLBI from "./components/Technology/TechMBLBI/TechMBLBI";
import TechFrame from "./components/TechFrame/TechFrame";

import DevOpsFirst from "./components/Technology/DevOpsFirst/DevOpsFirst";
import InHealthCare from "./components/Industries/InHealthCare/InHealthCare";
import ABOUTUS from "./components/Header/AboutUs/AboutUs";
import BFS from "./components/Industries/InBFS/InBFS";
import ContactUs from "./components/Header/ContactUs/ContactUs";
import InEducation from "./components/Industries/InEducation/InEducation";
import InTechAndHosp from "./components/Industries/InTechAndHosp/InTechAndHosp";
import InRealEstate from "./components/Industries/InRealEstate/InRealEstate";
import ServicesNow from "./components/ServicesNow/ServicesNow";
import AISolutionServices from "./components/AISolutionServices/AISolutionServices";
import BusinessAssuranceServices from "./components/BusinessAssuranceServices/BusinessAssuranceServices";
import IntegrationServices from "./components/IntegrationServices/IntegrationServices";
import DigiConsAndServices from "./components/DigiConsAndServices/DigiConsAndServices";
import IOTSolnsAndServices from "./components/IOTSolnsAndServices/IOTSolnsAndServices";
import SalesforceSection from "./components/SalesforceSection/SalesforceSection";
import Staffing from "./components/Staffing/Staffing";

// Your App component
function App() {
  return (
    <>
      {/* You can add a global header */}
      <Header />

      {/* Define routes here */}
      <Routes>
        <Route path="/" element={<StartHomePage />} /> {/* Home route */}
        <Route path="/resources/case_studies" element={<CaseStudiesTotal />} />
        <Route path="/technology/mobile_strategy" element={<TechMs />} />
        <Route path="/technology/mobile_bi" element={<TechMBLBI />} />
        <Route path="/technology/frameworks" element={<TechFrame />} />
        <Route path="/technology/devops" element={<DevOpsFirst />} />
        <Route path="/industries/healthcare" element={<InHealthCare />} />
        <Route path="/aboutus" element = {<ABOUTUS/>} />
        <Route path="/industries/bfs" element={<BFS/>} />
        <Route path = "/contactus" element = {<ContactUs/>} />
        <Route path = "/industries/education" element = {<InEducation/>}/>
        <Route path = "/industries/travel" element={<InTechAndHosp/>}/>
        <Route path = "/industries/real_estate" element = {< InRealEstate/>}/>
        <Route path="/services/service_now" element = {<ServicesNow/>}/>
        <Route path = "/services/ai_solution_services" element = {<AISolutionServices/>}/>
        <Route path = "/services/business_assurance_services" element={<BusinessAssuranceServices/>} />
        <Route path = "/services/integration_services" element={<IntegrationServices/>} />
        <Route path = "/services/digital_consulting_services" element={<DigiConsAndServices/>}/>
        <Route path = "/services/iot_solutions_and_services" element = {<IOTSolnsAndServices/>} />
        <Route path = "/services/salesforce_consulting" element={<SalesforceSection/>} />
        <Route path = "/services/staffing" element={<Staffing/>}/>
        <Route
          path="/resources/solution_guides"
          element={<SolutionGuideTotal />}
        />
      </Routes>

      {/* You can add a global footer */}
      {/* <Footer /> */}
    </>
  );
}

// Example Home component (you can replace it with your actual Home page component)
function Home() {
  return (
    <div>
      <h1>Welcome to DevRabbit!</h1>
      <p>This is the home page.</p>
    </div>
  );
}

export default App;
