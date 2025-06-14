import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import JoinWaitlist from "../components/JoinWaitlist";
import FaqLists from "../components/FaqLists";
import ApplyWaitlist from "../components/ApplyWaitlist";
import Footer from "../components/Footer";
import PageNewSection from "../components/PageNewSection";
import SpreadTheLoveSectionNew from "../components/SpreadTheLoveSectionNew";
import WhatDoesThisDo from "../components/WhatDoesThisDo";
import NavMobileMenu from "../components/NavMobileMenu";
import MoreCustomerContainer from "../components/MoreCustomerContainer";
import TimeLineHistory from "../components/TimeLineHistory";

const Home = ({ name, setName, email, setEmail, isLoading }) => {
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
        isLoading={isLoading}
      />
      <HeroSection />
      <JoinWaitlist
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        JoinWaitlistRef={JoinWaitlistRef}
      />
      <PageNewSection pageSectionRef={pageSectionRef} />

      <WhatDoesThisDo />
      <SpreadTheLoveSectionNew />
      <MoreCustomerContainer />
      <FaqLists faqRef={faqRef} />
      <TimeLineHistory />
      <ApplyWaitlist
        setWhitepaperBool={setWhitepaperBool}
        whitepaperBool={whitepaperBool}
      />
      <Footer pageSectionRef={pageSectionRef} faqRef={faqRef} />
    </div>
  );
};

export default Home;
