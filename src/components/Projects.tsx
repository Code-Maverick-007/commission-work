import React from 'react';
import { ExternalLink, FileText, Shield, Cog } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "IRDE Technical Documentation Project",
      category: "Defense Research",
      description: "Comprehensive technical documentation suite for defense research instruments and systems, ensuring compliance with military standards and operational requirements.",
      features: [
        "Complete technical manual creation",
        "Standards compliance documentation",
        "Multi-format output generation",
        "Quality assurance processes"
      ],
      technologies: ["FrameMaker", "Oxygen XML", "HTML/CSS", "Quality Checks"],
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      status: "Completed"
    },
    {
      title: "BEL Aerospace Documentation Suite",
      category: "Aerospace Systems",
      description: "Advanced documentation system for aerospace defense projects, implementing S1000D standards and IETM capabilities for enhanced user experience.",
      features: [
        "S1000D compliant documentation",
        "Interactive Electronic Technical Manuals",
        "XML-based content management",
        "Automated quality validation"
      ],
      technologies: ["S1000D", "XML", "Arbortext", "IETM"],
      icon: Cog,
      color: "from-orange-500 to-red-500",
      status: "Ongoing"
    },
    {
      title: "Documentation Process Optimization",
      category: "Process Improvement",
      description: "Streamlined documentation workflows and quality assurance processes, resulting in improved efficiency and reduced review cycles.",
      features: [
        "Workflow automation",
        "Quality metrics tracking",
        "Template standardization",
        "Review process optimization"
      ],
      technologies: ["Process Design", "Quality Assurance", "Templates", "Standards"],
      icon: FileText,
      color: "from-green-500 to-emerald-600",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing technical documentation excellence in aerospace and defense sectors
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-sky-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${project.color} text-white py-3 rounded-xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}>
                      <ExternalLink size={16} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Project Impact</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-sky-600">150+</div>
              <div className="text-sm text-gray-600">Documents Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">30%</div>
              <div className="text-sm text-gray-600">Process Improvement</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Standards Compliance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-sm text-gray-600">Team Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;