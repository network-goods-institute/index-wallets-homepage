import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import JoinWaitlistPage from "./pages/JoinWaitlistPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Give a small delay after everything loads for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Wait for page to load
      window.addEventListener('load', handleLoad);
    }

    // Fallback: maximum 5 seconds even if something doesn't load
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/join-waitlist"
          element={
            <JoinWaitlistPage
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
