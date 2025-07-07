import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Website Development */}
          <div className="bg-white rounded-lg shadow p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Website Development
            </h2>
            <p className="text-gray-700 mb-4">
              We build fully responsive, SEO-friendly websites tailored to your
              business needs. From static landing pages to complex e-commerce
              platforms, our websites are fast, secure, and scalable.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Custom website design & development</li>
              <li>Responsive and mobile-friendly layouts</li>
              <li>Performance optimization & SEO best practices</li>
              <li>Content management system (CMS) integration</li>
            </ul>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white rounded-lg shadow p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Mobile App Development
            </h2>
            <p className="text-gray-700 mb-4">
              We create custom Android and iOS mobile applications designed to
              engage your customers and improve your business workflow. Our apps
              are optimized for performance and user experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Cross-platform and native app development</li>
              <li>Intuitive UI/UX design</li>
              <li>App store deployment support</li>
              <li>Ongoing maintenance and updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
