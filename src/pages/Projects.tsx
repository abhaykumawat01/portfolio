import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Folder, ArrowRight, Code, Cpu, Globe, Smartphone, Database } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // CHANGE THIS: Update project categories
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'fullstack', name: 'Full Stack' },
    // { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
  ];

  // CHANGE THIS: Update your projects
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern web technologies.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, drag-and-drop interface, and progress tracking.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'TypeScript', 'Material UI'],
      category: 'web',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://taskmanager-demo.com',
      featured: true,
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application that provides real-time weather data, 7-day forecasts, and location-based services using OpenWeather API.',
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'OpenWeather API', 'CSS', 'Geolocation'],
      category: 'web',
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-demo.com',
      featured: false,
    },
    {
      title: 'Portfolio Website Template',
      description: 'A modern, responsive portfolio template for developers featuring smooth animations, dark mode, and optimized performance.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: 'web',
      github: 'https://github.com/yourusername/portfolio-template',
      live: 'https://portfolio-demo.com',
      featured: false,
    },
    {
      title: 'Fitness Tracking Mobile App',
      description: 'A comprehensive fitness app with workout tracking, calorie counting, progress charts, and personalized workout plans.',
      image: 'https://images.pexels.com/photos/416249/pexels-photo-416249.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
      category: 'mobile',
      github: 'https://github.com/yourusername/fitness-app',
      live: null,
      featured: true,
    },
    {
      title: 'AI Image Classifier',
      description: 'An image classification system using deep learning to categorize images into multiple categories. Includes a trained model and web interface.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'Flask', 'React'],
      category: 'ai',
      github: 'https://github.com/yourusername/image-classifier',
      live: 'https://image-classifier-demo.com',
      featured: true,
    },
    {
      title: 'Blog Platform with CMS',
      description: 'A content management system for bloggers with markdown support, SEO optimization, analytics dashboard, and multiple theme options.',
      image: 'https://images.pexels.com/photos/261502/pexels-photo-261502.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/blog-cms',
      live: 'https://blogcms-demo.com',
      featured: false,
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application with private messaging, group chats, file sharing, and online status indicators.',
      image: 'https://images.pexels.com/photos/617694/pexels-photo-617694.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Socket.io', 'MongoDB', 'React'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://chat-demo.com',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Globe;
      case 'fullstack': return Code;
      case 'mobile': return Smartphone;
      case 'ai': return Cpu;
      case 'database': return Database;
      default: return Folder;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500/20 rounded-full mb-6">
              <Folder className="w-10 h-10 text-sky-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of my work showcasing various technologies and problem-solving skills.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-sky-500/80 text-white text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const Icon = getCategoryIcon(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filter.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            All <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors text-sm font-medium"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to discuss a project?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Let's connect!
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

export default Projects;
