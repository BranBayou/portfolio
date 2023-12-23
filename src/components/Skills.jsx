import React from 'react';
import SkillsList from './Skills/SkillsList';
import TechStackIntro from './Skills/TechStackIntro';

const Skills = () => {
  return (
    <div id="skills" className="w-10/12 mx-auto py-12 flex flex-col">
      <TechStackIntro />
      <SkillsList />
    </div>
  );
};

export default Skills;