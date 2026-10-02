import React from 'react';
import { profile, socials } from '../data';
import { Container, SocialIcon, asset } from './ui';

const Footer: React.FC = () => (
  <footer className="mt-[145px] border-t border-muted pt-8 pb-8">
    <Container className="flex flex-col gap-12">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-[9px] font-medium text-white">
              <img src={asset('logo.svg')} alt="" width={16} height={16} />
              {profile.brand}
            </span>
            <a href={`mailto:${profile.email}`} className="text-muted hover:text-white transition-colors">
              {profile.email}
            </a>
          </div>
          <p className="text-white">{profile.role}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-medium text-white">Media</p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted text-center">
        © Copyright {new Date().getFullYear()}. Made by {profile.name}
      </p>
    </Container>
  </footer>
);

export default Footer;
