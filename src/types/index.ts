export interface Project {
  title: string;
  desc: string;
  tech: string;
  link: string;
  category: "Full-Stack" | "Infrastructure" | "Developer Tooling" | "Open Source";
  tagline?: string;
  architectureDetails?: {
    inputs: string;
    processing: string;
    outputs: string;
    deployment: string;
    cliCommand?: string;
  };
  highlightEmoji?: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionData {
  username: string;
  range: {
    from: string;
    to: string;
  };
  generatedAt: string;
  totalContributions: number;
  weeks: ContributionWeek[];
}
