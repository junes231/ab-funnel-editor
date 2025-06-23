import React from "react";
import { funnelData } from "./funnelData";
import { FunnelTheme } from "./FunnelTheme";

const resultNode = funnelData.find(node => node.type === "result")!;
const ResultA: React.FC<{ theme: FunnelTheme }> = ({ theme }) => (
  <div
    style={{
      background: theme.bgGradient,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <h2>{resultNode.text}</h2>
    <a
      href={resultNode.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: theme.buttonColors[1],
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "12px 24px",
        marginTop: "2rem",
        fontSize: "16px",
        textDecoration: "none"
      }}
    >
      Go to Offer
    </a>
  </div>
);

export default ResultA;
