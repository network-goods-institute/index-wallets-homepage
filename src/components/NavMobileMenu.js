import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavMobileMenu = ({ openMenu, setOpenMenu, pageSectionRef, faqRef, setWhitepaperBool }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (ref) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

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

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className="links-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container">
            <Link to="/" onClick={handleScrollToHowItWorks}>
              How does it work?
            </Link>
            <Link to="/" onClick={handleScrollToFAQ}>
              FAQ
            </Link>
            <Link to="/business" onClick={() => setOpenMenu(false)}>
              For Businesses
            </Link>
            <button 
              type="button"
              onClick={(e) => { 
                e.preventDefault(); 
                if (typeof setWhitepaperBool === "function") { 
                  setWhitepaperBool(prev => !prev);
                } 
                setOpenMenu(false); 
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                color: '#0c0a09',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '19.09px',
                letterSpacing: '-3%',
                textAlign: 'left',
                width: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Read Whitepaper
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMobileMenu;
