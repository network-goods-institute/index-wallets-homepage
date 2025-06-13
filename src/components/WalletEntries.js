import React, { useState, useEffect } from "react";
import "../css/WalletEntries.css";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/sending g.json";

const WalletEntries = ({ setActiveIndex }) => {
  const [, setIsLive] = useState(true); // Start as true to show initially

  useEffect(() => {
    // Optionally, you can set isLive back to false after some time, if needed
    // setTimeout(() => setIsLive(false), 5000); // Example: stop after 5 seconds
  }, []);

  return (
    <div className="wallet-entries">
      <div
        className="contain"
        onMouseEnter={() => setIsLive(true)}
        onMouseMove={() => setIsLive(true)}
        onMouseLeave={() => setIsLive(false)}
      >
        <p>If a customer has a wallet with these entries</p>
        <span className="txt">
          <span>
            Tree: 36 <img src="/svgs/tree.svg" alt="" />
          </span>{" "}
          <span>
            ETH: 100 <img src="/svgs/eth.svg" alt="" />
          </span>{" "}
          <span>
            USD: 64 <img src="/svgs/usd.svg" alt="" />
          </span>
        </span>
        <div className="wrapper">
          <Lottie animationData={HeroAnime} className="hero-anime" />
          <div className="statitics">
            <div className="stat">
              <img className="img-1" src="/svgs/entry_green.svg" alt="" />
              <span>
                36 <img src="/svgs/tree.svg" alt="" />
              </span>
            </div>
            <div className="stat">
              <img className="img-2" src="/svgs/entry_purple.svg" alt="" />
              <span>
                100 <img src="/svgs/eth.svg" alt="" />
              </span>
            </div>
            <div className="stat">
              <img className="img-3" src="/svgs/export_blue.svg" alt="" />
              <span>
                64 <img src="/svgs/usd.svg" alt="" />
              </span>
            </div>
          </div>
        </div>

        {/* <StickyPay setActiveIndex={setActiveIndex} isCase={isLive} /> */}
      </div>
    </div>
  );
};

export default WalletEntries;
