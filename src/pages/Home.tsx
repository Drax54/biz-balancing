import React, { useEffect } from 'react';
import { Calculator, PieChart, Clock, Shield, BookOpen, Phone, Mail, MapPin, ArrowRight, CheckCircle2, FileText, BarChart, Users, Receipt, Megaphone, Palette, Laptop, MessageSquare, Target, Clock3 } from 'lucide-react';
import { FileCheck, HardHat, ShieldCheck, CalendarDays, BarChart3 } from 'lucide-react';
import AccountingIllustration from '../components/AccountingIllustration';
import { Helmet } from 'react-helmet'; // Import Helmet


export default function Home() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>

     {/* SEO Meta Tags */}
     <Helmet>
        {/* Primary Meta Tags */}
        <title>Professional Bookkeeping in London | FinanceFlow</title>
        <meta
          name="description"
          content="Streamline your finances with expert bookkeeping and accounting services for London businesses. Contact us for VAT returns, payroll, and more."
        />
        <meta
          name="keywords"
          content="bookkeeping in London, professional bookkeeping services, VAT returns, payroll management, self-assessment tax, accounting services, HMRC compliance, business finances"
        />
        <meta name="author" content="FinanceFlow" />
        <link rel="canonical" href="https://www.bizbalancing.com" />

      </Helmet>


      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-700 font-medium mb-4 animate-fade-in-up">Start managing your finances better</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-100">
              Professional <span className="text-emerald-700">Bookkeeping</span> in London.<span className="text-emerald-700">Unlimited Success</span> 
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
              Empowering London-based businesses with expert bookkeeping services. Let us streamline your finances and help you achieve success effortlessly.
                <br />
                Let's achieve your goals together.
              </p>
              <div className="flex items-center gap-6 animate-fade-in-up animation-delay-300">
                <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors transform hover:scale-105 duration-200">
                  Free consultation
                </button>
                <div className="flex items-center gap-4">
                  {/* <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div> */}
                  {/* <span className="text-gray-600">Loved by thousands</span> */}
                </div>
              </div>
              {/* <div className="mt-16 animate-fade-in-up animation-delay-400">
                <div className="grid grid-cols-5 gap-8 items-center opacity-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="h-5 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-6 w-auto" />
                </div>
              </div> */}
            </div>
            <div className="relative">
              <AccountingIllustration className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 scroll-reveal">
              <div className="text-amber-400 font-medium mb-4">Our Core Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Bookkeeping Solutions for London Businesses</h2>
              <p className="text-emerald-100 text-lg">Streamline your finances with expert bookkeeping services. From VAT returns to payroll management, our tailored solutions help London-based businesses stay compliant, boost efficiency, and achieve financial success.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className={`scroll-reveal bg-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl`} style={{ animationDelay: `${index * 100}ms` }}>
                    <img
                      src={[
                        "/public/3.png",
                        "/public/4.png",
                        "/public/5.png",
                        "/public/6.png"
                      ][index]}
                      alt="Solution illustration"
                      className="w-full h-48 object-contain mb-6"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {[
                        "Bookkeeping Services",
                        "Ensure compliance with VAT regulations",
                        "Self-Assessment Tax Returns",
                        "Payroll Services & Pension Management"
                      ][index]}
                    </h3>
                    <p className="text-gray-600">
                      {[
                        "Stay on top of your financial records with accurate and efficient bookkeeping services. We help you organize your income, expenses, and transactions so you can focus on growing your business while we handle the numbers.",
                        "Our VAT return services make it easy for your business to meet HMRC deadlines. From calculating VAT liabilities to preparing and submitting returns, we ensure accuracy and compliance every step of the way.",
                        "Whether you're self-employed, a freelancer, or a small business owner, we simplify the self-assessment process. Let us prepare and submit your tax returns, ensuring all allowances and deductions are applied to save you money.",
                        "Manage your employees’ wages, taxes, and pensions with our reliable payroll services. We handle everything from payslips to pension contributions, ensuring compliance with workplace pension schemes and HMRC regulations."
                      ][index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <div className="text-emerald-700 font-medium mb-4">Our Services</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your <span className="text-emerald-700">bespoke</span> service bundle</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock your business's full potential with our comprehensive suite of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FileText />, color: "amber", title: "Bookkeeping Services" },
              { icon: <Receipt />, color: "emerald", title: "VAT Returns" },
              { icon: <FileCheck />, color: "blue", title: "Self-Assessment Tax Returns" },
              { icon: <HardHat />, color: "purple", title: "CIS Returns (Construction Industry Scheme)" },
              { icon: <Users />, color: "pink", title: "Payroll Services & Pension Management" },
              { icon: <ShieldCheck />, color: "orange", title: "IR35 Compliance Advice" },
              { icon: <CalendarDays />, color: "cyan", title: "Accounting Year-End Services" },
              { icon: <BarChart3 />, color: "indigo", title: "Corporation Tax Returns" },
              { icon: <PieChart />, color: "green", title: "Management Accounts" },
            ].map((service, index) => (
              <div
                key={index}
                className={`scroll-reveal bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  {React.cloneElement(service.icon, { className: `w-6 h-6 text-${service.color}-600` })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">
                  Transform your business with our professional {service.title.toLowerCase()} services. We deliver exceptional results tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-emerald-700 font-medium mb-4">Our Services</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored <span className="text-emerald-700">Financial Solutions</span> for Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take control of your finances with our customized services designed to help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FileText />, color: "amber", title: "Bookkeeping Services", desc: "Streamline your financial records with professional bookkeeping services." },
              { icon: <Receipt />, color: "emerald", title: "VAT Returns", desc: "Ensure timely VAT return submissions with our accurate services." },
              { icon: <FileCheck />, color: "blue", title: "Self-Assessment Tax Returns", desc: "Get your self-assessment tax returns done hassle-free." },
              { icon: <HardHat />, color: "purple", title: "CIS Returns (Construction Industry Scheme)", desc: "Simplify your CIS returns and stay compliant with regulations." },
              { icon: <Users />, color: "pink", title: "Payroll Services & Pension Management", desc: "Manage payroll and pensions efficiently with expert services." },
              { icon: <ShieldCheck />, color: "orange", title: "IR35 Compliance Advice", desc: "Receive tailored advice to ensure compliance with IR35 rules." },
              { icon: <CalendarDays />, color: "cyan", title: "Accounting Year-End Services", desc: "Prepare and finalize your year-end accounts with precision." },
              { icon: <BarChart3 />, color: "indigo", title: "Corporation Tax Returns", desc: "Handle corporation tax returns efficiently with our support." },
              { icon: <PieChart />, color: "green", title: "Management Accounts", desc: "Gain insights into your business with detailed management accounts." },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Circular Icon Container */}
                <div
                  className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center group-hover:bg-${service.color}-100 transition-all duration-300`}
                >
                  <div className={`w-8 h-8 text-${service.color}-600`}>
                    {React.cloneElement(service.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                <div className="pt-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="bg-emerald-800 py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="scroll-reveal">
        <div className="text-amber-400 font-medium mb-4">Get Started Today</div>
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to streamline your bookkeeping and accounting?
        </h2>
        <p className="text-emerald-100 text-lg mb-8">
          Take control of your finances with our expert bookkeeping and accounting services designed for businesses in London. From managing your accounts to ensuring compliance with HMRC, we’re here to help you focus on growing your business while we handle the numbers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
            Contact us today to simplify your accounting
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        {/* <div className="mt-12 bg-emerald-700/30 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-start gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
              alt="Sarah Johnson"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-emerald-100 italic mb-2">
                "FinanceFlow transformed our business operations. Their expertise and dedication to our success made all the difference."
              </p>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Sarah Johnson</span>
                <span className="text-emerald-300">•</span>
                <span className="text-emerald-300">CEO at TechStart</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="relative scroll-reveal">
        <div className="absolute -top-8 -left-8 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="grid grid-cols-2 gap-6">
              {/* Xero Certified Advisor */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/xero.webp" // Replace with the actual image URL
                  alt="Xero Certified Advisor"
                  className="w-80 h-16 object-contain"
                />
                <p className="text-gray-900 font-medium text-center">Xero Certified Advisor</p>
              </div>
              {/* ACCA Experience */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/acca.png" // Replace with the actual image URL
                  alt="Part ACCA Qualified with 5 years experience"
                  className="w-16 h-16 object-contain"
                />
                <p className="text-gray-900 font-medium text-center">
                  Part ACCA with 5 years experience
                </p>
              </div>
            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: <FileText />, color: "blue", value: "20", label: "Satisfied clients" },
                { icon: <BarChart />, color: "purple", value: "£150,000+", label: "Revenue saved" },
              ].map((stat, index) => (
                <div key={index} className={`flex items-center gap-3 bg-${stat.color}-50 p-4 rounded-xl`}>
                  {React.cloneElement(stat.icon, { className: `h-8 w-8 text-${stat.color}-600` })}
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}