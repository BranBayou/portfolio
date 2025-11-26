import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import ScrollReveal from './ScrollReveal';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager at TechCorp',
    content: 'One of the most detail-oriented developers I have worked with. He transformed our vague requirements into a pixel-perfect reality.',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO at StartUp Inc',
    content: 'His ability to animate complex UI interactions while keeping performance high is unmatched. A true professional.',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Lead Designer',
    content: 'Finally, a developer who cares about the grid system as much as I do. Bridging the gap between design and code seamlessly.',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dev-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white text-center mb-16">What People Say</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 150}>
              <div className="bg-dev-panel p-8 rounded-2xl border border-dev-border relative h-full flex flex-col justify-between">
                <Quote className="absolute top-6 right-6 text-dev-border w-8 h-8 opacity-50" />
                
                <p className="text-dev-text mb-8 relative z-10 italic">"{item.content}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.avatarUrl} alt={item.name} className="w-12 h-12 rounded-full border-2 border-dev-border" />
                  <div>
                    <div className="text-white font-bold text-sm">{item.name}</div>
                    <div className="text-dev-muted text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;