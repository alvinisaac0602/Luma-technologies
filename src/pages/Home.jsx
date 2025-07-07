import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaMobileAlt, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className=" bg-opacity-60 max-w-4xl mx-auto p-10 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Empower Your Business <br /> with Cutting-Edge Digital Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-10">
            At Luma Technologies, we transform your ideas into powerful websites
            and mobile apps that scale and perform flawlessly.
          </p>
          <Link
            to="/services"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <FaLaptopCode className="text-cyan-400 text-7xl mb-6" />
            <h2 className="text-3xl font-bold mb-3">Website Development</h2>
            <p className="text-gray-300 mb-4">
              Build fast, SEO-optimized, and fully responsive websites designed
              to grow your business and engage your audience.
            </p>
            <ul className="list-none space-y-2 text-gray-400">
              <li className="flex items-center">
                <FaCheckCircle className="text-cyan-400 mr-2" /> Custom UI/UX
                design
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-cyan-400 mr-2" /> E-commerce &
                CMS solutions
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-cyan-400 mr-2" /> Performance &
                SEO optimization
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <FaMobileAlt className="text-cyan-400 text-7xl mb-6" />
            <h2 className="text-3xl font-bold mb-3">Mobile App Development</h2>
            <p className="text-gray-300 mb-4">
              Craft sleek, high-performance mobile apps for iOS and Android that
              keep your users engaged and boost your brand.
            </p>
            <ul className="list-none space-y-2 text-gray-400">
              <li className="flex items-center">
                <FaCheckCircle className="text-cyan-400 mr-2" /> Native &
                cross-platform apps
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-cyan-400 mr-2" /> Intuitive UX/UI
                design
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-cyan-400 mr-2" /> App Store
                deployment support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          Why Choose Luma Technologies?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-gray-300">
          <div>
            <FaCheckCircle className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>
              Our developers and designers are industry experts delivering
              top-quality solutions.
            </p>
          </div>
          <div>
            <FaCheckCircle className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p>
              We tailor every project to meet your unique business goals and
              brand identity.
            </p>
          </div>
          <div>
            <FaCheckCircle className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
            <p>
              From launch to maintenance, our team is here to keep your projects
              running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className=" bg-opacity-70 max-w-3xl mx-auto p-12 rounded-lg">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            Contact us today for a free consultation and let’s build something
            amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
