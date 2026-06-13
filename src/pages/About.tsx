import { Link } from 'react-router-dom';
import { Download, Award, Users, Coffee, Heart, Code, ArrowRight } from 'lucide-react';

const About = () => {
  // CHANGE THIS: Update personal information
  const personalInfo = {
    name: 'Abhay Kumwat',
    title: 'CSE Student',
    email: 'abhaykumawat512@gmail.com',
    phone: '+917300421388',
    location: 'Jaipur Rajasthan, India',
    languages: ['English', 'Hindi'],
    interests: ['Open Source', 'AI/ML', 'Web3', 'Cloud Computing'],
  };

  // CHANGE THIS: Update interests/hobbies
  const hobbies = [
    { icon: Code, name: 'Coding', description: 'Building side projects and exploring new technologies' },
    { icon: Coffee, name: 'Coffee', description: 'Essential fuel for late-night coding sessions' },
    { icon: Users, name: 'Community', description: 'Contributing to tech communities and mentoring' },
    { icon: Heart, name: 'Problem Solving', description: 'Tackling complex challenges with creative solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                {/* CHANGE THIS: Replace with your photo */}
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-sky-400 to-orange-400 p-1">
                  <div className="w-full h-full rounded-3xl bg-gray-200 flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile-img.png`}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  I'm <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">{personalInfo.name}</span>
                </h2>
                {/* CHANGE THIS: Update your bio */}
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A passionate Computer Science and Engineering student with a deep love for technology
                  and innovation. Currently pursuing my degree while actively building projects that solve
                  real-world problems.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies.
                  My goal is to leverage my skills to create impactful solutions that make a difference
                  in people's lives.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold text-gray-900">{personalInfo.name}</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900 truncate">{personalInfo.email}</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">{personalInfo.location}</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-sm text-gray-500">Languages</p>
                  <p className="font-semibold text-gray-900">{personalInfo.languages.join(', ')}</p>
                </div>
              </div>

              {/* Download Resume Button */}
              {/* CHANGE THIS: Update resume link */}
              <div className="pt-4">
                <a
                  href={`${import.meta.env.BASE_URL}pdfs/resume.pdf`}
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/30"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beyond <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Coding</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some things I'm passionate about outside of my studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-sky-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
                    {hobby.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interests Tags */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Interest</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {/* CHANGE THIS: Update your interests */}
            {personalInfo.interests.map((interest, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium rounded-full hover:scale-105 transition-transform cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {/* CHANGE THIS: Update your favorite quote */}
            <blockquote className="text-xl md:text-2xl text-white font-medium italic mb-6">
              "The only way to do great work is to love what you do."
            </blockquote>
            <p className="text-sky-200">— Steve Jobs</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to know more about my skills?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Explore my technical expertise and the technologies I work with.
          </p>
          <Link
            to="/skills"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/30"
          >
            View My Skills
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
