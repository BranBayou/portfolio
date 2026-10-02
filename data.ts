import { Project, ExperienceItem, Certification, SkillGroup, SocialLink } from './types';

export const profile = {
  brand: 'Berhanu',
  name: 'Berhanu',
  role: 'Senior full stack engineer',
  email: 'berhan.baye@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  currentlyWorkingOn: 'Portfolio',
  // Formspree endpoint for the contact form, e.g. 'https://formspree.io/f/abcdwxyz'.
  // Leave empty to have the form open the visitor's email app instead.
  contactFormEndpoint: '',
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

// From Upwork contracts (most recent first). Clients that are individuals are not named.
export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tidyl Group LLC · Upwork',
    period: 'Dec 2024 - Present',
    description: 'Converting Figma designs into pixel-accurate, responsive HTML and CSS pages.'
  },
  {
    id: 2,
    role: 'Front End Developer',
    company: 'Upwork client',
    period: 'Jan 2024 - Dec 2025',
    description: 'Long-term contract building and maintaining responsive front-end interfaces with Bootstrap, JavaScript, and Vue.'
  },
  {
    id: 3,
    role: 'Vue.js Developer, POS Application',
    company: 'Upwork client',
    period: 'Oct 2024 - Dec 2024',
    description: 'Built a point-of-sale application in Vue covering the product catalog, cart, payments, discounts, taxes, and returns.'
  },
  {
    id: 4,
    role: 'Vue.js Developer',
    company: 'Malefiya · Upwork',
    period: 'Nov 2024',
    description: 'Delivered features for a Vue.js project with Pinia for state management.'
  },
  {
    id: 5,
    role: 'Chief Computer Laboratory Assistant',
    company: 'Debre Tabor University',
    period: 'Before freelancing',
    description: 'Ran the university computer labs, supporting students and staff with hardware, software, and networking.'
  }
];

// From the Accredible credential wallet, most recent first.
export const credentialWalletUrl = 'https://www.credential.net/profile/berhanubayetebebu240780/wallet';

export const googleDeveloperProfileUrl = 'https://developers.google.com/profile/u/109491434437748843113';

export const certifications: Certification[] = [
  // Google Developer Program badges (no per-badge pages, so they link to the profile).
  { id: 7, name: 'DOM Detective', issuer: 'Google for Developers', date: 'May 2026', verifyUrl: googleDeveloperProfileUrl, image: 'badges/dom-detective.svg', kind: 'badge' },
  { id: 8, name: 'Code Whisperer', issuer: 'Google for Developers', date: 'Nov 2025', verifyUrl: googleDeveloperProfileUrl, image: 'badges/code-whisperer.svg', kind: 'badge' },
  { id: 9, name: 'Chrome DevTools User', issuer: 'Google for Developers', date: 'Nov 2025', verifyUrl: googleDeveloperProfileUrl, image: 'badges/chrome-devtools-user.svg', kind: 'badge' },
  { id: 10, name: 'Google Developer Program Member', issuer: 'Google for Developers', date: 'Jun 2023', verifyUrl: googleDeveloperProfileUrl, image: 'badges/google-developer-program.svg', kind: 'badge' },
  // Microverse certificates.
  { id: 1, name: 'Software Development Program', issuer: 'Microverse', date: 'Dec 2023', verifyUrl: 'https://www.credential.net/ab715eb7-9e0a-4ab1-812e-267efc90473c', image: 'badges/microverse-software-development-program.png', kind: 'badge' },
  { id: 2, name: 'Ruby on Rails Module', issuer: 'Microverse', date: 'Nov 2023', verifyUrl: 'https://www.credential.net/806d88c2-d2b6-405d-a47f-6e7f2a15a551', image: 'badges/microverse-ruby-on-rails.png', kind: 'badge' },
  { id: 3, name: 'Ruby/Databases Module', issuer: 'Microverse', date: 'Jul 2023', verifyUrl: 'https://www.credential.net/bf3fe68d-c7e6-4096-be08-23ea507a5c40', image: 'badges/microverse-ruby-databases.png', kind: 'badge' },
  { id: 4, name: 'React & Redux Module', issuer: 'Microverse', date: 'Jun 2023', verifyUrl: 'https://www.credential.net/5db44ded-9a64-42ce-b2e8-d558dab5e6f6', image: 'badges/microverse-react-redux.png', kind: 'badge' },
  { id: 5, name: 'JavaScript Module', issuer: 'Microverse', date: 'May 2023', verifyUrl: 'https://www.credential.net/6ef2491f-2ffb-4365-9048-40239250cb96', image: 'badges/microverse-javascript.png', kind: 'badge' },
  { id: 6, name: 'HTML/CSS Module', issuer: 'Microverse', date: 'Mar 2023', verifyUrl: 'https://www.credential.net/5f21edba-f8e4-4877-ab91-2f401716310c', image: 'badges/microverse-html-css.png', kind: 'badge' },
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
