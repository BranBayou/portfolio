import React from 'react';
import SkillsList from './SkillsList';

const TechStackIntro = () => (
  <div className="w-full flex flex-col md:flex-row items-center justify-start px-8">
    <div className="flex justify-center md:justify-start my-4 py-6 md:py-6 md:my-6">
      <h1 className="text-2xl font-bold">
        Tech
        <span className="text-aquab">Stack</span>
      </h1>
    </div>
    <SkillsList />
  </div>
);

export default TechStackIntro;
