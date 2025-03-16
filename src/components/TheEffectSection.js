import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../css/TheEffectSection.css";
import ThirdContainer from "./ThirdContainer";

const TheEffectSection = () => {
  const containerRef = useRef(null);
  const secondContainerRef = useRef(null);
  const thirdContainerRef = useRef(null);
  const pathRef = useRef(null);
  const path2Ref = useRef(null);
  const textRef = useRef(null);

  const isInView = useInView(containerRef, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const is2InView = useInView(secondContainerRef, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const is3InView = useInView(thirdContainerRef, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const isPathInView = useInView(pathRef, {
    triggerOnce: true,
    threshold: 0.3,
  });
  const is2PathInView = useInView(path2Ref, {
    triggerOnce: true,
    threshold: 0.3,
  });
  const textInView = useInView(textRef, { triggerOnce: true, threshold: 0.3 });

  return (
    <div className="effect-section">
      <section>
        <div className="first-container" ref={containerRef}>
          {/* Left Part Animation */}
          <motion.div
            className="left-part"
            initial={{
              scale: 0.8,
              opacity: 0,
              rotate: -10,
              filter: "blur(10px)",
            }}
            animate={
              isInView
                ? { scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <img src="/images/first_container_bg.png" alt="" />
            <motion.div
              className="btn"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
            >
              What does this do?
            </motion.div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            >
              What is the effect when <br /> a community adopts <br />
              this payment method?
            </motion.p>
          </motion.div>

          {/* Right Part Animation */}
          <motion.div
            className="right-part"
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <img
              style={{
                width: "568px",
                height: "568px",
              }}
              src="/images/people_world.png"
              alt=""
            />
          </motion.div>

          {/* Path Animation */}
          <motion.div
            className="path"
            ref={pathRef}
            initial={{ y: 80, opacity: 0, rotate: 10 }}
            animate={isPathInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <img src="/svgs/first_line.svg" alt="" />
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isPathInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
              src="/svgs/first_icon.svg"
              alt=""
            />
          </motion.div>
        </div>

        {/* Second Container */}
        <div className="second-container">
          <div className="left-part" ref={secondContainerRef}>
            <motion.p
              initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
              animate={
                is2InView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              A donor donates to a cause they care about in your
              <br /> community and they get a donation receipt in <br /> their
              index wallet.
            </motion.p>
            <div className="path" ref={path2Ref}>
              <motion.img
                className="first"
                src="/svgs/second_line.svg"
                alt=""
                initial={{ x: 100, opacity: 0 }}
                animate={is2PathInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              />
              <motion.img
                className="second"
                src="/svgs/second_icon.svg"
                alt=""
                initial={{ scale: 0.7, opacity: 0 }}
                animate={is2PathInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
              />
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={is2PathInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              >
                What are donation receipts?
                <span>
                  <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={is2PathInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
                    src="/svgs/warning.svg"
                    alt=""
                  />
                </span>
              </motion.p>
            </div>
          </div>
          <div className="right-part" ref={thirdContainerRef}>
            <motion.img
              initial={{ y: 60, opacity: 0, scale: 0.8 }}
              animate={is3InView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              src="/images/third_line.png"
              alt=""
            />
            <motion.p
              ref={textRef}
              initial={{ y: 30, opacity: 0 }}
              animate={textInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            >
              The person uses the donation receipts
              <br /> received to pay a store for a good in <br />
              the community.
            </motion.p>
          </div>
        </div>

        <ThirdContainer />
      </section>
    </div>
  );
};

export default TheEffectSection;
