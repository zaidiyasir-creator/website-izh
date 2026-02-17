import React from 'react';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mock';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-blue-100">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-700">Future-Ready Technology Partner</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Secure.</span>
              <br />
              <span className="text-gray-900">Connected.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-red-300 bg-clip-text text-transparent">
                Future-Ready.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              {companyInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-400 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-md bg-white"
              >
                Contact Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enterprise-Grade</p>
                  <p className="font-semibold text-gray-900">Security</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                  <p className="font-semibold text-gray-900">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Decorative Cards */}
              <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cybersecurity</h3>
                    <p className="text-sm text-gray-500">Advanced Protection</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full w-11/12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500">Threat Detection: 98% Accuracy</p>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 w-72 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cloud Solutions</h3>
                    <p className="text-sm text-gray-500">Scalable Infrastructure</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                    <div className="h-full w-10/12 bg-gradient-to-r from-red-300 to-red-400 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500">Uptime: 99.9% Guaranteed</p>
                </div>
              </div>

              {/* Center Decorative Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100 to-red-100 rounded-full opacity-50 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
