import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  // CHANGE THIS: Update social media links
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/abhaykumawat01' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/abhaykumawat01' },
    { name: 'Email', icon: Mail, url: 'mailto:abhaykumawat512@gmail.com' },
  ];

  // CHANGE THIS: Update quick links if you add/remove pages
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Abhay <span className="text-sky-400">Kumawat</span>
            </h3>
            {/* CHANGE THIS: Update your bio */}
            <p className="text-gray-400 leading-relaxed">
              A passionate Computer Science and Engineering student dedicated to building
              innovative solutions and exploring the frontiers of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              {/* CHANGE THIS: Update your email */}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>abhaykumawat512@gmail.com</span>
              </a>
              {/* CHANGE THIS: Update your phone */}
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+917300421388</span>
              </div>
              {/* CHANGE THIS: Update your location */}
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Jaipur Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {/* CHANGE THIS: Update year and name */}
            {new Date().getFullYear()} Abhay Kumawat. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
