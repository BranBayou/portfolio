import React from 'react';
import { certifications, credentialWalletUrl, experience, funFacts, skills } from '../data';
import { Button, Container, Dots, Highlighted, PageTitle, SectionHeading, SkillBlock, asset } from '../components/ui';
import { AboutImage, PageEdgeDecor } from '../components/sections';
import ScrollReveal from '../components/ScrollReveal';

const AboutPage: React.FC = () => (
  <>
    <PageEdgeDecor variant="inner" />
    <Container>
      <PageTitle name="about-me" subtitle="Who am I?" />

      <section className="grid md:grid-cols-[515px_1fr] gap-12 md:gap-4 items-start -mt-[15px]">
        <div className="md:pt-[104px] text-muted leading-[25px] space-y-[25px]">
          <p>Hello, I'm Berhanu!</p>
          <p>
            I'm a senior full stack engineer with a passion for building beautiful, functional, and accessible web
            applications. I don't just write code; I solve problems and create experiences.
          </p>
          <p>
            With over 6 years of experience in the React ecosystem, I've honed my skills in bridging the gap between
            engineering and design. I thrive in environments where attention to detail is paramount and "good enough"
            is never the goal.
          </p>
          <p>
            When I'm not debugging race conditions or optimizing render cycles, you can find me experimenting with
            WebGL, contributing to open-source, or optimizing my Vim config.
          </p>
        </div>
        <AboutImage />
      </section>

      <ScrollReveal>
        <section className="pt-[113px]">
          <SectionHeading name="skills" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
            {skills.map((group) => (
              <SkillBlock key={group.title} group={group} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pt-[113px]">
          <SectionHeading name="experience" />
          <div className="grid md:grid-cols-3 gap-4">
            {experience.map((item) => (
              <article key={item.id} className="border border-muted flex flex-col">
                <p className="p-2 text-muted">{item.period}</p>
                <div className="flex flex-col gap-4 p-4 border-t border-muted flex-grow">
                  <div>
                    <h3 className="text-2xl font-medium text-white">{item.role}</h3>
                    <p className="text-primary mt-1">{item.company}</p>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pt-[113px]">
          <SectionHeading name="certifications">
            <a
              href={credentialWalletUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
            >
              {'View all ~~>'}
            </a>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <article key={cert.id} className="border border-muted flex flex-col">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block aspect-[600/464] border-b border-muted overflow-hidden"
                >
                  {cert.kind === 'badge' ? (
                    <span className="flex h-full items-center justify-center">
                      <img
                        src={asset(cert.image)}
                        alt={`${cert.name} badge from ${cert.issuer}`}
                        width={170}
                        height={170}
                        loading="lazy"
                        className="h-[70%] w-auto hover:scale-105 transition-transform duration-300"
                      />
                    </span>
                  ) : (
                    <img
                      src={asset(cert.image)}
                      alt={`${cert.name} certificate from ${cert.issuer}`}
                      width={600}
                      height={464}
                      loading="lazy"
                      className="w-full h-full object-cover block hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}
                </a>
                <h3 className="p-2 font-semibold text-white border-b border-muted">{cert.name}</h3>
                <div className="p-2 flex flex-col gap-2 text-muted flex-grow">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <div className="p-2 pt-0">
                  <Button href={cert.verifyUrl} external>{'Check link <~>'}</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pt-[113px] flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <SectionHeading name="my-fun-facts" />
            <ul className="-mt-[22px] flex flex-wrap gap-4 max-w-[600px]">
              {funFacts.map((fact) => (
                <li key={fact} className="border border-muted p-2 text-muted">
                  <Highlighted text={fact} />
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden="true" className="hidden lg:block relative w-[200px] h-[200px] mt-[68px] mr-[63px]">
            <Dots cols={4} rows={4} gap={16} />
            <img src={asset('logo-squares-alt.svg')} alt="" className="absolute left-[37px] top-[56px] size-[113px]" />
          </div>
        </section>
      </ScrollReveal>
    </Container>
  </>
);

export default AboutPage;
