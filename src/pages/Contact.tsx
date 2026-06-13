import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // CHANGE THIS: Update your contact information
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abhaykumawat512@gmail.com',
      link: 'mailto:abhaykumawat512@gmail.com',
      description: 'Send me an email anytime!',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+917300421388',
      link: null,
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur Rajasthan, India',
      link: null,
      description: 'Currently based here',
    },
  ];

  // CHANGE THIS: Update your social media links
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/abhaykumawat01', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/abhaykumawat01', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/', color: 'hover:bg-sky-400' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - CHANGE THIS: Connect to your backend or email service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500/20 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-sky-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Let's <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Connect</span>
                </h2>
                <p className="text-gray-600">
                  I'm currently available for freelance work, internships, and exciting projects.
                  Feel free to reach out through any of the methods below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const Content = (
                    <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <div className="p-3 bg-sky-100 rounded-xl group-hover:bg-sky-500 transition-colors">
                        <Icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.value}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {Content}
                    </a>
                  ) : (
                    <div key={index}>{Content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-100 rounded-xl text-gray-600 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map or Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                {/* CHANGE THIS: Replace with your location map or a nice image */}
                <img
                  src="https://images.pexels.com/photos/32299525/pexels-photo-32299525.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Location"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Message</span>
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center text-emerald-700">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center text-red-700">
                  <AlertCircle className="w-5 h-5 mr-3" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                    placeholder="abhay kumawat"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                    placeholder="abhay@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  {/* CHANGE THIS: Update subject options */}
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked <span className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          {/* CHANGE THIS: Update FAQ questions */}
          <div className="space-y-4">
            {[
              {
                question: 'What types of projects do you take on?',
                answer: 'I work on web development projects, both frontend and full-stack. I\'m particularly interested in projects involving React, Node.js, and modern web technologies.',
              },
              {
                question: 'Are you available for internships?',
                answer: 'Yes! I\'m actively looking for internship opportunities that allow me to grow my skills and contribute to meaningful projects.',
              },
              {
                question: 'How quickly do you respond to messages?',
                answer: 'I typically respond within 24-48 hours. For urgent matters, please mention it in your message subject line.',
              },
              {
                question: 'Do you work remotely?',
                answer: 'Yes, I\'m comfortable working remotely and have experience collaborating with teams across different time zones.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
