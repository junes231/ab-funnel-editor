import React, { useState } from "react";
import { funnelData, FunnelStep } from "./funnelData";
import { themes } from "./FunnelTheme";
import ResultA from "./ResultA";
import ResultB from "./ResultB";

interface Props {
  version: "A" | "B";
}

const MultiStepFunnel: React.FC<Props> = ({ version }) => {
  const [currentId, setCurrentId] = useState("q1");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const currentNode = funnelData.find(node => node.id === currentId) as FunnelStep;
  const [themeIdx, setThemeIdx] = useState(0);
  const theme = themes[themeIdx];

  if (!currentNode) return <div>Invalid funnel configuration</div>;

  const containerStyle = {
    background: theme.bgGradient,
    minHeight: "100vh",
    fontFamily: theme.fontFamily,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem"
  };

  const buttonStyle = (colorIdx: number) => ({
    backgroundColor: theme.buttonColors[colorIdx % theme.buttonColors.length],
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "12px 24px",
    margin: "10px 0",
    width: "240px",
    fontSize: "16px",
    cursor: "pointer",
    display: "block"
  });

  if (currentNode.type === "result") {
    if (version === "A") {
      return <ResultA theme={theme} />;
    }
    return (
      <ResultB
        theme={theme}
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        setEmailError={setEmailError}
      />
    );
  }

  return (
    <div style={containerStyle}>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button
          style={{
            background: "#fff",
            color: "#333",
            border: "1px solid #ddd",
            borderRadius: 4,
            padding: "6px 12px",
            cursor: "pointer"
          }}
          onClick={() => setThemeIdx((themeIdx + 1) % themes.length)}
        >
          Switch Theme
        </button>
      </div>
      <h3>{currentNode.text}</h3>
      {currentNode.options?.map((option, idx) => (
        <button
          key={option.label}
          style={buttonStyle(option.colorIdx)}
          onClick={() => setCurrentId(option.next)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default MultiStepFunnel;
