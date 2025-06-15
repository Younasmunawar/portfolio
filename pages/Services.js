"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaSearchDollar,
  FaRocket,
  FaPalette,
  FaBrain,
  FaBitcoin
} from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    icon: <FaCode className="text-4xl text-custom-red mb-4" />,
    title: "Web Development",
    description: "Custom, responsive full-stack websites built with performance and security in mind.",
    price: "$299+"
  },
  {
    icon: <FaSearchDollar className="text-4xl text-custom-red mb-4" />,
    title: "SEO Optimization",
    description: "Boost your visibility on search engines with proven white-hat SEO techniques.",
    price: "$149/month"
  },
  {
    icon: <FaRocket className="text-4xl text-custom-red mb-4" />,
    title: "Speed Optimization",
    description: "Supercharge your website loading speed to improve user experience and SEO.",
    price: "$99/site"
  },
  {
    icon: <FaPalette className="text-4xl text-custom-red mb-4" />,
    title: "Web Design Consultancy",
    description: "Modern and intuitive UI/UX consultancy for websites and applications.",
    price: "$199/project"
  },
  {
    icon: <FaBrain className="text-4xl text-custom-red mb-4" />,
    title: "AI/ML App Development",
    description: "Deploy intelligent applications using Machine Learning and AI models.",
    price: "$499+"
  },
  {
    icon: <FaBitcoin className="text-4xl text-custom-red mb-4" />,
    title: "Crypto Trading Consultancy",
    description: "Get insights and portfolio reviews to make smarter crypto trading decisions.",
    price: "$99/session"
  }
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Younas Munawar - Full Stack Developer & SEO Consultant</title>
        <meta
          name="description"
          content="Hire Younas Munawar for expert services in web development, SEO optimization, performance tuning, UI/UX consultancy, AI/ML solutions, and crypto trading strategies."
        />
        <meta
          name="keywords"
          content="Web Development, SEO Services, Speed Optimization, Full Stack Developer, React Developer, UI UX Consultancy, Machine Learning Developer, Crypto Consultant, Freelance Web Developer, Younas Munawar"
        />
        <meta name="author" content="Younas Munawar" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph for Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ymcoding.com/services" />
        <meta property="og:title" content="Services | Younas Munawar" />
        <meta
          property="og:description"
          content="Explore services by Younas Munawar: full stack development, SEO optimization, UI/UX design, speed tuning, AI solutions and crypto consultancy."
        />
        <meta property="og:image" content="/og-preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://x.com/YounasMunawar12" />
        <meta name="twitter:title" content="Hire Younas Munawar | Web Developer & SEO Expert" />
        <meta
          name="twitter:description"
          content="Check out Younas Munawar's premium services in full-stack development, SEO, UI/UX consultancy, and more."
        />
        <meta name="twitter:image" content="/og-preview.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="services"
        className="py-24 px-[6%] bg-gradient-to-br from-gray-900 to-black text-white"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1e1e1e] p-8 rounded-xl shadow-md hover:shadow-custom-red/50 transition-shadow border border-transparent hover:border-custom-red"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4 min-h-[60px]">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-custom-red font-bold text-lg">{service.price}</span>
                <Link href="#contact" scroll={true}>
                  <button className="bg-custom-red text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
                    Contact
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
