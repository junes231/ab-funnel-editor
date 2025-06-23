export type FunnelVersion = "A" | "B";

export function getFunnelVersion(): FunnelVersion {
  const saved = localStorage.getItem("funnel_version");
  if (saved === "A" || saved === "B") return saved;
  const assigned = Math.random() < 0.5 ? "A" : "B";
  localStorage.setItem("funnel_version", assigned);
  return assigned;
}
