import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/donate 2.json";
import HeroAnime2 from "../assets/animation/receiving shop 1da.json";
import HeroAnime3 from "../assets/animation/receiveing shop 2d.json";
import { motion } from "framer-motion";

const ThirdContainer = () => {
  const [trackingIndex, setTrackingIndex] = useState(1);
  const containerRef = useRef(null);

  const contentArray = [
    "The person uses the donation receipts received to pay a store for a good in the community.",
    "A customer might use their donation receipts to shop for essentials at participating stores.",
    "Customers can help strengthen community commerce with their donation receipts.",
    "This helps improve local business sustainability with every transaction.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const stickyTrigger = 100; // Start tracking when `.main` is at 100px top

      if (top <= stickyTrigger && top + height >= stickyTrigger) {
        // Normalize scroll progress over 300vh (4 steps)
        const progress = (stickyTrigger - top) / (height - windowHeight);
        const step = Math.min(Math.max(Math.ceil(progress * 4), 1), 4);
        setTrackingIndex(step);
      } else if (top > stickyTrigger) {
        setTrackingIndex(1); // Reset when above
      } else {
        setTrackingIndex(4); // Lock at 4 when fully scrolled past
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Tracking Index:", trackingIndex);
  }, [trackingIndex]);

  return (
    <div className="third-container" ref={containerRef}>
      <div
        className="container"
        style={{ height: "300vh", position: "relative" }}
      >
        <div
          className="main"
          style={{
            flex: 1,
            position: "sticky",
            top: "100px",
            height: "100vh",
            display: "flex",
          }}
        >
          <div className="left-main">
            <div className="wrap" index={1}>
              <div className="contain">
                <div className="btn">Customer</div>
                <div className="anime-container">
                  <Lottie animationData={HeroAnime} className="hero-anime" />
                </div>
              </div>
              {/* <p>Tracking Index: {trackingIndex}</p> */}
              <motion.p
                key={trackingIndex} // Trigger re-animation on tracking index change
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.8,
                  transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
                }}
                transition={{
                  delay: 0.5,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                {contentArray[trackingIndex] || contentArray[0]}
              </motion.p>
            </div>
          </div>

          <div className="middle-main">
            <div
              className={`stats ${trackingIndex < 2 && "not-active"}`}
              index={2}
            >
              <img src="/images/stats.png" alt="" />
              <img src="/images/stat_bar.png" alt="" />
            </div>
            <div
              className={`img-longest ${trackingIndex < 2 && "not-active"}`}
              index={2}
            >
              <img className="img-line" src="/svgs/longest_line.svg" alt="" />
            </div>
            <motion.img
              index={4}
              className="img-down"
              src="/svgs/long_line_down.svg"
              alt=""
              initial={{ opacity: 0, scale: 0.8, y: -30 }}
              animate={
                trackingIndex > 3
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.8, y: -30 }
              }
              transition={{
                delay: 0.3, // 👈 1s delay for cinematic timing
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1], // Premium smooth animation
                type: "spring",
                stiffness: 100,
                damping: 14,
              }}
            />

            <motion.div
              className="contain"
              index={4}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
              animate={
                trackingIndex > 3
                  ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                  : { opacity: 0, y: 50, scale: 0.8, rotate: -5 }
              }
              transition={{
                delay: 0.5, // 👈 Slight stagger after the img-down for flow
                duration: 0.9,
                ease: [0.25, 1, 0.5, 1],
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
            >
              <div className="btn">Store 2</div>
              <div className="wrap">
                <img src="/images/stat_bar.png" alt="" />
                <Lottie animationData={HeroAnime3} className="hero-anime" />
              </div>
            </motion.div>
          </div>

          <div className="right-main">
            <motion.div
              className="contain"
              index={3}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotate: -5 }}
              animate={
                trackingIndex > 2
                  ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                  : { opacity: 0, y: 80, scale: 0.8, rotate: -5 }
              }
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a premium feel
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
            >
              <div className="btn">Store 1</div>
              <div className="anime-container">
                <Lottie animationData={HeroAnime2} className="hero-anime" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
