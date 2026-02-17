import React from 'react';
import { Handshake } from 'lucide-react';
import { partners } from '../mock';

export const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Handshake className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-400 to-red-300 bg-clip-text text-transparent">Partners</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver best-in-class solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-500 transition-colors">
                  {partner.name}
                </p>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-red-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-br from-blue-50 to-red-50 rounded-full px-8 py-4 shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Handshake className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Trusted By</p>
              <p className="text-lg font-bold text-gray-900">200+ Enterprise Clients</p>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
            <p className="text-gray-700 font-medium">Certified Solutions</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl border border-red-100">
            <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
            <p className="text-gray-700 font-medium">Partner Support</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
            <p className="text-gray-700 font-medium">Years Partnership</p>
          </div>
        </div>
      </div>
    </section>
  );
};
