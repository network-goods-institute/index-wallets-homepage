import React from "react";
import "../css/Faq.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/final bar.json";

const Faq = () => {
  return (
    <div className="faq-section">
      <section>
        <h1>
          The more customers donate to a <br /> cause, the more the cost is
          <br />
          shared in the community.
        </h1>
        <p>
          The person uses the donation receipts received to <br /> pay a store
          for a good in the community.
        </p>
        <Lottie animationData={HeroAnime} className="hero-anime" />
      </section>
    </div>
  );
};

export default Faq;
