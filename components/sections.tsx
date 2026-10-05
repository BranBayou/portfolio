import React from 'react';
import { aboutVideo, contactBlurb, hero, profile, quote, socials, skills } from '../data';
import { Dots, OutlineSquare, SkillBlock, SocialIcon, asset } from './ui';

export const Hero: React.FC = () => (
  <section className="grid md:grid-cols-2 gap-10 md:gap-4 items-center pt-[62px]">
    <div className="flex flex-col gap-8 max-w-[537px]">
      <h1 className="text-[32px] font-semibold text-white leading-normal">
        I'm {profile.name}, a{' '}
        {hero.roles.map((role, i) => (
          <React.Fragment key={role}>
            {i > 0 && (i === hero.roles.length - 1 ? (hero.roles.length > 2 ? ', and ' : ' and ') : ', ')}
            <span className="text-primary">{role}</span>
          </React.Fragment>
        ))}
      </h1>
      <p className="text-muted leading-[25px] max-w-[463px]">{hero.subtitle}</p>
      <div>
        <a
          href="#/contacts"
          className="inline-flex px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors"
        >
          {hero.buttonLabel}
        </a>
      </div>
    </div>

    <div className="relative mx-auto md:mx-0 w-full max-w-[469px]">
      <img
        src={asset('logo-outline.svg')}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-[84px] size-[155px]"
      />
      <div className="relative ml-3 aspect-[457/386] overflow-hidden">
        <img
          src={asset('profile.webp')}
          alt={`Portrait of ${profile.name}`}
          width={1239}
          height={1270}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
      <Dots className="absolute right-4 top-[246px] max-sm:hidden" />
      <div className="relative mx-auto -mt-px w-[88%] flex items-center gap-[10px] p-2 border border-muted bg-bg text-muted">
        <span className="size-4 shrink-0 bg-primary border border-primary" />
        <p className="font-medium">
          Currently working on <span className="font-semibold text-white">{profile.currentlyWorkingOn}</span>
        </p>
      </div>
    </div>
  </section>
);

export const Quote: React.FC = () => (
  <section className="flex justify-center pt-28 pb-[74px]">
    <div className="relative max-w-[712px]">
      <div className="relative border border-muted p-8">
        <img src={asset('quote.svg')} alt="" aria-hidden="true" className="absolute left-[10px] top-[-15px] w-[41.472px] h-[28.704px] bg-bg px-1" />
        <p className="text-xl sm:text-2xl font-medium text-white">{quote.text}</p>
        <img src={asset('quote.svg')} alt="" aria-hidden="true" className="absolute right-[15.53px] bottom-[-15px] w-[41.472px] h-[28.704px] bg-bg px-1" />
      </div>
      <div className="flex justify-end">
        <p className="border border-t-0 border-muted p-4 text-xl sm:text-2xl text-white">- {quote.author}</p>
      </div>
    </div>
  </section>
);

export const SkillsGrid: React.FC = () => (
  <div className="relative flex gap-4">
    {/* Decorative cluster from the design */}
    <div aria-hidden="true" className="hidden lg:block relative w-[442px] h-[282px] shrink-0">
      <Dots gap={10.75} className="absolute left-[34px] top-[7px]" />
      <Dots gap={10.75} className="absolute left-[211px] top-[112px]" />
      <OutlineSquare size={52} className="absolute left-[331px] top-[162px]" />
      <OutlineSquare size={86} className="absolute left-[261px] top-[-31px]" />
      <img src={asset('logo-squares.svg')} alt="" className="absolute left-[49px] top-[138px] size-[113px]" />
    </div>
    <div className="flex-1 columns-1 sm:columns-3 gap-4">
      {skills.map((group) => (
        <SkillBlock key={group.title} group={group} className="mb-4 break-inside-avoid" />
      ))}
    </div>
  </div>
);

const FRAME_ASPECT = 339 / 507;

/** Plays aboutVideo inside the tall photo frame, scaled to cover it (like object-fit: cover). */
const AboutVideo: React.FC = () => {
  const widthPct = Math.max(100, (aboutVideo.aspect / FRAME_ASPECT) * 100);
  const heightPct = Math.max(100, (FRAME_ASPECT / aboutVideo.aspect) * 100);
  return (
    <div className="relative ml-1 w-[339px] max-w-full aspect-[339/507] overflow-hidden bg-black">
      <iframe
        src={aboutVideo.embedUrl}
        title={aboutVideo.title}
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
        tabIndex={-1}
        className="absolute border-0 pointer-events-none"
        style={{
          width: `${widthPct}%`,
          height: `${heightPct}%`,
          left: `${(100 - widthPct) / 2}%`,
          top: `${(100 - heightPct) / 2}%`,
        }}
      />
    </div>
  );
};

export const AboutImage: React.FC = () => (
  <div className="relative w-full max-w-[343px] mx-auto">
    {aboutVideo.embedUrl ? (
      <AboutVideo />
    ) : (
      <img
        src={asset('profile.webp')}
        alt={`Portrait of ${profile.name}`}
        width={1239}
        height={1270}
        loading="lazy"
        className="relative ml-1 w-[339px] aspect-[339/507] object-cover object-[50%_0%]"
      />
    )}
    <Dots className="absolute left-0 top-[59px]" />
    <Dots cols={5} rows={4} gap={13.33} className="absolute left-[223px] top-[279px] max-sm:hidden" />
    <div className="absolute left-12 right-6 bottom-0 h-px bg-primary" />
  </div>
);

export const MessageMeBox: React.FC = () => (
  <div className="border border-muted p-4 flex flex-col gap-4 w-max max-w-full">
    <p className="font-semibold text-white">Message me here</p>
    <div className="flex flex-col gap-2 text-muted">
      <a href={`mailto:${profile.email}`} className="flex items-center gap-[5px] hover:text-white transition-colors">
        <SocialIcon icon="email" />
        {profile.email}
      </a>
      {socials
        .filter((s) => s.icon === 'linkedin')
        .map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-[5px] hover:text-white transition-colors">
            <SocialIcon icon={s.icon} />
            {s.handle}
          </a>
        ))}
    </div>
  </div>
);

export const ContactBlurb: React.FC = () => (
  <p className="max-w-[505px] font-medium text-muted leading-[26px]">
    {contactBlurb}
  </p>
);

/** The large outlined squares and dot grids that sit at the page edges in the design. */
export const PageEdgeDecor: React.FC<{ variant: 'home' | 'inner' }> = ({ variant }) => (
  <div aria-hidden="true" className="hidden xl:block absolute inset-0 pointer-events-none overflow-hidden">
    {variant === 'home' ? (
      <>
        <OutlineSquare size={91} className="absolute right-[-9px] top-[672px]" />
        <Dots cols={5} rows={5} gap={20.75} className="absolute left-[-46px] top-[955px]" />
        <OutlineSquare size={155} className="absolute right-[-87px] top-[1160px]" />
        <OutlineSquare size={155} className="absolute left-[-77px] top-[2125px]" />
        <Dots cols={5} rows={5} gap={20.75} className="absolute right-[-23px] top-[2294px]" />
      </>
    ) : (
      <>
        <OutlineSquare size={155} className="absolute right-[-87px] top-[256px]" />
        <Dots cols={5} rows={4} gap={22} className="absolute left-[-31px] top-[401px]" />
        <OutlineSquare size={155} className="absolute left-[-77px] top-[1221px]" />
      </>
    )}
  </div>
);
