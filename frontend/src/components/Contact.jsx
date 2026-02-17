import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Twitter } from 'lucide-react';
import { contactInfo } from '../mock';
import { Button } from './ui/button';

export const Contact = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const openEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-blue-400 to-red-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today and let's discuss your technology needs
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 group cursor-pointer" onClick={openEmail}>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-500 transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 group cursor-pointer" onClick={openWhatsApp}>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-green-500 transition-colors">
                      {contactInfo.whatsapp}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {contactInfo.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Quick Contact Card */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <p className="text-gray-600 mb-8">
                Choose your preferred method to reach us. We're here to help you with your technology needs.
              </p>

              <div className="space-y-4">
                <Button
                  onClick={openEmail}
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-6 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>

                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-blue-400 to-red-300 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Send className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Fast response within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Send className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Free consultation for your technology needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Send className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Customized solutions for your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Send className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="h-96 bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-700">Our Location</p>
              <p className="text-gray-600 mt-2">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
