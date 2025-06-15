"use client";

import React from "react";
import Head from "next/head";
import { workData } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";
import Link from "next/link";

const Work = () => {
  return (
    <>
      <Head>
        <title>Work Experience | Younas Munawar - Web Developer & SEO Specialist</title>
        <meta
          name="description"
          content="Explore the professional work history of Younas Munawar, including experience in full stack development, SEO, and technical leadership roles across diverse projects."
        />
        <meta
          name="keywords"
          content="Younas Munawar Experience, Web Developer Resume, Work Timeline, SEO Specialist Projects, Full Stack Developer Roles, Freelance Developer, React Developer, Technical Work"
        />
        <meta name="author" content="Younas Munawar" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (for Facebook & LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ymcoding.com/#work" />
        <meta property="og:title" content="Younas Munawar | Professional Work Timeline" />
        <meta
          property="og:description"
          content="View Younas Munawar's professional journey as a Full Stack Web Developer, SEO Consultant, and Digital Strategist."
        />
        <meta property="og:image" content="/og-preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://x.com/YounasMunawar12" />
        <meta name="twitter:title" content="Younas Munawar | Work Experience" />
        <meta
          name="twitter:description"
          content="See the work history of Younas Munawar, from development projects to SEO consulting and design roles."
        />
        <meta name="twitter:image" content="/og-preview.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="work"
        className="container mx-auto pt-24 pb-20 px-8 lg:flex justify-around items-start"
      >
        {/* Section Header */}
        <motion.div
          className="text-left ml-3 w-full lg:w-[30%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-white">
            <span className="relative inline-block">
              <span className="absolute w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Work</span>
            </span>
          </h2>
        </motion.div>

        {/* Timeline Items */}
        <div className="w-full lg:w-[70%] p-5 mt-10 lg:pl-12">
          <ul className="relative border-l border-custom-red dark:border-gray-700 max-w-7xl">
            {workData.map((item, index) => {
              const isDevRole =
                item.title.toLowerCase().includes("developer") ||
                item.title.toLowerCase().includes("site manager");
              const IconComponent = isDevRole ? FaCode : FaBriefcase;

              return (
                <motion.li
                  key={item.id}
                  className="mb-10 ml-4 relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="absolute -left-[1.45rem] top-[0.2rem] bg-custom-red p-2 rounded-full text-white shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <IconComponent />
                  </motion.span>

                  <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mb-1 ml-2">
                    {item.date}
                  </time>

                  <h3 className="text-lg font-normal text-white dark:text-white ml-2">
                    {item.title}
                    <span className="custom-superscript font-normal custom-text-shadow">
                      &nbsp; {item.type}
                    </span>
                  </h3>

                  {item.place.startsWith("http") ? (
                    <Link
                      href={item.place}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-custom-red hover:underline ml-2"
                    >
                      {item.place.replace("https://", "")}
                    </Link>
                  ) : (
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2 ml-2">
                      {item.place}
                    </p>
                  )}

                  <p className="text-sm md:text-md font-extralight text-white text-opacity-70 dark:text-gray-400 ml-2">
                    {item.body}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Work;
