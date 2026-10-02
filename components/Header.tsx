import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Route } from '../types';
import { profile, socials } from '../data';
import { Container, SocialIcon, asset } from './ui';

export const navLinks: { route: Route; label: string; href: string }[] = [
  { route: 'home', label: 'home', href: '#/' },
  { route: 'works', label: 'works', href: '#/works' },
  { route: 'about-me', label: 'about-me', href: '#/about-me' },
  { route: 'contacts', label: 'contacts', href: '#/contacts' },
];

const Header: React.FC<{ route: Route }> = ({ route }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-40 bg-bg">
      <Container className="flex items-end justify-between pt-8 pb-2">
        <a href="#/" className="flex items-center gap-2 font-bold text-white">
          <img src={asset('logo.svg')} alt="" width={16} height={16} />
          {profile.brand}
        </a>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.route}
              href={link.href}
              className={`transition-colors hover:text-white ${
                route === link.route ? 'text-white font-medium' : 'text-muted'
              }`}
            >
              <span className="text-primary">#</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-bg flex flex-col transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Container className="flex items-end justify-between pt-8 pb-2">
          <span className="flex items-center gap-2 font-bold text-white">
            <img src={asset('logo.svg')} alt="" width={16} height={16} />
            {profile.brand}
          </span>
          <button className="text-muted" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="size-6" />
          </button>
        </Container>
        <Container className="flex flex-col gap-8 pt-12 text-[32px]">
          {navLinks.map((link) => (
            <a
              key={link.route}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={route === link.route ? 'text-white font-medium' : 'text-muted'}
            >
              <span className="text-primary">#</span>
              {link.label}
            </a>
          ))}
        </Container>
        <div className="mt-auto pb-10 flex justify-center gap-2">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
