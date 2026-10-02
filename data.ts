import { Project, ExperienceItem, Certification, SkillGroup, SocialLink } from './types';

export const profile = {
  brand: 'Berhanu',
  name: 'Berhanu',
  role: 'Senior full stack engineer',
  email: 'berhan.baye@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  currentlyWorkingOn: 'Portfolio',
};

export const socials: SocialLink[] = [
  { name: 'GitHub', handle: '@BranBayou', href: 'https://github.com/BranBayou', icon: 'github' },
  { name: 'LinkedIn', handle: 'bran-baye', href: 'https://www.linkedin.com/in/bran-baye/', icon: 'linkedin' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nebula Dashboard',
    description: 'A real-time analytics dashboard for SaaS platforms featuring drag-and-drop widgets, dark mode, and WebSocket data streaming.',
    tags: ['React', 'TypeScript', 'D3.js', 'Socket.io'],
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=10',
      'https://picsum.photos/800/600?random=20',
    ],
    repoUrl: '#',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'E-Commerce Headless CMS',
    description: 'High-performance storefront built with Next.js 14 and Shopify integration. Features ISR, image optimization, and Stripe checkout.',
    tags: ['Next.js', 'GraphQL', 'Tailwind', 'Stripe'],
    images: [
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=21',
    ],
    repoUrl: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'AI Code Assistant',
    description: 'VS Code extension and web interface for AI-assisted code generation using the Gemini API. Features syntax highlighting and diff view.',
    tags: ['Electron', 'Python', 'Gemini API', 'React'],
    images: [
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=12',
      'https://picsum.photos/800/600?random=22',
    ],
    repoUrl: '#',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Three.js Portfolio Template',
    description: 'An immersive 3D portfolio template for creative developers. Includes custom shaders, post-processing effects, and optimized assets.',
    tags: ['Three.js', 'R3F', 'WebGL', 'GSAP'],
    images: [
      'https://picsum.photos/800/600?random=4',
      'https://picsum.photos/800/600?random=13',
      'https://picsum.photos/800/600?random=23',
    ],
    repoUrl: '#',
    liveUrl: '#'
  }
];

// Smaller repos shown under #small-projects on the works page (no screenshots).
const repo = (name: string) => `https://github.com/BranBayou/${name}`;

export const smallProjects: Project[] = [
  {
    id: 101,
    title: 'My Budget',
    description: 'Budget manager with a Rails back end: transactions grouped by category so you can see how much you spent and on what.',
    tags: ['Ruby', 'Rails', 'PostgreSQL'],
    images: [],
    repoUrl: repo('my-budget'),
  },
  {
    id: 102,
    title: 'Space Travelers',
    description: 'Book rockets and join space missions using real-time data from the SpaceX API.',
    tags: ['React', 'Redux', 'JS'],
    images: [],
    repoUrl: repo('space-travelers'),
  },
  {
    id: 103,
    title: 'Hello Rails React',
    description: 'Rails app with a React front end bundled through Webpack and jsbundling-rails.',
    tags: ['Ruby', 'Rails', 'React'],
    images: [],
    repoUrl: repo('hello-rails-react'),
  },
  {
    id: 104,
    title: 'Vet Clinic Database',
    description: 'Relational database for a vet clinic: schema, queries and joins in PostgreSQL.',
    tags: ['PostgreSQL', 'SQL'],
    images: [],
    repoUrl: repo('vet-clinic-database'),
  },
  {
    id: 105,
    title: 'Next Recipes',
    description: 'Recipe app built with Next.js and TypeScript.',
    tags: ['Next.js', 'TS'],
    images: [],
    repoUrl: repo('next-recipes'),
  },
  {
    id: 106,
    title: 'Catalog of My Things',
    description: 'Ruby console app for cataloguing books, music albums and games.',
    tags: ['Ruby', 'OOP'],
    images: [],
    repoUrl: repo('catalog-of-my-things'),
  },
  {
    id: 107,
    title: 'Barcode Generator',
    description: 'Small JavaScript tool for generating barcodes in the browser.',
    tags: ['JS', 'HTML', 'CSS'],
    images: [],
    repoUrl: repo('barcode-generator'),
  },
  {
    id: 108,
    title: 'To-do List',
    description: 'To-do list app styled with Tailwind CSS.',
    tags: ['JS', 'Tailwind'],
    images: [],
    repoUrl: repo('to-do-list-tailwind'),
  },
];

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'C#', 'Ruby', 'PHP'] },
  { title: 'Frontend', items: ['React', 'Vue', 'Angular', 'Svelte', 'jQuery', 'Redux', 'Pinia'] },
  { title: 'Backend', items: ['Node.js', 'Rails', '.NET'] },
  { title: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB'] },
  { title: 'Styling', items: ['Tailwind', 'Bootstrap', 'Handlebars'] },
  { title: 'DevOps', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'CI/CD', 'Docker', 'AWS', 'Azure', 'GCP'] },
  { title: 'AI Agents', items: ['Claude Code', 'Codex', 'Cursor'] },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading the frontend migration to Next.js, improving core web vitals by 40%. Mentoring 3 junior developers and establishing a component library system.'
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2020 - 2022',
    description: 'Developed award-winning interactive marketing sites for Fortune 500 clients using React, GSAP, and WebGL.'
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Full stack development using MERN stack. Implemented real-time chat features and handled AWS deployment pipelines.'
  }
];

export const certifications: Certification[] = [
  { id: 1, name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Dec 2023', verifyUrl: '#' },
  { id: 2, name: 'Meta Frontend Developer', issuer: 'Meta', date: 'Aug 2023', verifyUrl: '#' },
  { id: 3, name: 'Google UX Design Professional', issuer: 'Google', date: 'Mar 2022', verifyUrl: '#' },
  { id: 4, name: 'Certified ScrumMaster® (CSM)', issuer: 'Scrum Alliance', date: 'Jan 2021', verifyUrl: '#' },
];

// Words wrapped in *asterisks* are highlighted in white.
export const funFacts: string[] = [
  'Based in *Addis Ababa, Ethiopia*',
  'Open to *relocation*',
  'I speak *English* and *Spanish*',
  'I optimize my *Vim* config for fun',
  'I experiment with *WebGL* in my spare time',
  'I contribute to *open-source*',
];
