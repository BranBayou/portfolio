
import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  liveUrl: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface TechItem {
  name: string;
  logoUrl: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps';
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verifyUrl: string;
}
