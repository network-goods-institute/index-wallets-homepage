import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import "../css/FaqLists.css";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import HeroAnime from "../assets/animation/final bar.json";

const FaqLists = ({ faqRef }) => {
  const faqData = [
    {
      question: "What incentive do users actually have to adopt this?",
      answer: `The selfish incentive for adoption depends on the type of person: Businesses: am I missing out on customers because I don’t accept this payment option? Projects: if I return a donation currency can I get more funding? Customers: can I get more funding for the causes I care about? Can I buy more using this money I have?`,
    },
    {
      question:
        "Why would users bundle their currency rather than just maintain multiple wallets?",
      answer:
        "If a user has a token that they believe should be considered valuable they can add it to their index wallet. Now bundled, there’s an incentive for the vendors they buy from to increase their valuation of that currency to support the token or else potentially lose that customer.",
    },
    {
      question: "With so many currencies, what will prices be denominated in?",
      answer:
        "Users can view their wealth through the lens of a particular reference currency of their choice, like USD or BTC.",
    },
    {
      question: "How to sell a bundled currency?",
      answer:
        "Some people ask how to sell a single currency that they’re holding, but with index wallets this is not possible. The purpose of index wallets is purchase, not speculation, it’s not possible to buy with the intention of selling later.",
    },
    {
      question: "What problem is this actually solving?",
      answer:
        "The technical problem this addresses is the free-rider problem in public goods funding — essentially the fact that you can belong to a community that benefits from a public good without funding the creation and maintenance of that public good. It achieves this by dissolving the Keynesian beauty contest at the heart of currency selection, enabling funding of public goods through creation of new currencies which gain purchasing power in a community.",
    },
    {
      question:
        "That’s way too many currencies to possibly pay attention to. How will people keep up?",
      answer:
        "Most users will only be interested in a few of the denominations of currencies in their wallets — the handful of goods that they and their community care about. This means that most of their valuations can be set automatically, and just a handful can be pushed above or below the automatic price.",
    },
    {
      question:
        "Can people receive payments containing currencies they don’t want?",
      answer:
        "Yes, you can receive a payment with currencies you don’t want, if you don’t want them you can set your valuation low and you’ll be paid more to make up for it (or the payer will walk away because the price is too high). If you set a low valuation of a currency, the cost is carried by the person paying you. When you go to pay your community (who has the same valuation as you) you face no additional cost — so the unwanted currency doesn’t affect your wealth.",
    },
    {
      question:
        "Couldn’t this result in separation of groups based on their values?",
      answer:
        "Yes, if two groups want incompatible public goods, it could result in the two groups having trouble transacting with one another. This is considered a good thing: if they can find a mutually agreeable solution to the problem then both groups get richer. In general, the benefit from trade is expected to make it better to find agreement than to cut one another off, just like in the world today.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-lists-section" ref={faqRef}>
      <section>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          FAQ
        </motion.h1>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 135 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/svgs/plus.svg" />
                </motion.div>
              </div>
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="end">
          More questions? Check out:{" "}
          <span>
            <Link target="_blank" to="https://invalidate.indexwallets.org">
              invalidate.indexwallets.org
            </Link>
          </span>
        </div>
        <Lottie animationData={HeroAnime} className="hero-anime" />
      </section>
    </div>
  );
};

export default FaqLists;
