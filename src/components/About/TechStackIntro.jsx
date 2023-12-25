import React from 'react';
import SkillsList from './SkillsList';

const TechStackIntro = () => (
  <div className="slef-start">
    <div className="w-full flex justify-center md:justify-start my-4 py-6 md:py-6 border-b border-gray-500 md:my-6">
      <h1 className="text-2xl font-bold">
        Tech
        <span className="text-aquab">Stack</span>
      </h1>
    </div>
    <SkillsList />
  </div>
);

export default TechStackIntro;
