import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Loader from "../assets/animation/loading.json";
import { Link } from "react-router-dom";

const IndexWalletField = ({
  setIndexWallet,
  indexWallet,
  submitSpreadSheet,
  loadBool,
  setLoadBool,
}) => {
  const controls = useAnimation();
  const [placeholder, setPlaceholder] = useState(
    "I'm excited that there are new ways to fund public goods and I want to help"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (indexWallet) {
      submitSpreadSheet(e);
    } else {
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
      <form onSubmit={handleSubmit} className="inner-wrapper">
        <p>WHY INDEX WALLET?</p>
        <h2 className="h2">
          Why are you excited about being an early <br /> user of index wallets?
        </h2>
        <h2 className="mobile">
          I'm excited that there are new ways to fund public goods and I want to
          help
        </h2>
        <motion.div animate={controls} className="input-wrapper index-input">
          <input
            type="text"
            className="input-gradient"
            name="indexWallet"
            placeholder={placeholder}
            value={indexWallet}
            onFocus={() => setPlaceholder("")}
            onBlur={() => {
              if (!indexWallet)
                setPlaceholder(
                  "I'm excited that there are new ways to fund public goods and I want to help"
                );
            }}
            onChange={(e) => {
              setIndexWallet(e.target.value);
              setLoadBool(false);
            }}
          />
        </motion.div>
        {loadBool ? (
          <div className="loader submit">
            <Lottie animationData={Loader} className="anime" />
          </div>
        ) : (
          <button type="submit" className="btn">
            <span>Submit</span>
            <span className="hover-text">Submit</span>
          </button>
        )}
      </form>

      <img
        src="/images/excited_character.png"
        alt=""
        className="end-img index-wallet"
      />
    </section>
  );
};

export default IndexWalletField;
