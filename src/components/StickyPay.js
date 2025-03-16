import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../css/StickyPay.css";

const StickyPay = ({ isCase, background, color = "black", setActiveIndex }) => {
  const mouse = {
    x: useMotionValue(1200), // Start with mouse position at 0
    y: useMotionValue(300), // Start with mouse position at 0
  };

  const cursorSize = 110;

  const smoothOptions = { damping: 10, stiffness: 200, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    if (isCase) {
      window.addEventListener("mousemove", manageMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isCase]);

  const scrollBy100vh = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by 100vh
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Calculate the initial position using percentages or vw/vh
  const initialLeft = window.innerWidth * 0.02; // 2% of the viewport width
  const initialTop = window.innerHeight * 0.03; // 3% of the viewport height

  return (
    <motion.div
      className={`link-cursor ${isCase ? "visible" : ""}`}
      onClick={() => {
        setActiveIndex(2);
        scrollBy100vh();
      }}
      style={{
        left: isCase ? smoothMouse.x : initialLeft, // Use smoothMouse when moving, else use initial value
        top: isCase ? smoothMouse.y : initialTop, // Use smoothMouse when moving, else use initial value
        background,
        color,
        position: "absolute", // Absolute position relative to the viewport
        visibility: isCase ? "visible" : "hidden", // Ensure it's hidden when isCase is false
      }}
    >
      Click to
      <br /> pay
    </motion.div>
  );
};

export default StickyPay;
