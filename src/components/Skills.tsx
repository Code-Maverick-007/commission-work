import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Technical Documentation', level: 95, category: 'Core' },
    { name: 'AMM Development', level: 90, category: 'Core' },
    { name: 'IETM Creation', level: 88, category: 'Core' },
    { name: 'XML Authoring', level: 92, category: 'Tools' },
    { name: 'Arbortext Editor', level: 85, category: 'Tools' },
    { name: 'Adobe FrameMaker', level: 80, category: 'Tools' },
    { name: 'Oxygen XML Author', level: 88, category: 'Tools' },
    { name: 'S1000D Standards', level: 90, category: 'Standards' },
    { name: 'CEMILAC Compliance', level: 85, category: 'Standards' },
    { name: 'HTML/CSS', level: 75, category: 'Web' },
    { name: 'Quality Assurance', level: 92, category: 'Process' },
    { name: 'Project Management', level: 78, category: 'Process' }
  ];

  const categories = ['Core', 'Tools', 'Standards', 'Web', 'Process'];
  const categoryColors = {
    'Core': 'bg-sky-500',
    'Tools': 'bg-orange-500',
    'Standards': 'bg-purple-500',
    'Web': 'bg-green-500',
    'Process': 'bg-pink-500'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills developed through hands-on experience in aerospace documentation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`}></span>
                {category} Skills
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${categoryColors[skill.category as keyof typeof categoryColors]} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;