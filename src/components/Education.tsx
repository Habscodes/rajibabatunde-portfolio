import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "M.Sc./Ph.D. in Computer Science",
    status: "In Progress",
    institution: "University"
  },
  {
    degree: "M.IT (Master of Information Technology)",
    status: "Completed",
    institution: "University"
  },
  {
    degree: "B.Sc. in Computer Science",
    status: "Completed",
    institution: "University"
  },
  {
    degree: "PGDE in Computer Science / IT Education",
    status: "Completed",
    institution: "University"
  }
];

const certifications = [
  "Cisco Certified Network Associate (CCNA)",
  "Microsoft Certified Technology Specialist (MCTS)",
  "Microsoft Certified Professional (MCP)"
];

export default function Education() {
  return (
    <div id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Education & Certifications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Academic Background
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 grid gap-16 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-x-3">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Education</h3>
            </div>
            <div className="mt-6 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                    <p className="mt-1 text-sm text-gray-600">{edu.status}</p>
                    <p className="mt-1 text-sm text-gray-500">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-3">
              <Award className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
            </div>
            <div className="mt-6 space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-600">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}