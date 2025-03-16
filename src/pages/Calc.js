import React from "react";
import "../css/Calc.css";

const Calc = () => {
  const tree_length = () => {
    return 0.18 * 800;
  };

  const eth_length = () => {
    return 0.5 * 800;
  };

  const usdt_length = () => {
    return 0.32 * 800;
  };

  return (
    <div className="calc">
      <div className="container">
        <div
          className="bar"
          style={{ width: tree_length(), background: "blueviolet" }}
        ></div>
        <div
          className="bar"
          style={{ width: eth_length(), background: "#2be253" }}
        ></div>
        <div
          className="bar"
          style={{ width: usdt_length(), background: "#e2ab2b" }}
        ></div>
      </div>
    </div>
  );
};

export default Calc;
