import React from "react";
import "../css/SpreadTheLoveSectionNew.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/receiver .json";
import HeroAnime2 from "../assets/animation/bike buying.json";
import HeroAnime3 from "../assets/animation/receiver to store owner.json";
import HeroAnime4 from "../assets/animation/receoved.json";

const SpreadTheLoveSectionNew = () => {
  return (
    <div className="spread-the-love-section">
      <section>
        <div className="content">
          <div className="btn">Spread the Love</div>
          <h2>
            The More People Value A Cause, The More <br /> the cost is shared By
            the community.
            <img src="/svgs/noise_2.svg" alt="" />
          </h2>
          <h2 className="mb">
            The More People Value A Cause,
            <br /> The More the cost is shared By <br /> the community.
            <img src="/svgs/noise_2.svg" alt="" />
          </h2>
        </div>

        <div className="wrapper">
          <div className="first-contain ad">
            <div className="first-vector">
              <div className="contain">
                <div className="upper">
                  <p>
                    received donation <br /> receipts
                  </p>
                  <img
                    className="first"
                    src="/svgs/first_curve_arrow.svg"
                    alt=""
                  />
                  <img src="/svgs/tree_lg.svg" alt="" className="second" />
                </div>
                <div className="lower">
                  <div className="sent">
                    <h4>$100</h4>
                    <img src="/svgs/arrow-up.svg" alt="" />
                    <p>donated</p>
                  </div>
                  <div className="clip-anime">
                    <Lottie animationData={HeroAnime4} className="hero-anime" />
                  </div>
                </div>
              </div>
              <img src="/svgs/ender.svg" alt="" className="end" />
            </div>
            <div className="second-contain">
              <div className="contain">
                <p className="top-left">
                  Bought pizzas 🍕 <br />
                  for a party
                </p>
                <img
                  src="/svgs/Frenzy payment_ Desktop_pizza.svg"
                  alt=""
                  className="stat"
                />
                <div className="top-right">
                  <img src="/svgs/circle_part.svg" alt="" />
                  <p>
                    Values
                    <br />
                    receipts
                    <br />
                    at $10
                  </p>
                </div>
                <div className="left-bottom">
                  <img src="/svgs/second_curve_arrow.svg" alt="" />
                  <p>
                    $100 support <br /> for only $90
                  </p>
                </div>
                <Lottie animationData={HeroAnime3} className="hero-anime" />
              </div>
              <img src="/svgs/ender.svg" alt="" className="end" />
            </div>
          </div>
          <div className="first-contain second-part">
            <div className="second-contain">
              <div className="contain">
                <p className="top-left">Bought a phone 📱</p>
                <img
                  src="/svgs/Frenzy payment_ Desktop_phone.svg"
                  alt=""
                  className="stat"
                />
                <div className="top-right">
                  <img src="/svgs/circle_part.svg" alt="" />
                  <p>
                    Values
                    <br />
                    receipts
                    <br />
                    at $7
                  </p>
                </div>
                <div className="left-bottom">
                  <img src="/svgs/second_curve_arrow.svg" alt="" />
                  <p>
                    $10 support <br /> for only $3
                  </p>
                </div>
                <Lottie
                  style={{
                    width: "310px",
                    height: "240.17px",
                  }}
                  animationData={HeroAnime}
                  className="hero-anime"
                />
              </div>
              <img src="/svgs/ender.svg" alt="" className="end" />
            </div>
            <div className="second-contain">
              <div className="contain">
                <p className="top-left">Bought a bike 🚲</p>
                <img
                  src="/svgs/Frenzy payment_ Desktop_bike.svg"
                  alt=""
                  className="stat"
                />
                <div className="top-right">
                  <img src="/svgs/circle_part.svg" alt="" />
                  <p>
                    Values
                    <br />
                    receipts
                    <br />
                    at $6
                  </p>
                </div>
                <div className="left-bottom">
                  <img src="/svgs/second_curve_arrow.svg" alt="" />
                  <p>
                    $7 support <br /> for only $1
                  </p>
                </div>
                <Lottie
                  style={{
                    width: "327px",
                    height: "239.71px",
                  }}
                  animationData={HeroAnime2}
                  className="hero-anime"
                />
              </div>
              <img src="/svgs/ender.svg" alt="" className="end" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpreadTheLoveSectionNew;
