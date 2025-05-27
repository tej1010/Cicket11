import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - Crickets11';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in a real app)
    alert('Form submitted! In a real app, this would be sent to the server.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-[#0D1832] min-h-screen">
      <Navbar />

      <div className="pt-16 bg-[#0D1832]">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-[#1a3366] to-[#0D1832] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're here to help with any questions you may have about Crickets11.
              </p>
            </div>
          </div>
        </div>

        {/* Contact information and form */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-[#132548] rounded-xl overflow-hidden shadow-xl">
              <div className="md:flex">
                {/* Contact information */}
                <div className="bg-[#1a3366] md:w-1/3 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-600/20 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:support@crickets11.com" className="text-gray-300 hover:text-white transition-colors">
                          support@crickets11.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-600/20 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <a href="tel:+917801234567" className="text-gray-300 hover:text-white transition-colors">
                          +91 7801234567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-600/20 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Registered Address:</p>
                        <p className="text-gray-300">
                          Crickets11 HQ, 301, Mont Vert Spectra,
                          Pallod Farms, Baner, Pune 411045.
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-600/20 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Corporate Address:</p>
                        <p className="text-gray-300">
                          BN Heights, Spine Rd, Hargude Vasti,
                          Pawar Industrial Area, Chikhali, Pimpri-Chinchwad,
                          Vitthal Nagar, Pune, Maharashtra,
                          India - 411062.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="text-lg font-medium mb-4">Our Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Contact form */}
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0D1832] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0D1832] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0D1832] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="account">Account Issues</option>
                        <option value="payment">Payment Problems</option>
                        <option value="technical">Technical Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-[#0D1832] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="py-16 bg-[#0D1832]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find quick answers to common questions
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How do I report a technical issue?",
                  answer: "You can report technical issues through this contact form by selecting 'Technical Support' in the subject dropdown. Please provide as much detail as possible about the issue you're experiencing."
                },
                {
                  question: "What information do I need to provide for account-related queries?",
                  answer: "For account-related queries, please include your registered email address and user ID (if available) in your message. This helps us locate your account faster and resolve your issue more efficiently."
                },
                {
                  question: "How long does it take to get a response?",
                  answer: "We typically respond to all inquiries within 24 hours. For urgent matters, we recommend reaching out via phone during our business hours for faster assistance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-[#132548] rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;