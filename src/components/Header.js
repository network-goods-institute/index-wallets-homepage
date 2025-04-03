import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
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
  whitepaperBool,
  setWhitepaperBool,
}) => {
  const { scrollY } = useScroll();

  const [joinWaitlistTop, setJoinWaitlistTop] = useState(0);
  const [validEmail, setValidEmail] = useState(false);
  const [whitepaperEmail, setWhitePaperEmail] = useState("");
  const [submissionSuccess, setsubmissionSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) // Click is outside form
      ) {
        setTimeout(() => setWhitepaperBool(false), 0); // 👈 Delay update
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Animate header position from 24px to 0px when scrolling down
  const topPosition = useTransform(scrollY, [0, 100], [24, 10]);

  useEffect(() => {
    if (JoinWaitlistRef?.current) {
      setJoinWaitlistTop(JoinWaitlistRef.current.offsetTop);
    }
  }, [JoinWaitlistRef]);

  useEffect(() => {
    if (whitepaperEmail) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [whitepaperEmail]);

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

  const submitWhitepaper = (e) => {
    e.preventDefault();

    setsubmissionSuccess(true);
  };

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
            setWhitePaperEmail("");
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
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWhitepaperBool(!whitepaperBool);
          }}
        >
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

      {whitepaperBool && (
        <AnimatePresence>
          {whitepaperBool && (
            <motion.form
              ref={formRef}
              className="whitepaper-container"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              onSubmit={submitWhitepaper}
            >
              {!submissionSuccess ? (
                <>
                  <h2>We are still working on the whitepaper</h2>
                  <p>Enter your email to join the waitlist</p>
                  <input
                    type="email"
                    placeholder="abe@whitehouse.gov"
                    value={whitepaperEmail}
                    onChange={(e) => setWhitePaperEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    className={`btn ${validEmail && "active"}`}
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>
                      Submit <img src="/svgs/join_arrow.svg" alt="" />
                    </span>
                    <span className="hover-text">
                      Submit <img src="/svgs/join_arrow.svg" alt="" />
                    </span>
                  </motion.button>
                </>
              ) : (
                <>
                  <div className="wrap">
                    <div className="content">
                      <h2>Email added successfully</h2>
                      <p>you’ve been added to the waitlist</p>
                    </div>
                    <img
                      src="/svgs/confettin.svg"
                      alt="confetti"
                      className="success"
                    />
                  </div>
                </>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      )}
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
