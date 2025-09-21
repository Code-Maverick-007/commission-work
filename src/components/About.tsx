import React from 'react';
import { FileText, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over <span className="font-semibold text-sky-600">2.5+ years of specialized experience</span> in aerospace documentation, 
              I excel at transforming complex technical information into clear, compliant, and user-friendly manuals. 
              My expertise spans across <span className="font-semibold text-orange-600">XML authoring, structured documentation, 
              and international aerospace standards</span> like S1000D, ensuring that critical technical information 
              is accessible to maintenance crews, engineers, and operational teams worldwide.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-semibold text-slate-800">Documentation</h3>
                <p className="text-sm text-gray-600 mt-2">Expert in technical writing</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-800">Precision</h3>
                <p className="text-sm text-gray-600 mt-2">Attention to detail</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800">Compliance</h3>
                <p className="text-sm text-gray-600 mt-2">Standards adherence</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl">🚀</div>
                <h3 className="text-2xl font-bold text-slate-800">Aerospace Specialist</h3>
                <p className="text-gray-600">Transforming complex technical concepts into clear, actionable documentation</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-sky-600">2.5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-600">100+</div>
              <div className="text-sm text-gray-600">Documents Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;