"use client";

import { useState } from "react";
import Head from "next/head";
import Home from "./Home";
import Navbar from "../components/Navbar";
import FullWidthTabs from "./Tabs";
import ContactForm from "./ContactForm";
import Blob from "../components/Blob";
import AboutMe from "./AboutMe";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import Work from "../components/Work";
import Services from "./Services";

export default function Index() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
     <Head>
  {/* Basic Meta Tags */}
  <title>Younas Munawar | Full Stack Web Developer & SEO Expert</title>
  <meta
    name="description"
    content="Explore the portfolio of Younas Munawar – a Full Stack Web Developer, SEO Expert, and Web Consultant specializing in building modern, high-performance websites and applications."
  />
  <meta
    name="keywords"
    content="Younas Munawar, Full Stack Developer, SEO Expert, Web Consultant, React Developer, Next.js Developer, Web Design Pakistan"
  />
  <meta name="author" content="Younas Munawar" />
  <meta name="robots" content="index, follow" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="google-site-verification" content="o9o3e4iGax5noeCj6bJjFH3Ky8yNjbVM0ZfPOkLkVJU" />
  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ymcoding.bio/" /> {/* Replace with actual domain */}
  <meta
    property="og:title"
    content="Younas Munawar | Full Stack Web Developer & SEO Expert"
  />
  <meta
    property="og:description"
    content="Welcome to the portfolio of Younas Munawar – React, Next.js, and SEO specialist delivering high-impact digital solutions."
  />
  <meta property="og:image" content="/og-preview.jpg" /> {/* Place this image in /public/ */}

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://x.com/YounasMunawar12" />
  <meta
    name="twitter:title"
    content="Younas Munawar | Full Stack Web Developer & SEO Expert"
  />
  <meta
    name="twitter:description"
    content="Discover the web development work of Younas Munawar – expert in building fast, SEO-optimized websites."
  />
  <meta name="twitter:image" content="/og-preview.jpg" />

  {/* Favicon (optional) */}
  <link rel="icon" href="/favicon.ico" />
</Head>


      {/* Show greeting screen first */}
      {!showPortfolio ? (
        <Greeting onFinish={() => setShowPortfolio(true)} />
      ) : (
        <>
          <Navbar />
          <Blob />
          <Home />
          <AboutMe />
          <Education />
          <Work />
          <Services />
          <FullWidthTabs />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}
