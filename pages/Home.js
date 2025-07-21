"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "SEO Expert",
      "Web Design Consultant",
      "Speed Optimization Specialist",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Younas Munawar | Full Stack Web Developer & SEO Expert</title>
        <meta
          name="description"
          content="Younas Munawar is a Full Stack Web Developer, SEO Expert, and Web Design Consultant from Pakistan. Specializing in high-performance websites, speed optimization, and modern UI/UX design."
        />
        <meta
          name="keywords"
          content="Younas Munawar, Full Stack Web Developer, SEO Expert, Web Designer Pakistan, React Developer, Speed Optimization, Web Consultant, Frontend Developer, Backend Developer, Web Design Consultant"
        />
        <meta name="author" content="Younas Munawar" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="google-site-verification" content="o9o3e4iGax5noeCj6bJjFH3Ky8yNjbVM0ZfPOkLkVJU" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ymcoding.bio/" />
        <meta
          property="og:title"
          content="Younas Munawar | Full Stack Developer & SEO Expert"
        />
        <meta
          property="og:description"
          content="Explore the work of Younas Munawar — an expert in full-stack development, SEO strategy, website speed optimization, and modern web design."
        />
        <meta property="og:image" content="/og-preview.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://x.com/YounasMunawar12" />
        <meta
          name="twitter:title"
          content="Younas Munawar | Web Developer & SEO Expert"
        />
        <meta
          name="twitter:description"
          content="Discover the full-stack web development and SEO expertise of Younas Munawar. Modern, responsive, high-performance websites built with passion."
        />
        <meta name="twitter:image" content="/og-preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="home"
        className="flex flex-col md:flex-row min-h-screen md:p-[10%] p-[6%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        {/* Left Column */}
        <div className="flex justify-center items-center md:mt-0 mt-[20%] md:w-2/3 z-20">
          <div className="relative bottom-0">
            <h5 className="text-[#a6adba] text-2xl" data-aos="fade-up">
              Hello There 👋
            </h5>
            <h1
              className="md:text-6xl text-4xl text-[#ced4d7] font-bold mb-2 pr-[1%]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I’m Younas Munawar
            </h1>

            <div data-aos="fade-up" data-aos-delay="400">
              <span className="text-[#a6adba] text-2xl">
                {text}
                <Cursor cursorStyle="|" cursorColor="white" />
              </span>
            </div>

            <div className="mt-5" data-aos="fade-up" data-aos-delay="600">
              <Button text="🚀 Discover More" link="#services" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center md:w-1/2">
          <Tilt>
            <div className="relative">
              <img
                src="/images/Computer.svg"
                alt="illustration of developer"
                className="w-[300px] md:w-[400px] drop-shadow-2xl"
              />
            </div>
          </Tilt>
        </div>
      </section>
    </>
  );
};

export default Home;
