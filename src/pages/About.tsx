import React from 'react';
import {
  Shield,
  Users,
  Trophy,
  Target,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe2,
  Building,
} from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us - BizBalancing | Bookkeeping & Accounting in London</title>
        <meta
          name="description"
          content="BizBalancing provides expert bookkeeping and accounting services for small and medium businesses in London. Helping businesses achieve compliance, efficiency, and growth since 2010."
        />
        <meta
          name="keywords"
          content="bookkeeping services London, accounting services London, VAT returns, payroll management, Xero certified advisor, compliance services, financial growth"
        />
        <meta name="author" content="Dulari Soni" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <link rel="canonical" href="https://www.bizbalancing.com/about" />

      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-emerald-800 py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">About BizBalancing</h1>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                Providing tailored bookkeeping and accounting services for London-based businesses, helping them achieve
                compliance, efficiency, and growth since 2010.
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
                alt="Founder working"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <Shield className="h-12 w-12 text-emerald-600" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">15+ Years</div>
                    <div className="text-gray-600">Experience in Bookkeeping</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-emerald-700 font-medium mb-4">About Me</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hi, I'm Dulari Soni</h2>
              <p className="text-lg text-gray-600 mb-8">
                As the founder of BizBalancing, I specialize in offering bookkeeping and accounting services to small and
                medium businesses in London. My ACCA qualification, combined with years of hands-on experience, ensures
                tailored financial solutions to meet your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Indian Chartered Accountant</div>
                    <div className="text-gray-600">Qualified with expertise in UK tax regulations</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Part-Qualified ACCA</div>
                    <div className="text-gray-600">5 years of industry experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Globe2 className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Xero Certified Advisor</div>
                    <div className="text-gray-600">Expert in Xero and cloud accounting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-emerald-700 font-medium mb-4">Our Story</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Dedicated to Supporting Local London Businesses</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Since our inception in 2010, BizBalancing has been providing top-tier financial services to help
                  London-based businesses manage their bookkeeping, VAT returns, payroll services, and compliance needs.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">300+</div>
                    <div className="text-gray-600">Businesses Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Business solutions"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-emerald-700 font-medium mb-4">Our Values</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Principles That Guide Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to integrity, innovation, and client-focused solutions drives us to deliver excellence in
                everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-6`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const values = [
  {
    icon: <Trophy className="h-6 w-6 text-amber-600" />,
    bgColor: 'bg-amber-100',
    title: 'Excellence',
    description: 'Delivering top-quality bookkeeping and accounting solutions to our clients.',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    bgColor: 'bg-blue-100',
    title: 'Collaboration',
    description: 'Working closely with London businesses to achieve financial growth.',
  },
  {
    icon: <Target className="h-6 w-6 text-emerald-600" />,
    bgColor: 'bg-emerald-100',
    title: 'Innovation',
    description: 'Adopting the latest tools like Xero for seamless cloud accounting.',
  },
];
