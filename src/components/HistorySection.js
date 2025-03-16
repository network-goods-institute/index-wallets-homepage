import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../css/HistorySection.css";

const historyData = [
  {
    date: "2018",
    event:
      "Juan Benet, Michael Nielsen, and Davidad fireside chat about “matrix money”",
  },
  {
    date: "2019",
    event: "Connor McCormick watches a poker player chip shuffle",
  },
  { date: "AUG 2023", event: "Index wallets preprint published" },
  {
    date: "FEB 2024",
    event: "Index wallets research funded by 100k grant BlueYard",
  },
  {
    date: "JUL 2024",
    event:
      "Philip Brown, Colton Hill, Raf Kaufmann, and Joel Miller author mathematical models",
  },
  {
    date: "AUG 2024",
    event:
      "Brendan Gould and Kaden Bilyeu simulate and visualize an index wallet economy",
  },
  {
    date: "OCT 2024",
    event:
      "Index wallets game built by Volky with design by Lauren Herbert, William Fischer, and Julian Feder",
  },
  { date: "FEB 2024", event: "Website built by Stephen Sowunmi" },
  {
    date: "MAR 2024",
    event: "Index wallets whitepaper written by Ross Matican",
  },
  {
    date: "EST. APR 2025",
    event: "First implementation of index wallets goes live on Delta",
  },
  { date: "EST. MAY 2025", event: "First index payment to a local business" },
  {
    date: "EST. JUNE 2025",
    event: "Over 1000 people play the index wallets game!",
  },
  { date: "EST. MAR 2026", event: "First million dollars donated to causes" },
  { date: "EST. JAN 2027", event: "Millionth user makes their index wallet" },
  { date: "EST. FEB 2030", event: "First index payment made on Mars!" },
];

const HistorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 578);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 578);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const distance = Math.abs(
          rect.top -
            containerRect.top -
            container.clientHeight / 2 +
            rect.height / 2
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      // Ensure the first item is active when scrolled to the top
      if (container.scrollTop === 0) {
        closestIndex = 0;
      }

      // Ensure the last item is active when scrolled to the bottom
      if (
        Math.ceil(container.scrollTop + container.clientHeight) >=
        container.scrollHeight
      ) {
        closestIndex = historyData.length - 1;
      }

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="history-section">
      <section>
        {/* Left Section */}
        <motion.div
          className="left-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src="/svgs/History of Index Wallets.svg" alt="" className="h2" />
          <img src="/svgs/history_line.svg" alt="" />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="right-section"
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            overflowY: "auto",
            maxHeight: "400px",
            padding: "10px",
            scrollBehavior: "smooth",
          }}
        >
          {historyData.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              layout
              initial={{ opacity: 0.5, scale: 0.95, y: 10 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.5,
                scale: activeIndex === index ? 1 : 0.98,
                y: activeIndex === index ? 0 : 5,
                color: activeIndex === index ? "#0c0a09" : "#8A8A8E",
                fontSize:
                  activeIndex === index
                    ? isMobile
                      ? "20px"
                      : "30px"
                    : isMobile
                    ? "14px"
                    : "24px",
                fontWeight: activeIndex === index ? "500" : "300",
              }}
              transition={{ duration: 0.9, ease: "backInOut" }}
              className={`p ${activeIndex === index ? "active" : ""}`}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#8A8A8E",
                  fontWeight: "500",
                }}
              >
                {item.date}
              </span>
              <p>{item.event}</p>
            </motion.div>
          ))}
        </motion.div>
        <img src="/svgs/Rectangle 145.svg" className="blur-1" alt="" />
      </section>
    </div>
  );
};

export default HistorySection;
