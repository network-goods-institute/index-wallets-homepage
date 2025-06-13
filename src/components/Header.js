/* global emailjs */

import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loader from "../assets/animation/loading.json";
import Lottie from "lottie-react";
import { toast, Slide } from "react-toastify";
import "../css/Header.css";

const initializeEmailJS = () => {
  if (window.emailjs) {
    window.emailjs.init({
      publicKey: "tPKCypl8yp-nAQQnD",
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ["foo@emailjs.com", "bar@emailjs.com"],
        // The variable contains the email address
        watchVariable: "userEmail",
      },
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  } else {
    console.error("EmailJS library not loaded");
  }
};

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
  isLoading,
}) => {
  const { scrollY } = useScroll();

  const [, setJoinWaitlistTop] = useState(0);
  const [validEmail, setValidEmail] = useState(false);
  const [whitepaperEmail, setWhitePaperEmail] = useState("");
  const [submissionSuccess, setsubmissionSuccess] = useState(false);
  const [loadBool, setLoadBool] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const formRef = useRef(null);

  useEffect(() => {
    initializeEmailJS();
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const submitWhitepaper = (e) => {
    e.preventDefault();

    e.preventDefault();
    const scriptURL =
      // "https://script.google.com/macros/s/AKfycbxmVi5AGHTbdVncaVi21OPfRQzup0omMQbk90C8xZgSSxvy7JDLn_qaS9Vm2HMm2bx4WA/exec";
      // "https://script.google.com/macros/s/AKfycbxvoA46ox9AaNMHwesEcRYyJLft3b0muHLXDF69kg6V6uiajMSAXR6gW7dMagz4VZgq/exec";
      "https://script.google.com/macros/s/AKfycbymo_FfHv7yyI4rnaE01lGr_E0bzBflC0e0aHcM2PQm1Y184r1xCy-FhbHFDcvEb-uY/exec";
    const formData = {
      email: whitepaperEmail,
    };

    setLoadBool(true);

    fetch(scriptURL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "updated") {
          emailjs
            .send("service_u4ptrdl", "template_r7qorsi", {
              whitepaperEmail,
            })
            .then((response) => {
              if (response.status === 200) {
                setLoadBool(false);
                setsubmissionSuccess(true);
              } else {
                setLoadBool(false);
                toast.error(
                  "Something went wrong on our end. Please try again later. 🔄",
                  {
                    position: "top-center",
                    icon: "🚨",
                    transition: Slide,
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    draggable: false,
                    closeButton: false, // No close icon for a cleaner UI
                    style: {
                      background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
                      backdropFilter: "blur(20px)", // Premium frosted glass effect
                      color: "#fff",
                      borderRadius: "16px",
                      fontWeight: "600",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      letterSpacing: "0.3px",
                      padding: "14px 20px",
                      boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    },
                    progressStyle: {
                      background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
                      height: "3px",
                    },
                  }
                );
              }
            })
            .catch((err) => {
              setLoadBool(false);
              toast.error(
                "Something went wrong on our end. Please try again later. 🔄",
                {
                  position: "top-center",
                  icon: "🚨",
                  transition: Slide,
                  autoClose: 4000,
                  hideProgressBar: true,
                  closeOnClick: false,
                  draggable: false,
                  closeButton: false, // No close icon for a cleaner UI
                  style: {
                    background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
                    backdropFilter: "blur(20px)", // Premium frosted glass effect
                    color: "#fff",
                    borderRadius: "16px",
                    fontWeight: "600",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.3px",
                    padding: "14px 20px",
                    boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  },
                  progressStyle: {
                    background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
                    height: "3px",
                  },
                }
              );
            });
        } else if (data.status === "new entry added") {
          emailjs
            .send("service_u4ptrdl", "template_l6glhou", {
              whitepaperEmail,
            })
            .then((response) => {
              if (response.status === 200) {
                setLoadBool(false);
                setsubmissionSuccess(true);
              } else {
                setLoadBool(false);
                toast.error(
                  "Something went wrong on our end. Please try again later. 🔄",
                  {
                    position: "top-center",
                    icon: "🚨",
                    transition: Slide,
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    draggable: false,
                    closeButton: false, // No close icon for a cleaner UI
                    style: {
                      background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
                      backdropFilter: "blur(20px)", // Premium frosted glass effect
                      color: "#fff",
                      borderRadius: "16px",
                      fontWeight: "600",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      letterSpacing: "0.3px",
                      padding: "14px 20px",
                      boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    },
                    progressStyle: {
                      background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
                      height: "3px",
                    },
                  }
                );
              }
            })
            .catch((err) => {
              setLoadBool(false);
              toast.error(
                "Something went wrong on our end. Please try again later. 🔄",
                {
                  position: "top-center",
                  icon: "🚨",
                  transition: Slide,
                  autoClose: 4000,
                  hideProgressBar: true,
                  closeOnClick: false,
                  draggable: false,
                  closeButton: false, // No close icon for a cleaner UI
                  style: {
                    background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
                    backdropFilter: "blur(20px)", // Premium frosted glass effect
                    color: "#fff",
                    borderRadius: "16px",
                    fontWeight: "600",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.3px",
                    padding: "14px 20px",
                    boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  },
                  progressStyle: {
                    background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
                    height: "3px",
                  },
                }
              );
            });
        } else {
          setLoadBool(false);
          toast.error(
            "Something went wrong on our end. Please try again later. 🔄",
            {
              position: "top-center",
              icon: "🚨",
              transition: Slide,
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: false,
              draggable: false,
              closeButton: false, // No close icon for a cleaner UI
              style: {
                background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
                backdropFilter: "blur(20px)", // Premium frosted glass effect
                color: "#fff",
                borderRadius: "16px",
                fontWeight: "600",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                letterSpacing: "0.3px",
                padding: "14px 20px",
                boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
              progressStyle: {
                background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
                height: "3px",
              },
            }
          );
        }
      })
      .catch((error) => {
        setLoadBool(false);
        toast.error(
          "Something went wrong on our end. Please try again later. 🔄",
          {
            position: "top-center",
            icon: "🚨",
            transition: Slide,
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: false,
            closeButton: false, // No close icon for a cleaner UI
            style: {
              background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
              backdropFilter: "blur(20px)", // Premium frosted glass effect
              color: "#fff",
              borderRadius: "16px",
              fontWeight: "600",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              letterSpacing: "0.3px",
              padding: "14px 20px",
              boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
              border: "1px solid rgba(255, 255, 255, 0.2)",
            },
            progressStyle: {
              background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
              height: "3px",
            },
          }
        );
      });
  };

  return (
    <motion.header
      style={{
        position: "fixed",
        top: topPosition,
      }}
      transition={{ ease: "backInOut", duration: 0.00005 }}
    >
      {isLoading ? (
        <div className="loading-header">
          <div className="loading-brand">
            <div className="loading-logo-container">
              <img src="/svgs/index_logo.svg" alt="" className="loading-logo-img" />
              <div className="logo-shimmer"></div>
            </div>
            <div className="loading-text-container">
              <h2 className="loading-title">Index Wallets</h2>
              <div className="loading-subtitle">
                <span className="loading-word">Loading</span>
                <div className="loading-dots-enhanced">
                  <span className="dot-1"></span>
                  <span className="dot-2"></span>
                  <span className="dot-3"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}

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
                  {!loadBool ? (
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
                  ) : (
                    <div className="loader namefield">
                      <Lottie animationData={Loader} className="anime" />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="wrap">
                    <div className="content">
                      <h2>Email added successfully</h2>
                      <p>you've been added to the waitlist</p>
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
          aria-label="close menu"
        />
      )}
    </motion.header>
  );
};

export default Header;
