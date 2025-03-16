import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Loader from "../assets/animation/loading.json";
import { Link } from "react-router-dom";

const LocatedField = ({
  setCurrentIndex,
  setLocated,
  located,
  skipSpreadSheet,
  loadBool,
  setLoadBool,
  setDirection,
}) => {
  const controls = useAnimation();
  const [shakeCount, setShakeCount] = useState(0);
  const [locationPlaceholder, setLocationPlaceholder] = useState(
    "Larue, Kentucky, USA"
  );

  const handleSubmit = () => {
    if (located.trim()) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Trigger shake animation
      setShakeCount(5);
      controls.start({
        x: [-5, 5, -4, 4, -3, 3, -2, 2, 0], // Shake effect
        transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section>
      <Link to="/" className="back-to-home">
        <span>
          <img src="/svgs/join_arrow_left.svg" alt="" /> Back to home
        </span>
        <span className="hover-text">
          <img src="/svgs/join_arrow_left.svg" alt="" /> Back to home
        </span>
      </Link>
      <div className="inner-wrapper">
        <p>LOCATION</p>
        <h2>Where do you live?</h2>
        <div className="highlighted-text">
          Your location helps guide where we expand our community initiatives
          next
        </div>
        <motion.div
          animate={shakeCount > 0 ? controls : {}}
          onAnimationComplete={() => setShakeCount(0)}
          className="input-wrapper"
        >
          <input
            type="text"
            name="location"
            className="input-gradient"
            placeholder={locationPlaceholder}
            value={located}
            onChange={(e) => {
              setLocated(e.target.value);
              setLoadBool(false);
            }}
            onFocus={() => setLocationPlaceholder("")}
            onBlur={() => {
              if (!located) setLocationPlaceholder("Larue, Kentucky, USA");
            }}
            onKeyDown={handleKeyDown} // Listen for Enter key
          />
        </motion.div>
        <div className="btn-container">
          <div
            className="btn previous"
            onClick={() => {
              setDirection(-1);
              setCurrentIndex((prev) => prev - 1);
            }}
          >
            <span>
              <img src="/svgs/join_arrow_left.svg" alt="" /> Previous
            </span>
            <span className="hover-text">
              <img src="/svgs/join_arrow_left.svg" alt="" /> Previous
            </span>
          </div>
          <div className="btn" onClick={handleSubmit}>
            <span>
              Next <img src="/svgs/join_arrow.svg" alt="" />
            </span>
            <span className="hover-text">
              Next <img src="/svgs/join_arrow.svg" alt="" />
            </span>
          </div>
          {loadBool ? (
            <div className="loader skip">
              <Lottie animationData={Loader} className="anime" />
            </div>
          ) : (
            <div className="btn previous" onClick={skipSpreadSheet}>
              <span>Skip</span>
              <span className="hover-text">Skip</span>
            </div>
          )}
        </div>
      </div>

      <img src="/images/join_2.png" alt="" className="end-img located" />
    </section>
  );
};

export default LocatedField;
