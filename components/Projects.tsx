
import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../types';
import ScrollReveal from './ScrollReveal';

const projects: Project[] = [
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
    description: 'High-performance storefront built with Next.js 14 and Shopify integration. features ISR, image optimization, and Stripe checkout.',
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

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [current, setCurrent] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSliding = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % project.images.length);
    }, 1200);
  };

  const stopSliding = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => () => stopSliding(), []);

  return (
    <ScrollReveal delay={index * 100}>
      <div
        className="group relative bg-dev-panel rounded-xl overflow-hidden border border-dev-border hover:border-dev-blue/50 transition-all duration-300 h-full flex flex-col"
        onMouseEnter={startSliding}
        onMouseLeave={stopSliding}
      >
        {/* Image Carousel */}
        <div className="relative h-64 overflow-hidden bg-dev-bg flex-shrink-0">
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {project.images.map((src: string, i: number) => (
              <div key={i} className="w-full h-full flex-shrink-0">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-dev-blue/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
            <a href={project.repoUrl} className="p-3 bg-white text-dev-bg rounded-full hover:scale-110 transition-transform" title="View Code">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.liveUrl} className="p-3 bg-dev-blue text-white rounded-full hover:scale-110 transition-transform" title="Live Demo">
              <Eye className="w-5 h-5" />
            </a>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
            {project.images.map((_: string, i: number) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-4' : 'bg-white/40 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-dev-blue transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-dev-muted group-hover:text-dev-blue" />
          </div>
          <p className="text-dev-muted text-sm mb-6 line-clamp-2 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-mono text-dev-blue bg-dev-blue/10 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dev-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Work</h2>
              <p className="text-dev-muted">A selection of projects that display my craft.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-dev-blue hover:text-white transition-colors text-sm font-mono">
              View All Archives <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-dev-blue font-medium">
            View All Archives <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
