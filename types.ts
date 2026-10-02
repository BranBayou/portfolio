export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  image: string;
  // Badges are square icons shown centered; certificates fill the image area.
  kind?: 'certificate' | 'badge';
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  handle: string;
  href: string;
  icon: 'github' | 'linkedin';
}

export type Route = 'home' | 'works' | 'about-me' | 'contacts';
