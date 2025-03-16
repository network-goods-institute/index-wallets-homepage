import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import JoinWaitlistPage from "./pages/JoinWaitlistPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
