import React from "react";
import IntroductionSection from "./section/IntroductionSection";
import IntegrationsSection from "./section/IntegrationsSection";
import DemosSection from "./section/DemosSection";

const PresentationSection = () => {
  return (
    <>
      <IntroductionSection />
      <IntegrationsSection />
      <DemosSection />
    </>
  );
};

export default PresentationSection;
