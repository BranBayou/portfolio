
import React, { useState } from 'react';
import { TechItem } from '../types';
import ScrollReveal from './ScrollReveal';
import { Code, Server, Database, Cloud, Layers, Cpu } from 'lucide-react';

const technologies: TechItem[] = [
  // Frontend
  { name: 'HTML5', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', category: 'Frontend' },
  { name: 'CSS3', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', category: 'Frontend' },
  { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', category: 'Frontend' },
  { name: 'TypeScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'jQuery', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg', category: 'Frontend' },
  { name: 'Vue.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
  { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Angular', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
  { name: 'Svelte', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg', category: 'Frontend' },
  { name: 'Handlebars', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original.svg', category: 'Frontend' },
  { name: 'Redux', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg', category: 'Frontend' },
  { name: 'Pinia', logoUrl: 'https://pinia.vuejs.org/logo.svg', category: 'Frontend' },
  { name: 'Bootstrap', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', category: 'Frontend' },
  { name: 'Tailwind', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Ruby', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg', category: 'Backend' },
  { name: 'Rails', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg', category: 'Backend' },
  { name: 'PHP', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', category: 'Backend' },
  { name: '.NET', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', category: 'Backend' },
  { name: 'C#', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', category: 'Backend' },
  
  // Database
  { name: 'SQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', category: 'Database' },
  { name: 'SQL Server', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'Database' },
  { name: 'NoSQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', category: 'Database' },
  { name: 'PostgreSQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', category: 'Database' },

  // Tools & DevOps
  { name: 'Git', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', category: 'DevOps' },
  { name: 'GitHub', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: 'DevOps' },
  { name: 'GitLab', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', category: 'DevOps' },
  { name: 'Bitbucket', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg', category: 'DevOps' },
  { name: 'CI/CD', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', category: 'DevOps' },
  { name: 'Docker', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'DevOps' },
  { name: 'AWS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'DevOps' },
  { name: 'Azure', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', category: 'DevOps' },
  { name: 'GCP', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', category: 'DevOps' },

  // AI Agents
  { name: 'Claude Code', logoUrl: 'https://cdn.simpleicons.org/anthropic', category: 'AI' },
  { name: 'Codex', logoUrl: 'https://cdn.simpleicons.org/openai', category: 'AI' },
  { name: 'Cursor', logoUrl: 'https://cdn.simpleicons.org/cursor', category: 'AI' },
];

type CategoryType = 'All' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'AI';

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const categories: { id: CategoryType; label: string; icon: React.ElementType }[] = [
    { id: 'All', label: 'All Stack', icon: Layers },
    { id: 'Frontend', label: 'Frontend', icon: Code },
    { id: 'Backend', label: 'Backend', icon: Server },
    { id: 'Database', label: 'Database', icon: Database },
    { id: 'DevOps', label: 'DevOps', icon: Cloud },
    { id: 'AI', label: 'AI Agents', icon: Cpu },
  ];

  const filteredTechnologies = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="stack" className="py-20 bg-dev-panel/30 border-y border-dev-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Tech Stack</h2>
            <p className="text-dev-muted max-w-2xl mx-auto">
              A comprehensive ecosystem of tools and technologies I've mastered.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <div className="inline-flex flex-wrap justify-center p-1.5 bg-dev-bg border border-dev-border rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                    ${activeCategory === cat.id 
                      ? 'bg-dev-blue text-white shadow-lg shadow-dev-blue/25 scale-105' 
                      : 'text-dev-muted hover:text-white hover:bg-dev-panel'
                    }
                  `}
                >
                  <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'animate-pulse' : ''}`} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tech Grid */}
        <div 
            key={activeCategory} // Force re-render for animation on change
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 animate-fade-in-up"
        >
          {filteredTechnologies.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={index * 30}>
              <div 
                className="group flex flex-col items-center justify-center p-4 bg-dev-panel border border-dev-border rounded-xl transition-all duration-300 hover:border-dev-blue/50 hover:bg-dev-panel/80 hover:-translate-y-1 h-32 relative overflow-hidden"
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dev-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative w-12 h-12 mb-3 z-10">
                  <img 
                    src={tech.logoUrl} 
                    alt={tech.name}
                    className={`w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                        ['GitHub', 'Next.js', 'Express', 'SQL Server', 'Rails', 'Codex', 'Cursor'].includes(tech.name) ? 'invert group-hover:invert-0' : ''
                    }`}
                  />
                </div>
                <span className="relative z-10 text-xs font-mono font-medium text-dev-muted group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {filteredTechnologies.length === 0 && (
            <div className="text-center py-12 text-dev-muted">
                No technologies found in this category.
            </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
