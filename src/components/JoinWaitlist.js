/* global emailjs */

import React, { useEffect, useState } from "react";
import "../css/JoinWaitlist.css";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Donate from "../assets/animation/donate.json";
import DonationReceipt from "../assets/animation/new receipt donation.json";
import Loader from "../assets/animation/loading.json";
import BuyThings from "../assets/animation/buythings.json";
import { motion } from "framer-motion";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const JoinWaitlist = ({ JoinWaitlistRef, name, setName, email, setEmail }) => {
  const navigate = useNavigate();
  const [loadBool, setLoadBool] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const submitSpreadSheet = async (e) => {
    e.preventDefault();
    const scriptURL =
      // "https://script.google.com/macros/s/AKfycbxmVi5AGHTbdVncaVi21OPfRQzup0omMQbk90C8xZgSSxvy7JDLn_qaS9Vm2HMm2bx4WA/exec";
      "https://script.google.com/macros/s/AKfycbxvoA46ox9AaNMHwesEcRYyJLft3b0muHLXDF69kg6V6uiajMSAXR6gW7dMagz4VZgq/exec";

    const formData = {
      name,
      email,
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
                navigate("/join-waitlist", {
                  state: { fromHome: true },
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
                navigate("/join-waitlist", {
                  state: { fromHome: true },
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
        console.log(error);
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
    <div className="join-waitlist-section" ref={JoinWaitlistRef}>
      <img
        src="/svgs/layer-blur.svg"
        width={"100%"}
        alt=""
        className="layer-blur"
      />

      <section>
        <div className="container">
          <div className="left-container">
            <div className="wrapped-container">
              <img src="/images/wailtlist_bg.png" alt="" />
              <p>
                Index wallets get businesses to fund what your community wants.
              </p>
              <Link to="/join-waitlist" className="btn">
                <span>Get Started</span>
                <span className="hover-text">Get Started</span>
              </Link>
            </div>
          </div>
          <div className="right-container">
            <div className="wrapped-container">
              <div className="card">
                <img src="/svgs/no_1.svg" alt="" className="no" />

                <Lottie animationData={Donate} className="anime" />
                <p>Donate to a cause</p>
              </div>
              <div className="card">
                <img src="/svgs/no_2.svg" alt="" className="no" />

                <div className="anime-container">
                  <Lottie animationData={BuyThings} className="anime" />
                </div>
                <p>Receive a donation receipt</p>
              </div>
            </div>
            <div className="main-card">
              <img src="/svgs/no_3.svg" alt="" className="no" />

              <Lottie animationData={DonationReceipt} className="anime" />
              <p>Make purchases with your index wallet</p>
            </div>
          </div>
        </div>

        <div className="form-waitlist">
          <div className="img-container">
            <img
              style={{
                width: "464px",
                height: "368px",
                objectFit: "cover",
              }}
              src="/images/excited_character.png"
              alt=""
            />
          </div>
          <form onSubmit={submitSpreadSheet} action="">
            <h2>Excited? Join the Waitlist!</h2>
            <div className="input">
              <label htmlFor="">Name</label>
              <input
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setLoadBool(false);
                }}
                type="text"
                placeholder="what's your name..."
                required
              />
            </div>
            <div className="input">
              <label htmlFor="">Email</label>
              <input
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setLoadBool(false);
                }}
                type="email"
                placeholder="enter your email"
                required
              />
            </div>
            {loadBool ? (
              <div className="loader">
                <Lottie animationData={Loader} className="anime" />
              </div>
            ) : (
              <motion.button
                type="submit"
                className="join-waitlist"
                whileHover={{
                  scale: 1.08,
                  rotateX: 10,
                  rotateY: 5,
                  backgroundColor: "#1e1b18",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <motion.span
                  initial={{ x: 0, y: 0 }}
                  whileHover={{
                    x: [-2, 2, -3, 3, -2, 2, 0],
                    y: [0, -2, 2, -3, 3, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.15,
                    ease: "linear",
                  }}
                >
                  Join Waitlist
                </motion.span>
              </motion.button>
            )}
          </form>
        </div>

        <div className="form-waitlist-mb">
          <h2>
            Excited? Join <br />
            the Waitlist!
          </h2>
          <img src="/images/excited_character.png" alt="" />
          <div onClick={() => navigate("/join-waitlist")} className="btn">
            Join Waitlist
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinWaitlist;
