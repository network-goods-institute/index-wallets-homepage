import React from "react";
import "../css/TimeLineHistory.css";

const TimeLineHistory = () => {
  const historyData = [
    {
      date: "2018",
      event:
        "Juan Benet, Michael Nielsen, and Davidad fireside chat about \"matrix money\"",
    },
    {
      date: "2019",
      event: "Connor McCormick watches a poker player chip shuffle",
    },
    { date: "AUG 2023", event: "Index wallets preprint published" },
    {
      date: "FEB 2024",
      event: "Index wallets research funded by 100k BlueYard grant",
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
    { date: "MAR 2025", event: "Website built by Stephen Sowunmi" },
    {
      date: "APR 2025",
      event: "Index wallets whitepaper published",
    },
    {
      date: "EST. APR 2025",
      event: "First implementation of index wallets goes live on delta",
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
        <img
          src="/svgs/Timeline of Index Wallets.svg"
          alt="Timeline of Index Wallets"
          className="h1"
        />
        <img
          src="/svgs/timeline of index-mobile.svg"
          alt="Timeline of Index Wallets mobile"
          className="h1 timeline-mobile"
        />
        <div className="timeline-container">
          <div className="present-timeline">
            <div className="left-timeline">
              <div className="timeline-item">
                <div className="control">
                  <img
                    src="/svgs/Group 93.svg"
                    alt="arrow"
                    className="arrow"
                  />
                  <img
                    src="/svgs/timeline_arrow.svg"
                    className="arrow timeline-mobile"
                    alt="arrow"
                  />
                  <div className="date">
                    {historyData[0].date}
                  </div>
                  <img
                    src="/svgs/Vector 56.svg"
                    alt="timeline connector"
                    className="dent-arrow"
                  />
                </div>
                <div className="text">
                  {historyData[0].event}
                </div>
              </div>

              <img
                src="/svgs/yellow_happy.svg"
                alt="person illustration"
                className="person"
              />
            </div>

            <div className="right-timeline">
              {historyData
                .filter((item) => !item.date.includes("EST."))
                .slice(1)
                .map((item, index) => (
                  <div
                    className="timeline-item"
                    key={index}
                  >
                    <div className="control">
                      <img
                        src="/svgs/Group 93.svg"
                        alt="arrow"
                        className="arrow"
                      />
                      <img
                        src="/svgs/timeline_arrow.svg"
                        className="arrow timeline-mobile"
                        alt="arrow"
                      />

                      <div
                        className={`date ${
                          item.date.split(" ").length > 1 && "date-long"
                        }`}
                      >
                        {item.date}
                      </div>
                    </div>
                    <div className="text">
                      {item.event}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="present-timeline future">
            <div className="left-timeline">
              <div className="timeline-item">
                <img
                  src="/svgs/Future.svg"
                  alt="Future"
                  className="text-future"
                />

                <div className="control check">
                  <img
                    src="/svgs/Group 93.svg"
                    alt="arrow"
                    className="arrow"
                  />
                  <img
                    src="/svgs/timeline_arrow.svg"
                    className="arrow timeline-mobile"
                    alt="arrow"
                  />
                  <img
                    src="/svgs/Future-mobile.svg"
                    alt="Future"
                    className="future-mobile timeline-mobile"
                  />
                  <div className="date date-future">
                    {
                      historyData.filter((item) =>
                        item.date.includes("EST.")
                      )[0].date
                    }
                  </div>
                  <img
                    src="/svgs/Vector 57.svg"
                    alt="future timeline connector"
                    className="dent-arrow"
                  />
                </div>
                <div className="text">
                  {historyData
                    .filter((item) => item.date.includes("EST."))[0]
                    .event}
                </div>
              </div>

              <img
                src="/svgs/green_lady.svg"
                alt="person illustration"
                className="person green"
              />
            </div>

            <div className="right-timeline">
              {historyData
                .filter((item) => item.date.includes("EST."))
                .slice(1)
                .map((item, index) => (
                  <div
                    className="timeline-item"
                    key={index}
                  >
                    <div className="control">
                      <img
                        src="/svgs/Group 93.svg"
                        alt="arrow"
                        className="arrow"
                      />
                      <img
                        src="/svgs/timeline_arrow.svg"
                        className="arrow timeline-mobile"
                        alt="arrow"
                      />

                      <div className="date date-future">
                        {item.date}
                      </div>
                    </div>
                    <div className="text">
                      {item.event}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeLineHistory;
