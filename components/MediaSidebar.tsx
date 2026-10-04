import React from 'react';
import { profile, socials } from '../data';
import { SocialIcon } from './ui';

const MediaSidebar: React.FC = () => (
  <aside className="hidden xl:flex absolute left-[17px] top-0 z-30 flex-col items-center gap-2">
    <div className="w-px h-[191px] bg-muted" />
    {socials.map((s) => (
      <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="opacity-80 hover:opacity-100 transition-opacity">
        <SocialIcon icon={s.icon} />
      </a>
    ))}
    <a href={`mailto:${profile.email}`} aria-label="Email" className="opacity-80 hover:opacity-100 transition-opacity">
      <SocialIcon icon="email" />
    </a>
  </aside>
);

export default MediaSidebar;
