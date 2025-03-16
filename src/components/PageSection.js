import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import HowDoesItWork from "./HowDoesItWork";
import WalletEntries from "./WalletEntries";
import InputAPrice from "./InputAPrice";
import ReceivedPrice from "./RecievedPrice";

const PageSection = ({ pageSectionRef }) => {
  // const pageSectionRef = useRef(null);
  const [value, setValue] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);

  // Components to switch through
  const components = [
    <HowDoesItWork />,
    <WalletEntries
      setActiveIndex={setActiveIndex}
      sectionRef={pageSectionRef}
    />,
    <InputAPrice
      sectionRef={pageSectionRef}
      value={value}
      setValue={setValue}
    />,
    <ReceivedPrice value={value} />,
  ];

  const { scrollYProgress } = useScroll({
    target: pageSectionRef,
    offset: ["start end", "end start"],
  });

  const sectionHeight = 1 / components.length;

  // Update index based on scroll progress
  scrollYProgress.onChange((progress) => {
    const newIndex = Math.min(
      components.length - 1,
      Math.floor(progress / sectionHeight)
    );
    setActiveIndex(newIndex);
  });

  useEffect(() => {
    // Update the scroll position when the activeIndex changes
    if (pageSectionRef.current) {
      pageSectionRef.current.scrollTo({
        top: activeIndex * window.innerHeight, // Scroll to the correct section
        behavior: "smooth", // Smooth scroll
      });
    }
  }, [activeIndex]);

  return (
    <section
      ref={pageSectionRef}
      style={{
        height: `${100 * components.length}vh`,
        display: "flex",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          flex: 1,
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="page-container"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.6, // Faster transition
                ease: "easeInOut", // Standard ease for fluidity
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -50,
              transition: {
                duration: 0.4, // Faster exit
                ease: "easeOut",
              },
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {components[activeIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PageSection;
