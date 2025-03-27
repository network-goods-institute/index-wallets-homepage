import React, { useEffect, useState } from "react";

const CalcStats = ({ value, received = false, inputStat = false }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseWidth = isMobile ? 100 : 250;

  const getTokenTreeBase = () => {
    const val = (11 * 25) / 250;
    return val * baseWidth;
  };

  const tokenTreeBarLength = getTokenTreeBase();
  const tokenEthBarLength = (125 / 250) * baseWidth;
  const tokenUsdtBarLength = (100 / 250) * baseWidth;

  const roundToTwoDecimals = (num) => Math.round(num * 100) / 100;

  function longestLeftBarLength() {
    return Math.max(...leftBarLengths);
  }

  function longestRightBarLength() {
    return Math.max(...rightBarLengths);
  }

  const rightBarTreeLength = () => {
    return (value / 12) * tokenTreeBarLength;
  };

  const leftBarTreeLength = () => {
    return tokenTreeBarLength - rightBarTreeLength();
  };

  const rightBarEthLength = () => {
    return (value / 12) * tokenEthBarLength;
  };

  const leftBarEthLength = () => {
    return tokenEthBarLength - rightBarEthLength();
  };

  const rightBarUsdtLength = () => {
    return (value / 12) * tokenUsdtBarLength;
  };

  const leftBarUsdtLength = () => {
    return tokenUsdtBarLength - rightBarUsdtLength();
  };

  const wallet = new Float64Array([25, 0.05, 100]);

  const valuation = new Float64Array([value, 2500, 1]);
  const price = 250;

  const dotProduct = (arr1, arr2) =>
    arr1.reduce((sum, val, i) => sum + val * arr2[i], 0);

  const result = wallet.map(
    (value) => value * (price / dotProduct(wallet, valuation))
  );

  const treeValue = () => result[0];
  const ethValue = () => result[1];
  const usdValue = () => result[2];

  const leftBarLengths = [
    leftBarTreeLength(),
    leftBarEthLength(),
    leftBarUsdtLength(),
  ];

  const rightBarLengths = [
    rightBarTreeLength(),
    rightBarEthLength(),
    rightBarUsdtLength(),
  ];

  const left_tree_padding = () => {
    return longestLeftBarLength() - leftBarTreeLength();
  };

  const right_tree_padding = () => {
    return longestRightBarLength() - rightBarTreeLength();
  };

  const left_eth_padding = () => {
    return longestLeftBarLength() - leftBarEthLength();
  };

  const right_eth_padding = () => {
    return longestRightBarLength() - rightBarEthLength();
  };

  const left_usdt_padding = () => {
    return longestLeftBarLength() - leftBarUsdtLength();
  };

  const right_usdt_padding = () => {
    return longestRightBarLength() - rightBarUsdtLength();
  };

  return (
    <div className={`new-stats calc-stats ${inputStat && "input-stats"}`}>
      <div className="row">
        <div
          className="left-padding bar"
          style={{ width: right_tree_padding(), display: received && "none" }}
        ></div>
        <div
          className="left-bar bar"
          style={{
            width: rightBarTreeLength(),
            background: "#049952",
            display: received && "none",
            opacity: 0.5,
          }}
        ></div>
        <div
          className="right-bar bar"
          style={{ width: leftBarTreeLength(), background: "#049952" }}
        ></div>
        <div
          className="left-padding bar"
          style={{ width: left_tree_padding() }}
        >
          <span>
            {roundToTwoDecimals(treeValue())}{" "}
            <div className="token-name">Forest</div>
          </span>
        </div>
      </div>

      <div className="row">
        <div
          className="left-padding bar"
          style={{ width: right_eth_padding(), display: received && "none" }}
        ></div>
        <div
          className="left-bar bar"
          style={{
            width: rightBarEthLength(),
            background: "#627EEA",
            display: received && "none",
            opacity: 0.5,
          }}
        ></div>
        <div
          className="right-bar bar"
          style={{ width: leftBarEthLength(), background: "#627EEA" }}
        ></div>
        <div className="left-padding bar" style={{ width: left_eth_padding() }}>
          <span>
            {roundToTwoDecimals(ethValue())}{" "}
            <div className="token-name">ETH</div>
          </span>
        </div>
      </div>

      <div className="row">
        <div
          className="left-padding bar"
          style={{ width: right_usdt_padding(), display: received && "none" }}
        ></div>
        <div
          className="left-bar bar"
          style={{
            width: rightBarUsdtLength(),
            background: "#409AFD",
            display: received && "none",
            opacity: 0.5,
          }}
        ></div>
        <div
          className="right-bar bar"
          style={{ width: leftBarUsdtLength(), background: "#409AFD" }}
        ></div>
        <div
          className="left-padding bar"
          style={{ width: left_usdt_padding() }}
        >
          <span>
            {roundToTwoDecimals(usdValue())}{" "}
            <div className="token-name">USD</div>
          </span>
        </div>
      </div>

      <div className="info">
        <img src="/svgs/curved_arrow_3.svg" alt="" />
        <p>
          Amount <br />
          paid by the <br /> buyer
        </p>
      </div>
    </div>
  );
};

export default CalcStats;
