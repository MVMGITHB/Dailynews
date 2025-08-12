import AiAssistant from "@/components/ExploratoryTesting/Aitestassistant";
import DiscoveryLog from "@/components/ExploratoryTesting/Discoverylog";
import ExplorationMap from "@/components/ExploratoryTesting/ExplorationMap";
import Header from "@/components/ExploratoryTesting/Header";
import HeroSection from "@/components/ExploratoryTesting/HeroSection";
import RiskAnalysis from "@/components/ExploratoryTesting/RiskAnalysis";
import SessionConfiguration from "@/components/ExploratoryTesting/SessionConfiguration";
import SessionSummary from "@/components/ExploratoryTesting/SessionSummary";
import TestCoverageHeatmap from "@/components/ExploratoryTesting/TestCoverageHeatmap";
import TestStrategyCards from "@/components/ExploratoryTesting/TestStrategyCards";

import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SessionConfiguration />
      <TestStrategyCards />
      <ExplorationMap />
      <AiAssistant />
      <DiscoveryLog />
      <RiskAnalysis />
      <TestCoverageHeatmap />
      <SessionSummary />
    </div>
  );
};

export default page;
