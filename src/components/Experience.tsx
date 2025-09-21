import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Writer",
      company: "DesignTech Systems Pvt Ltd",
      period: "Nov 2024 – Present",
      location: "Pune, India",
      description: [
        "Creating comprehensive technical documentation for aerospace clients",
        "Developing AMM and IETM content using advanced XML authoring tools",
        "Ensuring compliance with S1000D standards and military specifications",
        "Collaborating with engineering teams to translate complex technical concepts"
      ],
      current: true
    },
    {
      title: "Technical Writer",
      company: "Delos Naviteam Services Pvt Ltd",
      period: "Oct 2023 – Nov 2024",
      location: "Pune, India",
      description: [
        "Specialized in defense documentation projects for DRDO and BEL",
        "Managed complete documentation lifecycle from planning to delivery",
        "Utilized Oxygen XML and Arbortext for structured document authoring",
        "Conducted quality checks and ensured CEMILAC compliance"
      ]
    },
    {
      title: "Trainee Technician",
      company: "Go First Airlines",
      period: "Jan 2022 – Oct 2023",
      location: "Mumbai, India",
      description: [
        "Gained hands-on experience in aircraft maintenance procedures",
        "Worked with technical manuals and maintenance documentation",
        "Developed understanding of aviation industry standards and practices",
        "Built foundation for technical writing career in aerospace sector"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through aerospace and defense documentation excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-sky-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-sky-500 rounded-full border-4 border-white shadow-lg z-10">
                {exp.current && (
                  <div className="absolute inset-1 bg-orange-400 rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-sky-500" />
                    <span className="text-sky-600 font-medium">{exp.period}</span>
                    {exp.current && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-3 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;