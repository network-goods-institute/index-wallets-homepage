import React, { useState, useEffect } from "react";
import "../css/BusinessPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Donate from "../assets/animation/donate.json";
import DonationReceipt from "../assets/animation/new receipt donation.json";
import BuyThings from "../assets/animation/buythings.json";

const BusinessPage = () => {
  const [feePercentage, setFeePercentage] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setFeePercentage(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="business-page">
      <Header />
      
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transform Your Business with Index Wallets</h1>
            <div className="value-prop">
              <div className="zero-fees">
                <span className="fees-badge">{feePercentage}% Transaction Fees</span>
                <div className="fees-subtitle-container">
                  <p className="forever-text">FOREVER</p>
                </div>
              </div>
            </div>
            <p className="hero-description">
              Join the payment revolution that connects your business to community impact. 
              Attract conscious customers, reduce costs, and drive meaningful change.
            </p>
            <div className="hero-cta">
              <Link to="/join-waitlist" className="primary-btn">
                Get Early Access
              </Link>
              <div className="social-proof">
                <span>Be among the first to know when we launch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Smart Businesses Choose Index Wallets</h2>
            <p>More than just payments—it's a competitive advantage</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Eliminate Transaction Fees</h3>
              <p>Our unique model means 0% fees on transactions. Keep more of what you earn.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h3>Attract Purpose-Driven Customers</h3>
              <p>Connect with customers who value community impact and social responsibility.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h3>Stand Out From Competitors</h3>
              <p>Differentiate your business as one that actively supports local causes.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3>Build Community Connections</h3>
              <p>Strengthen ties with local organizations and causes your customers care about.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3>Increase Customer Loyalty</h3>
              <p>Customers spend more with businesses aligned with their values.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Be an Early Adopter</h3>
              <p>Get in on the ground floor of a revolutionary payment system that will change how businesses connect with their communities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>A simple system that benefits everyone</p>
          </div>
          
          <div className="process-flow">
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">1</div>
                <Lottie animationData={Donate} className="step-animation" />
              </div>
              <div className="step-content">
                <h3>Customers Support Causes</h3>
                <p>Your customers contribute to local causes they care about through the Index Wallet platform.</p>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">2</div>
                <Lottie animationData={BuyThings} className="step-animation" />
              </div>
              <div className="step-content">
                <h3>They Earn Cause Credits</h3>
                <p>Contributors receive cause credits in their digital wallet, ready to spend at participating businesses.</p>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">3</div>
                <Lottie animationData={DonationReceipt} className="step-animation" />
              </div>
              <div className="step-content">
                <h3>You Get Paid</h3>
                <p>Customers pay with cause credits at your business. You receive full payment with 0% transaction fees.</p>
              </div>
            </div>
          </div>
          
          <div className="process-details">
            <div className="detail-card">
              <h4>For Your Business</h4>
              <ul>
                <li>Accept cause credits as payment</li>
                <li>Offer exclusive discounts to credit holders</li>
                <li>Pay 0% transaction fees</li>
                <li>Attract socially conscious customers</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <h4>For Your Customers</h4>
              <ul>
                <li>Support causes they care about</li>
                <li>Earn credits for future purchases</li>
                <li>Shop at values-aligned businesses</li>
                <li>Make a real community impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="revenue-model-section">
        <div className="container">
          <div className="revenue-content">
            <h2>Why 0% Transaction Fees?</h2>
            <p className="revenue-explanation">
              Unlike traditional payment processors that take a cut of every transaction, 
              we earn our revenue from the initial donations to causes. This means:
            </p>
            <div className="revenue-benefits">
              <div className="revenue-point">
                <span className="checkmark">✓</span>
                <span>You keep 100% of every sale</span>
              </div>
              <div className="revenue-point">
                <span className="checkmark">✓</span>
                <span>No hidden fees or monthly charges</span>
              </div>
              <div className="revenue-point">
                <span className="checkmark">✓</span>
                <span>Transparent, sustainable business model</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Be among the first businesses to adopt this revolutionary payment system when it launches.</p>
            <div className="cta-buttons">
              <Link to="/join-waitlist" className="primary-btn large">
                Get Started Today
              </Link>
            </div>
            <div className="cta-note">
              <p>Free to join • No setup fees • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPage; 