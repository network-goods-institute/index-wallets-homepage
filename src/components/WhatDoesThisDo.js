import React, { useRef } from "react";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";
import HeroAnime from "../assets/animation/donate 2.json";
import HeroAnime2 from "../assets/animation/sending g.json";
import HeroAnime3 from "../assets/animation/receiving shop 1da.json";
import HeroAnime4 from "../assets/animation/receiveing shop 2d.json";
import "../css/WhatDoesThisDo.css";
import CalcForToken from "./CalcForToken";

const WhatDoesThisDo = () => {
  const refContent = useRef(null);
  const refFirstContainer = useRef(null);
  const refSecondContainer = useRef(null);
  const refThirdContainer = useRef(null);
  const refFourthContainer = useRef(null);

  const isInView = useInView(refContent, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const isInViewFirst = useInView(refFirstContainer, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const isInViewSecond = useInView(refSecondContainer, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const isInViewThird = useInView(refThirdContainer, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const isInViewFourth = useInView(refFourthContainer, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <div className="what-does-section">
      <section>
        <CalcForToken />
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
          }}
          className="content"
        >
          <div className="btn">What does this do?</div>
          <h2>
            What happens when
            <br />a community adopts
            <br />
            index wallets?
          </h2>
        </motion.div>
        <motion.div
          ref={refFirstContainer}
          initial={{ opacity: 0, y: 80 }}
          animate={isInViewFirst ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
          }}
          className="first-container first-main"
        >
          <div className="left-container">
            <div className="no">
              <img src="/svgs/does_1.svg" alt="" />
              <p>
                Customer donates to a cause
                <br /> Receives donation receipts
              </p>
            </div>
            <Lottie animationData={HeroAnime} className="hero-anime first" />
          </div>
          <div className="main-container cycle-container">
            <img src="/svgs/does_tree.svg" alt="" className="tree" />
            <div className="cycle">
              <img src="/svgs/does_curve_arrow.svg" alt="" />
              <img src="/svgs/does_curve_arrow_2.svg" alt="" />
            </div>
            <div className="txt">$</div>
          </div>
          <div className="main-container-mb cycle-container">
            <div className="txt">$</div>
            <div className="cycle">
              <img src="/svgs/Group 62.svg" alt="" />
              <img src="/svgs/Group 60.svg" alt="" />
            </div>
            <img src="/svgs/does_tree.svg" alt="" className="tree" />
          </div>
          <div className="right-container">
            <div className="card">
              <div className="banner">Donate</div>
              <img src="/images/green_leaf.png" className="world-img" alt="" />
              <p className="first_p">River Basin Reforestation</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refSecondContainer}
          initial={{ opacity: 0, y: 80 }}
          animate={
            isInViewSecond ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
          }
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
          }}
          className="first-container second-container"
        >
          <div className="left-container">
            <div className="no">
              <img src="/svgs/does_2.svg" alt="" />
              <p>
                Customer gets the <br />
                price for pizza
              </p>
            </div>

            <Lottie animationData={HeroAnime2} className="hero-anime" />
          </div>
          <div className="main-container-mb-second">
            <p>
              Payment to
              <br />
              Joe's Pies
            </p>
            <img src="/svgs/Group 68.svg" alt="" className="arrow" />
            <img
              src="/svgs/Frenzy payment_ Desktop_mobile.svg"
              alt=""
              className="statts"
            />
          </div>
          <div className="main-container">
            <div className="container">
              <img
                className="stat-img"
                src="/svgs/Frenzy payment_ Desktop.svg"
                alt=""
              />
              <div className="wrap">
                <p>Payment to Joe's Pies</p>
                <div className="img">
                  <img src="/svgs/does_str_arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="right-container second-right-container">
            <div className="container">
              <div className="wrap">
                <img src="/svgs/Frenzy valuation_desktop.svg" alt="" />
                <div className="group">
                  <img src="/svgs/welcome_joe's.svg" alt="" />
                </div>
              </div>
              <Lottie animationData={HeroAnime3} className="hero-anime" />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refThirdContainer}
          initial={{ opacity: 0, y: 80 }}
          animate={isInViewThird ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
          }}
        >
          <div className="first-container second-container third-container">
            <img src="/svgs/arroww.svg" alt="" className="arrow-1" />
            <div className="left-container">
              <div className="no">
                <img src="/svgs/does_3.svg" alt="" />
                <p>
                  Customer checks the price
                  <br />
                  from a competitor
                </p>
              </div>

              <Lottie animationData={HeroAnime2} className="hero-anime" />
            </div>
            <div className="main-container-mb-second">
              <p>
                Payment to
                <br />
                Joe's Pies
              </p>
              <img src="/svgs/Group 68.svg" alt="" className="arrow" />
              <img
                src="/svgs/Frenzy payment_ Desktop_mobile_1.svg"
                alt=""
                className="statts"
              />
            </div>
            <div className="main-container">
              <div className="container">
                <img src="/svgs/Frenzy payment_ Desktop_1.svg" alt="" />
                <p>Payment to Joe's Pies</p>
              </div>
            </div>
            <div className="right-container">
              <div className="container">
                <div className="wrap">
                  <img src="/svgs/Frenzy valuation_desktop.svg" alt="" />
                  <div className="group">
                    <img src="/svgs/welcome_joe's.svg" alt="" />
                  </div>
                </div>
                <Lottie animationData={HeroAnime3} className="hero-anime" />
              </div>
            </div>
          </div>
          <div className="first-container second-container third-container fourth-container">
            <div className="no no-block">
              <img src="/svgs/does_3.svg" alt="" />
              <p>
                Customer checks the price
                <br />
                from a competitor
              </p>
            </div>

            <img src="/svgs/arroww2.svg" alt="" className="arrow" />

            <div className="float-content">
              <Lottie animationData={HeroAnime2} className="hero-anime" />
            </div>
            <div className="left-container">
              <div className="no">
                <img src="/svgs/does_3.svg" alt="" />
                <p>
                  Customer checks the price
                  <br />
                  from a competitor
                </p>
              </div>

              <Lottie animationData={HeroAnime2} className="hero-anime" />
            </div>
            <div className="float-content second">
              <Lottie animationData={HeroAnime2} className="hero-anime" />
            </div>
            <div className="main-container-mb-second">
              <img className="deal_mb" src="/svgs/deal_mb.svg" alt="" />
              <p>
                Payment to
                <br />
                Forest Pizza
              </p>
              <img src="/svgs/Group 68.svg" alt="" className="" />
              <img
                src="/svgs/Forest payment_ Desktop_mobile_2.svg"
                alt=""
                className="statts"
              />
            </div>
            <div className="main-container">
              <div className="container">
                <img className="deal" src="/svgs/better_deal.svg" alt="" />
                <p>Payment to Forest Pizza</p>
                <img src="/svgs/Forest payment_ Desktop_2.svg" alt="" />
              </div>
            </div>
            <div className="right-container">
              <div className="container">
                <div className="wrap">
                  <img src="/svgs/Forest valuation_desktop_f.svg" alt="" />
                  <div className="group">
                    <img src="/svgs/welcome_forest.svg" alt="" />
                  </div>
                </div>
                <Lottie animationData={HeroAnime4} className="hero-anime" />
              </div>
            </div>
          </div>
          <div className="extra-space-container">
            <div className="extra-space">
              <h2>
                It's cheaper for the customer to buy from Forest Pizza, because
                they value reforestation!
              </h2>
              <p>
                Typically, businesses compete on price and quality. But with an
                index payment, businesses can compete on values alignment with
                their customers.
                <br /> <br /> As you can see, it's literally cheaper to buy from
                values aligned vendors, because they value your donation
                receipts.
              </p>
              <img src="/svgs/dash.svg" alt="" />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refFourthContainer}
          initial={{ opacity: 0, y: 80 }}
          animate={
            isInViewFourth ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
          }
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
          }}
          className="first-container fifth-container"
        >
          <img src="/svgs/purple_squid.svg" className="purple" alt="" />
          <h3>
            Stores Get More Of Your Business <br /> When They Value What You
            Value!
          </h3>
          <img src="/svgs/orange_squid.svg" className="orange" alt="" />
        </motion.div>
      </section>
    </div>
  );
};

export default WhatDoesThisDo;
