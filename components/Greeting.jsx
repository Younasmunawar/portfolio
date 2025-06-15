"use client";

import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Fireworks } from "fireworks-js";

const Greeting = ({ onFinish }) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const router = useRouter();
  const fireworksRef = useRef(null);
  const fireworksInstance = useRef(null);

  const handleNameSubmit = () => {
    if (name.trim()) setSubmitted(true);
  };

  const skipGreeting = () => {
    if (onFinish) onFinish();
  };

  const navigateToHome = () => {
    if (onFinish) onFinish();
    router.push("/#home");
  };

  useEffect(() => {
    if (submitted && fireworksRef.current && !fireworksInstance.current) {
      const options = {
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        rocketsPoint: { min: 50, max: 50 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        boundaries: {
          top: 0,
          bottom: fireworksRef.current.clientHeight,
          left: 0,
          right: fireworksRef.current.clientWidth,
        },
        sound: {
          enabled: false,
        },
      };
      fireworksInstance.current = new Fireworks(fireworksRef.current, options);
      fireworksInstance.current.start();
    }
  }, [submitted]);

  return (
    <div className="greeting relative h-screen w-full overflow-hidden flex justify-center items-center bg-black text-white p-4">
      <div ref={fireworksRef} className="absolute inset-0 z-0" />

      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={skipGreeting}
          className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-600 transition"
        >
          Skip
        </button>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {!submitted ? (
          <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
              Welcome! What’s your name?
            </h2>
            <input
              type="text"
              className="w-2/3 px-4 py-2 text-black rounded-md text-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <button
              onClick={handleNameSubmit}
              className="block mx-auto mt-4 px-6 py-2 bg-custom-red rounded-md hover:bg-red-700 transition-all"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-light sm:text-5xl xl:text-7xl mb-8">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Hi ${name}!`)
                    .pauseFor(2500)
                    .callFunction(() => setShowText(true))
                    .start();
                }}
              />
            </h2>

            {showText && (
              <div className="text-md md:text-lg font-extralight text-opacity-90 leading-5 md:leading-8 h-auto">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" Aren't these fireworks annoying?! ")
                      .pauseFor(2000)
                      .typeString(" Move your mouse to move them out the way!")
                      .pauseFor(1500)
                      .typeString(" Or tap anywhere on mobile...")
                      .pauseFor(7000)
                      .typeString(" Great! Now that that's done...")
                      .pauseFor(1500)
                      .typeString(
                        " How are you? My name is Younas (known online as @younas.18.2)."
                      )
                      .pauseFor(1500)
                      .typeString(
                        " I just wanted to say welcome and thank you for taking a moment to view my portfolio!"
                      )
                      .pauseFor(1000)
                      .callFunction(() => setShowButton(true))
                      .start();
                  }}
                  options={{ delay: 20 }}
                />
              </div>
            )}

            {showButton && (
              <button
                type="button"
                onClick={navigateToHome}
                className="red-btn text-sm cursor-pointer inline-flex items-center justify-center px-10 py-3 mt-8 font-light leading-5 text-white transition-all duration-200 bg-custom-red border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white text-md"
              >
                View Portfolio
                <svg
                  className="w-6 h-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Greeting;
