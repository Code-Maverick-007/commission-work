import React from 'react';
import { Download, MessageCircle, MapPin } from 'lucide-react';

const Hero = () => {
  const downloadResume = () => {
    // This will trigger the download of the resume
    const link = document.createElement('a');
    link.href = '/Onkar-Gaikwad-Resume-2025.pdf';
    link.download = 'Onkar-Gaikwad-Resume-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-medium">
                <MapPin size={16} />
                <span>Pune, India</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
                Onkar Gaikwad
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-sky-300 font-semibold">
                Technical Writer – Aerospace & Defence
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Turning complex aerospace documentation into clear, compliant manuals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={downloadResume}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
              >
                <Download size={20} />
                Download Resume
              </button>
              
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold text-white">
                  OG
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold">✈️</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold">📝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;