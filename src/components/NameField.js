import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Loader from "../assets/animation/loading.json";
import { Link } from "react-router-dom";

const NameField = ({
  setName,
  name,
  email,
  setEmail,
  submitSpreadSheet,
  loadBool,
  setLoadBool,
}) => {
  const controls = useAnimation();
  const [shakeCount, setShakeCount] = useState(0);
  const [namePlaceholder, setNamePlaceholder] = useState("Abraham Lincoln");
  const [emailPlaceholder, setEmailPlaceholder] =
    useState("abe@whitehouse.gov");

  const handleClick = (e) => {
    e.preventDefault();

    if (name && /^\S+@\S+\.\S+$/.test(email)) {
      submitSpreadSheet(e);
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
      handleClick(e);
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
      <form onSubmit={handleClick} className="inner-wrapper">
        <p>TELL US ABOUT YOURSELF</p>
        <h2>Hi, how do we address you?</h2>
        <motion.div
          animate={shakeCount > 0 ? controls : {}}
          onAnimationComplete={() => setShakeCount(0)}
          className="input-wrapper"
        >
          <input
            type="text"
            className="input-gradient"
            placeholder={namePlaceholder}
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setLoadBool(false);
            }}
            onFocus={() => setNamePlaceholder("")}
            onBlur={() => {
              if (!name) setNamePlaceholder("Abraham Lincoln");
            }}
            onKeyDown={handleKeyDown}
            required
          />
        </motion.div>
        <motion.div
          animate={shakeCount > 0 ? controls : {}}
          onAnimationComplete={() => setShakeCount(0)}
          className="input-wrapper"
        >
          <input
            type="email"
            name="email"
            className="input-gradient"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoadBool(false);
            }}
            onFocus={() => setEmailPlaceholder("")}
            onBlur={() => {
              if (!email) setEmailPlaceholder("abe@whitehouse.gov");
            }}
            onKeyDown={handleKeyDown}
            required
          />
        </motion.div>
        {loadBool ? (
          <div className="loader namefield">
            <Lottie animationData={Loader} className="anime" />
          </div>
        ) : (
          <button className="btn" type="submit">
            <span>
              Save and continue <img src="/svgs/join_arrow.svg" alt="" />
            </span>
            <span className="hover-text">
              Save and continue <img src="/svgs/join_arrow.svg" alt="" />
            </span>
          </button>
        )}
      </form>
      <img src="/images/join_1.png" alt="" className="end-img name" />
    </section>
  );
};

export default NameField;
