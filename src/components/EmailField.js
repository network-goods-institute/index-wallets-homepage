import React from "react";
import { motion, useAnimation } from "framer-motion";

const EmailField = ({ email, setEmail }) => {
  const controls = useAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(email)) {
      // setCurrentIndex((prev) => prev + 1);
    } else {
      controls.start({
        x: [-5, 5, -4, 4, -3, 3, -2, 2, 0], // Shake effect
        transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="inner-wrapper">
        <p>WE’D LIKE TO REACH OUT</p>
        <h2>What’s your email</h2>
        <motion.div animate={controls} className="input-wrapper">
          <input
            type="email"
            className="input-gradient"
            placeholder="Enter your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <button type="submit" className="btn btn-email">
          <span>Submit</span>
          <span className="hover-text">Submit</span>
        </button>
      </form>
      <img src="/images/join_2.png" alt="" className="end-img email" />
    </section>
  );
};

export default EmailField;
