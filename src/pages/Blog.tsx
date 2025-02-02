import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, ArrowRight, Tag, Search, BookOpen } from 'lucide-react';

export default function Blog() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Financial Insights & Updates | BizBalancing Blog</title>
        <meta
          name="description"
          content="Explore expert financial insights, business growth tips, and technology trends on the BizBalancing Blog. Stay informed with the latest updates."
        />
        <meta
          name="keywords"
          content="financial blog, business growth tips, technology in finance, investment strategies, risk management, financial planning"
        />
        <meta name="author" content="BizBalancing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.bizbalancing.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Financial Insights & Updates | BizBalancing Blog" />
        <meta
          property="og:description"
          content="Explore expert financial insights, business growth tips, and technology trends on the BizBalancing Blog. Stay informed with the latest updates."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" />
        <meta property="og:url" content="https://www.bizbalancing.com/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financial Insights & Updates | BizBalancing Blog" />
        <meta
          name="twitter:description"
          content="Explore expert financial insights, business growth tips, and technology trends on the BizBalancing Blog."
        />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" />
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-emerald-800 py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670"
              alt="Blog background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">Financial Insights & Updates</h1>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
                Stay informed with the latest financial trends, expert advice, and success stories.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-emerald-100 hover:text-emerald-800"
                  style={{
                    backgroundColor: category.bgColor,
                    color: category.textColor,
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/blog/essential-financial-planning"
            className="block scroll-reveal bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1551260927-557c5b5f7d77?auto=format&fit=crop&q=80&w=1000"
                  alt="Featured article"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    March 15, 2024
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Essential Financial Planning Strategies for Small Businesses
                </h2>
                <p className="text-gray-600 mb-6">
                  Learn proven strategies for achieving sustainable business growth while maintaining financial stability.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                      alt="Author"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Financial Advisor</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Article Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.slug}`}
                className="scroll-reveal bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`${article.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime} min read
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-sm text-gray-500">{article.author.name}</div>
                    </div>
                    <div className="text-sm text-gray-500">{article.date}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const categories = [
  { name: 'All', bgColor: '#E5E7EB', textColor: '#374151' },
  { name: 'Financial Planning', bgColor: '#D1FAE5', textColor: '#065F46' },
  { name: 'Investment', bgColor: '#FEF3C7', textColor: '#92400E' },
  { name: 'Technology', bgColor: '#DBEAFE', textColor: '#1E40AF' },
  { name: 'Business Growth', bgColor: '#F3E8FF', textColor: '#6B21A8' },
];

const articles = [
  {
    slug: 'digital-transformation-finance',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    title: 'Digital Transformation in Finance',
    excerpt: 'Understand the key aspects of digital transformation and how it\'s reshaping the financial industry.',
    category: 'Technology',
    categoryColor: 'bg-blue-100 text-blue-800',
    readTime: 9,
    date: 'March 4, 2024',
    author: {
      name: 'Lisa Brown',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    },
  },
  {
    slug: 'risk-management-strategies',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1000',
    title: 'Risk Management Strategies for Modern Businesses',
    excerpt: 'Discover effective risk management strategies to protect your business in an uncertain economic environment.',
    category: 'Business Growth',
    categoryColor: 'bg-purple-100 text-purple-800',
    readTime: 11,
    date: 'March 2, 2024',
    author: {
      name: 'Mark Thompson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    },
  },
];
