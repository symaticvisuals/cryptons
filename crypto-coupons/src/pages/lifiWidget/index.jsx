import { LiFiWidget } from "@lifi/widget";
import React from "react";

function LiFi() {
  const widgetConfig = {
    integrator: "Cryptons",
    containerStyle: {
      border: "1px solid rgb(234, 234, 234)",
      borderRadius: "16px",
    },
    toChain: "137",

    // It can be either standard, expandable, or drawer
    variant: "expandable",
  };
  return <LiFiWidget config={widgetConfig} variant="expandable" />;
}

export { LiFi };
