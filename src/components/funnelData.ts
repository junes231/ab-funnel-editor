export interface FunnelStep {
  id: string;
  type: "question" | "result";
  text: string;
  options?: { label: string; next: string; colorIdx: number }[];
  link?: string;
}

export const funnelData: FunnelStep[] = [
  {
    id: "q1",
    type: "question",
    text: "What is your main goal for this product?",
    options: [
      { label: "Save money", next: "q2", colorIdx: 0 },
      { label: "Save time", next: "q2", colorIdx: 1 },
      { label: "Increase quality", next: "q2", colorIdx: 2 },
      { label: "Try something new", next: "q2", colorIdx: 3 }
    ]
  },
  {
    id: "q2",
    type: "question",
    text: "Which feature is most important to you?",
    options: [
      { label: "Easy to use", next: "q3", colorIdx: 1 },
      { label: "Customizable", next: "q3", colorIdx: 0 },
      { label: "Affordable", next: "q3", colorIdx: 2 },
      { label: "Popular", next: "q3", colorIdx: 3 }
    ]
  },
  {
    id: "q3",
    type: "question",
    text: "How do you prefer to learn about products?",
    options: [
      { label: "Videos", next: "q4", colorIdx: 2 },
      { label: "Articles", next: "q4", colorIdx: 1 },
      { label: "Webinars", next: "q4", colorIdx: 0 },
      { label: "Demos", next: "q4", colorIdx: 3 }
    ]
  },
  {
    id: "q4",
    type: "question",
    text: "What is your budget range?",
    options: [
      { label: "$0-100", next: "q5", colorIdx: 0 },
      { label: "$100-500", next: "q5", colorIdx: 1 },
      { label: "$500-1000", next: "q5", colorIdx: 2 },
      { label: "$1000+", next: "q5", colorIdx: 3 }
    ]
  },
  {
    id: "q5",
    type: "question",
    text: "What best describes your role?",
    options: [
      { label: "Founder", next: "q6", colorIdx: 1 },
      { label: "Marketer", next: "q6", colorIdx: 2 },
      { label: "Developer", next: "q6", colorIdx: 0 },
      { label: "Other", next: "q6", colorIdx: 3 }
    ]
  },
  {
    id: "q6",
    type: "question",
    text: "How soon do you plan to make a decision?",
    options: [
      { label: "Immediately", next: "result", colorIdx: 2 },
      { label: "Within a month", next: "result", colorIdx: 0 },
      { label: "Within 3 months", next: "result", colorIdx: 1 },
      { label: "Just browsing", next: "result", colorIdx: 3 }
    ]
  },
  {
    id: "result",
    type: "result",
    text: "Thank you! Based on your answers, we recommend our Pro Plan for best value.",
    link: "https://your-promotion-link.com"
  }
];
