import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Briefcase,
  Calculator,
  PieChart,
  BarChart3,
  FileSpreadsheet,
  TrendingUp,
} from 'lucide-react';

export default function Solutions() {
  return (
    <div className="bg-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Bookkeeping & Financial Solutions | FinanceFlow</title>
        <meta
          name="description"
          content="Discover professional bookkeeping and financial solutions tailored to grow your business. From tax planning to financial analysis, FinanceFlow has you covered."
        />
        <meta
          name="keywords"
          content="bookkeeping services, financial solutions, tax planning, business advisory, financial analysis, investment strategy, accounting services, small business finances, London bookkeeping"
        />
        <meta name="author" content="FinanceFlow" />
        <link rel="canonical" href="https://www.bizbalancing.com/solutions" />

      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-emerald-800 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670"
            alt="Solutions background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Tailored Financial Solutions</h1>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Expert bookkeeping and accounting services designed for business success.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Financial Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simplify your finances with our expert services designed to support business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className={`w-12 h-12 ${solution.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Let’s Simplify Your Business Finances</h2>
            <p className="text-lg mb-8">
              Discover how our bookkeeping and accounting solutions can help your business thrive.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const solutions = [
  {
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    bgColor: 'bg-blue-100',
    title: 'Business Advisory',
    description: 'Strategic guidance to grow and optimize your business operations.',
  },
  {
    icon: <Calculator className="h-6 w-6 text-emerald-600" />,
    bgColor: 'bg-emerald-100',
    title: 'Bookkeeping Services',
    description: 'Keep your finances organized and compliant with expert bookkeeping.',
  },
  {
    icon: <PieChart className="h-6 w-6 text-purple-600" />,
    bgColor: 'bg-purple-100',
    title: 'Financial Planning',
    description: 'Plan for growth and sustainability with our tailored financial strategies.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
    bgColor: 'bg-amber-100',
    title: 'Investment Strategy',
    description: 'Maximize returns with data-driven investment strategies.',
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6 text-pink-600" />,
    bgColor: 'bg-pink-100',
    title: 'Tax Planning',
    description: 'Optimize your taxes and stay compliant with expert tax advice.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    bgColor: 'bg-indigo-100',
    title: 'Financial Analysis',
    description: 'Understand your numbers and make better decisions with detailed analysis.',
  },
];
