import React from 'react';
import { Heart, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    'Technical Writing',
    'Documentation Management',
    'S1000D Standards',
    'Quality Assurance',
    'IETM Development',
    'XML Authoring'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Onkar Gaikwad
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Technical Writer specializing in aerospace and defense documentation. 
              Transforming complex technical information into clear, compliant manuals.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:onkar.gaikwad@email.com"
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                <span>onkar.gaikwad@email.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="https://linkedin.com/in/onkar-gaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>© 2025 Onkar Gaikwad. Made with</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>for aerospace documentation excellence.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;