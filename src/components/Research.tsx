import React from 'react';
import { publications } from '../data/content';
import { FileText } from 'lucide-react';

export default function Research() {
  return (
    <div id="research" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Research & Publications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Academic Contributions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="grid gap-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{pub.title}</h3>
                  <p className="mt-2 text-gray-600">{pub.description}</p>
                  <div className="mt-4 flex items-center gap-x-4">
                    <span className="text-sm text-gray-500">Published: {pub.year}</span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        Read More →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}