/* global emailjs */

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import "../css/JoinWaitlistPage.css";
import NameField from "../components/NameField";
import LocatedField from "../components/LocatedField";
import CryptoField from "../components/CryptoField";
import BuisnessField from "../components/BuisnessField";
import IndexWalletField from "../components/IndexWalletField";
import NavMobileMenu from "../components/NavMobileMenu";
import BeInTouch from "../components/BeInTouch";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const transition = {
  duration: 0.5, // Faster transition
  ease: [0.55, 0.085, 0.68, 0.53], // Snappier cubic bezier curve
};

// const variants = {
//   initial: { x: "100%", opacity: 0, scale: 0.98, filter: "blur(15px)" },
//   animate: { x: 0, opacity: 1, scale: 1, filter: "blur(0px)", transition },
//   exit: {
//     x: "-100%",
//     opacity: 0,
//     scale: 0.98,
//     filter: "blur(15px)",
//     transition,
//   },
// };

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

const JoinWaitlistPage = ({ name, setName, email, setEmail }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [located, setLocated] = useState("");
  const [cryptoStance, setCryptoStance] = useState("");
  const [buisness, setBuisness] = useState("");
  const [indexWallet, setIndexWallet] = useState("");
  const [loadBool, setLoadBool] = useState(false);
  const [direction, setDirection] = useState(1);

  const JoinWaitlistRef = useRef();
  const pageSectionRef = useRef();
  const faqRef = useRef(null);

  const location = useLocation();
  const fromHome = location.state?.fromHome || false;

  const variants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", // Right if next, left if prev
      opacity: 0,
      scale: 0.98,
      filter: "blur(15px)",
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%", // Left if next, right if prev
      opacity: 0,
      scale: 0.98,
      filter: "blur(15px)",
      transition,
    }),
  };

  useEffect(() => {
    initializeEmailJS();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (fromHome && name && email) {
      setDirection(1);
      setCurrentIndex(1);
    }
  }, [name, email, fromHome]);

  const submitSpreadSheet = async (e) => {
    e.preventDefault();
    const scriptURL =
      // "https://script.google.com/macros/s/AKfycbxmVi5AGHTbdVncaVi21OPfRQzup0omMQbk90C8xZgSSxvy7JDLn_qaS9Vm2HMm2bx4WA/exec";
      "https://script.google.com/macros/s/AKfycbxvoA46ox9AaNMHwesEcRYyJLft3b0muHLXDF69kg6V6uiajMSAXR6gW7dMagz4VZgq/exec";

    const formData = {
      name,
      email,
      location: located,
      crypto_stance: cryptoStance,
      for_your_business: buisness,
      why_index_wallets: indexWallet,
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
              name,
              email,
            })
            .then((response) => {
              if (response.status === 200) {
                setLoadBool(false);
                setDirection(1);
                setCurrentIndex((prev) => prev + 1);
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
              name,
              email,
            })
            .then((response) => {
              if (response.status === 200) {
                setLoadBool(false);
                setDirection(1);
                setCurrentIndex((prev) => prev + 1);

                if (currentIndex === fields.length - 1) {
                  setName("");
                  setEmail("");
                  setLocated("");
                  setCryptoStance("");
                  setBuisness("");
                  setIndexWallet("");
                }
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

  // const skipSpreadSheet = async () => {
  //   const scriptURL =
  //     "https://script.google.com/macros/s/AKfycbxmVi5AGHTbdVncaVi21OPfRQzup0omMQbk90C8xZgSSxvy7JDLn_qaS9Vm2HMm2bx4WA/exec";
  //   // "https://script.google.com/macros/s/AKfycbxUK8C-ntFxi5H9bCQc5B_rQpTg9j1oF9an4RBA1Or0T2DkJCwQTjqoFX1sBpqbYymG/exec";

  //   const formData = {
  //     name,
  //     email,
  //     location: located,
  //     crypto_stance: cryptoStance,
  //     for_your_business: buisness,
  //     why_index_wallets: indexWallet,
  //   };

  //   setLoadBool(true);

  //   fetch(scriptURL, {
  //     method: "POST",
  //     mode: "cors",
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.status === "updated") {
  //         emailjs
  //           .send("service_u4ptrdl", "template_r7qorsi", {
  //             name,
  //             email,
  //           })
  //           .then((response) => {
  //             if (response.status === 200) {
  //               setLoadBool(false);
  //               setCurrentIndex(fields.length - 1);
  //             } else {
  //               setLoadBool(false);
  //               toast.error(
  //                 "Something went wrong on our end. Please try again later. 🔄",
  //                 {
  //                   position: "top-center",
  //                   icon: "🚨",
  //                   transition: Slide,
  //                   autoClose: 4000,
  //                   hideProgressBar: true,
  //                   closeOnClick: false,
  //                   draggable: false,
  //                   closeButton: false, // No close icon for a cleaner UI
  //                   style: {
  //                     background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
  //                     backdropFilter: "blur(20px)", // Premium frosted glass effect
  //                     color: "#fff",
  //                     borderRadius: "16px",
  //                     fontWeight: "600",
  //                     fontFamily: "'Inter', sans-serif",
  //                     fontSize: "14px",
  //                     letterSpacing: "0.3px",
  //                     padding: "14px 20px",
  //                     boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
  //                     border: "1px solid rgba(255, 255, 255, 0.2)",
  //                   },
  //                   progressStyle: {
  //                     background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
  //                     height: "3px",
  //                   },
  //                 }
  //               );
  //             }
  //           })
  //           .catch((err) => {
  //             setLoadBool(false);
  //             toast.error(
  //               "Something went wrong on our end. Please try again later. 🔄",
  //               {
  //                 position: "top-center",
  //                 icon: "🚨",
  //                 transition: Slide,
  //                 autoClose: 4000,
  //                 hideProgressBar: true,
  //                 closeOnClick: false,
  //                 draggable: false,
  //                 closeButton: false, // No close icon for a cleaner UI
  //                 style: {
  //                   background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
  //                   backdropFilter: "blur(20px)", // Premium frosted glass effect
  //                   color: "#fff",
  //                   borderRadius: "16px",
  //                   fontWeight: "600",
  //                   fontFamily: "'Inter', sans-serif",
  //                   fontSize: "14px",
  //                   letterSpacing: "0.3px",
  //                   padding: "14px 20px",
  //                   boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
  //                   border: "1px solid rgba(255, 255, 255, 0.2)",
  //                 },
  //                 progressStyle: {
  //                   background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
  //                   height: "3px",
  //                 },
  //               }
  //             );
  //           });
  //       } else if (data.status === "new entry added") {
  //         emailjs
  //           .send("service_u4ptrdl", "template_l6glhou", {
  //             name,
  //             email,
  //           })
  //           .then((response) => {
  //             if (response.status === 200) {
  //               setLoadBool(false);
  //               setCurrentIndex(fields.length - 1);
  //             } else {
  //               setLoadBool(false);
  //               toast.error(
  //                 "Something went wrong on our end. Please try again later. 🔄",
  //                 {
  //                   position: "top-center",
  //                   icon: "🚨",
  //                   transition: Slide,
  //                   autoClose: 4000,
  //                   hideProgressBar: true,
  //                   closeOnClick: false,
  //                   draggable: false,
  //                   closeButton: false, // No close icon for a cleaner UI
  //                   style: {
  //                     background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
  //                     backdropFilter: "blur(20px)", // Premium frosted glass effect
  //                     color: "#fff",
  //                     borderRadius: "16px",
  //                     fontWeight: "600",
  //                     fontFamily: "'Inter', sans-serif",
  //                     fontSize: "14px",
  //                     letterSpacing: "0.3px",
  //                     padding: "14px 20px",
  //                     boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
  //                     border: "1px solid rgba(255, 255, 255, 0.2)",
  //                   },
  //                   progressStyle: {
  //                     background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
  //                     height: "3px",
  //                   },
  //                 }
  //               );
  //             }
  //           })
  //           .catch((err) => {
  //             setLoadBool(false);
  //             toast.error(
  //               "Something went wrong on our end. Please try again later. 🔄",
  //               {
  //                 position: "top-center",
  //                 icon: "🚨",
  //                 transition: Slide,
  //                 autoClose: 4000,
  //                 hideProgressBar: true,
  //                 closeOnClick: false,
  //                 draggable: false,
  //                 closeButton: false, // No close icon for a cleaner UI
  //                 style: {
  //                   background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
  //                   backdropFilter: "blur(20px)", // Premium frosted glass effect
  //                   color: "#fff",
  //                   borderRadius: "16px",
  //                   fontWeight: "600",
  //                   fontFamily: "'Inter', sans-serif",
  //                   fontSize: "14px",
  //                   letterSpacing: "0.3px",
  //                   padding: "14px 20px",
  //                   boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
  //                   border: "1px solid rgba(255, 255, 255, 0.2)",
  //                 },
  //                 progressStyle: {
  //                   background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
  //                   height: "3px",
  //                 },
  //               }
  //             );
  //           });
  //       } else {
  //         setLoadBool(false);
  //         toast.error(
  //           "Something went wrong on our end. Please try again later. 🔄",
  //           {
  //             position: "top-center",
  //             icon: "🚨",
  //             transition: Slide,
  //             autoClose: 4000,
  //             hideProgressBar: true,
  //             closeOnClick: false,
  //             draggable: false,
  //             closeButton: false, // No close icon for a cleaner UI
  //             style: {
  //               background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
  //               backdropFilter: "blur(20px)", // Premium frosted glass effect
  //               color: "#fff",
  //               borderRadius: "16px",
  //               fontWeight: "600",
  //               fontFamily: "'Inter', sans-serif",
  //               fontSize: "14px",
  //               letterSpacing: "0.3px",
  //               padding: "14px 20px",
  //               boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
  //               border: "1px solid rgba(255, 255, 255, 0.2)",
  //             },
  //             progressStyle: {
  //               background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
  //               height: "3px",
  //             },
  //           }
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       setLoadBool(false);
  //       toast.error(
  //         "Something went wrong on our end. Please try again later. 🔄",
  //         {
  //           position: "top-center",
  //           icon: "🚨",
  //           transition: Slide,
  //           autoClose: 4000,
  //           hideProgressBar: true,
  //           closeOnClick: false,
  //           draggable: false,
  //           closeButton: false, // No close icon for a cleaner UI
  //           style: {
  //             background: "rgba(255, 45, 85, 0.85)", // Vibrant, modern red-pink
  //             backdropFilter: "blur(20px)", // Premium frosted glass effect
  //             color: "#fff",
  //             borderRadius: "16px",
  //             fontWeight: "600",
  //             fontFamily: "'Inter', sans-serif",
  //             fontSize: "14px",
  //             letterSpacing: "0.3px",
  //             padding: "14px 20px",
  //             boxShadow: "0px 12px 35px rgba(255, 45, 85, 0.5)", // Soft neon glow
  //             border: "1px solid rgba(255, 255, 255, 0.2)",
  //           },
  //           progressStyle: {
  //             background: "linear-gradient(to right, #ff7eb3, #ff416c)", // Smooth animated gradient
  //             height: "3px",
  //           },
  //         }
  //       );
  //     });
  // };

  const skipSpreadSheet = () => {
    setLoadBool(false);
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
  };

  const fields = [
    <NameField
      setName={setName}
      name={name}
      setEmail={setEmail}
      email={email}
      setCurrentIndex={setCurrentIndex}
      submitSpreadSheet={submitSpreadSheet}
      loadBool={loadBool}
      setLoadBool={setLoadBool}
    />,
    <LocatedField
      located={located}
      setLocated={setLocated}
      setCurrentIndex={setCurrentIndex}
      skipSpreadSheet={skipSpreadSheet}
      loadBool={loadBool}
      setLoadBool={setLoadBool}
      setDirection={setDirection}
    />,
    <CryptoField
      cryptoStance={cryptoStance}
      setCryptoStance={setCryptoStance}
      setCurrentIndex={setCurrentIndex}
      skipSpreadSheet={skipSpreadSheet}
      loadBool={loadBool}
      setLoadBool={setLoadBool}
      setDirection={setDirection}
    />,
    <BuisnessField
      buisness={buisness}
      setBuisness={setBuisness}
      setCurrentIndex={setCurrentIndex}
      skipSpreadSheet={skipSpreadSheet}
      loadBool={loadBool}
      setLoadBool={setLoadBool}
      setDirection={setDirection}
    />,
    <IndexWalletField
      indexWallet={indexWallet}
      setIndexWallet={setIndexWallet}
      setCurrentIndex={setCurrentIndex}
      submitSpreadSheet={submitSpreadSheet}
      loadBool={loadBool}
      setLoadBool={setLoadBool}
    />,
    <BeInTouch
      indexWallet={indexWallet}
      setIndexWallet={setIndexWallet}
      setCurrentIndex={setCurrentIndex}
      setName={setName}
      setEmail={setEmail}
    />,
  ];

  return (
    <div className="join-wait-list-page">
      <NavMobileMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        pageSectionRef={pageSectionRef}
        JoinWaitlistRef={JoinWaitlistRef}
        faqRef={faqRef}
      />
      <Header
        pageSectionRef={pageSectionRef}
        JoinWaitlistRef={JoinWaitlistRef}
        faqRef={faqRef}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        setEmail={setEmail}
        setName={setName}
      />
      <div className="field-container">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            style={{ height: "100%" }}
            className="field-section"
          >
            {fields[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JoinWaitlistPage;
