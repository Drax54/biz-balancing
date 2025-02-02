import React from 'react';
import { Helmet } from 'react-helmet';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>Privacy Policy - BizBalancing</title>
        <meta
          name="description"
          content="Learn how BizBalancing handles your data with our privacy policy. We prioritize transparency and data security in all our bookkeeping and accounting services."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, BizBalancing privacy, bookkeeping privacy, accounting privacy policy"
        />
        <meta name="author" content="BizBalancing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.bizbalancing.com/privacy-policy" />
      </Helmet>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                At BizBalancing, we are committed to protecting your privacy. This Privacy Policy outlines how we collect,
                use, and safeguard your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, contact details, and financial information
                necessary to provide our services. Data is collected through forms, emails, or interactions with our team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>
                Your information is used to:
              </p>
              <ul className="list-disc list-inside">
                <li>Provide bookkeeping and accounting services</li>
                <li>Communicate with you regarding your account or services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
              <p>
                We do not sell your personal data to third parties. However, we may share your data with trusted partners,
                such as payment processors or regulatory bodies, to fulfill our obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We implement robust security measures to protect your data from unauthorized access, alteration, or
                disclosure. However, no system can be 100% secure, and we encourage you to take precautions when sharing
                sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. To exercise these rights, please
                contact us at <a href="mailto:privacy@bizbalancing.com" className="text-emerald-600">privacy@bizbalancing.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p>
                Our website uses cookies to enhance user experience and analyze website traffic. You can manage your
                cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Significant changes will be communicated through
                email or by posting an update on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:privacy@bizbalancing.com" className="text-emerald-600">privacy@bizbalancing.com</a><br />
                Phone: <a href="tel:+441234567890" className="text-emerald-600">+44 (123) 456-7890</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
