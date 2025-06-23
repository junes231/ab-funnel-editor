import React from "react";
import MultiStepFunnel from "./components/MultiStepFunnel";
import { getFunnelVersion } from "./abTest";

const App: React.FC = () => {
  const version = getFunnelVersion();
  return <MultiStepFunnel version={version} />;
};

export default App;
