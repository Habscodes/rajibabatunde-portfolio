import React, { useState } from 'react';
import { FileDown, FileText, Presentation, File } from 'lucide-react';
import { resources } from '../data/content';

const categories = ['All', 'Research', 'Professional', 'Training'];

const getFileIcon = (fileType: string) => {
  switch (fileType.toLowerCase()) {
    case 'pdf':
      return FileText;
    case 'pptx':
      return Presentation;
    default:
      return File;
  }
};

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResources = resources.filter(
    resource => activeCategory === 'All' || resource.category === activeCategory
  );

  return (
    <div id="resources" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Download Resources
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access my academic research, project reports, and professional documents. These materials provide
            deeper insight into my work in ICT, educational technology, and network management.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="grid gap-8">
            {filteredResources.map((resource, index) => {
              const FileIcon = getFileIcon(resource.fileType);
              
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <FileIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        {resource.fileType}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{resource.description}</p>
                    <div className="mt-4">
                      <a
                        href={resource.link}
                        download
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        <FileDown className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}