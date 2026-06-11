import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, Palette, Server, Smartphone, GitBranch, Cloud, Cpu, Shield } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // CHANGE THIS: Update skill categories
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools & DevOps' },
    { id: 'other', name: 'Other' },
  ];

  // CHANGE THIS: Update your skills with names and proficiency levels (0-100)
  const skills = [
    { name: 'React.js', level: 90, category: 'frontend', icon: Globe },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: Code },
    { name: 'HTML/CSS', level: 95, category: 'frontend', icon: Palette },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: Palette },
    { name: 'Node.js', level: 85, category: 'backend', icon: Server },
    { name: 'Express.js', level: 80, category: 'backend', icon: Server },
    { name: 'Java', level: 50, category: 'backend', icon: Code },
    { name: 'REST APIs', level: 60, category: 'backend', icon: Server },
    { name: 'MongoDB', level: 45, category: 'database', icon: Database },
    { name: 'C++', level: 70, category: 'other', icon: Cpu },
    { name: 'Alogrithm And Data Structures', level: 25, category: 'other', icon: Cpu },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Get level color based on percentage
  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-emerald-600';
    if (level >= 75) return 'from-sky-500 to-sky-600';
    if (level >= 60) return 'from-amber-500 to-amber-600';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and tools I've mastered through academic learning and hands-on projects.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-sky-100 rounded-xl group-hover:bg-sky-500 transition-colors">
                        <Icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          {/* CHANGE THIS: Update your certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2024' },
              { name: 'Meta Frontend Developer', issuer: 'Meta (Coursera)', date: '2024' },
              { name: 'Python for Data Science', issuer: 'IBM (Coursera)', date: '2023' },
              { name: 'React Developer', issuer: 'Udemy', date: '2023' },
              { name: 'Git & GitHub Masterclass', issuer: 'Udemy', date: '2023' },
              { name: 'Node.js Complete Course', issuer: 'Coursera', date: '2022' },
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-sky-50 hover:to-orange-50 transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-sky-500 font-semibold text-sm">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Currently <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Learning</span>
            </h2>
            <p className="text-gray-600">Technologies I'm actively exploring and improving.</p>
          </div>

          {/* CHANGE THIS: Update what you're currently learning */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Kubernetes', 'GraphQL', 'Rust', 'TensorFlow', 'Blockchain', 'Microservices'].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-xl shadow-md border border-dashed border-sky-300 hover:border-sky-500 transition-colors animate-pulse"
              >
                <span className="font-medium text-sky-600">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See my skills in action
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Check out the projects where I've applied these technologies to build real solutions.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Skills;
