import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-400">keripalechinmay@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+91 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-600 rounded-lg">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-400">Ichalkaranji, Maharashtra, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Chinmay3775" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:scale-105 transform duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/chinmaykeripale" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:scale-105 transform duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://leetcode.com/u/chinmay3775" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:scale-105 transform duration-200 flex items-center justify-center"
                >
                  <span className="text-sm font-bold">LC</span>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-8 space-y-4">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Best Time to Reach</h3>
                <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                <p className="text-gray-400 text-sm">Response time: Within 24 hours</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-white/90 text-sm">
                  For urgent inquiries, feel free to connect with me on LinkedIn for faster communication.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-4 rounded-lg">
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-600 text-white p-4 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors text-white placeholder-gray-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors text-white placeholder-gray-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors text-white placeholder-gray-400"
                  placeholder="Project discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors text-white placeholder-gray-400 resize-vertical min-h-[120px]"
                  placeholder="Tell me about your project or how I can help you..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 font-semibold ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm text-center">
                By submitting this form, you agree to receive a response via email. 
                Your information will be kept confidential.
              </p>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Whether you have a project in mind, need consultation, or just want to connect, 
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Schedule a Call
              </button>
              <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;