import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import "../css/SpreadTheLoveSection.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/receiver to emmma.json";
import HeroAnime2 from "../assets/animation/dataemployeebuysbike.json";
import HeroAnime3 from "../assets/animation/receiver to store owner.json";

const SpreadTheLoveSection = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Define content
  const leftContent = [
    {
      title: "A customer Donates",
      description:
        "The person uses the donation receipts received to pay a store for a good in the community.",
    },
    {
      title: "An Employee Buys",
      description:
        "An employee uses their earnings to buy essential goods from the store.",
    },
    {
      title: "A Store Owner Gains",
      description:
        "The store owner benefits from increased sales and community support.",
    },
  ];

  const rightContent = [HeroAnime, HeroAnime2, HeroAnime3];

  // State to track current animation index
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    // Calculate the number of items and their respective scroll position ranges
    const itemCount = leftContent.length;
    const range = 1 / itemCount; // Divide scroll into equal parts for each item

    // Watch scroll progress to update the animation index
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const index = Math.min(
        Math.floor(progress / range),
        leftContent.length - 1
      );
      setAnimationIndex(index);
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, [scrollYProgress, leftContent.length]);

  return (
    <div className="spread-the-love-section">
      <section
        ref={sectionRef}
        style={{
          height: `${100 * leftContent.length}vh`, // Ensure section grows with content
          position: "relative",
        }}
      >
        <motion.div
          className="spread-section"
          style={{
            flex: 1,
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="container">
            <div className="content">
              <div className="btn">Spread the Love</div>
              <h2>
                <img src="/svgs/noise.svg" alt="" />
                With index wallets, stores get more of your
                <br /> business when they value what you value!
                <img src="/svgs/noise_2.svg" alt="" />
              </h2>
            </div>

            <div className="wrapper" ref={wrapperRef}>
              {/* Left Content Scrolls */}
              <div className="left-content">
                <AnimatePresence mode="wait">
                  {leftContent.map((item, i) =>
                    animationIndex === i ? (
                      <motion.div
                        key={i}
                        className="details"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          y: 50,
                          rotateX: 20,
                          rotateY: 10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          rotateX: 0,
                          rotateY: 0,
                          transition: {
                            duration: 0.6, // Smooth duration for slower transitions
                            ease: [0.6, 0.05, 0.01, 0.9], // Correct cubic-bezier syntax
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.8,
                          y: -50,
                          rotateX: -10,
                          rotateY: -10,
                          transition: {
                            duration: 0.4, // Slightly shorter duration for exit
                            ease: "backInOut",
                          },
                        }}
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100vh", // Ensure each content section takes up full height for smooth scrolling
                          zIndex: 10, // Keep the exiting element behind for smooth transitions
                        }}
                      >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
              </div>

              {/* Right Content Stays Fixed */}
              {/* Right Content with Enhanced Animation */}
              <div className="right-content">
                <motion.div
                  className="anime-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.8, 0.25, 1], // Smooth cubic bezier easing
                    },
                  }}
                  key={animationIndex}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.4 },
                  }}
                >
                  <Lottie
                    animationData={rightContent[animationIndex]}
                    className="hero-anime"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SpreadTheLoveSection;
