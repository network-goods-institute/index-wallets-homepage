import React from "react";
import "../css/HowDoesItWork.css";

const HowDoesItWork = ({ howDoestItWorkRef }) => {
  return (
    <div className="how-does-it-work" ref={howDoestItWorkRef}>
      <div className="contain">
        <img className="vector" src="/svgs/smile.svg" alt="" />
        <h1>
          <img src="/svgs/tape.svg" alt="" />
          How Does <br />
          it Work
        </h1>
        <img className="vector-2" src="/svgs/zigzag.svg" alt="" />
        <p>Index wallets work by one simple rule :)</p>
        <p className="txt">(keep reading to find out)</p>
      </div>
    </div>
  );
};

export default HowDoesItWork;
