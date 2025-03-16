import React from "react";
import { motion } from "framer-motion";
import "../css/TimeLineHistory.css";

const TimeLineHistory = () => {
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
    { date: "FEB 2025", event: "Website built by Stephen Sowunmi" },
    {
      date: "MAR 2025",
      event: "Index wallets whitepaper published",
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

  return (
    <div className="timeline-history-section">
      <section>
        <motion.img
          initial={{ scaleX: 1.5, opacity: 0, filter: "blur(10px)" }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // That juicy, smooth curve
          }}
          src="/svgs/Timeline of Index Wallets.svg"
          alt=""
          className="h1"
        />
        <motion.img
          initial={{ scaleX: 1.5, opacity: 0, filter: "blur(10px)" }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // That juicy, smooth curve
          }}
          src="/svgs/timeline of index-mobile.svg"
          alt=""
          className="h1 timeline-mobile"
        />
        <div className="timeline-container">
          <div className="present-timeline">
            <div className="left-timeline">
              <motion.div
                className="timeline-item"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
              >
                <div className="control">
                  <motion.img
                    src="/svgs/Group 93.svg"
                    alt="arrow"
                    className="arrow"
                    variants={{
                      hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                      visible: {
                        scale: [0.6, 1.1, 1],
                        opacity: 1,
                        rotate: [0, -5, 0],
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/svgs/timeline_arrow.svg"
                    className="arrow timeline-mobile"
                    variants={{
                      hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                      visible: {
                        scale: [0.6, 1.1, 1],
                        opacity: 1,
                        rotate: [0, -5, 0],
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.div
                    className="date"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                        scale: 0.8,
                        filter: "blur(10px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {historyData[0].date}
                  </motion.div>
                  <motion.img
                    src="/svgs/Vector 56.svg"
                    alt=""
                    className="dent-arrow"
                    variants={{
                      hidden: { clipPath: "inset(0 100% 0 0)" },
                      visible: { clipPath: "inset(0 0% 0 0)" },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  />
                </div>
                <motion.div
                  className="text"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  exit="hidden"
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {historyData[0].event.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      style={{ display: "inline-block", marginRight: "5px" }}
                      variants={{
                        hidden: { opacity: 0, y: 10, scale: 0.8 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      exit="hidden"
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.img
                src="/svgs/yellow_happy.svg"
                alt=""
                className="person"
                variants={{
                  hidden: { y: 50, scale: 0.8, opacity: 0, rotate: -10 },
                  visible: { y: 0, scale: 1, opacity: 1, rotate: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>

            <div className="right-timeline">
              {historyData
                .filter((item) => !item.date.includes("EST."))
                .slice(1)
                .map((item, index) => (
                  <motion.div
                    className="timeline-item"
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    viewport={{ amount: 0.2 }} // Triggers when 20% is in view
                  >
                    <div className="control">
                      <motion.img
                        src="/svgs/Group 93.svg"
                        alt="arrow"
                        className="arrow"
                        variants={{
                          hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                          visible: {
                            scale: [0.6, 1.1, 1],
                            opacity: 1,
                            rotate: [0, -5, 0],
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.img
                        src="/svgs/timeline_arrow.svg"
                        className="arrow timeline-mobile"
                        variants={{
                          hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                          visible: {
                            scale: [0.6, 1.1, 1],
                            opacity: 1,
                            rotate: [0, -5, 0],
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      <motion.div
                        className={`date ${
                          item.date.split(" ").length > 1 && "date-long"
                        }`}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 10,
                            scale: 0.8,
                            filter: "blur(10px)",
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {item.date}
                      </motion.div>
                    </div>
                    <motion.div
                      className="text"
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      exit="hidden"
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item.event.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          style={{
                            display: "inline-block",
                            marginRight: "5px",
                          }}
                          variants={{
                            hidden: { opacity: 0, y: 10, scale: 0.8 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          exit="hidden"
                          transition={{
                            duration: 0.5,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          </div>

          <div className="present-timeline future">
            <div className="left-timeline">
              <motion.div
                className="timeline-item"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
              >
                <motion.img
                  src="/svgs/Future.svg"
                  alt="Future"
                  className="text-future"
                  initial={{ scaleX: 1.5, opacity: 0, filter: "blur(10px)" }}
                  whileInView={{
                    scaleX: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // That juicy, smooth curve
                  }}
                />

                <div className="control check">
                  <motion.img
                    src="/svgs/Group 93.svg"
                    alt="arrow"
                    className="arrow"
                    variants={{
                      hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                      visible: {
                        scale: [0.6, 1.1, 1],
                        opacity: 1,
                        rotate: [0, -5, 0],
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/svgs/timeline_arrow.svg"
                    className="arrow timeline-mobile"
                    variants={{
                      hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                      visible: {
                        scale: [0.6, 1.1, 1],
                        opacity: 1,
                        rotate: [0, -5, 0],
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/svgs/Future-mobile.svg"
                    alt="Future"
                    className="future-mobile timeline-mobile"
                    initial={{ scaleX: 1.5, opacity: 0, filter: "blur(10px)" }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1], // That juicy, smooth curve
                    }}
                  />
                  <motion.div
                    className="date date-future"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                        scale: 0.8,
                        filter: "blur(10px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {
                      historyData.filter((item) =>
                        item.date.includes("EST.")
                      )[0].date
                    }
                  </motion.div>
                  <motion.img
                    src="/svgs/Vector 57.svg"
                    alt=""
                    className="dent-arrow"
                    variants={{
                      hidden: { clipPath: "inset(0 100% 0 0)" },
                      visible: { clipPath: "inset(0 0% 0 0)" },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                  />
                </div>
                <motion.div
                  className="text"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  exit="hidden"
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {historyData
                    .filter((item) => item.date.includes("EST."))[0]
                    .event.split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        style={{ display: "inline-block", marginRight: "5px" }}
                        variants={{
                          hidden: { opacity: 0, y: 10, scale: 0.8 },
                          visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{
                          duration: 0.5,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                </motion.div>
              </motion.div>

              <motion.img
                src="/svgs/green_lady.svg"
                alt=""
                className="person green"
                variants={{
                  hidden: { y: 50, scale: 0.8, opacity: 0, rotate: -10 },
                  visible: { y: 0, scale: 1, opacity: 1, rotate: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>

            <div className="right-timeline">
              {historyData
                .filter((item) => item.date.includes("EST."))
                .slice(1)
                .map((item, index) => (
                  <motion.div
                    className="timeline-item"
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    viewport={{ amount: 0.2 }} // Triggers when 20% is in view
                  >
                    <div className="control">
                      <motion.img
                        src="/svgs/Group 93.svg"
                        alt="arrow"
                        className="arrow"
                        variants={{
                          hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                          visible: {
                            scale: [0.6, 1.1, 1],
                            opacity: 1,
                            rotate: [0, -5, 0],
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.img
                        src="/svgs/timeline_arrow.svg"
                        className="arrow timeline-mobile"
                        variants={{
                          hidden: { scale: 0.6, opacity: 0, rotate: -10 },
                          visible: {
                            scale: [0.6, 1.1, 1],
                            opacity: 1,
                            rotate: [0, -5, 0],
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      <motion.div
                        className={`date date-future`}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 10,
                            scale: 0.8,
                            filter: "blur(10px)",
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        transition={{
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {item.date}
                      </motion.div>
                    </div>
                    <motion.div
                      className="text"
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      exit="hidden"
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item.event.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          style={{
                            display: "inline-block",
                            marginRight: "5px",
                          }}
                          variants={{
                            hidden: { opacity: 0, y: 10, scale: 0.8 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          exit="hidden"
                          transition={{
                            duration: 0.5,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeLineHistory;
