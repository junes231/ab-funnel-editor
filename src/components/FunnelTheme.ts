export interface FunnelTheme {
  bgGradient: string;
  buttonColors: string[];
  fontFamily: string;
}

export const themes: FunnelTheme[] = [
  {
    bgGradient: "linear-gradient(135deg, #a4508b 0%, #f7accf 100%)",
    buttonColors: ["#28a745", "#007bff", "#dc3545", "#17a2b8"],
    fontFamily: "'Segoe UI', Arial, sans-serif"
  },
  {
    bgGradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    buttonColors: ["#20c997", "#6610f2", "#e83e8c", "#fd7e14"],
    fontFamily: "'Roboto', Arial, sans-serif"
  }
];
