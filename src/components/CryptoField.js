import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Loader from "../assets/animation/loading.json";
import { Link } from "react-router-dom";

const CryptoField = ({
  setCurrentIndex,
  cryptoStance,
  setCryptoStance,
  skipSpreadSheet,
  loadBool,
  setLoadBool,
  setDirection,
}) => {
  const controls = useAnimation();
  const [shakeCount, setShakeCount] = useState(0);

  const handleSelection = (stance) => {
    if (cryptoStance === stance) {
      setCryptoStance(""); // Deselect if clicked again
    } else {
      setCryptoStance(stance);
    }
  };

  const handleSubmit = () => {
    if (cryptoStance) {
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
        <p>YOUR TAKE ON CRYPTO?</p>
        <h2>What's your sense on crypto?</h2>
        <motion.div
          animate={shakeCount > 0 ? controls : {}}
          onAnimationComplete={() => setShakeCount(0)}
          className="input-wrapper input-crypto"
        >
          <div className="wrapper">
            <div
              onClick={() => {
                handleSelection("Hate Crypto 😡");
                setLoadBool(false);
              }}
              className={`btn-stance ${
                cryptoStance === "Hate Crypto 😡" ? "active" : ""
              }`}
            >
              Hate it 😡
            </div>
            <div
              onClick={() => {
                handleSelection("Neutral 🦄");
                setLoadBool(false);
              }}
              className={`btn-stance ${
                cryptoStance === "Neutral 🦄" ? "active" : ""
              }`}
            >
              Neutral 🦄
            </div>
            <div
              onClick={() => {
                handleSelection("Love Crypto 🤓");
                setLoadBool(false);
              }}
              className={`btn-stance ${
                cryptoStance === "Love Crypto 🤓" ? "active" : ""
              }`}
            >
              Love it 🤓
            </div>
          </div>
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

      <img
        src="/images/excited_character.png"
        alt="Excited Character"
        className="end-img crypto"
      />
    </section>
  );
};

export default CryptoField;
