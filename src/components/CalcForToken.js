import React, { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import "../css/CalcForToken.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/receiveing shop 2d.json";
import CalcStats from "./CalcStats";

const CalcForToken = () => {
  const refContent = useRef(null);
  const isInView = useInView(refContent, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  const barHeight = 214.4; // Total height of .bar
  const barPadding = 4.24 * 2; // Top + Bottom padding
  const usableHeight = barHeight - barPadding; // Space inside bar

  const minValue = 1;
  const maxValue = 11;
  const minHeight = 10; // Growth at 1
  const maxHeight = usableHeight; // Growth at 11

  const [growthValue, setGrowthValue] = useState(5);
  const sliderRef = useRef(null);

  // Convert growthValue (1-11) to height
  const getHeightFromValue = (value) => {
    return (
      ((value - minValue) / (maxValue - minValue)) * (maxHeight - minHeight) +
      minHeight
    );
  };

  const handleStart = (e) => {
    if (e.type === "touchstart") {
      e.preventDefault(); // Prevents scrolling only for touch interactions
    }

    const startY = e.touches ? e.touches[0].clientY : e.clientY;
    const initialValue = growthValue;

    const handleMove = (event) => {
      const currentY = event.touches ? event.touches[0].clientY : event.clientY;
      const deltaY = startY - currentY;

      let newValue = Math.min(
        maxValue,
        Math.max(minValue, initialValue + deltaY / 20)
      );

      setGrowthValue(Math.round(newValue));
    };

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);
  };

  return (
    <motion.div
      ref={refContent}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{
        delay: 0.6,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      }}
      className="calc-for-token"
    >
      <div className="change-prices">
        <h2>Your values change prices</h2>
      </div>

      <CalcStats value={growthValue} inputStat={true} />

      <div className="right-container">
        <div className="slider-container">
          <div className="contain">
            <div className="info first">
              <motion.p
                className="animated-text"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1], // Slight pulse effect
                  rotate: [0, -1, 1, 0], // Gentle tilt for a dynamic look
                  opacity: [1, 0.9, 1], // Adds subtle breathing effect
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: 0,
                  scale: 1.02, // Slight grow on hover
                  rotate: 0, // Removes rotation
                  opacity: 1, // Keeps full visibility
                }}
              >
                Adjust
                <br /> this <br /> slider
              </motion.p>

              <motion.img
                src="/svgs/curved_arrow.svg"
                alt=""
                className="arrow"
                animate={{ y: [0, 15, 0] }} // Moves down and back up
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="info second">
              <img src="/svgs/curved_arrow_2.svg" alt="" />
              <p>Store owner valuations</p>
            </div>
            <div className="bar">
              <div
                className="growth"
                style={{ height: `${getHeightFromValue(growthValue)}px` }}
              ></div>
              <div
                className="slider"
                ref={sliderRef}
                onMouseDown={handleStart}
                onTouchStart={handleStart} // Touch support
                style={{
                  top: `${
                    barHeight - (getHeightFromValue(growthValue) + 24)
                  }px`,
                }} // Move with growth
              >
                <img src="/svgs/Vector 43.svg" alt="" className="line" />
                <motion.div
                  className="ball"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1 }}
                >
                  {/* First wave */}
                  <motion.div
                    className="wave"
                    animate={{
                      opacity: [0.5, 0],
                      scale: [1, 2.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    whileHover={{ opacity: 0 }}
                  />

                  {/* Second wave (delayed for better fluidity) */}
                  <motion.div
                    className="wave wave-2"
                    animate={{
                      opacity: [0.4, 0],
                      scale: [1, 3.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.4,
                    }}
                    whileHover={{ opacity: 0 }}
                  />
                </motion.div>
              </div>
              <div className="token-value">
                {growthValue} <img src="/svgs/tree_token.svg" alt="" />
              </div>
            </div>
            <div className="bar inactive">
              <div className="growth"></div>
              <div className="slider">
                <img src="/svgs/Vector 43.svg" alt="" className="line" />
                <div className="ball"></div>
              </div>
              <div className="token-value">
                <img src="/svgs/eth_token.svg" alt="" />
              </div>
            </div>
            <div className="bar inactive usdt">
              <div className="growth"></div>
              <div className="slider">
                <img src="/svgs/Vector 43.svg" alt="" className="line" />
                <div className="ball"></div>
              </div>
              <div className="token-value">
                <img src="/svgs/usd_token.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Lottie animationData={HeroAnime} className="hero-anime" />
      </div>
    </motion.div>
  );
};

export default CalcForToken;
