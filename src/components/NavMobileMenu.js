import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavMobileMenu = ({
  openMenu,
  setOpenMenu,
  JoinWaitlistRef,
  pageSectionRef,
  faqRef,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

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
      setOpenMenu(false);
      scrollToSection(pageSectionRef);
    } else {
      setOpenMenu(false);
      navigate("/", { state: { scrollToSection: "pageSectionRef" } });
    }
  };

  // Handle navigation and scrolling for "FAQ"
  const handleScrollToFAQ = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      setOpenMenu(false);
      scrollToSection(faqRef);
    } else {
      setOpenMenu(false);
      navigate("/", { state: { scrollToSection: "faqRef" } });
    }
  };

  // Scroll to section if redirected with scrollToSection flag
  useEffect(() => {
    if (location.state?.scrollToSection === "pageSectionRef") {
      setOpenMenu(false);
      scrollToSection(pageSectionRef);
    } else if (location.state?.scrollToSection === "faqRef") {
      setOpenMenu(false);
      scrollToSection(faqRef);
    }
  }, [location]);

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className="links-mobile"
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
              exit: { opacity: 0 },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="/" onClick={handleScrollToHowItWorks}>
                How does it work?
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="/" onClick={handleScrollToFAQ}>
                Faq
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link className="wrap">
                <motion.img
                  src="/svgs/paper.svg"
                  alt=""
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                Read Whitepaper
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to="/join-waitlist"
                onClick={() => setOpenMenu(false)}
                className="btn"
              >
                Join Waitlist
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMobileMenu;
