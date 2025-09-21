import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Aircraft Maintenance Engineering (AME)",
      institution: "Academy of Carver Aviation",
      year: "2022",
      percentage: "85%",
      description: "Specialized in aircraft systems, maintenance procedures, and aviation regulations.",
      color: "from-sky-500 to-blue-600",
      icon: "✈️"
    },
    {
      degree: "Bachelor of Arts - English",
      institution: "Shivaji University",
      year: "2023",
      percentage: "78%",
      description: "Focused on language, literature, and communication skills essential for technical writing.",
      color: "from-orange-500 to-red-500",
      icon: "📚"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic foundation in aerospace engineering and language arts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {edu.icon}
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full font-semibold`}>
                    {edu.percentage}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-sky-600">{edu.institution}</h4>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="font-medium">{edu.year}</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${edu.color} rounded-full opacity-60`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Certifications & Training</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800">S1000D Certification</h4>
              <p className="text-sm text-gray-600 mt-2">International specification for technical publications</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800">XML Authoring</h4>
              <p className="text-sm text-gray-600 mt-2">Advanced structured document creation</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800">Technical Writing</h4>
              <p className="text-sm text-gray-600 mt-2">Professional documentation standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;