import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="line">
        <h1>About</h1>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="left">
          <p>
            I really like the world of technology, especially Frontend
            Development and Software Development, and understand the team and be
            able to adapt to future technological developments
          </p>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
