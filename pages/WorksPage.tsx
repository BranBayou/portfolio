import React from 'react';
import { projects, smallProjects } from '../data';
import { Container, PageTitle, ProjectCard, SectionHeading } from '../components/ui';
import { PageEdgeDecor } from '../components/sections';
import ScrollReveal from '../components/ScrollReveal';

const WorksPage: React.FC = () => (
  <>
    <PageEdgeDecor variant="inner" />
    <Container>
      <PageTitle name="projects" subtitle="List of my projects" />
      <section>
        <SectionHeading name="complete-apps" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pt-[80px]">
        <SectionHeading name="small-projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {smallProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Container>
  </>
);

export default WorksPage;
