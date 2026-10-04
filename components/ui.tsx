import React, { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';
import { Project, SkillGroup, SocialLink } from '../types';

export const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

/** Brand wordmark ("BApps" = Berhanu Apps) with the initial in the accent colour. */
export const BrandName: React.FC<{ name: string }> = ({ name }) => (
  <span title="Berhanu Apps">
    <span className="text-primary">{name.charAt(0)}</span>
    {name.slice(1)}
  </span>
);

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative w-full max-w-[1024px] mx-auto px-4 lg:px-0 ${className}`}>{children}</div>
);

interface DotsProps {
  cols?: number;
  rows?: number;
  gap?: number;
  className?: string;
}

export const Dots: React.FC<DotsProps> = ({ cols = 5, rows = 5, gap = 16, className = '' }) => (
  <div
    aria-hidden="true"
    className={`grid w-max pointer-events-none ${className}`}
    style={{ gridTemplateColumns: `repeat(${cols}, 4px)`, gap }}
  >
    {Array.from({ length: cols * rows }).map((_, i) => (
      <img key={i} src={asset('dot.svg')} alt="" width={4} height={4} className="block" />
    ))}
  </div>
);

export const OutlineSquare: React.FC<{ size: number; className?: string }> = ({ size, className = '' }) => (
  <div aria-hidden="true" className={`border border-muted pointer-events-none ${className}`} style={{ width: size, height: size }} />
);

export const SectionHeading: React.FC<{ name: string; lineClassName?: string; children?: React.ReactNode }> = ({
  name,
  lineClassName,
  children,
}) => (
  <div className="flex items-center justify-between gap-4 mb-12">
    <div className="flex items-center gap-4 flex-1">
      <h2 className="text-[32px] font-medium text-white whitespace-nowrap">
        <span className="text-primary">#</span>
        {name}
      </h2>
      {lineClassName && <div className={`h-px bg-primary ${lineClassName}`} />}
    </div>
    {children}
  </div>
);

export const PageTitle: React.FC<{ name: string; subtitle: string }> = ({ name, subtitle }) => (
  <div className="pt-[50px] pb-[50px]">
    <h1 className="text-[32px] font-semibold text-white">
      <span className="text-primary">/</span>
      {name}
    </h1>
    <p className="mt-[14px] text-white">{subtitle}</p>
  </div>
);

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'gray';
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ href, children, variant = 'primary', external }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    className={`inline-flex px-4 py-2 border font-medium whitespace-nowrap transition-colors duration-200 ${
      variant === 'primary'
        ? 'border-primary text-white hover:bg-primary/20'
        : 'border-muted text-muted hover:bg-muted/10 hover:text-white'
    }`}
  >
    {children}
  </a>
);

export const SocialIcon: React.FC<{ icon: SocialLink['icon'] | 'email' | 'dribbble' | 'figma' | 'discord'; className?: string }> = ({
  icon,
  className = '',
}) =>
  icon === 'linkedin' ? (
    <span className={`inline-flex items-center justify-center size-8 shrink-0 ${className}`}>
      <Linkedin className="size-[22px] text-muted" strokeWidth={1.75} />
    </span>
  ) : (
    <img src={asset(`${icon}.svg`)} alt="" width={32} height={32} className={`size-8 shrink-0 ${className}`} />
  );

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSliding = () => {
    if (intervalRef.current || project.images.length < 2) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
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
    <article
      className="flex flex-col border border-muted h-full"
      onMouseEnter={startSliding}
      onMouseLeave={stopSliding}
    >
      {project.images.length > 0 && (
        <div className="relative h-[201px] overflow-hidden border-b border-muted shrink-0">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-2 p-2 text-muted">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4 border-t border-muted flex-grow">
        <h3 className="text-2xl font-medium text-white">{project.title}</h3>
        <p className="text-muted flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-4">
          {project.liveUrl ? (
            <>
              <Button href={project.liveUrl} external>{'Live <~>'}</Button>
              <Button href={project.repoUrl} variant="gray" external>{'Github >='}</Button>
            </>
          ) : (
            <Button href={project.repoUrl} external>{'Github <~>'}</Button>
          )}
        </div>
      </div>
    </article>
  );
};

export const SkillBlock: React.FC<{ group: SkillGroup; className?: string }> = ({ group, className = '' }) => (
  <div className={`border border-muted ${className}`}>
    <h3 className="p-2 font-semibold text-white border-b border-muted">{group.title}</h3>
    <ul className="flex flex-wrap gap-x-2 gap-y-2 p-2 text-muted">
      {group.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

// Renders *highlighted* words in white.
export const Highlighted: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*[^*]+\*)/).map((part, i) =>
      part.startsWith('*') ? (
        <span key={i} className="text-white">{part.slice(1, -1)}</span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
);
