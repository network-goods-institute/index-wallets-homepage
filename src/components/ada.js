import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import HeroAnime from "../assets/animation/donate 2.json";
import HeroAnime2 from "../assets/animation/receiving shop 1da.json";
import HeroAnime3 from "../assets/animation/receiveing shop 2d.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThirdContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const scrollTrigger = gsap.to(".third-container", {
      scrollTrigger: {
        trigger: ".third-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          // Calculate the currentIndex based on scroll progress
          const scrollProgress = self.progress;
          const index = Math.floor(scrollProgress * 4) + 1; // This will give you values between 1 and 4
          setCurrentIndex(index);
          console.log("Current Index:", index);
        },
      },
    });

    return () => {
      // Kill all scroll triggers properly when the component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="third-container">
      <div
        className="container"
        style={{
          height: "300vh",
          position: "relative",
        }}
      >
        <div
          className="main"
          style={{
            flex: 1,
            position: "sticky",
            top: "100px",
            height: "100vh",
            display: "flex",
          }}
        >
          <div className="left-main">
            <div className="wrap" key={1}>
              <div className="contain">
                <div className="btn">Customer</div>
                <div className="anime-container">
                  <Lottie animationData={HeroAnime} className="hero-anime" />
                </div>
              </div>
              <p>
                The person uses the donation <br /> receipts received to pay a
                store <br /> for a good in the community.
              </p>
            </div>
          </div>

          <div className="middle-main">
            <div
              className={`stats ${currentIndex < 2 && "not-active"}`}
              key={2}
            >
              <img src="/images/stats.png" alt="" />
              <img src="/images/stat_bar.png" alt="" />
            </div>
            <div
              className={`img-longest ${currentIndex < 2 && "not-active"}`}
              key={2}
            >
              <img className="img-line" src="/svgs/longest_line.svg" alt="" />
            </div>
            <img
              key={4}
              className="img-down"
              src="/svgs/long_line_down.svg"
              alt=""
              style={{ opacity: 0 }}
            />
            <div className="contain" key={4} style={{ opacity: 0 }}>
              <div className="btn">Store 2</div>
              <div className="wrap">
                <img src="/images/stat_bar.png" alt="" />
                <Lottie animationData={HeroAnime3} className="hero-anime" />
              </div>
            </div>
          </div>
          <div className="right-main">
            <div className="contain" style={{ opacity: 0 }} key={3}>
              <div className="btn">Store 1</div>
              <div className="anime-container">
                <Lottie animationData={HeroAnime2} className="hero-anime" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
