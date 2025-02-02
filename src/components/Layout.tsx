import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import Footer from './Footer';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              {/* Logo Section */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  src="/public/biz-balancing-logo.png"
                  alt="BizBalancing Logo"
                  className="h-20 w-auto"
                />
              </Link>
              <div className="hidden md:ml-12 md:flex md:space-x-8">
                <Link to="/" className="text-gray-900 hover:text-emerald-600 px-3 py-2 font-medium transition-colors">Home</Link>
                <Link to="/about" className="text-gray-500 hover:text-emerald-600 px-3 py-2 font-medium transition-colors">About</Link>
                <Link to="/solutions" className="text-gray-500 hover:text-emerald-600 px-3 py-2 font-medium transition-colors">Solutions</Link>
                <Link to="/blog" className="text-gray-500 hover:text-emerald-600 px-3 py-2 font-medium transition-colors">Blog</Link>
                <Link to="/contact" className="text-gray-500 hover:text-emerald-600 px-3 py-2 font-medium transition-colors">Contact</Link>
              </div>
            </div>
            <div className="hidden md:flex md:items-center">
              <button className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-lg font-medium transition-colors mr-4">
                Sign in
              </button>
              <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Get started
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-emerald-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-900 font-medium hover:bg-emerald-50 rounded-lg">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-500 font-medium hover:bg-emerald-50 rounded-lg">About</Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-500 font-medium hover:bg-emerald-50 rounded-lg">Solutions</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-500 font-medium hover:bg-emerald-50 rounded-lg">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-500 font-medium hover:bg-emerald-50 rounded-lg">Contact</Link>
            </div>
            <div className="px-4 py-3 border-t border-gray-100">
              <button className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-lg font-medium transition-colors mb-2">
                Sign in
              </button>
              <button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}