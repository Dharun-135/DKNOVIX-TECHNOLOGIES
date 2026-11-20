export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string;
  technologies: string[];
  recognition?: string;
  category: 'IoT & Hardware' | 'AI & Deep Learning' | 'Web & Software' | 'Security & Automation';
  github?: string;
  demo?: string;
  stats?: { label: string; value: string }[];
}

export interface AchievementItem {
  year: string;
  title: string;
  category: string;
  description: string;
  metric?: string;
  badge?: string;
}

export interface TechCategory {
  category: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

