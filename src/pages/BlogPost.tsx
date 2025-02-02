import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

// Blog posts data (typically from a CMS)
const blogPosts = {
  'essential-financial-planning': {
    title: 'Essential Financial Planning Strategies for Small Businesses',
    category: 'Financial Planning',
    categoryColor: 'bg-emerald-100 text-emerald-800',
    date: 'March 15, 2024',
    readTime: '8 min read',
    author: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
      role: 'Financial Advisor'
    },
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2670',
    content: `
      <h2>Introduction</h2>
      <p>Financial planning is crucial for the success and sustainability of small businesses. In today's dynamic business environment, having a solid financial strategy can mean the difference between thriving and merely surviving.</p>

      <h2>Key Components of Financial Planning</h2>
      <ul>
        <li>Budgeting and forecasting</li>
        <li>Cash flow management</li>
        <li>Risk assessment and mitigation</li>
        <li>Investment planning</li>
      </ul>

      <h2>Budgeting Strategies</h2>
      <p>A well-structured budget serves as the foundation for all financial decisions. It should include:</p>
      <ul>
        <li>Revenue projections</li>
        <li>Fixed and variable costs</li>
        <li>Emergency funds</li>
        <li>Growth investments</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Implementing these financial planning strategies can help small businesses build a strong foundation for sustainable growth and long-term success.</p>
    `
  },
  'digital-transformation-finance': {
    title: 'Digital Transformation in Finance',
    category: 'Technology',
    categoryColor: 'bg-blue-100 text-blue-800',
    date: 'March 4, 2024',
    readTime: '9 min read',
    author: {
      name: 'Lisa Brown',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
      role: 'Tech Analyst'
    },
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2670',
    content: `
      <h2>The Digital Revolution in Finance</h2>
      <ul>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Blockchain and Cryptocurrency</li>
        <li>Cloud Computing</li>
        <li>Big Data Analytics</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The future of finance will be increasingly digital, with new innovations continuing to emerge and reshape the industry landscape.</p>
    `
  },
  'risk-management-strategies': {
    title: 'Risk Management Strategies for Modern Businesses',
    category: 'Business Growth',
    categoryColor: 'bg-purple-100 text-purple-800',
    date: 'March 2, 2024',
    readTime: '11 min read',
    author: {
      name: 'Mark Thompson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
      role: 'Risk Management Consultant'
    },
    heroImage: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2670',
    content: `
      <h2>Understanding Business Risk</h2>
      <ul>
        <li>Financial risks</li>
        <li>Operational risks</li>
        <li>Strategic risks</li>
        <li>External risks</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Implementing these risk management strategies can help businesses navigate uncertainties and maintain stability in challenging times.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top on load
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{post.title} | Blog</title>
        <meta
          name="description"
          content={`Read about ${post.title}. Learn insights on ${post.category} with expert guidance from ${post.author.name}.`}
        />
        <link rel="canonical" href={`https://yourwebsite.com/blog/${slug}`} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-emerald-800 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-emerald-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          <div className="text-center">
            <span className={`inline-block ${post.categoryColor} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-emerald-100">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <div className="prose prose-emerald max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="bg-emerald-50 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">{post.author.name}</h3>
              <p className="text-emerald-600 mb-4">{post.author.role}</p>
              <p className="text-gray-600">
                An experienced professional with extensive knowledge in {post.category.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
