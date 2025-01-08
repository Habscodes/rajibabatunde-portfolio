import React from 'react';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <div id="experience" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Journey
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="space-y-12">
            {experiences.map((role, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                  <p className="text-base text-blue-600">{role.company}</p>
                  <p className="text-sm text-gray-500">{role.period}</p>
                  <ul className="mt-4 space-y-2">
                    {role.description.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}