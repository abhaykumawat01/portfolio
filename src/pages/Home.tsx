import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Database, Globe, Palette, Zap } from 'lucide-react';

const Home = () => {
  // CHANGE THIS: Update featured services/highlights
  const highlights = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern frameworks.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries.',
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from frontend to backend systems.',
    },
  ];

  // CHANGE THIS: Update stats about yourself
  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '2+', label: 'Years Learning' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - pt-20 added to prevent navbar overlap */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CHANGE THIS: Update your name and title */}
          <div className="animate-fade-in">
            <p className="text-sky-400 font-medium mb-4 tracking-wider uppercase">Welcome to my portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Abhay Kumawat
              </span>
            </h1>
            {/* CHANGE THIS: Update your subtitle/role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Computer Science & Engineering Student
            </h2>
            {/* CHANGE THIS: Update your tagline */}
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
              Passionate about crafting innovative solutions through code. Exploring the intersection
              of algorithms, web development, and artificial intelligence to build the future.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-right" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/30"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* CHANGE THIS: Update resume link */}
            <a
              href={`${import.meta.env.BASE_URL}pdfs/resume.pdf`}
              download
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-left" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Do</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specializing in multiple domains of computer science to deliver comprehensive solutions.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-sky-500/20"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-8 h-8 text-sky-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies I <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Use</span>
            </h2>
          </div>

          {/* CHANGE THIS: Update your tech stack */}
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Java', 'MongoDB', 'Git'].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
            >
              View all skills
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in working together?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
