import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, ArrowRight, Trophy, Percent } from 'lucide-react';

const Education = () => {
  // CHANGE THIS: Update your education history
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'National Institute of Technology Arunachal Pradesh',
      location: 'Itanagar, Arunachal Pradesh, India',
      startYear: '2024',
      endYear: 'Present',
      gpa:'8.31',
      description: 'Currently pursuing my undergraduate degree with a focus on software engineering, data structures, and algorithms. Active member of the coding club and tech community.',
      achievements: [
        '-------'
        // 'Dean\'s List - Fall 2022, Spring 2023',
        // 'Best Project Award in Software Engineering',
        // 'Teaching Assistant for Data Structures Course',
      ],
      coursework: ['Data Structures', 'Algorithms', 'Database Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Web Development'],
      isCurrent: true,
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'LBS School',
      location: 'Rajasthan, India',
      startYear: '2022',
      endYear: '2023',
      gpa: '8.29',
      description: 'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Participated in various science competitions.',
      achievements: [
        'School Topper in ',
        'Winner - Inter-school Science Exhibition',
        'Captain of School Tech Club',
      ],
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      isCurrent: false,
    },
    {
      degree: 'Secondary Education',
      institution: 'Shree Balaji Acadmey School',
      location: 'Rajasthan, India',
      startYear: '2019',
      endYear: '2020',
      gpa: '8.7',
      description: 'Completed secondary education with excellence in Maths and developed initial interest in programming.',
      achievements: [
        'Academic Excellence Award',
        'Class Topper in Maths',
      ],
      coursework: ['Mathematics', 'Science', 'Social Studies', 'English'],
      isCurrent: false,
    },
  ];

  // CHANGE THIS: Update achievements and awards
  const extraAchievements = [
       {title: 'Internship', position:'..', year:'2026', icon: Users},
    // { title: 'Google Code Jam', position: 'Qualification Round 2024', year: '2024', icon: Trophy },
    // { title: 'HackTech Hackathon', position: '2nd Place', year: '2023', icon: Award },
    // { title: 'National Coding Competition', position: 'Top 50 Finalists', year: '2023', icon: Users },
    // { title: 'Tech Innovation Challenge', position: 'Winner', year: '2022', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500/20 rounded-full mb-6">
              <GraduationCap className="w-10 h-10 text-sky-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">Education</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My academic journey and achievements in the field of Computer Science.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-orange-500 to-sky-500 transform md:-translate-x-1/2"></div>

            {/* Education Cards */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-sky-500 rounded-full transform md:-translate-x-1/2 mt-8 border-4 border-white shadow-lg z-10">
                    {edu.isCurrent && (
                      <div className="absolute inset-0 bg-sky-500 rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-12 md:pl-0' : 'pl-12 md:pl-12'} ${index % 2 !== 0 ? '' : ''}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {edu.degree}
                            {edu.isCurrent && (
                              <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-600 text-xs font-semibold rounded-full">
                                Current
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-600 text-sm">
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-500 text-sm mt-1">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.startYear} - {edu.endYear}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-sky-100 rounded-lg">
                            <span className="text-sky-600 font-bold">CGPA:{edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4">{edu.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-orange-500 mr-2" />
                          <span className="font-semibold text-gray-800">Achievements</span>
                        </div>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-center">
                              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Relevant Coursework */}
                      <div>
                        <div className="flex items-center mb-2">
                          <BookOpen className="w-4 h-4 text-sky-500 mr-2" />
                          <span className="font-semibold text-gray-800">Relevant Coursework</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other half */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements & <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Awards</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and achievements from competitions and academic events.
            .
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-sky-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-white transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
                    {achievement.position}
                  </p>
                  <p className="text-gray-400 text-xs mt-2 group-hover:text-white/70 transition-colors">
                    {achievement.year}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to see what I've built?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Explore my projects where I've applied my knowledge to create real-world solutions.
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

export default Education;
