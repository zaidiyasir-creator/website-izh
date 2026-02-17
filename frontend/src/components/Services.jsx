import React, { useState } from 'react';
import { Network, Shield, Database, Settings, ArrowRight, Check } from 'lucide-react';
import { services } from '../mock';
import { Button } from './ui/button';

const iconMap = {
  Network: Network,
  Shield: Shield,
  Database: Database,
  Settings: Settings
};

export const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-red-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform and secure your business infrastructure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 transform ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      service.id === 1 || service.id === 4
                        ? 'bg-blue-100'
                        : 'bg-red-100'
                    }`}
                  >
                    <IconComponent
                      className={`w-8 h-8 transition-all duration-300 ${
                        service.id === 1 || service.id === 4
                          ? 'text-blue-500'
                          : 'text-red-400'
                      } ${isHovered ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          service.id === 1 || service.id === 4
                            ? 'bg-blue-100'
                            : 'bg-red-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            service.id === 1 || service.id === 4
                              ? 'text-blue-500'
                              : 'text-red-400'
                          }`}
                        />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button
                  onClick={scrollToContact}
                  className={`flex items-center space-x-2 font-semibold transition-all duration-300 ${
                    service.id === 1 || service.id === 4
                      ? 'text-blue-500 hover:text-blue-600'
                      : 'text-red-400 hover:text-red-500'
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-400 to-red-300 rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Infrastructure?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help your business stay secure, connected, and future-ready.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
