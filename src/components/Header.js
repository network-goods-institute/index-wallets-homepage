import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = ({
  JoinWaitlistRef,
  pageSectionRef,
  faqRef,
  setOpenMenu,
  openMenu,
  setEmail,
  setName,
}) => {
  const { scrollY } = useScroll();
  const [joinWaitlistTop, setJoinWaitlistTop] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Animate header position from 24px to 0px when scrolling down
  const topPosition = useTransform(scrollY, [0, 100], [24, 10]);

  useEffect(() => {
    if (JoinWaitlistRef?.current) {
      setJoinWaitlistTop(JoinWaitlistRef.current.offsetTop);
    }
  }, [JoinWaitlistRef]);

  // Detect when JoinWaitlist scrolls out of view
  const opacity = useTransform(
    scrollY,
    [
      JoinWaitlistRef?.current?.offsetTop - 200,
      JoinWaitlistRef?.current?.offsetTop,
    ],
    [1, 0]
  );

  const translateY = useTransform(
    scrollY,
    [joinWaitlistTop - 200, joinWaitlistTop],
    [0, -100] // Move up by 100px
  );

  // Function to scroll to a section after navigation
  const scrollToSection = (ref) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 300); // Delay to ensure navigation completes
  };

  // Handle navigation and scrolling for "How does it work?"
  const handleScrollToHowItWorks = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(pageSectionRef);
    } else {
      navigate("/", { state: { scrollToSection: "pageSectionRef" } });
    }
  };

  // Handle navigation and scrolling for "FAQ"
  const handleScrollToFAQ = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(faqRef);
    } else {
      navigate("/", { state: { scrollToSection: "faqRef" } });
    }
  };

  // Scroll to section if redirected with scrollToSection flag
  useEffect(() => {
    if (location.state?.scrollToSection === "pageSectionRef") {
      scrollToSection(pageSectionRef);
    } else if (location.state?.scrollToSection === "faqRef") {
      scrollToSection(faqRef);
    }
  }, [location]);

  return (
    <motion.header
      style={{
        position: "fixed",
        top: topPosition,
      }}
      transition={{ ease: "backInOut", duration: 0.00005 }}
    >
      {!openMenu ? (
        <Link
          to="/"
          onClick={() => {
            setEmail("");
            setName("");
          }}
          className="logo"
        >
          <img src="/svgs/index_logo.svg" alt="" />
          <h2>Index Wallets</h2>
        </Link>
      ) : (
        <div className="close">Close</div>
      )}
      <div className="links">
        <Link to="/" onClick={handleScrollToHowItWorks} className="hover-link">
          <span>How does it work?</span>
          <span className="hover-text">How does it work?</span>
        </Link>
        <Link to="/" onClick={handleScrollToFAQ} className="hover-link">
          <span>FAQ</span>
          <span className="hover-text">FAQ</span>
        </Link>
        <Link to="#">
          <span>
            <div className="wrap">
              <img src="/svgs/paper.svg" alt="" />
              Read Whitepaper
            </div>
          </span>
          <span className="hover-text">
            <div className="wrap">
              <img src="/svgs/paper.svg" alt="" />
              Read Whitepaper
            </div>
          </span>
        </Link>
      </div>
      <Link
        to="/join-waitlist"
        onClick={() => {
          setEmail("");
          setName("");
        }}
        className="btn"
      >
        <span>Join Waitlist</span>
        <span className="hover-text">Join Waitlist</span>
      </Link>
      {!openMenu ? (
        <img
          src="/svgs/menu_bar.svg"
          alt=""
          onClick={() => setOpenMenu(true)}
          className="menu-bar"
        />
      ) : (
        <img
          src="/svgs/close.svg"
          onClick={() => setOpenMenu(false)}
          className="menu-bar"
        />
      )}
    </motion.header>
  );
};

export default Header;
