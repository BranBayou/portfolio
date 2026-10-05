import React from 'react';
import { homeAboutParagraphs, projects } from '../data';
import { Container, ProjectCard, SectionHeading } from '../components/ui';
import ScrollReveal from '../components/ScrollReveal';
import { AboutImage, ContactBlurb, Hero, MessageMeBox, PageEdgeDecor, Quote, SkillsGrid } from '../components/sections';

const HomePage: React.FC = () => (
  <>
    <PageEdgeDecor variant="home" />
    <Container>
      <Hero />
      <Quote />

      <ScrollReveal>
        <section className="pt-[38px]">
          <SectionHeading name="projects" lineClassName="flex-1 max-w-[511px]">
            <a href="#/works" className="font-medium text-white hover:text-primary transition-colors whitespace-nowrap">
              {'View all ~~>'}
            </a>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pt-[106px]">
          <SectionHeading name="skills" lineClassName="w-full max-w-[239px]" />
          <SkillsGrid />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pt-[112px] grid md:grid-cols-[515px_1fr] gap-12 md:gap-4 items-start">
          <div>
            <SectionHeading name="about-me" lineClassName="w-full max-w-[326px]" />
            <div className="-mt-[24px] text-muted leading-[26px] space-y-[26px]">
              {homeAboutParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <a
              href="#/about-me"
              className="inline-flex mt-[27px] px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors"
            >
              {'Read more ->'}
            </a>
          </div>
          <AboutImage />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pt-[113px]">
          <SectionHeading name="contacts" lineClassName="w-full max-w-[127px]" />
          <div className="-mt-[3px] flex flex-col md:flex-row justify-between gap-8">
            <ContactBlurb />
            <MessageMeBox />
          </div>
        </section>
      </ScrollReveal>
    </Container>
  </>
);

export default HomePage;
