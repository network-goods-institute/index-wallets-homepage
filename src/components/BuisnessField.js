import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Loader from "../assets/animation/loading.json";
import { Link } from "react-router-dom";

const BuisnessField = ({
  setCurrentIndex,
  setBuisness,
  buisness,
  skipSpreadSheet,
  loadBool,
  setLoadBool,
  setDirection,
}) => {
  const controls = useAnimation();
  const [shakeCount, setShakeCount] = useState(0);
  const [buisnessPlaceholder, setBuisnessPlaceholder] = useState(
    "I help the county to maintain parks in my area, I think index wallets could be used..."
  );

  const handleSubmit = () => {
    if (buisness) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShakeCount(5);
      controls.start({
        x: [-5, 5, -4, 4, -3, 3, -2, 2, 0], // Shake effect
        transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      });
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
        <p>Tell us about your world</p>
        <h2 className="h2">
          How do you imagine index wallets can be used for your community or
          business?
        </h2>
        <h2 className="mobile">
          Do you run a business or community where you'd be interested in
          exploring accepting index payments?
        </h2>
        <motion.div
          animate={shakeCount > 0 ? controls : {}}
          onAnimationComplete={() => setShakeCount(0)}
          className="input-wrapper business-input"
        >
          <input
            type="text"
            className="input-gradient"
            placeholder={buisnessPlaceholder}
            value={buisness}
            onChange={(e) => {
              setBuisness(e.target.value);
              setLoadBool(false);
            }}
            onFocus={() => setBuisnessPlaceholder("")}
            onBlur={() => {
              if (!buisness)
                setBuisnessPlaceholder(
                  "I help the county to maintain parks in my area, I think index wallets could be used..."
                );
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()} // Enter key support
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

      <img src="/images/join_1.png" alt="" className="end-img buisness" />
    </section>
  );
};

export default BuisnessField;
