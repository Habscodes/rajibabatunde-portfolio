import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Contact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-center gap-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:rajibabatunde@gmail.com" className="text-gray-600 hover:text-blue-600">
                    rajibabatunde@gmail.com
                  </a>
                  <br />
                  <a href="mailto:rajishittu@lascohet.edu.ng" className="text-gray-600 hover:text-blue-600">
                    rajishittu@lascohet.edu.ng
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+2348033289000" className="text-gray-600 hover:text-blue-600">
                    +234 803 328 9000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Lagos State College of Health Technology</p>
                </div>
              </div>
            </div>
            <form className="space-y-6" action="mailto:rajibabatunde@gmail.com" method="POST" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}