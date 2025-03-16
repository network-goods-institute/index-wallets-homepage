import React from "react";
import { Link } from "react-router-dom";
import "../css/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <section>
        <img src="/images/join_2.png" alt="" className="end-img" />

        <h1>PAGE NOT FOUND</h1>
        <p>
          The page you’re looking for does not exist or has been moved. Or you
          have a poor connection.
        </p>
        <Link to="/" className="btn">
          <span>Back to home</span>
          <span className="hover-text">Back to home</span>
        </Link>
      </section>
    </div>
  );
};

export default PageNotFound;
