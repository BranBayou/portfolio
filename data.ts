// Site content lives in content/*.json so it can be edited from Pages CMS (see .pages.yml)
// or by hand. This file loads those files and shapes them for the components.
import { Project, ExperienceItem, Certification, SkillGroup, SocialLink } from './types';
import site from './content/site.json';
import about from './content/about.json';
import projectsContent from './content/projects.json';
import skillsContent from './content/skills.json';
import experienceContent from './content/experience.json';
import certificationsContent from './content/certifications.json';

/** Turns a content path like "/assets/x.webp" into a URL under the site's base path; full URLs pass through. */
export const assetUrl = (path: string) =>
  !path || /^(https?:)?\/\//.test(path) || path.startsWith('data:')
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const profile = {
  brand: site.brand,
  name: site.name,
  role: site.role,
  email: site.email,
  location: site.location,
  currentlyWorkingOn: site.currentlyWorkingOn,
  // Formspree endpoint for the contact form, e.g. 'https://formspree.io/f/abcdwxyz'.
  // Empty: the form opens the visitor's email app instead.
  contactFormEndpoint: site.contactFormEndpoint,
};

export const hero = site.hero;
export const quote = site.quote;
export const contactBlurb = site.contactBlurb;

export const socials = site.socials as SocialLink[];

// Short clip shown in the about-me photo frame instead of the photo (empty embedUrl = photo).
// aspect is "16:9" for normal videos or "9:16" for Shorts.
const [aspectW, aspectH] = about.video.aspect.split(':').map(Number);
export const aboutVideo = {
  embedUrl: about.video.embedUrl,
  title: about.video.title,
  aspect: aspectW / aspectH || 16 / 9,
};

export const homeAboutParagraphs: string[] = about.homeParagraphs;
export const aboutParagraphs: string[] = about.paragraphs;

// Words wrapped in *asterisks* are highlighted in white.
export const funFacts: string[] = about.funFacts;

type ProjectContent = Omit<Project, 'id'>;

const toProjects = (items: ProjectContent[], idOffset: number): Project[] =>
  items.map((p, i) => ({
    ...p,
    id: idOffset + i,
    images: (p.images ?? []).map(assetUrl),
    liveUrl: p.liveUrl || undefined,
  }));

export const projects = toProjects(projectsContent.projects, 1);

// Smaller repos shown under #small-projects on the works page (no screenshots).
export const smallProjects = toProjects(projectsContent.smallProjects, 1000);

export const skills: SkillGroup[] = skillsContent.groups;

export const experience: ExperienceItem[] = experienceContent.jobs.map((job, i) => ({ id: i + 1, ...job }));

export const credentialWalletUrl = certificationsContent.viewAllUrl;

export const certifications: Certification[] = certificationsContent.items.map((c, i) => ({
  id: i + 1,
  name: c.name,
  issuer: c.issuer,
  date: c.date,
  verifyUrl: c.verifyUrl,
  image: assetUrl(c.image),
  kind: c.display === 'certificate' ? 'certificate' : 'badge',
}));
