import React from 'react';
import { BookOpen, Network, Server, Users } from 'lucide-react';
import myImageb from './assets/img-b.jpg'

const skills = [
  { name: 'ICT Project Management', icon: Server },
  { name: 'Network Infrastructure', icon: Network },
  { name: 'E-Learning Integration', icon: BookOpen },
  { name: 'Team Leadership', icon: Users },
];

export default function About() {
  return (
    <div id="about" className="py-24 sm:py-32">
      <img
            src={myImageb}
            alt="Profile picture of Raji-Shittu Abdulwaheed Babatunde"
            className="mx-auto w-40 h-40 rounded-full"
          />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">About Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dedicated to Innovation in Technology & Education
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As an experienced IT professional and educator, I combine technical expertise with a passion for teaching
            to deliver innovative solutions in educational technology and ICT infrastructure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                  <skill.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">{skill.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
