"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import ButtonCV from "../components/ButtonCV";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const AboutMe = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const projectCollection = collection(db, "projects");
    getDocs(projectCollection)
      .then((querySnapshot) => setProjectCount(querySnapshot.size))
      .catch((error) => console.error("Error fetching projects: ", error));

    const certificateCollection = collection(db, "certificates");
    getDocs(certificateCollection)
      .then((querySnapshot) => setCertificateCount(querySnapshot.size))
      .catch((error) => console.error("Error fetching certificates: ", error));
  }, []);

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>About Younas Munawar | Full Stack Web Developer & SEO Expert</title>
        <meta
          name="description"
          content="Learn more about Younas Munawar – Full Stack Developer, SEO Expert, and Web Consultant with 3+ years of experience in building modern, fast, and optimized web solutions."
        />
        <meta
          name="keywords"
          content="About Younas Munawar, Full Stack Developer, SEO Expert, React Developer, Web Developer Pakistan, Next.js Portfolio"
        />
        <meta name="author" content="Younas Munawar" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ymcoding.bio/about" />
        <meta
          property="og:title"
          content="About Younas Munawar | Full Stack Web Developer & SEO Expert"
        />
        <meta
          property="og:description"
          content="Explore the background and journey of Younas Munawar, an expert in React, Next.js, and SEO-focused full-stack development."
        />
        <meta property="og:image" content="/og-preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://x.com/YounasMunawar12" />
        <meta
          name="twitter:title"
          content="About Younas Munawar | Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Visit the About page of Younas Munawar – passionate web developer and SEO consultant."
        />
        <meta name="twitter:image" content="/og-preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="about" className="md:px-[10%] px-[6%] pt-24 pb-10">
        <h2
          className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center md:pr-10">
            <div data-aos="fade-up" data-aos-duration="1000">
              <img
                src="/Photo.jpg"
                alt="Younas Munawar"
                className="w-[30rem] h-auto rounded-xl"
                id="ImgAbout"
              />
            </div>
          </div>

          <div className="md:w-full flex flex-col justify-between">
            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Hi, I’m Younas Munawar, a passionate and results-driven Full Stack Web Developer from Pakistan. I’m currently pursuing a Bachelor’s degree in Computer Science at the University of Haripur. With over 3 years of hands-on experience, I specialize in building fast, responsive, and SEO-optimized websites that not only look great but also perform exceptionally well.
            </p>

            <div data-aos="fade-up" data-aos-duration="800">
              <ButtonCV />
            </div>

            <div
              className="grid grid-cols-3 md:gap-4 gap-5 mt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="h-[8em] flex flex-col justify-center items-center rounded-sm" id="InfoAbout">
                <b className="text-3xl text-[#ced4d7]">3+</b>
                <p className="text-center text-[#a6adba]">Years of Experience</p>
              </div>
              <div className="h-[8em] flex flex-col justify-center items-center rounded-sm" id="InfoAbout">
                <b className="text-3xl text-[#ced4d7]">{projectCount}+</b>
                <p className="text-center text-[#a6adba]">Projects Created</p>
              </div>
              <div className="h-[8em] flex flex-col justify-center items-center rounded-sm" id="InfoAbout">
                <b className="text-3xl text-[#ced4d7]">{certificateCount}+</b>
                <p className="text-center text-[#a6adba]">Certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
