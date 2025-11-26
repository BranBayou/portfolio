import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../types';
import ScrollReveal from './ScrollReveal';

const certifications: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Issued Dec 2023',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    verifyUrl: '#'
  },
  {
    id: 2,
    name: 'Meta Frontend Developer',
    issuer: 'Meta',
    date: 'Issued Aug 2023',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png',
    verifyUrl: '#'
  },
  {
    id: 3,
    name: 'Google UX Design Professional',
    issuer: 'Google',
    date: 'Issued Mar 2022',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    verifyUrl: '#'
  },
  {
    id: 4,
    name: 'Certified ScrumMaster® (CSM)',
    issuer: 'Scrum Alliance',
    date: 'Issued Jan 2021',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/scrum-alliance.svg',
    verifyUrl: '#'
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-dev-panel/20 border-t border-dev-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-16">
            <Award className="text-dev-orange w-8 h-8" />
            <h2 className="text-3xl font-bold text-white">Certifications & Badges</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 100}>
              <div className="group bg-dev-panel border border-dev-border p-6 rounded-xl hover:border-dev-orange/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                
                <div className="w-16 h-16 mb-6 p-3 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <img 
                      src={cert.imageUrl} 
                      alt={cert.issuer} 
                      className="w-full h-full object-contain"
                    />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-dev-orange transition-colors">
                  {cert.name}
                </h3>
                
                <div className="text-sm text-dev-muted mb-4">
                  <div>{cert.issuer}</div>
                  <div className="text-xs opacity-60 mt-1">{cert.date}</div>
                </div>

                <a 
                  href={cert.verifyUrl}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-mono text-dev-blue hover:text-white transition-colors border border-dev-blue/20 hover:bg-dev-blue/10 px-3 py-1.5 rounded-full"
                >
                  Verify Credential <ExternalLink className="w-3 h-3" />
                </a>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;