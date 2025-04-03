import React from "react";
import "../css/ApplyWaitlist.css";
import { Link } from "react-router-dom";

const ApplyWaitlist = ({ whitepaperBool, setWhitepaperBool }) => {
  return (
    <div className="apply-waitlist">
      <section>
        <div className="container">
          <div className="left-section">
            <div className="wrap">
              <h2>Join the Waitlist</h2>
              <p>
                Be part of a community anticipating <br /> the launch of Index
                Wallets
              </p>
              <p className="mb">
                Be part of a community anticipating the launch of Index Wallets
              </p>
            </div>
            <div className="bottom">
              <Link to="/join-waitlist" className="btn">
                <span>Apply Now</span>
                <span className="hover-text">Apply Now</span>
              </Link>
              <img src="/svgs/🐝.svg" className="bee" alt="" />
            </div>
            <div className="text-read">
              Not ready?{" "}
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setWhitepaperBool(!whitepaperBool);
                }}
              >
                Read the whitepaper first
              </Link>
            </div>
          </div>
          <div className="right-section">
            <img
              src="/images/excited_character.png"
              alt=""
              className="exited"
            />
            <img src="/svgs/🐝.svg" className="bee" alt="" />
            {/* <img src="/svgs/🤩.svg" alt="" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyWaitlist;
