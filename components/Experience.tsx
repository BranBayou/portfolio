import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';
import ScrollReveal from './ScrollReveal';

const experienceData: ExperienceItem[] = [
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

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dev-panel/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Briefcase className="text-dev-purple w-6 h-6" />
            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-dev-border" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <ScrollReveal 
                key={item.id} 
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                delay={index * 100}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] w-3 h-3 bg-dev-purple rounded-full ring-4 ring-dev-bg z-10" />

                {/* Date - Desktop */}
                <div className="hidden md:block w-1/2 px-8 text-right">
                  <span className={`font-mono text-sm text-dev-muted ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {index % 2 === 0 ? '' : item.period}
                    {index % 2 !== 0 ? '' : item.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-dev-panel p-6 rounded-xl border border-dev-border hover:border-dev-purple/50 transition-colors">
                    <div className="md:hidden mb-2 text-xs font-mono text-dev-purple">{item.period}</div>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <div className="text-dev-blue font-medium mb-2">{item.company}</div>
                    <p className="text-dev-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;