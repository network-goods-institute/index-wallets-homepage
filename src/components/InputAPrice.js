import React, { useEffect, useState } from "react";
import "../css/InputAPrice.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/receiving ani.json";
import Stats from "./Stats";

const InputAPrice = ({ sectionRef, value, setValue }) => {
  const formatToTwoDecimals = (value) => {
    if (value === "" || isNaN(value)) return "0.00";
    return parseFloat(value).toFixed(2);
  };

  return (
    <div ref={sectionRef} className="input-price">
      <div className="contain">
        <p>
          And they’re trying to pay you (adjust the slider to set the amount)
        </p>
        <div className="custom-slider">
          <input
            type="range"
            min="0"
            max="200"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="slider"
            style={{ "--progress": `${value / 2}%` }}
          />
          <div className="sign">
            <img src="/svgs/tree_currency.svg" alt="" />
          </div>
          <div className="slide-input">{formatToTwoDecimals(value)}</div>
        </div>
        <p className="p">
          You’ll receive this as the composition of your payment:
        </p>
        <span className="txt">
          <span>
            Tree: 18.00% <img src="/svgs/tree.svg" alt="" />
          </span>{" "}
          <span>
            ETH: 50.00% <img src="/svgs/eth.svg" alt="" />
          </span>{" "}
          <span>
            USD: 32.00% <img src="/svgs/usd.svg" alt="" />
          </span>
        </span>
        <div className="receive-stats">
          <Stats value={value} inputStat={true} />
          <Lottie
            animationData={HeroAnime}
            className="hero-anime input-anime"
          />
          <span className="txt-row">
            <div className="rw-1">
              <span>
                Tree: 18.00% <img src="/svgs/tree.svg" alt="" />
              </span>{" "}
              <span>
                ETH: 50.00% <img src="/svgs/eth.svg" alt="" />
              </span>
            </div>
            <span>
              USD: 32.00% <img src="/svgs/usd.svg" alt="" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputAPrice;
