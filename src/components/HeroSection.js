import React, { useEffect, useState, useMemo } from "react";
import "../css/HeroSection.css";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/index wallet header female.json";
import HeroAnime2 from "../assets/animation/index header wallet phone female.json";

const HeroSection = () => {
  const products = useMemo(() => [
    {
      product: "your grocery store",
      location: "ukraine",
      product_color: "#049952",
      location_border_color: "#0046BE",
      location_background: "#E7F0FF",
    },
    {
      product: "Amazon",
      location: "reforestation",
      product_color: "#EDA058",
      location_border_color: "#A856F7",
      location_background: "#F0E4FC",
    },
    {
      product: "Walmart",
      location: "animal welfare",
      product_color: "#0046BE",
      location_border_color: "#049952",
      location_background: "#D5FFEB",
    },
    {
      product: "Apple",
      location: "your church",
      product_color: "#A856F7",
      location_border_color: "#EDA058",
      location_background: "#FFF2E6",
    },
  ], []);

  const [index, setIndex] = useState(0);
  const [delayedIndex, setDelayedIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 578);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [deletingSpeed, setDeletingSpeed] = useState(80);
  const [delayBetweenWords,] = useState(1500);
  const [, setAnimateWidth] = useState(false);

  useEffect(() => {
    if (products[index].product === "your grocery store") {
      setTypingSpeed(50);
      setDeletingSpeed(20);
    } else {
      setTypingSpeed(100);
      setDeletingSpeed(80);
    }
  }, [products, index]);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 578;
      setIsMobile(newIsMobile);
      // Recalculate width when screen size changes
      setWidth(calculateWidth(products[delayedIndex].location, newIsMobile));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products, delayedIndex]);

  useEffect(() => {
    setAnimateWidth(false);
  }, [index]);

  useEffect(() => {
    let typingTimeout;
    let deleteTimeout;

    const currentText = products[index].product;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        deleteTimeout = setTimeout(
          () => setIsDeleting(true),
          delayBetweenWords
        );
      }
    } else {
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % products.length);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deleteTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, isDeleting, index, products]);
  
  // Function to calculate dynamic width based on text content
  const calculateWidth = (text, isMobile) => {
    const baseWidth = isMobile ? 9 : 11; // Increased base character width for better spacing
    const padding = isMobile ? 24 : 32; // Increased padding for better visual appearance
    const minWidth = isMobile ? 100 : 120; // Slightly larger minimum width
    const calculatedWidth = (text.length * baseWidth) + padding;
    return Math.max(calculatedWidth, minWidth) + "px";
  };
  
  const [width, setWidth] = useState(
    calculateWidth(products[0].location, isMobile)
  );

  useEffect(() => {
    if (displayedText === products[index].product) {
      const delay = 300; // Reduce delay to make the location update quicker

      const timeout = setTimeout(() => {
        setDelayedIndex(index);
      }, delay);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, index, products]);

  useEffect(() => {
    const widthDelays = {
      "your grocery store": 200,
      Amazon: 150,
      Walmart: 120,
      Apple: 100,
    };

    const widthDelay = widthDelays[products[delayedIndex].product] || 100;

    const widthTimeout = setTimeout(() => {
      const newWidth = calculateWidth(products[delayedIndex].location, isMobile);
      setWidth(newWidth);
    }, widthDelay);

    return () => clearTimeout(widthTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayedIndex, isMobile, products]);

  return (
    <div className="hero-section">
      <motion.section
        initial={{ y: "30%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "30%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "circInOut", delay: 0 }}
      >
        <Lottie animationData={HeroAnime2} className="hero-anime-mb" />

        <span className="title-index">
          <h1>Index Wallets</h1>
          <img className="first" src="/svgs/wave.svg" alt="Decorative wave" />
          <img src="/svgs/wave_curve_mb.svg" alt="Decorative wave" className="first-mb" />
          <img className="second" src="/svgs/shock.svg" alt="Decorative lightning" />
          <img src="/svgs/wave_mb.svg" alt="Decorative wave" className="second-mb" />
        </span>
        <h2 style={{ 
          whiteSpace: isMobile ? "normal" : "nowrap", 
          position: "relative",
          lineHeight: isMobile ? "1.4" : "1.2"
        }}>
          Get{" "}
          <span
            style={{
              position: "relative",
              display: "inline-block",
              // height: "1.2em",
            }}
          >
            <AnimatePresence mode="sync" exitBeforeEnter>
              <motion.span
                key={products[index].product} // Ensure a new key triggers re-animation
                layoutId="productText" // Add a shared layout animation ID
                style={{
                  color: products[index].product_color,
                  borderBottom: `3px solid ${products[index].product_color}`,
                  // position: "absolute",
                  whiteSpace: "nowrap",
                  left: 0,
                }}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {displayedText}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          to fund{" "}
          <span
            className="location"
            style={{
              color: products[delayedIndex].location_border_color,
              background: products[delayedIndex].location_background,
              border: `1.2px solid ${products[delayedIndex].location_border_color}`,
              display: "inline-block",
              padding: isMobile ? "4px 8px" : "4px 12px",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
              minHeight: "1.4em",
              verticalAlign: "middle",
              transition: "width 0.4s ease-in-out, background-color 0.3s ease, border-color 0.3s ease",
              width,
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={products[delayedIndex].location}
                style={{
                  display: "block",
                  whiteSpace: "nowrap",
                }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {products[delayedIndex].location}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <Lottie animationData={HeroAnime} className="hero-anime" />
      </motion.section>
    </div>
  );
};

export default HeroSection;
