import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
        <img
            src="/src/assets/img.jpg"
            alt="Profile picture of Raji-Shittu Abdulwaheed Babatunde"
            className="mx-auto w-40 h-40 rounded-full"
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Raji-Shittu Abdulwaheed Babatunde
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            IT Professional | ICT Project Manager | Lecturer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With over 10 years of experience in ICT project management, network infrastructure, and educational technology.
            Dedicated to driving innovation in educational technology and IT solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Me
            </a>
            <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              View My Work <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}