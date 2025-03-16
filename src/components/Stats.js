import React, { useEffect, useState } from "react";

const Stats = ({ value, received = false, inputStat = false }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 578);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 578);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseWidth = isMobile ? 250 : 700;

  const tokenTreeBarLength = 0.18 * baseWidth;
  const tokenEthBarLength = 0.5 * baseWidth;
  const tokenUsdtBarLength = 0.32 * baseWidth;

  function longestLeftBarLength() {
    return Math.max(...leftBarLengths);
  }

  function longestRightBarLength() {
    return Math.max(...rightBarLengths);
  }

  const rightBarTreeLength = () => {
    return (value / 200) * tokenTreeBarLength;
  };

  const leftBarTreeLength = () => {
    return tokenTreeBarLength - rightBarTreeLength();
  };

  const rightBarEthLength = () => {
    return (value / 200) * tokenEthBarLength;
  };

  const leftBarEthLength = () => {
    return tokenEthBarLength - rightBarEthLength();
  };

  const rightBarUsdtLength = () => {
    return (value / 200) * tokenUsdtBarLength;
  };

  const leftBarUsdtLength = () => {
    return tokenUsdtBarLength - rightBarUsdtLength();
  };

  const treeValue = () => {
    return (value * 36) / 200;
  };

  const ethValue = () => {
    return (value * 100) / 200;
  };

  const usdValue = () => {
    return (value * 64) / 200;
  };

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
    <div className={`new-stats ${inputStat && "input-stats"}`}>
      <div className="row">
        <div
          className="left-padding bar"
          style={{ width: left_tree_padding(), display: received && "none" }}
        ></div>
        <div
          className="left-bar bar"
          style={{
            width: leftBarTreeLength(),
            background: "#049952",
            display: received && "none",
          }}
        ></div>
        <div
          className="right-bar bar"
          style={{ width: rightBarTreeLength(), background: "#049952" }}
        ></div>
        <div
          className="left-padding bar"
          style={{ width: right_tree_padding() }}
        >
          <span>
            <img
              style={{ opacity: 0.5 }}
              src="/svgs/Group_1_00000145049452228677282850000011249802522660930228_.svg"
              alt=""
            />
            {treeValue()} <img src="/svgs/tree.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="row">
        <div
          className="left-padding bar"
          style={{ width: left_eth_padding(), display: received && "none" }}
        ></div>
        <div
          className="left-bar bar"
          style={{
            width: leftBarEthLength(),
            background: "#627EEA",
            display: received && "none",
          }}
        ></div>
        <div
          className="right-bar bar"
          style={{ width: rightBarEthLength(), background: "#627EEA" }}
        ></div>
        <div
          className="left-padding bar"
          style={{ width: right_eth_padding() }}
        >
          <span>
            <img
              style={{ opacity: 0.5 }}
              src="/svgs/Group_1_00000145049452228677282850000011249802522660930228_.svg"
              alt=""
            />
            {ethValue()} <img src="/svgs/eth.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="row">
        <div
          className="left-padding bar"
          style={{ width: left_usdt_padding(), display: received && "none" }}
        ></div>
        <div
          className="left-bar bar"
          style={{
            width: leftBarUsdtLength(),
            background: "#409AFD",
            display: received && "none",
          }}
        ></div>
        <div
          className="right-bar bar"
          style={{ width: rightBarUsdtLength(), background: "#409AFD" }}
        ></div>
        <div
          className="left-padding bar"
          style={{ width: right_usdt_padding() }}
        >
          <span>
            <img
              style={{ opacity: 0.5 }}
              src="/svgs/Group_1_00000145049452228677282850000011249802522660930228_.svg"
              alt=""
            />
            {usdValue()} <img src="/svgs/usd.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
