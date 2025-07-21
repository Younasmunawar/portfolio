"use client";

import React from "react";
import Head from "next/head";
import { educationData } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <Head>
        <title>Education | Younas Munawar - Web Developer & Computer Science Student</title>
        <meta
          name="description"
          content="Explore the educational background of Younas Munawar, a Computer Science student at University of Haripur with a strong foundation in programming, full stack development, and technical expertise."
        />
        <meta
          name="keywords"
          content="Younas Munawar Education, Computer Science Student, Web Developer Education, University of Haripur, Full Stack Developer Training, Programming Degree, Software Engineering"
        />
        <meta name="author" content="Younas Munawar" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ymcoding.bio/education" />
        <meta
          property="og:title"
          content="Education | Younas Munawar - Web Developer & Student"
        />
        <meta
          property="og:description"
          content="View the educational timeline of Younas Munawar – Bachelor of Computer Science student, skilled in full stack web development, SEO, and AI."
        />
        <meta property="og:image" content="/og-preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://x.com/YounasMunawar12" />
        <meta name="twitter:title" content="Education | Younas Munawar" />
        <meta
          name="twitter:description"
          content="Check out Younas Munawar's education and background in Computer Science, web development, and programming."
        />
        <meta name="twitter:image" content="/og-preview.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="education"
        className="container mx-auto lg:flex justify-around items-start pt-24 pb-20 px-8"
      >
        {/* Section Heading */}
        <motion.div
          className="text-left ml-3 w-full lg:w-[30%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-white">
            <span className="relative inline-block">
              <span className="absolute w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-normal">Education</span>
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="w-full lg:w-[70%] p-5 mt-10 lg:pl-12">
          <ol className="relative border-l border-custom-red dark:border-gray-700 max-w-7xl">
            {educationData.map((item, index) => {
              const isDegree =
                item.title.toLowerCase().includes("bachelor") ||
                item.title.toLowerCase().includes("bs");

              return (
                <motion.li
                  key={item.id}
                  className="mb-10 ml-4 relative pl-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Icon */}
                  <motion.span
                    className="absolute left-[-1.4rem] top-[1.35rem] bg-black border-2 border-custom-red text-white p-2 rounded-full z-10 group transition-all"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 8px #e11d48",
                    }}
                    title={isDegree ? "University Degree" : "College / Intermediate"}
                  >
                    {isDegree ? (
                      <FaGraduationCap className="text-sm group-hover:text-yellow-300" />
                    ) : (
                      <FaBook className="text-sm group-hover:text-blue-300" />
                    )}
                  </motion.span>

                  {/* Timeline Content */}
                  <motion.div
                    className="rounded-md transition-shadow"
                    whileHover={{ boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
                  >
                    <time className="block text-sm font-normal leading-none text-gray-400 mb-1">
                      {item.date}
                    </time>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                      <span className="font-light ml-2 text-sm text-custom-red">
                        {item.type}
                      </span>
                    </h3>

                    <p className="text-base font-normal text-gray-500 mb-2">{item.place}</p>

                    <p className="text-sm md:text-md font-extralight text-white text-opacity-70">
                      {item.body}
                    </p>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Education;
