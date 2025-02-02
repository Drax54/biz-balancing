import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Us - BizBalancing | Bookkeeping & Accounting in London</title>
        <meta
          name="description"
          content="Get in touch with BizBalancing for expert bookkeeping and accounting services in London. Contact us today for inquiries, consultations, or support."
        />
        <meta
          name="keywords"
          content="contact bookkeeping London, accounting services London, VAT returns assistance, payroll management support, financial consultation"
        />
        <meta name="author" content="BizBalancing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.bizbalancing.com/contact" />

      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-emerald-800 py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574"
              alt="Contact background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                Have questions about our services? We're here to help. Reach out to us and our team will get back to you
                shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Business Ave, Suite 100
                <br />
                London, UK
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+441234567890" className="hover:text-emerald-600 transition-colors">
                  +44 (123) 456-7890
                </a>
                <br />
                <a href="tel:+441234567891" className="hover:text-emerald-600 transition-colors">
                  +44 (123) 456-7891
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@bizbalancing.com" className="hover:text-emerald-600 transition-colors">
                  contact@bizbalancing.com
                </a>
                <br />
                <a href="mailto:support@bizbalancing.com" className="hover:text-emerald-600 transition-colors">
                  support@bizbalancing.com
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM GMT
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
