import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import "../css/Home.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import JoinWaitlist from "../components/JoinWaitlist";
import FaqLists from "../components/FaqLists";
import ApplyWaitlist from "../components/ApplyWaitlist";
import Footer from "../components/Footer";
import HistorySection from "../components/HistorySection";
import PageNewSection from "../components/PageNewSection";
import SpreadTheLoveSectionNew from "../components/SpreadTheLoveSectionNew";
import WhatDoesThisDo from "../components/WhatDoesThisDo";
import NavMobileMenu from "../components/NavMobileMenu";
import MoreCustomerContainer from "../components/MoreCustomerContainer";
import TimeLineHistory from "../components/TimeLineHistory";

const Home = ({ name, setName, email, setEmail }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [whitepaperBool, setWhitepaperBool] = useState(false);

  const JoinWaitlistRef = useRef();
  const pageSectionRef = useRef();
  const faqRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll progress of page-section
  const { scrollYProgress } = useScroll({
    target: pageSectionRef,
    offset: ["start start", "end start"], // Effect starts when page-section enters
  });

  // Translate HowDoesItWork as page-section is scrolled
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Reduced from -100% to -80%

  return (
    <div className="home">
      <NavMobileMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        pageSectionRef={pageSectionRef}
        JoinWaitlistRef={JoinWaitlistRef}
        faqRef={faqRef}
        setWhitepaperBool={setWhitepaperBool}
        whitepaperBool={whitepaperBool}
      />
      <Header
        pageSectionRef={pageSectionRef}
        JoinWaitlistRef={JoinWaitlistRef}
        faqRef={faqRef}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        setEmail={setEmail}
        setName={setName}
        setWhitepaperBool={setWhitepaperBool}
        whitepaperBool={whitepaperBool}
      />
      <HeroSection />
      <JoinWaitlist
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        JoinWaitlistRef={JoinWaitlistRef}
      />
      {/* <motion.div className="page-container">
        <motion.div style={{ y: translateY }}>
          <HowDoesItWork />
          <WalletEntries sectionRef={sectionRef} />
          <InputAPrice sectionRef={sectionRef} />
          <ReceivedPrice />
        </motion.div>
      </motion.div> */}

      <PageNewSection pageSectionRef={pageSectionRef} />

      <WhatDoesThisDo />
      <SpreadTheLoveSectionNew />
      <MoreCustomerContainer />
      <FaqLists faqRef={faqRef} />
      <TimeLineHistory />
      {/* <div className="left-section-mb">
        <h2>History of Index Wallets</h2>
        <img src="/svgs/Vector 21.svg" alt="" />
      </div>
      <HistorySection /> */}
      <ApplyWaitlist
        setWhitepaperBool={setWhitepaperBool}
        whitepaperBool={whitepaperBool}
      />
      <Footer pageSectionRef={pageSectionRef} faqRef={faqRef} />
    </div>
  );
};

export default Home;
