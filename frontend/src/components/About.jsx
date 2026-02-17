import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { companyInfo, stats } from '../mock';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-red-300 bg-clip-text text-transparent">izh padu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in digital transformation and technology excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 15 years of combined experience, we deliver cutting-edge solutions that help businesses 
                navigate the complexities of modern technology infrastructure while maintaining the highest standards 
                of security and reliability.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mission & Vision Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 transform hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Target className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 transform hover:shadow-lg transition-all duration-300 border border-red-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Eye className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>

            {/* Expertise Badge */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-red-300 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Industry Expertise</p>
                <p className="text-xl font-bold text-gray-900">{companyInfo.expertise}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Security First</h4>
            <p className="text-gray-600">
              Enterprise-grade security measures protecting your critical infrastructure
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Client-Centric</h4>
            <p className="text-gray-600">
              Customized solutions tailored to your unique business requirements
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation Driven</h4>
            <p className="text-gray-600">
              Leveraging cutting-edge technology for competitive advantage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
