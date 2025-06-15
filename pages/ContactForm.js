"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialMedia from "../Components/SocialMedia";

const ContactForm = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<Head>
				<title>Contact Younas Munawar | Full Stack Web Developer</title>
				<meta
					name="description"
					content="Reach out to Younas Munawar — Full Stack Developer & SEO Expert. Have a project or collaboration in mind? Send a message and let's talk."
				/>
				<meta
					name="keywords"
					content="Contact Younas Munawar, Web Developer Contact Form, Hire Developer Pakistan, Freelance Full Stack Developer"
				/>
				<meta name="author" content="Younas Munawar" />
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* Open Graph Meta Tags */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ymcoding.com/contact" />
				<meta property="og:title" content="Contact Younas Munawar | Full Stack Developer" />
				<meta
					property="og:description"
					content="Send a message to Younas Munawar — passionate developer and SEO specialist ready to work with you."
				/>
				<meta property="og:image" content="/og-preview.jpg" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://x.com/YounasMunawar12" />
				<meta name="twitter:title" content="Contact Younas Munawar | Web Developer & SEO Expert" />
				<meta
					name="twitter:description"
					content="Contact Full Stack Developer Younas Munawar for freelance projects, collaborations, or job offers."
				/>
				<meta name="twitter:image" content="/og-preview.jpg" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section id="contact" className="relative min-h-screen md:mt-20 mt-10 md:px-[10%] px-[6%] pb-20">
				<h2
					className="text-4xl font-bold mb-4 text-[#ced4d7]"
					data-aos="fade-up"
					data-aos-duration="600"
				>
					Contact Me
				</h2>

				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col md:flex-row">
						{/* Social Media Column */}
						<div className="md:w-1/2 w-full" data-aos="fade-up" data-aos-duration="1000">
							<SocialMedia />
						</div>

						{/* Contact Form Column */}
						<div className="md:w-1/2 w-full md:pl-4 mt-10 md:mt-0">
							<p
								className="text-[#ced4d7] font-semibold text-base mb-3 opacity-60"
								data-aos="fade-up"
								data-aos-duration="600"
							>
								Have something to discuss? Send me a message and let's talk.
							</p>

							<form
								action="https://formsubmit.co/younasmunawar11@gmail.com"
								method="POST"
								className="space-y-6"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								{/* Name */}
								<div>
									<label htmlFor="name" className="block text-[#ced4d7] font-semibold mb-2">
										Name
									</label>
									<input
										required
										type="text"
										name="name"
										id="name"
										placeholder="Your Name"
										autoComplete="off"
										className="w-full px-3 py-2 border h-14 rounded-lg focus:outline-none focus:border-[#ced4d7] bg-transparent text-[#a6adba]"
									/>
								</div>

								{/* From */}
								<div>
									<label htmlFor="from" className="block text-[#ced4d7] font-semibold mb-2">
										From
									</label>
									<input
										required
										type="text"
										name="from"
										id="from"
										placeholder="From"
										autoComplete="off"
										className="w-full px-3 py-2 border h-14 rounded-lg focus:outline-none focus:border-[#ced4d7] bg-transparent text-[#a6adba]"
									/>
								</div>

								{/* Message */}
								<div>
									<label htmlFor="message" className="block text-[#ced4d7] font-semibold mb-2">
										Message
									</label>
									<textarea
										required
										name="message"
										id="message"
										placeholder="Your message..."
										className="w-full px-3 py-2 md:h-48 h-40 border rounded-lg focus:outline-none focus:border-[#ced4d7] bg-transparent text-[#a6adba]"
									></textarea>
								</div>

								{/* Hidden Inputs for FormSubmit */}
								<input type="hidden" name="_captcha" value="false" />
								<input type="hidden" name="_template" value="table" />

								{/* Submit Button */}
								<button
									type="submit"
									className="text-center bg-[#ced4d7] text-[#212121] font-semibold py-2 px-4 rounded-lg hover:bg-[#1f2937] hover:text-[#ced4d7] transition-all duration-200 ease-out"
								>
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
