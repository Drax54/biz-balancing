import React from 'react';
import { Helmet } from 'react-helmet';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>Terms of Service - BizBalancing</title>
        <meta
          name="description"
          content="Read the terms and conditions for using BizBalancing's bookkeeping and accounting services. Learn about your rights, obligations, and our policies."
        />
        <meta
          name="keywords"
          content="terms of service, BizBalancing terms, bookkeeping terms, accounting services terms"
        />
        <meta name="author" content="BizBalancing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.bizbalancing.com/terms-of-service" />
      </Helmet>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to BizBalancing! By accessing or using our services, you agree to comply with and be bound by
                these terms of service. If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
              <p>
                BizBalancing offers professional bookkeeping and accounting services to businesses in London and beyond.
                The scope of our services will be outlined in your contract or agreement with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p>
                Users must provide accurate and complete information required for the provision of our services. Failure
                to do so may result in the suspension or termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p>
                Payment for services is due as outlined in your agreement. Late payments may incur additional fees.
                Services may be paused until payments are up to date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
              <p>
                Either party may terminate the agreement with written notice. Termination does not relieve you of any
                outstanding payment obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>
                BizBalancing will not be held liable for any indirect, incidental, or consequential damages arising from
                the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Users will be notified of significant changes
                through email or an update on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
