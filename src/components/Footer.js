import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ faqRef, pageSectionRef }) => {
  return (
    <footer>
      <section>
        <div className="text">
          <img src="/svgs/wave_curve_mb.svg" alt="" className="first-mb" />
          <img className="first" src="/svgs/wave.svg" alt="" />
          <img src="/svgs/Fund Goods Without Taxes.svg" alt="" className="h1" />
          <img className="second" src="/svgs/shock.svg" alt="" />
          <img src="/svgs/wave_mb.svg" alt="" className="second-mb" />
        </div>
        <div className="links">
          <Link
            to="#"
            onClick={() =>
              pageSectionRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>How does it work?</span>
            <span className="hover-text">How does it work?</span>
          </Link>
          <Link
            to="#"
            onClick={() =>
              faqRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Faq</span>
            <span className="hover-text">Faq</span>
          </Link>
          <Link to="#">
            <span>Whitepaper</span>
            <span className="hover-text">Whitepaper</span>
          </Link>
        </div>
        <div className="social-links">
          <Link to="https://x.com/connormcmk" target="_blank">
            <span>
              <img className="x" src="/svgs/x.svg" alt="" />
            </span>
            <span className="hover-text">
              <img className="x" src="/svgs/x.svg" alt="" />
            </span>
          </Link>
          <Link to="https://t.me/+SmDs-mpCIDZkYjE5" target="_blank">
            <span>
              <img src="/svgs/telegram.svg" alt="" />
            </span>
            <span className="hover-text">
              <img src="/svgs/telegram.svg" alt="" />
            </span>
          </Link>
          <Link
            to="https://warpcast.com/~/channel/index-wallets/join?inviteCode=tFUQwxnXzAdW0u1O71KnTw"
            target="_blank"
          >
            <span>
              <img src="/svgs/building.svg" alt="" />
            </span>
            <span className="hover-text">
              <img src="/svgs/building.svg" alt="" />
            </span>
          </Link>
          <Link to="https://www.youtube.com/@connormcmk" target="_blank">
            <span>
              <img className="youtube" src="/svgs/youtube.svg" alt="" />
            </span>
            <span className="hover-text">
              <img className="youtube" src="/svgs/youtube.svg" alt="" />
            </span>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
