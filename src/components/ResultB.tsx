import React, { useState } from "react";
import { funnelData } from "./funnelData";
import { FunnelTheme } from "./FunnelTheme";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfUY6xbfWPy6CdapCJQcoVHW1Pfsdsvd9yKwa2J2SyASF0QlA/formResponse";
const EMAIL_FIELD = "entry.972272214";

interface Props {
  theme: FunnelTheme;
  email: string;
  setEmail: (v: string) => void;
  emailError: string;
  setEmailError: (v: string) => void;
}

const resultNode = funnelData.find(node => node.type === "result")!;

const ResultB: React.FC<Props> = ({
  theme,
  email,
  setEmail,
  emailError,
  setEmailError
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    const formData = new FormData();
    formData.append(EMAIL_FIELD, email);
    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });
    setSubmitted(true);
    setTimeout(() => {
      window.open(resultNode.link, "_blank");
    }, 1000);
  };

  return (
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
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "240px",
              marginBottom: "10px"
            }}
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: theme.buttonColors[2],
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "12px 24px",
              fontSize: "16px",
              marginLeft: "10px"
            }}
          >
            Submit & Go to Offer
          </button>
          {emailError && (
            <div style={{ color: "red", marginTop: "8px" }}>{emailError}</div>
          )}
        </form>
      ) : (
        <div style={{ marginTop: "2rem", color: "#28a745" }}>
          Thank you! Redirecting...
        </div>
      )}
    </div>
  );
};

export default ResultB;
