import React from 'react';
import { profile, socials } from '../data';
import { Container, PageTitle, SectionHeading, SocialIcon } from '../components/ui';
import { ContactBlurb, MessageMeBox, PageEdgeDecor } from '../components/sections';
import ContactForm from '../components/ContactForm';

const ContactsPage: React.FC = () => (
  <>
    <PageEdgeDecor variant="inner" />
    <Container>
      <PageTitle name="contacts" subtitle="Get in touch" />

      <section className="-mt-[3px] flex flex-col md:flex-row justify-between gap-8">
        <ContactBlurb />
        <div className="flex flex-wrap items-start gap-2 md:shrink-0">
          <div className="border border-muted p-4 flex flex-col gap-2">
            <p className="font-medium text-white">Based in</p>
            <p className="text-muted">{profile.location}</p>
          </div>
          <MessageMeBox />
        </div>
      </section>

      <section className="pt-[80px]">
        <SectionHeading name="send-a-message" />
        <ContactForm />
      </section>

      <section className="pt-[80px]">
        <SectionHeading name="all-media" />
        <div className="-mt-[24px] flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[5px] text-muted hover:text-white transition-colors"
            >
              <SocialIcon icon={s.icon} />
              {s.handle}
            </a>
          ))}
        </div>
      </section>
    </Container>
  </>
);

export default ContactsPage;
