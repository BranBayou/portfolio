import React from 'react';
import { projects } from '../data';
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
              <p>Hello, I'm Berhanu!</p>
              <p>
                I'm a senior full stack engineer with a passion for building beautiful, functional, and accessible web
                applications. I don't just write code; I solve problems and create experiences.
              </p>
              <p>
                With over 6 years of experience in the React ecosystem, I've honed my skills in bridging the gap
                between engineering and design.
              </p>
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
