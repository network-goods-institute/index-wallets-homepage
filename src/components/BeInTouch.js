import React from "react";
import { Link } from "react-router-dom";

const BeInTouch = ({ setName, setEmail }) => {
  return (
    <section className="section-mb">
      <div className="inner-wrapper">
        <p>THANK YOU!</p>
        <h2 className="h2">We'll be in touch!</h2>
      </div>

      <img src="/images/join_2.png" alt="" className="end-img located" />

      <Link
        to="/"
        onClick={() => {
          setName("");
          setEmail("");
        }}
        className="btn"
      >
        <span>Done</span>
        <span className="hover-text">Done</span>
      </Link>
    </section>
  );
};

export default BeInTouch;
