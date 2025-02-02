import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  src="/public/biz-balancing-dark.png"
                  alt="BizBalancing Logo"
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative financial solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-1" />
                <span className="text-gray-400">123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-emerald-400 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                <a href="mailto:hello@bizbalancing.com" className="text-gray-400 hover:text-emerald-400 transition-colors">contact@financeflow.com</a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 text-gray-300"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Biz Balancing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/Privacy-Policy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-condition" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="/contact" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}