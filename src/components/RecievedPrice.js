import React, { useState } from "react";
import "../css/InputAPrice.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/receiving ani.json";
import HeroAnime2 from "../assets/animation/sending g.json";

import Stats from "./Stats";

const ReceivedPrice = ({ sectionRef, value }) => {
  const treeValue = () => {
    return (value * 36) / 200;
  };

  const ethValue = () => {
    return (value * 100) / 200;
  };

  const usdValue = () => {
    return (value * 64) / 200;
  };

  const rightBarLengthTree = () => {
    const fig = (treeValue() / 36) * 100;
    return fig;
  };

  const formatToTwoDecimals = (value) => {
    if (value === "" || isNaN(value)) return "0.00"; // Default to "0.00" if empty or NaN
    return parseFloat(value).toFixed(2); // Ensure two decimal places
  };

  return (
    <div ref={sectionRef} className="input-price">
      <div className="contain">
        <div className="receive-stats received-price">
          <Lottie animationData={HeroAnime2} className="hero-anime first" />
          <Stats value={value} received={true} />
          <Lottie animationData={HeroAnime} className="hero-anime" />
        </div>

        <div className="contents">
          <h2>
            In total, you receive{" "}
            <span>
              <img src="/svgs/symbol.svg" style={{ marginRight: 2 }} alt="" />
            </span>
            {formatToTwoDecimals(value)}, just like you expect.
          </h2>
          <div className="text">
            The key idea of an index payment is that the amount of each entry
            you receive is <br /> always proportional to the percent that entry
            makes up of the value of their <br /> wallet.
            <br />
            <br />
            You can test this by noticing that no matter how you change the
            amount they <br /> pay you, the percent of Tree, Ethereum, and US
            Dollars in the payment stays the <br />
            same.
          </div>
          <div className="text-mb">
            The key idea of an index payment is that the amount of each entry
            you receive is always proportional to the percent that entry makes
            up of the value of their wallet.
            <br /> <br />
            You can test this by noticing that no matter how you change the
            amount they pay you, the percent of Tree, Ethereum, and US Dollars
            in the payment stays the same.
          </div>
          <img className="finisher" src="/svgs/quote_finisher.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReceivedPrice;
